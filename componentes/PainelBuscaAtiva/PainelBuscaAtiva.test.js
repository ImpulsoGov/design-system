// import { jest } from '@jest/globals';
// import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { PainelBuscaAtiva } from './index';

const status_usuario_descricao = [
  {
    id_status_usuario: 0,
    status_usuario_descricao: 'Sem dados',
    atualizacao_data: '2023-05-02T03:00:00.000Z'
  },
  {
    id_status_usuario: 1,
    status_usuario_descricao: 'Com consulta e aferição de PA em dia',
    atualizacao_data: '2023-05-02T03:00:00.000Z'
  },
  {
    id_status_usuario: 2,
    status_usuario_descricao: 'Sem consulta e aferição de PA em dia',
    atualizacao_data: '2023-05-02T03:00:00.000Z'
  },
  {
    id_status_usuario: 3,
    status_usuario_descricao: 'Sem consulta em dia',
    atualizacao_data: '2023-05-02T03:00:00.000Z'
  },
  {
    id_status_usuario: 4,
    status_usuario_descricao: 'Sem aferição de PA em dia',
    atualizacao_data: '2023-05-02T03:00:00.000Z'
  },
  {
    id_status_usuario: 5,
    status_usuario_descricao: 'Com consulta e solicitação de hemoglobina em dia',
    atualizacao_data: '2023-05-02T03:00:00.000Z'
  },
  {
    id_status_usuario: 6,
    status_usuario_descricao: 'Sem consulta e solicitação de hemoglobina em dia',
    atualizacao_data: '2023-05-02T03:00:00.000Z'
  },
  {
    id_status_usuario: 7,
    status_usuario_descricao: 'Sem solicitação de hemoglobina em dia',
    atualizacao_data: '2023-05-02T03:00:00.000Z'
  },
  {
    id_status_usuario: 8,
    status_usuario_descricao: 'Encerradas por DPP + 14 dias',
    atualizacao_data: '2023-05-02T03:00:00.000Z'
  },
  {
    id_status_usuario: 9,
    status_usuario_descricao: 'Encerradas por parto ou aborto',
    atualizacao_data: '2023-05-15T03:00:00.000Z'
  },
  {
    id_status_usuario: 10,
    status_usuario_descricao: 'Ativas',
    atualizacao_data: '2023-05-15T03:00:00.000Z'
  },
  {
    id_status_usuario: 11,
    status_usuario_descricao: 'Gestantes inválidas',
    atualizacao_data: '2023-05-15T03:00:00.000Z'
  },
  {
    id_status_usuario: 12,
    status_usuario_descricao: 'Coleta em dia',
    atualizacao_data: '2023-07-03T03:00:00.000Z'
  },
  {
    id_status_usuario: 13,
    status_usuario_descricao: 'Nunca realizou coleta',
    atualizacao_data: '2023-07-03T03:00:00.000Z'
  },
  {
    id_status_usuario: 14,
    status_usuario_descricao: 'Coleta com menos de 25 anos',
    atualizacao_data: '2023-07-03T03:00:00.000Z'
  },
  {
    id_status_usuario: 15,
    status_usuario_descricao: 'Vence no final do quadrimestre',
    atualizacao_data: '2023-07-03T03:00:00.000Z'
  },
  {
    id_status_usuario: 16,
    status_usuario_descricao: 'Coleta vencida',
    atualizacao_data: '2023-07-03T03:00:00.000Z'
  }
];

