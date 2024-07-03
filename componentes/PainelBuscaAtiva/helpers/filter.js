/**
 * Filtra os dados de acordo com as escolhas de filtro
 * @param {*} data array de objetos com os dados a serem filtrados
 * @param {*} filterChoices filtros selecionados para aplicar
 * @returns array de objetos com os dados filtrados
 */
export function filterByChoices(data, filterChoices) {
  return data.filter(item => {
    return filterChoices.every(filter => {
      if (!item[Object.keys(filter)[0]]) return false;
      return filter["consultas_pre_natal_validas"] ? true : filter[Object.keys(filter)[0]].includes(item[Object.keys(filter)[0]].toString());
    });
  }).filter(item => {
    const filtroConsultas = filterChoices.filter(item => item.hasOwnProperty('consultas_pre_natal_validas'))?.length > 0 ? filterChoices.filter(item => item.hasOwnProperty('consultas_pre_natal_validas'))[0] : [];
    if (filtroConsultas["consultas_pre_natal_validas"]?.length > 0) {
      if (filtroConsultas["consultas_pre_natal_validas"] == 'Maior ou igual a 6' && Number(item["consultas_pre_natal_validas"]) >= 6) return true;
      if (filtroConsultas["consultas_pre_natal_validas"] == 'Menor que 6' && Number(item["consultas_pre_natal_validas"]) < 6) return true;
      return false;
    }
    return true;
  });
}

/**
 * @param {*} filtros Array de filtros no formato {propriedade do filtro: valor do filtro}.
 * @param {*} propriedade Propriedade do filtro a ser buscado no array de filtros.
 * @returns Array com as opções de filtro encontradas a partir da propriedade. Caso filtros não existam, retorna um array vazio.
 */
export function buscarFiltroPorPropriedade(filtros, propriedade) {
  return filtros.filter(item => item.hasOwnProperty(propriedade));
}
