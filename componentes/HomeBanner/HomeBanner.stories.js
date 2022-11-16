import React from 'react'
import {HomeBanner} from './index'

export default {
  title: "Componentes/HomeBanner",
  component: HomeBanner,
  argTypes: { 
    titulo: { 
      name: 'label' ,
      description: '**título:** Título da página *string*, \n\n **tituloDestaque:** Título em destaque da página *string*, **texto:** Texto da página *string*, \n\n**theme:** Tema referente ao produto *string*.'
    },
  },
};

export const Default = () => {
  return <HomeBanner titulo ="título" tituloDestaque="destaque" texto="texto" />
}

export const SM = () => {
  return <HomeBanner titulo ="título" tituloDestaque="destaque" texto="texto" theme="ColorSM"/>
}

