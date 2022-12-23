import React from 'react'
import { CardInfo } from './index'

export default {
  title: "Componentes/CardInfo",
  component: CardInfo,
}
const Template = (args) => <CardInfo {...args}/>
export const Default = Template.bind({});
Default.args={
    titulo:"Usuários que frequentaram",
    info:"Usuários que tiveram ao menos um procedimento registrado",
    indicador:"692",
    indice:-141,
    indiceDescricao:"últ. mês",
    link:{
        label:"Mais Informações",
        url:"/"
    },
    fonte: "Fonte: BPA-i e RAAS/SIASUS - Elaboração Impulso Gov"
}