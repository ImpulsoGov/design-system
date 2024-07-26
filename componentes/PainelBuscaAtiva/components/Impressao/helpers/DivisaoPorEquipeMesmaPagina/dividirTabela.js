export const dividirTabela = (ultimaEquipe,alturaPaginaUtilizada,dados)=>{
    const ALTURA_FOLHA_A4_PAISAGEM_PX = 793
    const ALTURA_LINHA_CITOPATOLOGICO = 27
    let excessoAlturaUtilizado = alturaPaginaUtilizada - ALTURA_FOLHA_A4_PAISAGEM_PX
    let excessoLinhas = Math.ceil(excessoAlturaUtilizado / ALTURA_LINHA_CITOPATOLOGICO) + 2
    const equipes = Object.keys(dados).sort()
    let pontoDivisao = dados[equipes[ultimaEquipe]].length - excessoLinhas
    let parteUm = dados[equipes[ultimaEquipe]].slice(0,pontoDivisao)
    let parteDois = dados[equipes[ultimaEquipe]].slice(pontoDivisao,dados[equipes[ultimaEquipe]].length)
    return {parteUm,parteDois}
  };