const faixa_etarias = [
  {
    "id_faixa_etaria": 0,
    "faixa_etaria_descricao": "Sem dados",
    "atualizacao_data": "2023-05-02T03:00:00.000Z"
  },
  {
    "id_faixa_etaria": 1,
    "faixa_etaria_descricao": "0 a 40 anos",
    "atualizacao_data": "2023-05-02T03:00:00.000Z"
  },
  {
    "id_faixa_etaria": 2,
    "faixa_etaria_descricao": "41 a 49 anos",
    "atualizacao_data": "2023-05-02T03:00:00.000Z"
  },
  {
    "id_faixa_etaria": 3,
    "faixa_etaria_descricao": "50 a 59 anos",
    "atualizacao_data": "2023-05-02T03:00:00.000Z"
  },
  {
    "id_faixa_etaria": 4,
    "faixa_etaria_descricao": "60 a 70 anos",
    "atualizacao_data": "2023-05-02T03:00:00.000Z"
  },
  {
    "id_faixa_etaria": 5,
    "faixa_etaria_descricao": "70 anos ou mais",
    "atualizacao_data": "2023-05-02T03:00:00.000Z"
  },
  {
    "id_faixa_etaria": 6,
    "faixa_etaria_descricao": "25 a 39 anos",
    "atualizacao_data": "2023-07-03T03:00:00.000Z"
  },
  {
    "id_faixa_etaria": 7,
    "faixa_etaria_descricao": "40 a 49 anos",
    "atualizacao_data": "2023-07-03T03:00:00.000Z"
  },
  {
    "id_faixa_etaria": 8,
    "faixa_etaria_descricao": "50 a 64 anos",
    "atualizacao_data": "2023-07-03T03:00:00.000Z"
  },
  {
    "id_faixa_etaria": 9,
    "faixa_etaria_descricao": "Até 2 meses",
    "atualizacao_data": "2023-11-17T03:00:00.000Z"
  },
  {
    "id_faixa_etaria": 10,
    "faixa_etaria_descricao": "Entre 2 e 12 meses",
    "atualizacao_data": "2023-11-17T03:00:00.000Z"
  },
  {
    "id_faixa_etaria": 11,
    "faixa_etaria_descricao": "Maior que 12 meses",
    "atualizacao_data": "2023-11-17T03:00:00.000Z"
  }
];

// const selecionar_status_usuario_descricao = ({ value }) => {
//   const alert = {
//     backgroundColor: '#F8BBAE',
//     border: '1px solid #EF565D',
//     borderRadius: '5px',
//     color: '#EF565D',
//     padding: '2px',
//     fontWeight: 550,
//     width: '90%',
//     display: 'flex',
//     gap: '5px',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: '3px 10px'
//   };
//   const atencao = {
//     backgroundColor: '#F4CCAB',
//     border: '1px solid #E98633',
//     borderRadius: '5px',
//     color: '#E98633',
//     padding: '2px',
//     fontWeight: 550,
//     width: 'fit-content',
//     display: 'flex',
//     gap: '5px',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: '3px 10px'
//   };
//   const styleStatus = {
//     13: alert,
//     14: alert,
//     15: atencao,
//     16: alert
//   };
//   const alertSymbolStyle = {
//     border: '2px solid #EF565D',
//     borderRadius: '100%',
//     width: '18px',
//     height: '18px',
//     fontSize: '8px',
//     fontWeight: '600',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center'
//   };
//   const atencaoSymbolStyle = {
//     border: '2px solid #E98633',
//     borderRadius: '100%',
//     width: '18px',
//     height: '18px',
//     fontSize: '8px',
//     fontWeight: '600',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center'
//   };

//   const descricao = status_usuario_descricao.find(item => item?.id_status_usuario == value)?.status_usuario_descricao;
//   return <div style={ styleStatus[value] }>
//     { [13, 14, 16].includes(value) && <span style={ alertSymbolStyle }>✖</span> }
//     { [15].includes(value) && <span style={ atencaoSymbolStyle }>!</span> }
//     <span>{ descricao }</span>
//   </div>;
// };

// const prazoStyle = ({ value }) => {
//   const atencao = {
//     backgroundColor: '#F4CCAB',
//     border: '1px solid #E98633',
//     borderRadius: '5px',
//     color: '#E98633',
//     padding: '2px',
//     fontWeight: 550,
//     width: 'fit-content',
//     display: 'flex',
//     gap: '5px',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: '3px 10px'
//   };
//   const atencaoSymbolStyle = {
//     border: '2px solid #E98633',
//     borderRadius: '100%',
//     width: '18px',
//     height: '18px',
//     fontSize: '8px',
//     fontWeight: '600',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center'
//   };

//   return <div style={ value != 'Em dia' ? atencao : {} }>{ value != 'Em dia' && <span style={ atencaoSymbolStyle }>!</span> } { value }</div>;

// };

