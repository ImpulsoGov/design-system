export const substituirQuebras = (dados,parteUm,parteDois,ultimaEquipe)=>{
    const ultimaEquipeNome = Object.keys(dados).sort()[ultimaEquipe]
    dados[ultimaEquipeNome] = parteUm
    dados[`${ultimaEquipeNome} continuação`] = parteDois
    return dados
  };
