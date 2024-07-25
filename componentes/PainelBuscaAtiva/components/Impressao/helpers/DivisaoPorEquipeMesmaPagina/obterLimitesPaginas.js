export const obterLimitesPaginas = (dados,equipe_inicio)=>{
    const ALTURA_FOLHA_A4_PAISAGEM_PX = 960
    const ALTURA_CABECALHO_PAGINA = 82
    const ALTURA_TITULO_TABELA = 36
    const ALTURA_CABECALHO_TABELA = 34
    const ALTURA_LINHA_CITOPATOLOGICO = 38
    let limiteDaPaginaUltrapassado = false
    let alturaPaginaUtilizada = ALTURA_CABECALHO_PAGINA
    let ultimaEquipe
    const equipes = Object.keys(dados).sort()
    for(let equipe = equipe_inicio;equipe < equipes.length;equipe++){
      alturaPaginaUtilizada = alturaPaginaUtilizada + ALTURA_TITULO_TABELA + ALTURA_CABECALHO_TABELA + ALTURA_LINHA_CITOPATOLOGICO*dados[equipes[equipe]].length
      if(alturaPaginaUtilizada >= ALTURA_FOLHA_A4_PAISAGEM_PX){
        ultimaEquipe = equipe
        limiteDaPaginaUltrapassado = true
        break
      }
    }
    return {ultimaEquipe,limiteDaPaginaUltrapassado,alturaPaginaUtilizada}
  };
