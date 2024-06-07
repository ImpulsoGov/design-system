import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ToolBar } from './index';

const COMPONENT = 'ToolBar';
const scenario = [
  {
    showFiltros: jest.fn(),
    showOrdenar: jest.fn(),
    chavesFiltros: [{ 'nome_equipe': true }],
    updateData: jest.fn(),
    tabela: [
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
    ],
    ordenacaoAplicada: false,
  },
  {
    showFiltros: jest.fn(),
    showOrdenar: jest.fn(),
    chavesFiltros: [{ 'nome_equipe': true }],
    updateData: jest.fn(),
    tabela: [
      {
        cidadao_nome: "Julia da Silva",
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
        cidadao_nome: "Carla da Silva",
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
    ],
    ordenacaoAplicada: false,
  },
  {
    showFiltros: jest.fn(),
    showOrdenar: jest.fn(),
    chavesFiltros: [{ 'nome_equipe': true }],
    updateData: jest.fn(),
    tabela: [
      {
        cidadao_nome: "Carla da Silva",
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
    ],
    ordenacaoAplicada: true,
  },
  {
    showFiltros: jest.fn(),
    showOrdenar: jest.fn(),
    chavesFiltros: [],
    updateData: jest.fn(),
    tabela: [
      {
        cidadao_nome: "Carla da Silva",
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
    ],
    ordenacaoAplicada: true,
  },
];

describe(`Componente: ${COMPONENT}`, () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('deve renderizar corretamente', () => {
    render(<ToolBar { ...scenario[0] } />);
    const component = screen.getByTestId(COMPONENT);
    expect(component).toMatchSnapshot();
  });

  // Testes para o primeiro cenário..
  it('deve filtrar corretamente quando o valor do input paciente nome é alterado', async () => {
    const user = userEvent.setup();
    render(<ToolBar { ...scenario[0] } />);

    const input = screen.getByPlaceholderText('PESQUISE UM NOME');
    await act(async () => await user.type(input, 'Maria'));

    expect(scenario[0].updateData).toHaveBeenLastCalledWith(
      [
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
        }
      ]
    );
  });

  // Testes para o segundo cenário...
  it('deve filtrar corretamente quando o valor do input cidadao nome é alterado', async () => {
    const user = userEvent.setup();
    render(<ToolBar { ...scenario[1] } />);

    const input = screen.getByPlaceholderText('PESQUISE UM NOME');
    await act(async () => await user.type(input, 'Julia'));

    expect(scenario[1].updateData).toHaveBeenLastCalledWith([
      {
        cidadao_nome: "Julia da Silva",
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
      }
    ]
    );
  });

  //teste para ordenação aplicada sendo true
  it('deve renderizar corretamente quando ordenacaoAplicada é true', () => {
    render(<ToolBar { ...scenario[2] } />);

    const ordenarButton = screen.getByRole('button', { name: /ORDENAR LISTA/ });
    const ordenarButtonIcon = ordenarButton.querySelector('img');
    expect(ordenarButtonIcon).toHaveAttribute('src', 'https://media.graphassets.com/ZWmQGa3TEGVceKxm4nlw');
  });

  //teste para chaveFiltros sendo vazio
  it('deve renderizar corretamente quando chavesFiltros é um array vazio', () => {
    render(<ToolBar { ...scenario[3] } />);

    const filtrarButton = screen.getByRole('button', { name: /FILTRAR A LISTA/ });
    const filtrarButtonIcon = filtrarButton.querySelector('img');
    expect(filtrarButtonIcon).toHaveAttribute('src', 'https://media.graphassets.com/1WHJsCigTXyJbq7Tw47m');
  });

});
