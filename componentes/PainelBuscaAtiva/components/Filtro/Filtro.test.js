import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Filtro } from '.';
import * as responses from "../../__data__";

const COMPONENT = 'Filtro';
const dadosDeFiltros = [
  {
    data: ['Alessandra Santos', 'Carmen Miranda', null],
    filtro: 'acs_nome',
    rotulo: 'Filtrar por nome do Profissional Responsável'
  },
  {
    data: ['12', '13'],
    labels: responses.status,
    filtro: 'id_status_usuario',
    rotulo: 'Filtrar por status'
  },
];
const scenarios = [
  {
    data: dadosDeFiltros,
    setData: jest.fn(),
    tabela: responses.citoSuccessAPS,
    value: {
      '12': false,
      '13': false,
      'Alessandra Santos': false,
      'Carmen Miranda': false,
      null: false,
    },
    setChavesFiltros: jest.fn(),
    setModal: jest.fn(),
    painel: 'citopatológico',
    ordenar: '1',
    datefiltros: [],
    IntFiltros: [],
    IDFiltrosOrdenacao: { acs_nome: 'asc' },
    ordenacaoAplicada: false,
  },
  {
    data: dadosDeFiltros,
    setData: jest.fn(),
    tabela: responses.citoSuccessAPS,
    value: {
      '12': false,
      '13': false,
      'Alessandra Santos': false,
      'Carmen Miranda': true,
      null: false,
    },
    setChavesFiltros: jest.fn(),
    setModal: jest.fn(),
    painel: 'citopatológico',
    ordenar: '1',
    datefiltros: [],
    IntFiltros: [],
    IDFiltrosOrdenacao: { acs_nome: 'asc' },
    ordenacaoAplicada: false,
  },
  {
    data: dadosDeFiltros,
    setData: jest.fn(),
    tabela: responses.citoSuccessAPS,
    value: {
      '12': true,
      '13': false,
      'Alessandra Santos': false,
      'Carmen Miranda': false,
      null: false,
    },
    setChavesFiltros: jest.fn(),
    setModal: jest.fn(),
    painel: 'citopatológico',
    ordenar: 'acs_nome',
    datefiltros: [],
    IntFiltros: [],
    IDFiltrosOrdenacao: { acs_nome: 'asc' },
    ordenacaoAplicada: true,
  },
  {
    data: dadosDeFiltros,
    setData: jest.fn(),
    tabela: responses.citoSuccessAPS,
    value: {
      '12': false,
      '13': true,
      'Alessandra Santos': true,
      'Carmen Miranda': false,
      null: false,
    },
    setChavesFiltros: jest.fn(),
    setModal: jest.fn(),
    painel: 'citopatológico',
    ordenar: '1',
    datefiltros: [],
    IntFiltros: [],
    IDFiltrosOrdenacao: { acs_nome: 'asc' },
    ordenacaoAplicada: false,
  },
  {
    data: dadosDeFiltros,
    setData: jest.fn(),
    tabela: responses.citoSuccessAPS,
    value: {
      '12': false,
      '13': false,
      'Alessandra Santos': false,
      'Carmen Miranda': false,
      null: false,
    },
    setChavesFiltros: jest.fn(),
    setModal: jest.fn(),
    painel: 'citopatológico',
    ordenar: 'acs_nome',
    datefiltros: [],
    IntFiltros: [],
    IDFiltrosOrdenacao: { acs_nome: 'asc' },
    ordenacaoAplicada: true,
  },
];

