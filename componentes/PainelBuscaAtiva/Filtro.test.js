// Não é interessante depender de dados variáveis, como estados, nos testes pois isso pode
// causar inconsistências. Devemos testar se as funções estão sendo chamadas com os
// valores corretos e se os dados estão sendo exibidos
// ref: https://stackoverflow.com/questions/74882169/testing-a-component-where-state-variables-are-passed-down-from-parent-in-react-t

// const nomesDeProfissionais = [
//   'Alessandra Santos',
//   'Raquel Nascimento da Silva',
//   'Estela Ribeiro',
//   'Rafaela Aparecida de Moraes',
//   'Marco Alberto Costa Santi',
//   'Lucineia Pereira de Souza',
//   null
// ];

// const labelData = {
//     data: nomesDeProfissionais,
//     filtro: 'acs_nome',
//     rotulo: 'Filtrar por nome do Profissional Responsável'
// }

// const propDataDoFiltroBody = {
//   data: nomesDeProfissionais,
//   filtro: 'acs_nome',
//   rotulo: 'Filtrar por nome do Profissional Responsável'
// }

// const value = {
//   '6': false,
//   '7': false,
//   '8': false,
//   '12': false,
//   '13': false,
//   '15': false,
//   'Alessandra Santos': false,
//   'Raquel Nascimento da Silva': false,
//   'Estela Ribeiro': false,
//   'Rafaela Aparecida de Moraes': false,
//   'Marco Alberto Costa Santi': false,
//   'Lucineia Pereira de Souza': false,
//   null: false,
//   'ESF GOIANA': false,
//   'ESF MAILASQUI 1.2': false,
//   'ESF CARMO': false,
//   '0002277573': false,
//   '0001540971': false,
//   '0000369799': false,
//   '0000369802': false
// }