import {obterLimitesPaginas} from "./obterLimitesPaginas";
import {dividirTabela} from "./dividirTabela";
import {substituirQuebras} from "./substituirQuebras";
import {ordenarObjetoPorChave} from "./ordenarObjetoPorChave";

export const dividirDadosPorPaginaComMultiplasEquipes = (dados)=>{
    let equipe_atual = 0
    let deepCopy = JSON.parse(JSON.stringify(dados));
    const equipeParada = Object.keys(deepCopy).length
    let quebrasDePaginas = []
    while(equipe_atual<equipeParada){
      let limites = obterLimitesPaginas(deepCopy,equipe_atual)
      let { 
            ultimaEquipe,
            limiteDaPaginaUltrapassado,
            alturaPaginaUtilizada
          } = limites
      if(limiteDaPaginaUltrapassado){
        const tabelaDividida = dividirTabela(ultimaEquipe,alturaPaginaUtilizada,deepCopy)
        deepCopy = substituirQuebras(deepCopy,tabelaDividida.parteUm,tabelaDividida.parteDois,ultimaEquipe)
      }
      quebrasDePaginas.push(ultimaEquipe)
      equipe_atual = ultimaEquipe + 1
    }

    return {
      quebrasDePaginas : quebrasDePaginas,
      dadosDivididosPorEquipeComQuebraDePagina : ordenarObjetoPorChave(deepCopy)
    }
  }
