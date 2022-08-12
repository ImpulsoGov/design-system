import React from 'react'
import { Footer} from './index'

export default {
    title: "Componentes/Footer",
    component: Footer,
}
  
export const Default = () =>{
  return(
    <Footer 
        theme={{
            logoProjeto : "https://media.graphassets.com/Kal4aulRmYkqd0L6RBAd",
            cor : "ColorIP"
        }}
        menu={
            [
                { label: "A Impulso Gov", url: "/impulsogov" },
                { label: "O Previne Brasil", url: "/previnebrasil" },
                { label: "Análise", url: "" },
                { label: "Consultoria", url: "/consultoria" }
            ]
        }
        subtitles = {[
            { label: "Indicadores de Desempenho", url:"/indicadores" },
            { label: "Capitação Ponderada", url:"/capitacao" },
            { label: "Ações Estratégicas", url: "/acoes-estrategicas" },
        ]}
    />
  )
}

