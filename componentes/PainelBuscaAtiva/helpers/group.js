/**
 * Agrupa os valores de um array de objetos por chave
 * @param {*} filtros 
 * @returns 
 */
export function agruparChavesIguais(filtros) {
  const chavesUnicas = [...new Set(filtros.flatMap(objeto => Object.keys(objeto)))];
  return chavesUnicas.map(chave => {
    const objetosComChave = filtros.filter(objeto => objeto.hasOwnProperty(chave));
    const valores = objetosComChave.map(objeto => objeto[chave]);
    return { [chave]: valores };
  });
}