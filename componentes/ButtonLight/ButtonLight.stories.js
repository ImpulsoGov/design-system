import React from 'react'
import { ButtonLight } from './index'

export default {
  title: "Componentes/ButtonLight",
  component: ButtonLight,
  argTypes: { label: { control: 'text' }}
}

export const Default = () => {
  return <ButtonLight
    label = "INDICADORES DE DESEMPENHO"
    link = "indicadores"
  />

}