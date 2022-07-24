import React from 'react'
import {HomeBanner} from './index'

export default {
  title: "Componentes/HomeBanner",
  component: HomeBanner,
  argTypes: { label: { control: 'text' }}
}

export const Default = () => {
  return <HomeBanner titulo ="aaaaaaaaaaa" tituloDestaque="bbbbbbbbb" texto="cccccccc" />
}


