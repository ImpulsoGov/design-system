import React from 'react';
import { CardInfoTipoA } from './index';

export default {
  title: "Componentes/CardInfoTipoA",
  component: CardInfoTipoA,
  argTypes: {
    titulo: {
        name: "titulo",
        description: "Titulo do card *string*"
    },
    indicador: {
        name: "indicador",
        description: "Valor do indicador do card *string*"
    },
    indicadorDescricao: {
        name: "indicadorDescricao",
        description: "Descrição do indicador do card *string*"
    },
    indice: {
        name: "indice",
        description: "Índice do indicador do card *string*"
    },
    indiceDescricao: {
        name: "indiceDescricao",
        description: "Descrição do índice do card *string*"
    },
    link: {
        name: "link",
        description: "Link exibido no card *object* \n\n **label**: label do link *string* \n\n **url**: url do link *string*"
    },
    tooltip: {
        name: "tooltip",
        description: "Mensagem do tooltip do card *string*"
    },
    fonte: {
        name: "fonte",
        description: "Fonte de dados do card *string*"
    },
  }
}
const Template = (args) => <CardInfoTipoA {...args}/>
export const Completo = Template.bind({});
Completo.args={
    titulo:"Usuários que frequentaram",
    indicador:692,
    indice:-141,
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
    indicador:637,
    indice:637,
    indiceDescricao:"últ. mês",
}

export const Tipo2 = Template.bind({});
Tipo2.args={
    titulo:"Boa Vista",
    indicador:0.15,
    indicadorDescricao: "procedimentos/hora",
    indice:-11.8,
    indiceSimbolo: "%",
    indiceDescricao:"últ. mês",
}

export const Tipo3 = Template.bind({});
Tipo3.args={
    titulo:"Boa Vista",
    indicador:83.3,
    indicadorSimbolo:"%"
}
