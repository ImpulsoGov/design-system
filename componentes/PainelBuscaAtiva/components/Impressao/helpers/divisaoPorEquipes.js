export const divisaoPorEquipes = data => data.reduce((acumulador, objetoAtual) => {
    const { equipe_nome } = objetoAtual;
    if (!acumulador[equipe_nome]) {
      acumulador[equipe_nome] = [];
    }
    acumulador[equipe_nome].push(objetoAtual);
    return acumulador;
  }, {});
