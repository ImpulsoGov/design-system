import React from 'react'
import { GraficoGrid } from './index'

export default {
    title: "Componentes/GraficoGrid",
    component: GraficoGrid,
    // argTypes: {
    // }
}

const info = {
  titulo: "Taxa de abandono",
  descricao: "Conjunto de usuários com 1º procedimento em Março/2022 e abandono até Agosto/2022",
  fonte: "Fonte: RAAS/SIASUS - Elaboração Impulso Gov",
  link: {
    url: "/",
    label: "Mais informações"
  },
  tooltip: "Este gráfico diz respeito à taxa de abandono"
};

const cardACompleto = {
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
};

const cardATipo1 = {
  titulo:"Total de atendimentos em Julho",
  indicador:"637",
  indice:"637",
  indiceDescricao:"últ. mês",
};

const cardATipo2 = {
  titulo:"Boa Vista",
  indicador:"0,15",
  indicadorDescricao: "procedimentos/hora",
  indice:"-11.8%",
  indiceDescricao:"últ. mês",
};

const cardATipo3 = {
  titulo:"Boa Vista",
  indicador:"83,3%",
};

const cardATipo4 = {
  titulo:"Total de atendimentos pela APS em Junho",
  indicador:"5.254",
};

const Template = (args) => <GraficoGrid {...args}/>

export const Proporcao66 = Template.bind({});
Proporcao66.args ={
  info,
  cards: [cardACompleto, cardATipo1, cardATipo3, cardATipo2],
  proporcao: "6-6"
}

export const Proporcao57 = Template.bind({});
Proporcao57.args ={
  info,
  cards: [cardACompleto, cardATipo1, cardATipo3, cardATipo2],
  proporcao: "5-7"
}

export const Proporcao48 = Template.bind({});
Proporcao48.args ={
  info,
  cards: [cardACompleto, cardATipo1, cardATipo3, cardATipo2],
  proporcao: "4-8"
}

export const Proporcao39 = Template.bind({});
Proporcao39.args ={
  info,
  cards: [cardACompleto, cardATipo1, cardATipo3, cardATipo2],
  proporcao: "3-9"
}

export const Proporcao444 = Template.bind({});
Proporcao444.args ={
  info,
  cards: [cardACompleto, cardATipo1, cardATipo3, cardACompleto, cardATipo4, cardATipo2],
  proporcao: "4-4-4"
}

export const Proporcao255 = Template.bind({});
Proporcao255.args ={
  info,
  cards: [cardATipo3, cardATipo1, cardACompleto, cardATipo2, cardACompleto, cardATipo4],
  proporcao: "2-5-5"
}

export const Proporcao3333 = Template.bind({});
Proporcao3333.args ={
  info,
  cards: [cardACompleto, cardATipo1, cardATipo3, cardACompleto, cardATipo4, cardATipo2, cardACompleto, cardATipo1],
  proporcao: "3-3-3-3"
}

export const Proporcao2244 = Template.bind({});
Proporcao2244.args ={
  info,
  cards: [cardATipo3, cardATipo1, cardACompleto, cardATipo2, cardACompleto, cardATipo4, cardACompleto, cardATipo1],
  proporcao: "2-2-4-4"
}