// const colunas = [
//   {
//     align: 'left',
//     field: 'paciente_nome',
//     headerAlign: 'center',
//     headerName: 'NOME',
//     width: 320
//   },
//   {
//     align: 'center',
//     field: 'cidadao_cpf_dt_nascimento',
//     headerAlign: 'center',
//     headerName: 'CPF / DATA DE NASCIMENTO',
//     width: 140
//   },
//   {
//     align: 'center',
//     field: 'id_status_usuario',
//     headerAlign: 'center',
//     headerName: 'STATUS DA COLETA',
//     renderCell: selecionar_status_usuario_descricao,
//     width: 300
//   },
//   {
//     align: 'center',
//     field: 'vencimento_da_coleta',
//     headerAlign: 'center',
//     headerName: 'VENCIMENTO DA COLETA',
//     width: 100
//   },
//   {
//     align: 'center',
//     field: 'prazo_proxima_coleta',
//     headerAlign: 'center',
//     headerName: 'PRAZO PARA PRÓXIMA COLETA',
//     renderCell: prazoStyle,
//     width: 130
//   },
//   {
//     align: 'center',
//     field: 'idade',
//     headerAlign: 'center',
//     headerName: 'IDADE',
//     width: 80
//   },
//   {
//     align: 'center',
//     field: 'acs_nome',
//     headerAlign: 'center',
//     headerName: 'ACS',
//     width: 250
//   }
// ];

const data = [
  {
    paciente_nome: 'ABIGAIR DE SOUZA BADA',
    cidadao_cpf_dt_nascimento: '106.106.638-01',
    id_status_usuario: 15,
    vencimento_da_coleta: '-',
    prazo_proxima_coleta: '31/08/2023',
    idade: 5,
    id_faixa_etaria: 8,
    acs_nome: 'Alessandra de Fatima Pereira',
    estabelecimento_cnes: '2879085',
    estabelecimento_nome: 'Unidade de Saude da Familia Taboao',
    equipe_ine: '0002277573',
    ine_master: '0002277573',
    equipe_nome: 'ESF GOIANA',
    dt_registro_producao_mais_recente: '2023-10-22'
  },
  {
    paciente_nome: 'ACSA DOS SANTOS LOPES',
    cidadao_cpf_dt_nascimento: '327.043.598-30',
    id_status_usuario: 12,
    vencimento_da_coleta: '11/05/2026',
    prazo_proxima_coleta: '31/08/2023',
    idade: 35,
    id_faixa_etaria: 6,
    acs_nome: 'Raquel Nascimento da Silva',
    estabelecimento_cnes: '2752506',
    estabelecimento_nome: 'Posto de Saude do Goiana',
    equipe_ine: '0001540971',
    ine_master: '0001540971',
    equipe_nome: 'ESF GOIANA',
    dt_registro_producao_mais_recente: '2023-10-22'
  },
  {
    paciente_nome: 'ADAGUIMAR DE CASTRO SANTOS',
    cidadao_cpf_dt_nascimento: '100.941.638-39',
    id_status_usuario: 12,
    vencimento_da_coleta: '27/07/2025',
    prazo_proxima_coleta: 'Em dia',
    idade: 55,
    id_faixa_etaria: 8,
    acs_nome: 'Estela Ribeiro',
    estabelecimento_cnes: '2752522',
    estabelecimento_nome: 'Posto de Saude de Mailasqui Sao Roque',
    equipe_ine: '0000369799',
    ine_master: '0000369799',
    equipe_nome: 'ESF MAILASQUI 1.2',
    dt_registro_producao_mais_recente: '2023-10-22'

  },
  {
    paciente_nome: 'ADA IMACULADA PADILHA DO SANOS',
    cidadao_cpf_dt_nascimento: '305.569.958-05',
    id_status_usuario: 13,
    vencimento_da_coleta: '-',
    prazo_proxima_coleta: '31/08/2023',
    idade: 64,
    id_faixa_etaria: 8,
    acs_nome: 'Rafaela Aparecida de Moraes',
    estabelecimento_cnes: '2793377',
    estabelecimento_nome: 'Unidade de Saude da Familia Carmo Sao Roque',
    equipe_ine: '0000369802',
    ine_master: '0000369802',
    equipe_nome: 'ESF CARMO',
    dt_registro_producao_mais_recente: '2023-10-22'

  },
  {
    paciente_nome: 'ADEILDES DE JESUS SOARES DOS SANTOS',
    cidadao_cpf_dt_nascimento: '391.395.288-80',
    id_status_usuario: 13,
    vencimento_da_coleta: '-',
    prazo_proxima_coleta: '31/08/2023',
    idade: 34,
    id_faixa_etaria: 6,
    acs_nome: 'Marco Alberto Costa Santi',
    estabelecimento_cnes: '2752506',
    estabelecimento_nome: 'Posto de Saude do Goiana',
    equipe_ine: '0001540971',
    ine_master: '0001540971',
    equipe_nome: 'ESF GOIANA',
    dt_registro_producao_mais_recente: '2023-10-22'

  },
  {
    paciente_nome: 'ADEITA SOARES DE OLIVEIRA',
    cidadao_cpf_dt_nascimento: '164.405.328-47',
    id_status_usuario: 12,
    vencimento_da_coleta: '15/02/2026',
    prazo_proxima_coleta: 'Em dia',
    idade: 51,
    id_faixa_etaria: 8,
    acs_nome: 'Lucineia Pereira de Souza',
    estabelecimento_cnes: '2793377',
    estabelecimento_nome: 'Unidade de Saude da Familia Carmo Sao Roque',
    equipe_ine: '0000369802',
    ine_master: '0000369802',
    equipe_nome: 'ESF CARMO',
    dt_registro_producao_mais_recente: '2023-10-22'

  },
  {
    paciente_nome: 'ADELAIDE GOMES FERREIRA',
    cidadao_cpf_dt_nascimento: '167.328.578-35',
    id_status_usuario: 12,
    vencimento_da_coleta: '03/07/2026',
    prazo_proxima_coleta: 'Em dia',
    idade: 49,
    id_faixa_etaria: 7,
    acs_nome: null,
    estabelecimento_cnes: '2752506',
    estabelecimento_nome: 'Posto de Saude do Goiana',
    equipe_ine: '0001540971',
    ine_master: '0001540971',
    equipe_nome: 'ESF GOIANA',
    dt_registro_producao_mais_recente: '2023-10-22'

  }
];

