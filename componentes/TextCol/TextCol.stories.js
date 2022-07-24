import React from 'react'
import {TextCol} from './index'

export default {
  title: "Componentes/TextCol",
  component: TextCol,
  argTypes: { label: { control: 'text' }}
}

export const Default = () => {
  return <TextCol
  titulo = "Como funciona?"
  corpo = "Três encontros gratuitos com nosso time de especialistas, que preparam diagnóstico, plano de ação e acompanhamento de resultados personalizados para o seu município."
/>

}


