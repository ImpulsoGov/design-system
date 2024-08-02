export const divisaoPorEquipes = (data,propAgrupamentoImpressao) => 
  data.reduce((acumulador, objetoAtual) => {
    const chaveAgrupamento = objetoAtual[propAgrupamentoImpressao];
    if (!acumulador[chaveAgrupamento]) {
      acumulador[chaveAgrupamento] = [];
    }
    acumulador[chaveAgrupamento].push(objetoAtual);
    return acumulador;
  }, {});
