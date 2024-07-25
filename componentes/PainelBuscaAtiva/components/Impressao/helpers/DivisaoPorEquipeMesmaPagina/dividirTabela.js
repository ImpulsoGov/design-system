export const dividirTabela = (ultimaEquipe,alturaPaginaUtilizada,dados)=>{
    const ALTURA_FOLHA_A4_PAISAGEM_PX = 960
    const ALTURA_LINHA_CITOPATOLOGICO = 38
    let excessoAlturaUtilizado = alturaPaginaUtilizada - ALTURA_FOLHA_A4_PAISAGEM_PX
    let excessoLinhas = Math.floor(excessoAlturaUtilizado / ALTURA_LINHA_CITOPATOLOGICO)
    const equipes = Object.keys(dados).sort()
    let pontoDivisao = dados[equipes[ultimaEquipe]].length - excessoLinhas
    let parteUm = dados[equipes[ultimaEquipe]].slice(0,pontoDivisao)
    let parteDois = dados[equipes[ultimaEquipe]].slice(pontoDivisao,dados[equipes[ultimaEquipe]].length)
    return {parteUm,parteDois}
  };
