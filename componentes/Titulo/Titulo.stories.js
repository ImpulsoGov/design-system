import React from 'react'
import Titulo from './Titulo'

export default {
    title: "Componentes/Titulo",
    component: Titulo,
    argTypes: { label: { control: 'text' }}
}

  
export const Default = () =>{
  return <Titulo titulo="Componente da biblioteca" />
}
  