// const nomesDeProfissionais = [...new Set(data.map(item => item.acs_nome))];
// const status = [...new Set(data.map(item => item.id_status_usuario.toString()))];
// const faixasEtarias = [...new Set(data.map(item => item.id_faixa_etaria.toString()))];
// const nomesDeEquipes = [...new Set(data.map(item => item.equipe_nome))];
// const INES = [...new Set(data.map(item => item.equipe_ine))];

const nomesDeProfissionais = [
  'Alessandra de Fatima Pereira',
  'Raquel Nascimento da Silva',
  'Estela Ribeiro',
  'Rafaela Aparecida de Moraes',
  'Marco Alberto Costa Santi',
  'Lucineia Pereira de Souza',
  null
];
const status = ['15', '12', '13'];
const faixasEtarias = ['8', '6', '7'];
const nomesDeEquipes = ['ESF GOIANA', 'ESF MAILASQUI 1.2', 'ESF CARMO'];
const INES = ['0002277573', '0001540971', '0000369799', '0000369802'];

const dadosFiltros = [
  {
    data: nomesDeProfissionais,
    filtro: 'acs_nome',
    rotulo: 'Filtrar por nome do Profissional Responsável'
  },
  {
    data: status,
    labels: [...new Set(status_usuario_descricao.map(item => item.status_usuario_descricao))],
    filtro: 'id_status_usuario',
    rotulo: 'Filtrar por status'
  },
  {
    data: faixasEtarias,
    labels: [...new Set(faixa_etarias.map(item => item.faixa_etaria_descricao))],
    filtro: 'id_faixa_etaria',
    rotulo: 'Filtrar por faixa etária'
  },
  {
    data: nomesDeEquipes,
    filtro: 'equipe_nome',
    rotulo: 'Filtrar por nome da equipe'
  },
  {
    rotulo: 'Filtrar por INE da equipe',
    data: INES,
    filtro: 'equipe_ine'
  },
];

let valores = {}
console.log(dadosFiltros);
dadosFiltros.forEach((item)=>item.data.forEach((valor)=>valores[valor]=false))
console.log(valores);
const A = [2,3]
console.log(A['a']);

