import React from 'react'
import { CardTrilha } from './index'

export default {
  title: "Componentes/CardTrilha",
  component: CardTrilha,
}
const Template = (args) => <CardTrilha {...args}/>

export const CronicosNaoIniciado = Template.bind({});
CronicosNaoIniciado.args={
    titulo:"Hipertensão e Diabetes",
    progressao:0,
    linkTrilha:"/",
    linkSobre:"/",
}

export const CronicosIniciado = Template.bind({});
CronicosIniciado.args={
    titulo:"Hipertensão e Diabetes",
    progressao:10,
    linkTrilha:"/",
    linkSobre:"/",
}