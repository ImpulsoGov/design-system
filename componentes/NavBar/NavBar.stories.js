import React from 'react'
import {NavBar} from './index'

export default {
    title: "Componentes/NavBar",
    component: NavBar,
}

  
export const Default = () =>{
  return(
    <NavBar 
      theme={{
        logoProjeto : "https://github.com/ImpulsoGov/DesignSystem/raw/dev-componente-footer/componentes/estatico/impulso-previne-logo-branco.svg",
        cor : "ColorIP"
      }}
      menu={
          [
            { label: "A Impulso Gov", url: "/impulsogov" },
            { label: "O Previne Brasil", url: "/previnebrasil" },
            { label: "Análise", url: "analise" },
            { label: "Consultoria", url: "/consultoria" }
          ]
      }
      subtitles = {[
        { label: "Indicadores de Desempenho", url:"/indicadores" },
        { label: "Capitação Ponderada", url:"/capitacao" },
        { label: "Ações Estratégicas", url: "/acoes-estrategicas" },
      ]}
      NavBarIconBranco = "https://raw.githubusercontent.com/ImpulsoGov/ImpulsoPrevine/main/public/hamburgerIconBranco.svg"
      NavBarIconDark = "https://raw.githubusercontent.com/ImpulsoGov/ImpulsoPrevine/main/public/hamburgerIconDark.svg"
    />
  )
}