// const dateFiltros = [
//   'vencimento_da_coleta',
// ];

// const intFiltros = [
//   'idade'
// ];

// const rotulosfiltros = [
//   'NOMES DE A-Z',
//   'NOME DO ACS DE A-Z',
//   'VENCIMENTO DA COLETA MAIS ANTIGO',
//   'IDADE',
//   'PRAZO PARA PRÓXIMA COLETA',
// ];

// const IDFiltros = {
//   'NOMES DE A-Z': 'paciente_nome',
//   'NOME DO ACS DE A-Z': 'acs_nome',
//   'IDADE': 'idade',
//   'VENCIMENTO DA COLETA MAIS ANTIGO': 'vencimento_da_coleta',
//   'PRAZO PARA PRÓXIMA COLETA': 'prazo_proxima_coleta',
// };

// const IDFiltrosOrdenacao = {
//   paciente_nome: 'asc',
//   acs_nome: 'asc',
//   idade: 'asc',
//   vencimento_da_coleta: 'desc',
//   prazo_proxima_coleta: 'asc',
// };

// const props = {
//   painel: 'cito',
//   dadosFiltros,
//   tabela: {
//     colunas,
//     data
//   },
//   datefiltros: dateFiltros,
//   IntFiltros: intFiltros,
//   IDFiltros,
//   rotulosfiltros: rotulosfiltros,
//   IDFiltrosOrdenacao,
//   trackObject: {
//     track: jest.fn((evento, propriedades) => console.log(evento, propriedades))
//   },
//   atualizacao: new Date(data.reduce((maisRecente, objeto) => {
//     const dataAtual = new Date(objeto.dt_registro_producao_mais_recente);
//     const dataMaisRecenteAnterior = new Date(maisRecente);
//     return dataAtual > dataMaisRecenteAnterior ? objeto.dt_registro_producao_mais_recente : maisRecente;
//   }, '2000-01-01')).toLocaleString('pt-BR', {
//     timeZone: 'UTC',
//     year: 'numeric',
//     month: '2-digit',
//     day: '2-digit'
//   }),
//   data,
//   // Não é interessante depender de dados variáveis, como estados, nos testes pois isso pode
//   // causar inconsistências. Devemos testar se as funções estão sndo chamadas com os
//   // valores corretos e se os dados estão sendo exibidos
//   // ref: https://stackoverflow.com/questions/74882169/testing-a-component-where-state-variables-are-passed-down-from-parent-in-react-t
//   setData: jest.fn(),
// };

// function setup(component) {
//   return {
//     user: userEvent.setup(),
//     ...render(component),
//   };
// }

// // COMPONENTES DE FILTRO PARA TESTAR
// // - <Filtro />
// // - <FiltroBody />
// // - <FiltroCard />: engloba FilterData e LimparFiltros

// // CASOS DE TESTE DOS FILTROS
// // 1. Ao clicar no botão de filtrar lista nominal, o modal de filtros é exibido - OK
// // 2. Ao abrir o filtro de profissional responsável, os profissionais são exibidos - +/-
// // 3. Ao abrir o filtro de status, os status são exibidos
// // 4. Ao abrir o filtro de faixa etária, as faixas etárias são exibidas
// // 5. Ao abrir o filtro de equipe, as equipes são exibidas
// // 6. Ao abrir o filtro de INE, os INEs são exibidos
// // 7. Ao clicar no botão X, o modal de filtros é fechado
// // 8. Ao clicar no botão de filtrar dentro do modal de filtros, ele é fechado e os dados são filtrados
// // 9. Ao clicar no botão de limpar dentro do modal de filtros, os filtros são removidos e o modal é fechado
// // 10. Ao aplicar múltiplos filtro, os dados são filtrados corretamente
// // 11. Ao remover um dos múltiplos filtros, os dados são filtrados corretamente
// // 12. O botão de filtrar deve ser exibido dentro do modal de filtros

// // COBERTURA DE BUGS JÁ CORRIGIDOS
// // 1. Ao filtrar os dados por uma das opcções de filtro que possui algum de seus valores nulos, o modal é fechado e o filtro é aplicado corretamente
// // 2. As opções de filtro com valor nulo são exibidas com um checkbox vazio e não é possível selecioná-las

