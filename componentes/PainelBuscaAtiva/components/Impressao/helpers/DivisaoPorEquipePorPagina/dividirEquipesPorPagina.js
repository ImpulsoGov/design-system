import {completarMargens} from "./completarMargens";

export const dividirEquipes = (data)=>{
    let dados = JSON.parse(JSON.stringify(data));
    const equipes = Object.keys(dados).sort()
    const numeroDeLinhasMaximoPorPagina = 23
    const quebrasDePaginas = {}
    equipes.forEach(equipe => {
      const registrosPorEquipe = dados[equipe].length
      if(registrosPorEquipe>= numeroDeLinhasMaximoPorPagina){
        const segmentos = Math.floor(dados[equipe].length / numeroDeLinhasMaximoPorPagina)
        const ultimoSegmento = registrosPorEquipe - segmentos * numeroDeLinhasMaximoPorPagina
        const dadoEquipe = dados[equipe]
        dados[equipe] = dados[equipe].slice(0,numeroDeLinhasMaximoPorPagina)
        quebrasDePaginas[dados[equipe][0].equipe_nome] = completarMargens(dados[equipe])
        for(let i = 1;i < segmentos;i++){
          const inicio_segmento = (i * numeroDeLinhasMaximoPorPagina)
          const final_segmento = inicio_segmento + numeroDeLinhasMaximoPorPagina
          dados[`${equipe} continuação ${i}`] = dadoEquipe.slice(inicio_segmento,final_segmento)
          quebrasDePaginas[`${equipe} continuação ${i}`] = completarMargens(dados[`${equipe} continuação ${i}`])
        }
        if(ultimoSegmento > 0){ 
          dados[`${equipe} continuação ${segmentos}`] = dadoEquipe.slice(dadoEquipe.length - ultimoSegmento,dadoEquipe.length)
          quebrasDePaginas[`${equipe} continuação ${segmentos}`] = completarMargens(dados[`${equipe} continuação ${segmentos}`])
        }
      }else{
        quebrasDePaginas[dados[equipe][0].equipe_nome] = completarMargens(dados[equipe])
      } 
    });
    return { EquipesPorPagina : dados,quebrasDePaginasEquipe : quebrasDePaginas}
  };