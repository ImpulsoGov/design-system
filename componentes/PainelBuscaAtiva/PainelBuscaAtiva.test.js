import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PainelBuscaAtiva } from "./PainelBuscaAtiva";
import * as responses from "./__data__";

// Permite que o DataGrid renderize mais de 3 colunas no ambiente jsdom
// Referências:
// https://github.com/mui/mui-x/issues/1519
// https://stackoverflow.com/questions/65669707/problem-testing-material-ui-datagrid-with-react-testing-library
// https://jestjs.io/docs/mock-functions#mocking-partials
// TODO mover para diretório __mocks__ ou arquivo de setup para ser usado em todos os testes
jest.mock("@mui/x-data-grid", () => {
  const originalModule = jest.requireActual("@mui/x-data-grid");

  return {
    __esModule: true,
    ...originalModule,
    DataGrid: (props) => <originalModule.DataGrid { ...props } disableVirtualization />,
  };
});

const COMPONENT = "PainelBuscaAtiva";
const STATUS = [
  "Sem dados",
  "Com consulta e aferição de PA em dia",
  "Sem consulta e aferição de PA em dia",
  "Sem consulta em dia",
  "Sem aferição de PA em dia",
  "Com consulta e solicitação de hemoglobina em dia",
  "Sem consulta e solicitação de hemoglobina em dia",
  "Sem solicitação de hemoglobina em dia",
  "Encerradas por DPP + 14 dias",
  "Encerradas por parto ou aborto",
  "Ativas",
  "Gestantes inválidas",
  "Coleta em dia",
  "Nunca realizou coleta",
  "Coleta com menos de 25 anos",
  "Vence no final do quadrimestre",
  "Coleta vencida",
];

const scenarios = [
  {
    painel: "citopatológico",
    aba: 1,
    sub_aba: 0,
    dadosFiltros: [
      {
        data: ["Alessandra Santos", "Carmen Miranda", null],
        filtro: "acs_nome",
        rotulo: "Filtrar por nome do Profissional Responsável"
      },
      {
        data: ["12", "13"],
        labels: STATUS,
        filtro: "id_status_usuario",
        rotulo: "Filtrar por status"
      },
    ],
    tabela: {
      data: responses.citoSuccess,
      colunas: [
        { field: "paciente_nome", headerName: "NOME" },
        {
          field: "id_status_usuario",
          headerName: "STATUS DA COLETA",
          renderCell: ({ value }) => [
            { id_status_usuario: 12, status_usuarios_descricao: STATUS[12] },
            { id_status_usuario: 13, status_usuarios_descricao: STATUS[13] },
          ].find(({ id_status_usuario }) => id_status_usuario === value).status_usuarios_descricao
        },
        { field: "acs_nome", headerName: "ACS" },
        { field: "idade", headerName: "IDADE" },
        { field: "vencimento_da_coleta", headerName: "VENCIMENTO DA COLETA" },
      ]
    },
    datefiltros: ["vencimento_da_coleta"],
    IntFiltros: ["idade"],
    IDFiltros: {
      "NOME DO ACS DE A-Z": "acs_nome",
      "IDADE DO PACIENTE": "idade",
      "VENCIMENTO DA COLETA MAIS ANTIGO": "vencimento_da_coleta",
    },
    rotulosfiltros: [
      "NOME DO ACS DE A-Z",
      "IDADE DO PACIENTE",
      "VENCIMENTO DA COLETA MAIS ANTIGO"
    ],
    IDFiltrosOrdenacao: {
      "acs_nome": "asc",
      "idade": "asc",
      "vencimento_da_coleta": "desc",
    },
    trackObject: { track: jest.fn() },
    atualizacao: "22/10/2023",
    data: responses.citoSuccess,
    setData: jest.fn(),
  }
];