// describe('Ao renderizar o painel de busca ativa', () => {
//   it('O botão que abre o modal de filtros deve estar no documento', async () => {
//     setup(<PainelBuscaAtiva { ...props } />);
//     const botaoFiltrarLista = await screen.findByRole('button', {
//       name: /filtrar lista nominal/i
//     });
//     expect(botaoFiltrarLista).toBeInTheDocument();
//   });

//   it('O modal de filtros é exibido ao clicar no botão de filtrar lista nominal', async () => {
//     const { user } = setup(<PainelBuscaAtiva { ...props } />);
//     const botaoFiltrarLista = await screen.findByRole('button', {
//       name: /filtrar lista nominal/i
//     });

//     await user.click(botaoFiltrarLista);

//     const filtroDeEquipe = await screen.findByText(/Filtrar por nome da equipe/i);
//     const filtroDeINE = await screen.findByText(/Filtrar por INE da equipe/i);
//     const filtroDeFaixaEtaria = await screen.findByText(/Filtrar por faixa etária/i);
//     const filtroDeStatus = await screen.findByText(/Filtrar por status/i);
//     const filtroDeProfissional = await screen.findByText(/Filtrar por nome do Profissional Responsável/i);

//     expect(filtroDeProfissional).toBeInTheDocument();
//     expect(filtroDeEquipe).toBeInTheDocument();
//     expect(filtroDeINE).toBeInTheDocument();
//     expect(filtroDeFaixaEtaria).toBeInTheDocument();
//     expect(filtroDeStatus).toBeInTheDocument();
//     // expect(botaoFiltrarLista).not.toBeInTheDocument();
//   });

//   it('Os profissionais são exibidos ao abrir o filtro de profissional responsável', async () => {
//     const { user } = setup(<PainelBuscaAtiva { ...props } />);
//     const botaoFiltrarLista = await screen.findByRole('button', {
//       name: /filtrar lista nominal/i
//     });

//     await user.click(botaoFiltrarLista);

//     const botoesExibirFiltros = await screen.findAllByRole('button', { name: '+' });

//     await user.click(botoesExibirFiltros[0]);

//     const filtros = await screen.findAllByRole('checkbox');

//     expect(filtros).toHaveLength(nomesDeProfissionais.length);
//     expect(await screen.findByText(nomesDeProfissionais[0])).toBeInTheDocument();
//     expect(await screen.findByText(nomesDeProfissionais[1])).toBeInTheDocument();
//     expect(await screen.findByText(nomesDeProfissionais[2])).toBeInTheDocument();
//     expect(await screen.findByText(nomesDeProfissionais[3])).toBeInTheDocument();
//     expect(await screen.findByText(nomesDeProfissionais[4])).toBeInTheDocument();
//     expect(await screen.findByText(nomesDeProfissionais[5])).toBeInTheDocument();
//     expect(await screen.findByText(nomesDeProfissionais[6])).not.toBeInTheDocument();
//   });

//   it('As descrições dos status são exibidas ao abrir o filtro de status', async () => {
//     const { user } = setup(<PainelBuscaAtiva { ...props } />);
//     const botaoFiltrarLista = await screen.findByRole('button', {
//       name: /filtrar lista nominal/i
//     });

//     await user.click(botaoFiltrarLista);

//     const botoesExibirFiltros = await screen.findAllByRole('button', { name: '+' });

//     await user.click(botoesExibirFiltros[1]);

//     const filtros = await screen.findAllByRole('checkbox');

//     expect(filtros).toHaveLength(status.length);
//     expect(filtros[0]).toHaveAttribute('id', '12');
//     expect(filtros[1]).toHaveAttribute('id', '13');
//     expect(filtros[2]).toHaveAttribute('id', '15');
//     expect(filtros[0].nextSibling).toHaveTextContent('Coleta em dia');

//     // expect(await screen.findByText(/Coleta em dia/i)).toBeInTheDocument();
//     // expect(await screen.findByText(/Nunca realizou coleta/i)).toBeInTheDocument();
//     // expect(await screen.findByText(/Vence no final do quadrimestre/i)).toBeInTheDocument();
//   });
// });
