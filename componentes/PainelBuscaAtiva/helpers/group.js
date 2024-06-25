/**
 * Agrupa os valores de um array de objetos por chaves iguais
 * @param {*} filtros array de objetos com os filtros selecionados
 * @returns objeto sem chaves repetidas e com valores agrupados
 */
export function agruparChavesIguais(filtros) {
  const chavesUnicas = [...new Set(filtros.flatMap(objeto => Object.keys(objeto)))];
  return chavesUnicas.map(chave => {
    const objetosComChave = filtros.filter(objeto => objeto.hasOwnProperty(chave));
    const valores = objetosComChave.map(objeto => objeto[chave]);
    return { [chave]: valores };
  });
}