describe(`Componente: ${COMPONENT}`, () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("deve renderizar corretamente", () => {
    render(<PainelBuscaAtiva { ...scenarios[0] } />);

    const component = screen.getByTestId(COMPONENT);

    expect(component).toMatchSnapshot();
  });

  describe("Funcionalidade: ordenação", () => {
    describe("Ao aplicar uma opção de ordenação", () => {
      it("deve exibir os dados ordenados e fechar o modal de ordenação", async () => {
        render(<PainelBuscaAtiva { ...scenarios[0] } />);

        const btnShowModal = screen.getByRole("button", { name: /ordenar lista/i });
        await userEvent.click(btnShowModal);

        const sortOption = screen.getByText(/nome do acs de a-z/i);
        await userEvent.click(sortOption);

        const [btnApplySort] = screen.getAllByRole("button", { name: /ordenar lista/i });
        await userEvent.click(btnApplySort);

        // const contentTable = screen.getByTestId("TabelaHiperDia");
        const expected = [
          {
            paciente_nome: "Camila da Silva",
            cidadao_cpf_dt_nascimento: "106.106.106-10",
            id_status_usuario: 12,
            vencimento_da_coleta: "-",
            prazo_proxima_coleta: "31/08/2023",
            idade: 25,
            id_faixa_etaria: 8,
            acs_nome: "Alessandra Santos",
            estabelecimento_cnes: "2872872",
            estabelecimento_nome: "Unidade de Saude da Familia 1",
            equipe_ine: "0002277227",
            ine_master: "0002277227",
            equipe_nome: "ESF 1",
            dt_registro_producao_mais_recente: "2023-10-22"
          },
          {
            paciente_nome: "Maria da Silva",
            cidadao_cpf_dt_nascimento: "327.327.327-32",
            id_status_usuario: 12,
            vencimento_da_coleta: "11/05/2026",
            prazo_proxima_coleta: "31/08/2023",
            idade: 35,
            id_faixa_etaria: 6,
            acs_nome: "Alessandra Santos",
            estabelecimento_cnes: "2872872",
            estabelecimento_nome: "Unidade de Saude da Familia 1",
            equipe_ine: "0002277227",
            ine_master: "0002277227",
            equipe_nome: "ESF 1",
            dt_registro_producao_mais_recente: "2023-10-22"
          },
          {
            paciente_nome: "Carla da Silva",
            cidadao_cpf_dt_nascimento: "305.305.305-30",
            id_status_usuario: 13,
            vencimento_da_coleta: "-",
            prazo_proxima_coleta: "31/08/2023",
            idade: 64,
            id_faixa_etaria: 8,
            acs_nome: "Alessandra Santos",
            estabelecimento_cnes: "2872872",
            estabelecimento_nome: "Unidade de Saude da Familia 1",
            equipe_ine: "0002277227",
            ine_master: "0002277227",
            equipe_nome: "ESF 1",
            dt_registro_producao_mais_recente: "2023-10-22"
          },
          {
            paciente_nome: "Julia da Silva",
            cidadao_cpf_dt_nascimento: "100.100.100-10",
            id_status_usuario: 12,
            vencimento_da_coleta: "27/07/2025",
            prazo_proxima_coleta: "Em dia",
            idade: 55,
            id_faixa_etaria: 8,
            acs_nome: "Carmen Miranda",
            estabelecimento_cnes: "2752752",
            estabelecimento_nome: "Unidade de Saude da Familia 2",
            equipe_ine: "0000369369",
            ine_master: "0000369369",
            equipe_nome: "ESF 2",
            dt_registro_producao_mais_recente: "2023-10-22"
          },
        ];

        expect(screen.queryByTestId("Modal")).not.toBeInTheDocument();
        // Embora seja um teste de implementação, acredito fazer sentido pois
        // assim garanto que os dados chegam corretamente na tabela, que, por
        // sua vez, é o DataGrid do Material-UI, portanto não precisamos testá-la
        // aqui já a lib é testada em seu próprio repositório
        expect(scenarios[0].setData).toHaveBeenLastCalledWith(expected);
      });

      describe('E aplicar uma opção de filtro', () => {
        it('deve exibir os dados filtrados e ordenados', async () => {
          render(<PainelBuscaAtiva { ...scenarios[0] } />);

          const btnShowSortModal = screen.getByRole("button", { name: /ordenar lista/i });
          await userEvent.click(btnShowSortModal);

          const sortOption = screen.getByText(/vencimento da coleta mais antigo/i);
          await userEvent.click(sortOption);

          const [btnApplySort] = screen.getAllByRole("button", { name: /ordenar lista/i });
          await userEvent.click(btnApplySort);

          const btnShowFilterModal = screen.getByRole("button", { name: /filtrar lista nominal/i });
          await userEvent.click(btnShowFilterModal);

          const [showFilterOptions] = screen.getAllByRole("button", { name: "+" });
          await userEvent.click(showFilterOptions);

          const filterOption = screen.getByLabelText(/alessandra santos/i);
          await userEvent.click(filterOption);

          const [btnApplyFilter] = screen.getAllByRole("button", { name: /filtrar lista nominal/i });
          await userEvent.click(btnApplyFilter);

          const expected = [
            {
              paciente_nome: "Maria da Silva",
              cidadao_cpf_dt_nascimento: "327.327.327-32",
              id_status_usuario: 12,
              vencimento_da_coleta: "11/05/2026",
              prazo_proxima_coleta: "31/08/2023",
              idade: 35,
              id_faixa_etaria: 6,
              acs_nome: "Alessandra Santos",
              estabelecimento_cnes: "2872872",
              estabelecimento_nome: "Unidade de Saude da Familia 1",
              equipe_ine: "0002277227",
              ine_master: "0002277227",
              equipe_nome: "ESF 1",
              dt_registro_producao_mais_recente: "2023-10-22"
            },
            {
              paciente_nome: "Camila da Silva",
              cidadao_cpf_dt_nascimento: "106.106.106-10",
              id_status_usuario: 12,
              vencimento_da_coleta: "-",
              prazo_proxima_coleta: "31/08/2023",
              idade: 25,
              id_faixa_etaria: 8,
              acs_nome: "Alessandra Santos",
              estabelecimento_cnes: "2872872",
              estabelecimento_nome: "Unidade de Saude da Familia 1",
              equipe_ine: "0002277227",
              ine_master: "0002277227",
              equipe_nome: "ESF 1",
              dt_registro_producao_mais_recente: "2023-10-22"
            },
            {
              paciente_nome: "Carla da Silva",
              cidadao_cpf_dt_nascimento: "305.305.305-30",
              id_status_usuario: 13,
              vencimento_da_coleta: "-",
              prazo_proxima_coleta: "31/08/2023",
              idade: 64,
              id_faixa_etaria: 8,
              acs_nome: "Alessandra Santos",
              estabelecimento_cnes: "2872872",
              estabelecimento_nome: "Unidade de Saude da Familia 1",
              equipe_ine: "0002277227",
              ine_master: "0002277227",
              equipe_nome: "ESF 1",
              dt_registro_producao_mais_recente: "2023-10-22"
            },
          ];

          expect(scenarios[0].setData).toHaveBeenLastCalledWith(expected);
        });
      });

      describe("E clicar em limpar ordenação", () => {
        it("deve exibir os dados desordenados e fechar o modal de ordenação", async () => {
          render(<PainelBuscaAtiva { ...scenarios[0] } />);

          const btnShowModal = screen.getByRole("button", { name: /ordenar lista/i });
          await userEvent.click(btnShowModal);

          const sortOption = screen.getByText(/nome do acs de a-z/i);
          await userEvent.click(sortOption);

          const [btnApplySort] = screen.getAllByRole("button", { name: /ordenar lista/i });
          await userEvent.click(btnApplySort);

          await userEvent.click(btnShowModal);

          const clearSortOption = screen.getByText(/limpar ordenação/i);
          await userEvent.click(clearSortOption);

          expect(screen.queryByTestId("Modal")).not.toBeInTheDocument();
          expect(scenarios[0].setData).toHaveBeenLastCalledWith(responses.citoSuccess);
        });

        describe("Quando há opção de filtro aplicada", () => {
          it("deve exibir os dados filtrados sem ordenação", async () => {
            render(<PainelBuscaAtiva { ...scenarios[0] } />);

            const btnShowSortModal = screen.getByRole("button", { name: /ordenar lista/i });
            await userEvent.click(btnShowSortModal);

            const sortOption = screen.getByText(/vencimento da coleta mais antigo/i);
            await userEvent.click(sortOption);

            const [btnApplySort] = screen.getAllByRole("button", { name: /ordenar lista/i });
            await userEvent.click(btnApplySort);

            const btnShowFilterModal = screen.getByRole("button", { name: /filtrar lista nominal/i });
            await userEvent.click(btnShowFilterModal);

            const [showFilterOptions] = screen.getAllByRole("button", { name: "+" });
            await userEvent.click(showFilterOptions);

            const filterOption = screen.getByLabelText(/alessandra santos/i);
            await userEvent.click(filterOption);

            const [btnApplyFilter] = screen.getAllByRole("button", { name: /filtrar lista nominal/i });
            await userEvent.click(btnApplyFilter);

            await userEvent.click(btnShowSortModal);

            const clearSortOption = screen.getByText(/limpar ordenação/i);
            await userEvent.click(clearSortOption);

            const expected = [
              {
                paciente_nome: "Camila da Silva",
                cidadao_cpf_dt_nascimento: "106.106.106-10",
                id_status_usuario: 12,
                vencimento_da_coleta: "-",
                prazo_proxima_coleta: "31/08/2023",
                idade: 25,
                id_faixa_etaria: 8,
                acs_nome: "Alessandra Santos",
                estabelecimento_cnes: "2872872",
                estabelecimento_nome: "Unidade de Saude da Familia 1",
                equipe_ine: "0002277227",
                ine_master: "0002277227",
                equipe_nome: "ESF 1",
                dt_registro_producao_mais_recente: "2023-10-22"
              },
              {
                paciente_nome: "Maria da Silva",
                cidadao_cpf_dt_nascimento: "327.327.327-32",
                id_status_usuario: 12,
                vencimento_da_coleta: "11/05/2026",
                prazo_proxima_coleta: "31/08/2023",
                idade: 35,
                id_faixa_etaria: 6,
                acs_nome: "Alessandra Santos",
                estabelecimento_cnes: "2872872",
                estabelecimento_nome: "Unidade de Saude da Familia 1",
                equipe_ine: "0002277227",
                ine_master: "0002277227",
                equipe_nome: "ESF 1",
                dt_registro_producao_mais_recente: "2023-10-22"
              },
              {
                paciente_nome: "Carla da Silva",
                cidadao_cpf_dt_nascimento: "305.305.305-30",
                id_status_usuario: 13,
                vencimento_da_coleta: "-",
                prazo_proxima_coleta: "31/08/2023",
                idade: 64,
                id_faixa_etaria: 8,
                acs_nome: "Alessandra Santos",
                estabelecimento_cnes: "2872872",
                estabelecimento_nome: "Unidade de Saude da Familia 1",
                equipe_ine: "0002277227",
                ine_master: "0002277227",
                equipe_nome: "ESF 1",
                dt_registro_producao_mais_recente: "2023-10-22"
              },
            ];

            expect(scenarios[0].setData).toHaveBeenLastCalledWith(expected);
          });
        });
      });
    });

    describe("Ao selecionar mais de uma opção de ordenação", () => {
      it("deve exibir os dados ordenados apenas com base na última opção selecionada", async () => {
        render(<PainelBuscaAtiva { ...scenarios[0] } />);

        const btnShowModal = screen.getByRole("button", { name: /ordenar lista/i });
        await userEvent.click(btnShowModal);

        const sortByAcsNameOption = screen.getByText(/nome do acs de a-z/i);
        await userEvent.click(sortByAcsNameOption);

        const sortByAgeOption = screen.getByText(/idade do paciente/i);
        await userEvent.click(sortByAgeOption);

        const [btnApplySort] = screen.getAllByRole("button", { name: /ordenar lista/i });
        await userEvent.click(btnApplySort);

        const expected = [
          {
            paciente_nome: "Camila da Silva",
            cidadao_cpf_dt_nascimento: "106.106.106-10",
            id_status_usuario: 12,
            vencimento_da_coleta: "-",
            prazo_proxima_coleta: "31/08/2023",
            idade: 25,
            id_faixa_etaria: 8,
            acs_nome: "Alessandra Santos",
            estabelecimento_cnes: "2872872",
            estabelecimento_nome: "Unidade de Saude da Familia 1",
            equipe_ine: "0002277227",
            ine_master: "0002277227",
            equipe_nome: "ESF 1",
            dt_registro_producao_mais_recente: "2023-10-22"
          },
          {
            paciente_nome: "Maria da Silva",
            cidadao_cpf_dt_nascimento: "327.327.327-32",
            id_status_usuario: 12,
            vencimento_da_coleta: "11/05/2026",
            prazo_proxima_coleta: "31/08/2023",
            idade: 35,
            id_faixa_etaria: 6,
            acs_nome: "Alessandra Santos",
            estabelecimento_cnes: "2872872",
            estabelecimento_nome: "Unidade de Saude da Familia 1",
            equipe_ine: "0002277227",
            ine_master: "0002277227",
            equipe_nome: "ESF 1",
            dt_registro_producao_mais_recente: "2023-10-22"
          },
          {
            paciente_nome: "Julia da Silva",
            cidadao_cpf_dt_nascimento: "100.100.100-10",
            id_status_usuario: 12,
            vencimento_da_coleta: "27/07/2025",
            prazo_proxima_coleta: "Em dia",
            idade: 55,
            id_faixa_etaria: 8,
            acs_nome: "Carmen Miranda",
            estabelecimento_cnes: "2752752",
            estabelecimento_nome: "Unidade de Saude da Familia 2",
            equipe_ine: "0000369369",
            ine_master: "0000369369",
            equipe_nome: "ESF 2",
            dt_registro_producao_mais_recente: "2023-10-22"
          },
          {
            paciente_nome: "Carla da Silva",
            cidadao_cpf_dt_nascimento: "305.305.305-30",
            id_status_usuario: 13,
            vencimento_da_coleta: "-",
            prazo_proxima_coleta: "31/08/2023",
            idade: 64,
            id_faixa_etaria: 8,
            acs_nome: "Alessandra Santos",
            estabelecimento_cnes: "2872872",
            estabelecimento_nome: "Unidade de Saude da Familia 1",
            equipe_ine: "0002277227",
            ine_master: "0002277227",
            equipe_nome: "ESF 1",
            dt_registro_producao_mais_recente: "2023-10-22"
          },
        ];

        expect(scenarios[0].setData).toHaveBeenLastCalledWith(expected);
      });
    });
  });

  describe('Funcionalidade: filtro', () => {
    describe('Ao aplicar uma opção de filtro', () => {
      it('deve exibir os dados filtrados e fechar o modal de filtro', async () => {
        render(<PainelBuscaAtiva { ...scenarios[0] } />);

        const btnShowFilterModal = screen.getByRole("button", { name: /filtrar lista nominal/i });
        await userEvent.click(btnShowFilterModal);

        const [_, showFilterOptions] = screen.getAllByRole("button", { name: "+" });
        await userEvent.click(showFilterOptions);

        const filterOption = screen.getByLabelText(/Nunca realizou coleta/i);
        await userEvent.click(filterOption);

        const [btnApplyFilter] = screen.getAllByRole("button", { name: /filtrar lista nominal/i });
        await userEvent.click(btnApplyFilter);

        const expected = [
          {
            paciente_nome: "Carla da Silva",
            cidadao_cpf_dt_nascimento: "305.305.305-30",
            id_status_usuario: 13,
            vencimento_da_coleta: "-",
            prazo_proxima_coleta: "31/08/2023",
            idade: 64,
            id_faixa_etaria: 8,
            acs_nome: "Alessandra Santos",
            estabelecimento_cnes: "2872872",
            estabelecimento_nome: "Unidade de Saude da Familia 1",
            equipe_ine: "0002277227",
            ine_master: "0002277227",
            equipe_nome: "ESF 1",
            dt_registro_producao_mais_recente: "2023-10-22"
          },
        ];

        expect(screen.queryByTestId("Modal")).not.toBeInTheDocument();
        expect(scenarios[0].setData).toHaveBeenLastCalledWith(expected);
      });
    });
  });
});
