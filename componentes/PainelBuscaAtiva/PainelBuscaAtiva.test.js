import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as responses from "./__data__";
import { PainelBuscaAtiva } from ".";

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
const scenarios = [
  {
    painel: "citopatológico",
    dadosFiltros: [
      {
        data: ["Alessandra Santos", "Carmen Miranda", null],
        filtro: "acs_nome",
        rotulo: "Filtrar por nome do Profissional Responsável"
      },
      {
        data: ["12", "13"],
        labels: responses.status,
        filtro: "id_status_usuario",
        rotulo: "Filtrar por status"
      },
    ],
    tabela: {
      data: responses.citoSuccessAPS,
      colunas: [
        { field: "paciente_nome", headerName: "NOME" },
        {
          field: "id_status_usuario",
          headerName: "STATUS DA COLETA",
          renderCell: ({ value }) => [
            { id_status_usuario: 12, status_usuarios_descricao: responses.status[12] },
            { id_status_usuario: 13, status_usuarios_descricao: responses.status[13] },
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
    atualizacao: "22/10/2023",
    data: responses.citoSuccessAPS,
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

  describe('Ao clicar no botão Ordenar Lista', () => {
    it('deve exibir o modal de ordenação', async () => {
      const user = userEvent.setup();
      render(<PainelBuscaAtiva { ...scenarios[0] } />);

      const btnShowModal = screen.getByRole("button", { name: /ordenar lista/i });
      await user.click(btnShowModal);

      expect(screen.getByTestId("Modal")).toBeInTheDocument();
      expect(screen.getByTestId("Ordenar")).toBeInTheDocument();
    });
  });

  describe('Ao clicar no botão Filtrar Lista Nominal', () => {
    it('deve exibir o modal de filtro', async () => {
      const user = userEvent.setup();
      render(<PainelBuscaAtiva { ...scenarios[0] } />);

      const btnShowModal = screen.getByRole("button", { name: /filtrar lista nominal/i });
      await user.click(btnShowModal);

      expect(screen.getByTestId("Modal")).toBeInTheDocument();
      expect(screen.getByTestId("Filtro")).toBeInTheDocument();
    });
  });

  describe('Ao abrir o modal e clicar fora dele', () => {
    it('deve fechar o modal', async () => {
      const user = userEvent.setup();
      render(<PainelBuscaAtiva { ...scenarios[0] } />);

      const btnShowModal = screen.getByRole("button", { name: /ordenar lista/i });
      await user.click(btnShowModal);

      const areaOutsideModal = screen.getByTestId("BlurArea");
      await user.click(areaOutsideModal);

      expect(screen.queryByTestId("Modal")).not.toBeInTheDocument();
    });
  });

  describe("Funcionalidade: ordenação", () => {
    describe("Ao aplicar uma opção de ordenação", () => {
      it("deve exibir os dados ordenados e fechar o modal de ordenação", async () => {
        const user = userEvent.setup();
        render(<PainelBuscaAtiva { ...scenarios[0] } />);

        const btnShowModal = screen.getByRole("button", { name: /ordenar lista/i });
        await user.click(btnShowModal);

        const sortOption = screen.getByText(/nome do acs de a-z/i);
        await user.click(sortOption);

        const sortModal = screen.getByTestId("Ordenar");
        const btnApplySort = within(sortModal).getByRole("button", { name: /ordenar lista/i });
        await user.click(btnApplySort);

        const rows = screen.getAllByRole("row");

        expect(rows).toHaveLength(5);

        expect(within(rows[0]).getByText(/acs/i)).toBeInTheDocument();
        expect(within(rows[0]).getByText(/nome/i)).toBeInTheDocument();

        expect(within(rows[1]).getByText(/alessandra santos/i)).toBeInTheDocument();
        expect(within(rows[1]).getByText(/camila da silva/i)).toBeInTheDocument();

        expect(within(rows[2]).getByText(/alessandra santos/i)).toBeInTheDocument();
        expect(within(rows[2]).getByText(/maria da silva/i)).toBeInTheDocument();

        expect(within(rows[3]).getByText(/alessandra santos/i)).toBeInTheDocument();
        expect(within(rows[3]).getByText(/carla da silva/i)).toBeInTheDocument();

        expect(within(rows[4]).getByText(/carmen miranda/i)).toBeInTheDocument();
        expect(within(rows[4]).getByText(/julia da silva/i)).toBeInTheDocument();
        expect(screen.queryByTestId("Modal")).not.toBeInTheDocument();
      });

      describe('E aplicar uma opção de filtro', () => {
        it('deve exibir os dados filtrados e ordenados', async () => {
          const user = userEvent.setup();
          render(<PainelBuscaAtiva { ...scenarios[0] } />);

          const btnShowSortModal = screen.getByRole("button", { name: /ordenar lista/i });
          await user.click(btnShowSortModal);

          const sortOption = screen.getByText(/vencimento da coleta mais antigo/i);
          await user.click(sortOption);

          const sortModal = screen.getByTestId("Ordenar");
          const btnApplySort = within(sortModal).getByRole("button", { name: /ordenar lista/i });
          await user.click(btnApplySort);

          const btnShowFilterModal = screen.getByRole("button", { name: /filtrar lista nominal/i });
          await user.click(btnShowFilterModal);

          const [showFilterOptions] = screen.getAllByRole("button", { name: "+" });
          await user.click(showFilterOptions);

          const filterOption = screen.getByLabelText(/alessandra santos/i);
          await user.click(filterOption);

          const filterModal = screen.getByTestId("Filtro");
          const btnApplyFilter = within(filterModal).getByRole("button", { name: /filtrar lista nominal/i });
          await user.click(btnApplyFilter);

          const rows = screen.getAllByRole("row");

          expect(rows).toHaveLength(4);

          expect(within(rows[0]).getByText(/acs/i)).toBeInTheDocument();
          expect(within(rows[0]).getByText(/vencimento da coleta/i)).toBeInTheDocument();
          expect(within(rows[0]).getByText(/nome/i)).toBeInTheDocument();

          expect(within(rows[1]).getByText(/alessandra santos/i)).toBeInTheDocument();
          expect(within(rows[1]).getByText("11/05/2026")).toBeInTheDocument();
          expect(within(rows[1]).getByText(/maria da silva/i)).toBeInTheDocument();

          expect(within(rows[2]).getByText(/alessandra santos/i)).toBeInTheDocument();
          expect(within(rows[2]).getByText("-")).toBeInTheDocument();
          expect(within(rows[2]).getByText(/camila da silva/i)).toBeInTheDocument();

          expect(within(rows[3]).getByText(/alessandra santos/i)).toBeInTheDocument();
          expect(within(rows[3]).getByText("-")).toBeInTheDocument();
          expect(within(rows[3]).getByText(/carla da silva/i)).toBeInTheDocument();
        });
      });

      describe("E clicar em limpar ordenação", () => {
        it("deve exibir os dados desordenados e fechar o modal de ordenação", async () => {
          const user = userEvent.setup();
          render(<PainelBuscaAtiva { ...scenarios[0] } />);

          const btnShowModal = screen.getByRole("button", { name: /ordenar lista/i });
          await user.click(btnShowModal);

          const sortOption = screen.getByText(/nome do acs de a-z/i);
          await user.click(sortOption);

          const sortModal = screen.getByTestId("Ordenar");
          const btnApplySort = within(sortModal).getByRole("button", { name: /ordenar lista/i });
          await user.click(btnApplySort);

          await user.click(btnShowModal);

          const clearSortOption = screen.getByText(/limpar ordenação/i);
          await user.click(clearSortOption);

          const rows = screen.getAllByRole("row");

          expect(rows).toHaveLength(5);
          expect(within(rows[0]).getByText(/nome/i)).toBeInTheDocument();
          expect(within(rows[1]).getByText(/camila da silva/i)).toBeInTheDocument();
          expect(within(rows[2]).getByText(/maria da silva/i)).toBeInTheDocument();
          expect(within(rows[3]).getByText(/julia da silva/i)).toBeInTheDocument();
          expect(within(rows[4]).getByText(/carla da silva/i)).toBeInTheDocument();
          expect(screen.queryByTestId("Modal")).not.toBeInTheDocument();
        });

        describe("Quando há opção de filtro aplicada", () => {
          it("deve exibir os dados filtrados sem ordenação", async () => {
            const user = userEvent.setup();
            render(<PainelBuscaAtiva { ...scenarios[0] } />);

            const btnShowSortModal = screen.getByRole("button", { name: /ordenar lista/i });
            await user.click(btnShowSortModal);

            const sortOption = screen.getByText(/vencimento da coleta mais antigo/i);
            await user.click(sortOption);

            const sortModal = screen.getByTestId("Ordenar");
            const btnApplySort = within(sortModal).getByRole("button", { name: /ordenar lista/i });
            await user.click(btnApplySort);

            const btnShowFilterModal = screen.getByRole("button", { name: /filtrar lista nominal/i });
            await user.click(btnShowFilterModal);

            const [showFilterOptions] = screen.getAllByRole("button", { name: "+" });
            await user.click(showFilterOptions);

            const filterOption = screen.getByLabelText(/alessandra santos/i);
            await user.click(filterOption);

            const filterModal = screen.getByTestId("Filtro");
            const btnApplyFilter = within(filterModal).getByRole("button", { name: /filtrar lista nominal/i });
            await user.click(btnApplyFilter);

            await user.click(btnShowSortModal);

            const clearSortOption = screen.getByText(/limpar ordenação/i);
            await user.click(clearSortOption);

            const rows = screen.getAllByRole("row");

            expect(rows).toHaveLength(4);

            expect(within(rows[0]).getByText(/acs/i)).toBeInTheDocument();
            expect(within(rows[0]).getByText(/nome/i)).toBeInTheDocument();
            expect(within(rows[0]).getByText(/vencimento da coleta/i)).toBeInTheDocument();

            expect(within(rows[1]).getByText(/alessandra santos/i)).toBeInTheDocument();
            expect(within(rows[1]).getByText(/camila da silva/i)).toBeInTheDocument();
            expect(within(rows[1]).getByText("-")).toBeInTheDocument();

            expect(within(rows[2]).getByText(/alessandra santos/i)).toBeInTheDocument();
            expect(within(rows[2]).getByText(/maria da silva/i)).toBeInTheDocument();
            expect(within(rows[2]).getByText("11/05/2026")).toBeInTheDocument();

            expect(within(rows[3]).getByText(/alessandra santos/i)).toBeInTheDocument();
            expect(within(rows[3]).getByText(/carla da silva/i)).toBeInTheDocument();
            expect(within(rows[3]).getByText("-")).toBeInTheDocument();
          });
        });
      });
    });

    describe("Ao selecionar mais de uma opção de ordenação", () => {
      it("deve exibir os dados ordenados apenas com base na última opção selecionada", async () => {
        const user = userEvent.setup();
        render(<PainelBuscaAtiva { ...scenarios[0] } />);

        const btnShowModal = screen.getByRole("button", { name: /ordenar lista/i });
        await user.click(btnShowModal);

        const sortByAcsNameOption = screen.getByText(/nome do acs de a-z/i);
        await user.click(sortByAcsNameOption);

        const sortByAgeOption = screen.getByText(/idade do paciente/i);
        await user.click(sortByAgeOption);

        const sortModal = screen.getByTestId("Ordenar");
        const btnApplySort = within(sortModal).getByRole("button", { name: /ordenar lista/i });
        await user.click(btnApplySort);

        const rows = screen.getAllByRole("row");

        expect(rows).toHaveLength(5);

        expect(within(rows[0]).getByText(/acs/i)).toBeInTheDocument();
        expect(within(rows[0]).getByText(/idade/i)).toBeInTheDocument();

        expect(within(rows[1]).getByText(/alessandra santos/i)).toBeInTheDocument();
        expect(within(rows[1]).getByText("25")).toBeInTheDocument();

        expect(within(rows[2]).getByText(/alessandra santos/i)).toBeInTheDocument();
        expect(within(rows[2]).getByText("35")).toBeInTheDocument();

        expect(within(rows[3]).getByText(/carmen miranda/i)).toBeInTheDocument();
        expect(within(rows[3]).getByText("55")).toBeInTheDocument();

        expect(within(rows[4]).getByText(/alessandra santos/i)).toBeInTheDocument();
        expect(within(rows[4]).getByText("64")).toBeInTheDocument();
      });
    });
  });

  describe('Funcionalidade: filtro', () => {
    describe('Ao aplicar uma opção de filtro', () => {
      it('deve exibir os dados filtrados e fechar o modal de filtro', async () => {
        const user = userEvent.setup();
        render(<PainelBuscaAtiva { ...scenarios[0] } />);

        const btnShowFilterModal = screen.getByRole("button", { name: /filtrar lista nominal/i });
        await user.click(btnShowFilterModal);

        const [_, showFilterOptions] = screen.getAllByRole("button", { name: "+" });
        await user.click(showFilterOptions);

        const filterOption = screen.getByLabelText(/Nunca realizou coleta/i);
        await user.click(filterOption);

        const filterModal = screen.getByTestId("Filtro");
        const btnApplyFilter = within(filterModal).getByRole("button", { name: /filtrar lista nominal/i });
        await user.click(btnApplyFilter);

        const rows = screen.getAllByRole("row");

        expect(rows).toHaveLength(2);
        expect(within(rows[0]).getByText(/vencimento da coleta/i)).toBeInTheDocument();
        expect(within(rows[0]).getByText(/nome/i)).toBeInTheDocument();
        expect(within(rows[1]).getByText(/nunca realizou coleta/i)).toBeInTheDocument();
        expect(within(rows[1]).getByText(/carla da silva/i)).toBeInTheDocument();
        expect(screen.queryByTestId("Modal")).not.toBeInTheDocument();
      });

      describe('E aplicar uma opção de ordenação', () => {
        it('deve exibir os dados filtrados e ordenados', async () => {
          const user = userEvent.setup();
          render(<PainelBuscaAtiva { ...scenarios[0] } />);

          const btnShowFilterModal = screen.getByRole("button", { name: /filtrar lista nominal/i });
          await user.click(btnShowFilterModal);

          const [showFilterOptions] = screen.getAllByRole("button", { name: "+" });
          await user.click(showFilterOptions);

          const filterOption = screen.getByLabelText(/alessandra santos/i);
          await user.click(filterOption);

          const filterModal = screen.getByTestId("Filtro");
          const btnApplyFilter = within(filterModal).getByRole("button", { name: /filtrar lista nominal/i });
          await user.click(btnApplyFilter);

          const btnShowSortModal = screen.getByRole("button", { name: /ordenar lista/i });
          await user.click(btnShowSortModal);

          const sortOption = screen.getByText(/idade do paciente/i);
          await user.click(sortOption);

          const sortModal = screen.getByTestId("Ordenar");
          const btnApplySort = within(sortModal).getByRole("button", { name: /ordenar lista/i });
          await user.click(btnApplySort);

          const rows = screen.getAllByRole("row");

          expect(rows).toHaveLength(4);

          expect(within(rows[0]).getByText(/idade/i)).toBeInTheDocument();
          expect(within(rows[0]).getByText(/acs/i)).toBeInTheDocument();

          expect(within(rows[1]).getByText(/25/i)).toBeInTheDocument();
          expect(within(rows[1]).getByText(/alessandra santos/i)).toBeInTheDocument();

          expect(within(rows[2]).getByText(/35/i)).toBeInTheDocument();
          expect(within(rows[2]).getByText(/alessandra santos/i)).toBeInTheDocument();

          expect(within(rows[3]).getByText(/64/i)).toBeInTheDocument();
          expect(within(rows[3]).getByText(/alessandra santos/i)).toBeInTheDocument();
        });
      });

      describe('E clicar em limpar filtros', () => {
        it('deve exibir os dados sem filtros e fechar o modal de filtro', async () => {
          const user = userEvent.setup();
          render(<PainelBuscaAtiva { ...scenarios[0] } />);

          const btnShowFilterModal = screen.getByRole("button", { name: /filtrar lista nominal/i });
          await user.click(btnShowFilterModal);

          const [showFilterOptions] = screen.getAllByRole("button", { name: "+" });
          await user.click(showFilterOptions);

          const filterOption = screen.getByLabelText(/alessandra santos/i);
          await user.click(filterOption);

          const filterModal = screen.getByTestId("Filtro");
          const btnApplyFilter = within(filterModal).getByRole("button", { name: /filtrar lista nominal/i });
          await user.click(btnApplyFilter);

          await user.click(btnShowFilterModal);

          const clearFilterOption = screen.getByText(/limpar filtros/i);
          await user.click(clearFilterOption);

          const rows = screen.getAllByRole("row");

          expect(rows).toHaveLength(5);
          expect(within(rows[0]).getByText(/nome/i)).toBeInTheDocument();
          expect(within(rows[1]).getByText(/camila da silva/i)).toBeInTheDocument();
          expect(within(rows[2]).getByText(/maria da silva/i)).toBeInTheDocument();
          expect(within(rows[3]).getByText(/julia da silva/i)).toBeInTheDocument();
          expect(within(rows[4]).getByText(/carla da silva/i)).toBeInTheDocument();
          expect(screen.queryByTestId("Modal")).not.toBeInTheDocument();
        });

        describe('Quando há opção de ordenação aplicada', () => {
          it('deve exibir os dados ordenados e sem filtro', async () => {
            const user = userEvent.setup();
            render(<PainelBuscaAtiva { ...scenarios[0] } />);

            const btnShowFilterModal = screen.getByRole("button", { name: /filtrar lista nominal/i });
            await user.click(btnShowFilterModal);

            const [_, showFilterOptions] = screen.getAllByRole("button", { name: "+" });
            await user.click(showFilterOptions);

            const filterOption = screen.getByLabelText(/coleta em dia/i);
            await user.click(filterOption);

            const filterModal = screen.getByTestId("Filtro");
            const btnApplyFilter = within(filterModal).getByRole("button", { name: /filtrar lista nominal/i });
            await user.click(btnApplyFilter);

            const btnShowSortModal = screen.getByRole("button", { name: /ordenar lista/i });
            await user.click(btnShowSortModal);

            const sortOption = screen.getByText(/vencimento da coleta mais antigo/i);
            await user.click(sortOption);

            const sortModal = screen.getByTestId("Ordenar");
            const btnApplySort = within(sortModal).getByRole("button", { name: /ordenar lista/i });
            await user.click(btnApplySort);

            await user.click(btnShowFilterModal);

            const clearFilterOption = screen.getByText(/limpar filtros/i);
            await user.click(clearFilterOption);

            const rows = screen.getAllByRole("row");

            expect(rows).toHaveLength(5);

            expect(within(rows[0]).getByText(/vencimento da coleta/i)).toBeInTheDocument();
            expect(within(rows[0]).getByText(/status/i)).toBeInTheDocument();

            expect(within(rows[1]).getByText("11/05/2026")).toBeInTheDocument();
            expect(within(rows[1]).getByText(/coleta em dia/i)).toBeInTheDocument();

            expect(within(rows[2]).getByText("27/07/2025")).toBeInTheDocument();
            expect(within(rows[2]).getByText(/coleta em dia/i)).toBeInTheDocument();

            expect(within(rows[3]).getByText("-")).toBeInTheDocument();
            expect(within(rows[3]).getByText(/coleta em dia/i)).toBeInTheDocument();

            expect(within(rows[4]).getByText("-")).toBeInTheDocument();
            expect(within(rows[4]).getByText(/nunca realizou coleta/i)).toBeInTheDocument();
          });
        });
      });

      describe('E abrir o modal de filtro novamente', () => {
        it('deve exibir a opção de filtro selecionada marcada com check', async () => {
          const user = userEvent.setup();
          render(<PainelBuscaAtiva { ...scenarios[0] } />);

          const btnShowFilterModal = screen.getByRole("button", { name: /filtrar lista nominal/i });
          await user.click(btnShowFilterModal);

          const [showFilterOptions] = screen.getAllByRole("button", { name: "+" });
          await user.click(showFilterOptions);

          const filterOption = screen.getByLabelText(/carmen miranda/i);
          await user.click(filterOption);

          const filterModal = screen.getByTestId("Filtro");
          const btnApplyFilter = within(filterModal).getByRole("button", { name: /filtrar lista nominal/i });
          await user.click(btnApplyFilter);

          await user.click(btnShowFilterModal);
          await user.click(screen.getAllByRole("button", { name: "+" })[0]);

          expect(screen.getByLabelText(/carmen miranda/i)).toBeChecked();
        });
      });
    });

    describe('Ao aplicar mais de uma opção de filtro', () => {
      it('deve exibir os dados filtrados por todas as opções selecionadas', async () => {
        const user = userEvent.setup();
        render(<PainelBuscaAtiva { ...scenarios[0] } />);

        const btnShowFilterModal = screen.getByRole("button", { name: /filtrar lista nominal/i });
        await user.click(btnShowFilterModal);

        const [showACSFilterOptions, showStatusFilterOptions] = screen.getAllByRole("button", { name: "+" });

        await user.click(showStatusFilterOptions);

        const filterOptionStatus = screen.getByLabelText(/coleta em dia/i);
        await user.click(filterOptionStatus);

        const hideStatusFilterOptions = screen.getByRole("button", { name: "-" });
        await user.click(hideStatusFilterOptions);

        await user.click(showACSFilterOptions);

        const filterOptionACS = screen.getByLabelText(/carmen miranda/i);
        await user.click(filterOptionACS);

        const filterModal = screen.getByTestId("Filtro");
        const btnApplyFilter = within(filterModal).getByRole("button", { name: /filtrar lista nominal/i });
        await user.click(btnApplyFilter);

        const rows = screen.getAllByRole("row");

        expect(rows).toHaveLength(2);

        expect(within(rows[0]).getByText(/status/i)).toBeInTheDocument();
        expect(within(rows[0]).getByText(/acs/i)).toBeInTheDocument();

        expect(within(rows[1]).getByText(/carmen miranda/i)).toBeInTheDocument();
        expect(within(rows[1]).getByText(/coleta em dia/i)).toBeInTheDocument();
      });

      describe('E remover uma das opções', () => {
        it('deve exibir os dados filtrados pelas opções restantes', async () => {
          const user = userEvent.setup();
          render(<PainelBuscaAtiva { ...scenarios[0] } />);

          const btnShowFilterModal = screen.getByRole("button", { name: /filtrar lista nominal/i });
          await user.click(btnShowFilterModal);

          const [showACSFilterOptions, showStatusFilterOptions] = screen.getAllByRole("button", { name: "+" });

          await user.click(showStatusFilterOptions);

          const filterOptionStatus = screen.getByLabelText(/nunca realizou coleta/i);
          await user.click(filterOptionStatus);

          const hideStatusFilterOptions = screen.getByRole("button", { name: "-" });
          await user.click(hideStatusFilterOptions);

          await user.click(showACSFilterOptions);

          const filterOptionACS = screen.getByLabelText(/alessandra santos/i);
          await user.click(filterOptionACS);

          const filterModal = screen.getByTestId("Filtro");
          const btnApplyFilter = within(filterModal).getByRole("button", { name: /filtrar lista nominal/i });
          await user.click(btnApplyFilter);

          await user.click(btnShowFilterModal);
          await user.click(showACSFilterOptions);
          await user.click(filterOptionACS);
          await user.click(btnApplyFilter);

          const rows = screen.getAllByRole("row");

          expect(rows).toHaveLength(2);

          expect(within(rows[0]).getByText(/acs/i)).toBeInTheDocument();
          expect(within(rows[0]).getByText(/status/i)).toBeInTheDocument();

          expect(within(rows[1]).getByText(/alessandra santos/i)).toBeInTheDocument();
          expect(within(rows[1]).getByText(/nunca realizou coleta/i)).toBeInTheDocument();
        });
      });
    });
  });

  describe('Funcionalidade: busca por nome', () => {
    describe('Ao digitar na input de busca', () => {
      it('deve exibir os dados cujo nome do cidadão possui o texto digitado', async () => {
        const user = userEvent.setup();
        render(<PainelBuscaAtiva { ...scenarios[0] } />);

        const searchInput = screen.getByPlaceholderText(/pesquise um nome/i);
        await user.type(searchInput, "ca");

        const rows = screen.getAllByRole("row");

        expect(rows).toHaveLength(3);
        expect(within(rows[0]).getByText(/nome/i)).toBeInTheDocument();
        expect(within(rows[1]).getByText(/camila da silva/i)).toBeInTheDocument();
        expect(within(rows[2]).getByText(/carla da silva/i)).toBeInTheDocument();
      });
    });
  });
});
