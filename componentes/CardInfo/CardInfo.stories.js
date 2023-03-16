import React from 'react'
import { CardInfo } from './index'

export default {
  title: "Componentes/CardInfo",
  component: CardInfo,
}
const Template = (args) => <CardInfo {...args}/>
export const Completo = Template.bind({});
Completo.args={
    titulo:"Usuários que frequentaram",
    indicador:"692",
    indice:"-141",
    indiceDescricao:"últ. mês",
    link:{
        label:"Mais Informações",
        url:"/"
    },
    fonte: "Fonte: BPA-i e RAAS/SIASUS - Elaboração Impulso Gov",
    tooltip: "Dados de usuários ativos"
}

export const Tipo1 = Template.bind({});
Tipo1.args={
    titulo:"Total de atendimentos em Julho",
    indicador:"637",
    indice:"637",
    indiceDescricao:"últ. mês",
}

export const Tipo2 = Template.bind({});
Tipo2.args={
    titulo:"Boa Vista",
    indicador:"0,15",
    indicadorDescricao: "procedimentos/hora",
    indice:"-11.8%",
    indiceDescricao:"últ. mês",
}

export const Tipo3 = Template.bind({});
Tipo3.args={
    titulo:"Boa Vista",
    indicador:"83,3%",
}
