import { render, screen } from '@testing-library/react';
import { Ordenar } from './Ordenar';

const COMPONENT = 'Ordenar';
const scenarios = [
  {
    painel: 'citopatológico',
    aba: 1,
    sub_aba: 0,
    ordenacao: '1',
    setOrdenar: jest.fn(),
    data: [],
    setData: jest.fn(),
    tabela: [
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
    ],
    datefiltros: ['vencimento_da_coleta'],
    IntFiltros: ['idade'],
    setModal: jest.fn(),
    setOrdenacaoAplicada: jest.fn(),
    IDFiltros: {
      "NOMES DE A-Z": "paciente_nome",
      "IDADE": "idade",
      "VENCIMENTO DA COLETA MAIS ANTIGO": "vencimento_da_coleta",
    },
    rotulosfiltros: [
      "NOMES DE A-Z",
      "VENCIMENTO DA COLETA MAIS ANTIGO",
      "IDADE",
    ],
    IDFiltrosOrdenacao: {
      "paciente_nome": "asc",
      "idade": "asc",
      "vencimento_da_coleta": "desc",
    },
    trackObject: { track: jest.fn() },
    filtros: {
      'Alessandra Santos': false,
    },
    setChavesFiltros: jest.fn(),
    dadosFiltros: [
      {
        data: ['Alessandra Santos'],
        filtro: 'acs_nome',
        rotulo: 'Filtrar por nome do Profissional Responsável'
      },
    ],
  }
];

describe(`Componente: ${COMPONENT}`, () => {
  it('deve renderizar corretamente', () => {
    render(
      <Ordenar { ...scenarios[0] } />
    );
    const component = screen.getByTestId(COMPONENT);
    expect(component).toMatchSnapshot();
  });
});