import React from 'react'
import {HomeBanner} from './index'

export default {
  title: "Componentes/HomeBanner",
  component: HomeBanner,
  argTypes: { 
    titulo: { 
      name: 'titulo' ,
      description: 'Título da página *string*'
    },
    tituloDestaque : {
      name:'tituloDestaque',
      description:'Título em destaque da página *string*'
    },
    texto : {
      name:'texto',
      description:'Texto da página *string*',
    },
    theme: {
      name:'theme',
      description:'Tema referente ao projuto *string*'
    },
  },
};

export const Default = () => {
  return <HomeBanner titulo ="título" tituloDestaque="destaque" texto="texto" />
}

export const SM = () => {
  return <HomeBanner titulo ="título" tituloDestaque="destaque" texto="texto" theme="ColorSM"/>
}

