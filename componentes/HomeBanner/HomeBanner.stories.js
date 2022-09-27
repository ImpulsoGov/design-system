import React from 'react'
import {HomeBanner} from './index'

export default {
  title: "Componentes/HomeBanner",
  component: HomeBanner,
  argTypes: { label: { control: 'text' }}
}

export const Default = () => {
  return <HomeBanner titulo ="título" tituloDestaque="destaque" texto="texto" />
}

export const SM = () => {
  return <HomeBanner titulo ="título" tituloDestaque="destaque" texto="texto" theme="ColorSM"/>
}