describe('Componente: Filtro', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('deve renderizar corretamente', () => {
    render(<Filtro {...scenarios[0]} />);

    const component = screen.getByTestId(COMPONENT);

    expect(component).toMatchSnapshot();
  });

  describe('Ao clicar no botão de filtrar lista nominal', () => {
    it('deve chamar a função setModal com o valor false', async () => {
      const user = userEvent.setup();
      render(<Filtro {...scenarios[0]} />);

      const botaoFiltrarLista = await screen.findByRole('button', {
        name: /filtrar lista nominal/i
      });

      await user.click(botaoFiltrarLista);

      expect(scenarios[0].setModal).toHaveBeenCalledWith(false);
    });

    describe('Sem selecionar opções de filtro', () => {
      it('deve chamar a função setData com dados iguais aos recebidos pelo componente', async () => {
        const user = userEvent.setup();
        render(<Filtro {...scenarios[0]} />);

        const botaoFiltrarLista = await screen.findByRole('button', {
          name: /filtrar lista nominal/i
        });

        await user.click(botaoFiltrarLista);

        expect(scenarios[0].setData).toHaveBeenCalledWith(responses.citoSuccessAPS);
      });
    });

    describe('Quando uma opção de filtro está selecionada', () => {
      describe('E não há ordenação aplicada', () => {
        it('deve chamar setData com os dados filtrados de acordo com a opção', async () => {
          const user = userEvent.setup();
          render(<Filtro {...scenarios[1]} />);

          const botaoFiltrarLista = await screen.findByRole('button', {
            name: /filtrar lista nominal/i
          });

          await user.click(botaoFiltrarLista);

          const parametroEsperado = [{
            acs_nome: 'Carmen Miranda',
            cidadao_cpf_dt_nascimento: '100.100.100-10',
            dt_registro_producao_mais_recente: '2023-10-22',
            equipe_ine: '0000369369',
            equipe_nome: 'ESF 2',
            estabelecimento_cnes: '2752752',
            estabelecimento_nome: 'Unidade de Saude da Familia 2',
            id_faixa_etaria: 8,
            id_status_usuario: 12,
            idade: 55,
            ine_master: '0000369369',
            paciente_nome: 'Julia da Silva',
            prazo_proxima_coleta: 'Em dia',
            vencimento_da_coleta: '27/07/2025'
          }];

          expect(scenarios[1].setData).toHaveBeenCalledWith(parametroEsperado);
        });
      });

      describe('E há ordenação aplicada', () => {
        it('deve chamar setData com os dados ordenados e filtrados de acordo com a opção', async () => {
          const user = userEvent.setup();
          render(<Filtro {...scenarios[2]} />);

          const botaoFiltrarLista = await screen.findByRole('button', {
            name: /filtrar lista nominal/i
          });

          await user.click(botaoFiltrarLista);

          const parametroEsperado = [
            {
              paciente_nome: 'Camila da Silva',
              cidadao_cpf_dt_nascimento: '106.106.106-10',
              id_status_usuario: 12,
              vencimento_da_coleta: '-',
              prazo_proxima_coleta: '31/08/2023',
              idade: 25,
              id_faixa_etaria: 8,
              acs_nome: 'Alessandra Santos',
              estabelecimento_cnes: '2872872',
              estabelecimento_nome: 'Unidade de Saude da Familia 1',
              equipe_ine: '0002277227',
              ine_master: '0002277227',
              equipe_nome: 'ESF 1',
              dt_registro_producao_mais_recente: '2023-10-22'
            },
            {
              paciente_nome: 'Maria da Silva',
              cidadao_cpf_dt_nascimento: '327.327.327-32',
              id_status_usuario: 12,
              vencimento_da_coleta: '11/05/2026',
              prazo_proxima_coleta: '31/08/2023',
              idade: 35,
              id_faixa_etaria: 6,
              acs_nome: 'Alessandra Santos',
              estabelecimento_cnes: '2872872',
              estabelecimento_nome: 'Unidade de Saude da Familia 1',
              equipe_ine: '0002277227',
              ine_master: '0002277227',
              equipe_nome: 'ESF 1',
              dt_registro_producao_mais_recente: '2023-10-22'
            },
            {
              paciente_nome: 'Julia da Silva',
              cidadao_cpf_dt_nascimento: '100.100.100-10',
              id_status_usuario: 12,
              vencimento_da_coleta: '27/07/2025',
              prazo_proxima_coleta: 'Em dia',
              idade: 55,
              id_faixa_etaria: 8,
              acs_nome: 'Carmen Miranda',
              estabelecimento_cnes: '2752752',
              estabelecimento_nome: 'Unidade de Saude da Familia 2',
              equipe_ine: '0000369369',
              ine_master: '0000369369',
              equipe_nome: 'ESF 2',
              dt_registro_producao_mais_recente: '2023-10-22'
            },
          ];

          expect(scenarios[2].setData).toHaveBeenCalledWith(parametroEsperado);
        });
      });
    });

    describe('Após selecionar duas opções de filtro', () => {
      it('deve chamar setData com os dados filtrados de acordo com as opções', async () => {
        const user = userEvent.setup();
        render(<Filtro {...scenarios[3]} />);

        const botaoFiltrarLista = await screen.findByRole('button', {
          name: /filtrar lista nominal/i
        });

        await user.click(botaoFiltrarLista);

        const parametroEsperado = [{
          paciente_nome: 'Carla da Silva',
          cidadao_cpf_dt_nascimento: '305.305.305-30',
          id_status_usuario: 13,
          vencimento_da_coleta: '-',
          prazo_proxima_coleta: '31/08/2023',
          idade: 64,
          id_faixa_etaria: 8,
          acs_nome: 'Alessandra Santos',
          estabelecimento_cnes: '2872872',
          estabelecimento_nome: 'Unidade de Saude da Familia 1',
          equipe_ine: '0002277227',
          ine_master: '0002277227',
          equipe_nome: 'ESF 1',
          dt_registro_producao_mais_recente: '2023-10-22'
        }];

        expect(scenarios[3].setData).toHaveBeenCalledWith(parametroEsperado);
      });
    });
  });

  describe('Ao clicar na opção de limpar filtros', () => {
    it('deve chamar setModal com o valor false', async () => {
      const user = userEvent.setup();
      render(<Filtro {...scenarios[0]} />);

      const limparFiltros = await screen.findByText(/limpar filtros/i);

      await user.click(limparFiltros);

      expect(scenarios[0].setModal).toHaveBeenCalledWith(false);
    });

    describe('Quando não há ordenação aplicada', () => {
      it('deve chamar setData com dados iguais aos recebidos pelo componente', async () => {
        const user = userEvent.setup();
        render(<Filtro {...scenarios[0]} />);

        const limparFiltros = await screen.findByText(/limpar filtros/i);

        await user.click(limparFiltros);

        expect(scenarios[0].setData).toHaveBeenCalledWith(responses.citoSuccessAPS);
      });
    });

    describe('Quando há ordenação aplicada', () => {
      it('deve chamar setData com os dados recebidos pelo componente de acordo com a ordenação', async () => {
        const user = userEvent.setup();
        render(<Filtro {...scenarios[4]} />);

        const limparFiltros = await screen.findByText(/limpar filtros/i);

        await user.click(limparFiltros);

        const parametroEsperado = [
          {
            paciente_nome: 'Camila da Silva',
            cidadao_cpf_dt_nascimento: '106.106.106-10',
            id_status_usuario: 12,
            vencimento_da_coleta: '-',
            prazo_proxima_coleta: '31/08/2023',
            idade: 25,
            id_faixa_etaria: 8,
            acs_nome: 'Alessandra Santos',
            estabelecimento_cnes: '2872872',
            estabelecimento_nome: 'Unidade de Saude da Familia 1',
            equipe_ine: '0002277227',
            ine_master: '0002277227',
            equipe_nome: 'ESF 1',
            dt_registro_producao_mais_recente: '2023-10-22'
          },
          {
            paciente_nome: 'Maria da Silva',
            cidadao_cpf_dt_nascimento: '327.327.327-32',
            id_status_usuario: 12,
            vencimento_da_coleta: '11/05/2026',
            prazo_proxima_coleta: '31/08/2023',
            idade: 35,
            id_faixa_etaria: 6,
            acs_nome: 'Alessandra Santos',
            estabelecimento_cnes: '2872872',
            estabelecimento_nome: 'Unidade de Saude da Familia 1',
            equipe_ine: '0002277227',
            ine_master: '0002277227',
            equipe_nome: 'ESF 1',
            dt_registro_producao_mais_recente: '2023-10-22'
          },
          {
            paciente_nome: 'Carla da Silva',
            cidadao_cpf_dt_nascimento: '305.305.305-30',
            id_status_usuario: 13,
            vencimento_da_coleta: '-',
            prazo_proxima_coleta: '31/08/2023',
            idade: 64,
            id_faixa_etaria: 8,
            acs_nome: 'Alessandra Santos',
            estabelecimento_cnes: '2872872',
            estabelecimento_nome: 'Unidade de Saude da Familia 1',
            equipe_ine: '0002277227',
            ine_master: '0002277227',
            equipe_nome: 'ESF 1',
            dt_registro_producao_mais_recente: '2023-10-22'
          },
          {
            paciente_nome: 'Julia da Silva',
            cidadao_cpf_dt_nascimento: '100.100.100-10',
            id_status_usuario: 12,
            vencimento_da_coleta: '27/07/2025',
            prazo_proxima_coleta: 'Em dia',
            idade: 55,
            id_faixa_etaria: 8,
            acs_nome: 'Carmen Miranda',
            estabelecimento_cnes: '2752752',
            estabelecimento_nome: 'Unidade de Saude da Familia 2',
            equipe_ine: '0000369369',
            ine_master: '0000369369',
            equipe_nome: 'ESF 2',
            dt_registro_producao_mais_recente: '2023-10-22'
          },
        ];

        expect(scenarios[4].setData).toHaveBeenCalledWith(parametroEsperado);
      });
    });
  });
});
