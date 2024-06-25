/**
 * Converte uma string no formato aaaa-mm-dd para um objeto Date
 * @param {*} str string no formato aaaa-mm-dd
 * @returns um objeto Date
*/
//Essa função considera que str esta no formato aaaa-mm-dd
export function dataFormatoTraco(str) {
  const parts = str.split('-');
  const ano = parseInt(parts[0]);
  const mes = parseInt(parts[1]) - 1;
  const dia = parseInt(parts[2]);
  const date = new Date(ano, mes, dia);
  return date;
};

/**
 * Converte uma string no formato dd/mm/aaaa para um objeto Date
 * @param {*} str string no formato dd/mm/aaaa
 * @returns um objeto Date
*/
//Essa função considera que str esta no formato dd/mm/aaaa
export function dataFormatoBarra(str) {
  const parts = str.split('/');
  const ano = parseInt(parts[2]);
  const mes = parseInt(parts[1]) - 1;
  const dia = parseInt(parts[0]);
  const date = new Date(ano, mes, dia);
  return date;
};

/**
 * Gera um objeto Date a partir de uma string
 * @param {*} str string
 * @returns null se str for inválida, um objeto Date caso contrário
 */
export function stringToDate(str = '') {
  if (!str) return null;
  if (str == '-') return null;
  if (str.includes('/')) return dataFormatoBarra(str);
  if (str.includes('-')) return dataFormatoTraco(str);
}

// TODO melhorar descrição das funções
/**
 * Gera um objeto com as propriedades de filtros selecionados e seus valores a partir de um objeto com estados de seleção das opções de filtros
 * @param {*} value objeto com os estados de seleção das opções de filtros
 * @param {*} setChavesFiltros função de atualização do estado de chaves de filtros
 * @param {*} dadosFiltros array de objetos com os dados dos filtros
 * @returns array de objetos com nome das propriedades dos filtros selecionados e seus valores
 */
export function valuesToChavesFiltros(value, setChavesFiltros, dadosFiltros) {
  const chaves = [];
  const selectedCheckboxes = Object.keys(value).map(key => {
    if (value[key]) return key;
  });

  selectedCheckboxes.forEach(checkbox => {
    let filtro;
    dadosFiltros.forEach(dadoFiltro => {
      if (dadoFiltro.data.includes(checkbox)) filtro = dadoFiltro.filtro;
    });
    if (filtro) chaves.push({ [filtro]: checkbox });
  });

  setChavesFiltros(chaves);

  return chaves;
}

/**
 * Converte um array de chaves de filtros num array de valores de filtros
 * @param {*} chavesFiltros array de objetos com nome das propriedades dos filtros selecionados e seus valores
 * @param {*} value objeto com os estados de seleção das opções de filtros
 * @param {*} setValue função de atualização do estado de seleção das opções de filtros
 */
export function chavesFiltrosToCheckBoxesValues(chavesFiltros, value, setValue) {
  const value_temp = value;
  Object.keys(value_temp).forEach(checkbox => {
    value_temp[checkbox] = false;
  });
  chavesFiltros.forEach(valor => {
    value_temp[Object.values(valor)[0]] = true;
  });
  setValue(() => value_temp);
}
