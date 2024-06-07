import { stringToDate } from "./convert";

/**
 * Ordena dados de acordo com a opção escolhida
 * @param {*} data array de objetos a ser ordenado
 * @param {*} filtro propriedade de ordenação
 * @param {*} IDFiltrosOrdenacao objeto com as opções de ordenação por propriedade
 * @param {*} datefiltros array de propriedades dos objetos de data que são datas
 * @param {*} IntFiltros array de propriedades dos objetos de data que são inteiros
 * @returns array ordenado
 */
export function sortByChoice(data, filtro, IDFiltrosOrdenacao, datefiltros, IntFiltros) {
  if (datefiltros.includes(filtro)) {
    return sortByDate(data, filtro, IDFiltrosOrdenacao);
  }

  if (IntFiltros?.includes(filtro)) {
    return sortInt(data, filtro, IDFiltrosOrdenacao);
  }

  return sortByString(data, filtro);
}

/**
 * Ordena dados a partir de propriedade com valores numéricos inteiros
 * @param {*} data array de objetos
 * @param {*} filtro propriedade de ordenação
 * @param {*} IDFiltrosOrdenacao objeto com as opções de ordenação por propriedade
 * @returns array ordenado
 */
export function sortInt(data, filtro, IDFiltrosOrdenacao) {
  return [...data].sort((a, b) => IDFiltrosOrdenacao[filtro] == "desc"
    ? Number(b[filtro]) - Number(a[filtro])
    : Number(a[filtro]) - Number(b[filtro])
  );
}

/**
 * Ordena dados a partir de propriedades com valores de strings
 * @param {*} data array de objetos
 * @param {*} filtro propriedade de ordenação
 * @returns array ordenado
 */
export function sortByString(data, filtro) {
  return [...data].sort((a, b) => a[filtro]?.toString().localeCompare(b[filtro]?.toString()));
}

/**
 * Ordena dados a partir de propriedades com valores de data
 * @param {*} data array de objetos
 * @param {*} filtro propriedade de ordenação
 * @param {*} IDFiltrosOrdenacao objeto com as opções de ordenação por propriedade
 * @returns array ordenado
 */
export function sortByDate(data, filtro, IDFiltrosOrdenacao) {
  return [...data].sort((a, b) => {
    const valueA = stringToDate(a[filtro]);
    const valueB = stringToDate(b[filtro]);

    if (valueA === null && valueB === null) {
      return 0;
    } else if (valueA === null) {
      return 1;
    } else if (valueB === null) {
      return -1;
    }
    if (IDFiltrosOrdenacao[filtro] == "asc") {
      return valueA - valueB;
    }
    if (IDFiltrosOrdenacao[filtro] == "desc") {
      return valueB - valueA;
    }
  });
}