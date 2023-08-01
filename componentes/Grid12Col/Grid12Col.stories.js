import React from "react";
import { CardInfoTipoA, CardInfoTipoB, CardInfoTipoC } from "../CardInfo";
import { Grid12Col } from "./index";

export default {
  title: "Componentes/Grid12Col",
  component: Grid12Col,
  argTypes: {
    items: {
      name: "items",
      description: "Array de componentes React *array*"
    },
    proporcao: {
      name: "proporcao",
      description: "Proporção dos itens no grid *string* \n\n Valores aceitos: **6-6**, **5-7**, **7-5**, **4-8**, **3-9**, **4-4-4**, **2-5-5**, **3-3-3-3** ou **2-2-4-4**"
    },
  }
};

const cardsDataTipoA = [
  {
    titulo: "Usuários que frequentaram",
    indicador: 692,
    indice: -141,
    indiceDescricao: "últ. mês",
    link: {
      label: "Mais Informações",
      url: "/"
    },
    fonte: "Fonte: BPA-i e RAAS/SIASUS - Elaboração Impulso Gov",
    tooltip: "Dados de usuários ativos"
  },
  {
    titulo: "Total de atendimentos em Julho",
    indicador: 637,
    indice: 637,
    indiceDescricao: "últ. mês",
  },
  {
    titulo: "Boa Vista",
    indicador: 0.15,
    indicadorDescricao: "procedimentos/hora",
    indice: -11.8,
    indiceSimbolo: "%",
    indiceDescricao: "últ. mês",
  },
  {
    titulo: "Boa Vista",
    indicador: 83.3,
    indicadorSimbolo: "%"
  },
  {
    titulo: "Usuários que frequentaram",
    indicador: 692,
    indice: -141,
    indiceDescricao: "últ. mês",
    link: {
      label: "Mais Informações",
      url: "/"
    },
    fonte: "Fonte: BPA-i e RAAS/SIASUS - Elaboração Impulso Gov",
    tooltip: "Dados de usuários ativos"
  },
  {
    titulo: "Total de atendimentos em Julho",
    indicador: 637,
    indice: 637,
    indiceDescricao: "últ. mês",
  },
  {
    titulo: "Boa Vista",
    indicador: 0.15,
    indicadorDescricao: "procedimentos/hora",
    indice: -11.8,
    indiceSimbolo: "%",
    indiceDescricao: "últ. mês",
  },
  {
    titulo: "Boa Vista",
    indicador: 83.3,
    indicadorSimbolo: "%"
  }
];

const cardsDataTipoB = [
  {
    titulo: "Encaminhamentos para CAPS no mês de Junho",
    tooltip: "Dados sobre encaminhamentos para CAPS no mês de Junho",
    indicador: 18,
    indice: -4,
    indiceDescricao: "últ. mês",
    descricao: "de 4823 atendimentos em saúde mental na APS",
    porcentagemSim: 7.72,
    porcentagemNao: 92.28
  },
  {
    titulo: "Encaminhamentos para CAPS no mês de Junho",
    tooltip: "Dados sobre encaminhamentos para CAPS no mês de Junho",
    indicador: 18,
    descricao: "de 4823 atendimentos em saúde mental na APS",
    porcentagemSim: 7.72,
    porcentagemNao: 92.28
  },
  {
    titulo: "Encaminhamentos para CAPS no mês de Junho",
    indicador: 18,
    indice: -4,
    descricao: "de 4823 atendimentos em saúde mental na APS",
    porcentagemSim: 7.72,
    porcentagemNao: 92.28
  },
  {
    titulo: "Encaminhamentos para CAPS no mês de Junho",
    tooltip: "Dados sobre encaminhamentos para CAPS no mês de Junho",
    indicador: 18,
    indice: -4,
    indiceDescricao: "últ. mês",
    porcentagemSim: 7.72,
    porcentagemNao: 92.28
  },
];

const cardsDataTipoC = [
  {
    indicador: 692,
    indicadorDescricao: "Usuários",
    descricao: "Não foram atendidos na RAPS nos 6 meses anteriores à internação nem até o mês após a alta",
    statusAntes: false,
    statusDepois: true,
  },
  {
    indicador: 692,
    indicadorDescricao: "Usuários",
    descricao: "Não foram atendidos na RAPS nos 6 meses anteriores à internação nem até o mês após a alta",
    statusAntes: true,
    statusDepois: false,
  },
  {
    indicador: 692,
    indicadorDescricao: "Usuários",
    descricao: "Não foram atendidos na RAPS nos 6 meses anteriores à internação nem até o mês após a alta",
    statusAntes: false,
    statusDepois: true,
  },
  {
    indicador: 692,
    indicadorDescricao: "Usuários",
    descricao: "Não foram atendidos na RAPS nos 6 meses anteriores à internação nem até o mês após a alta",
    statusAntes: true,
    statusDepois: false,
  },
  {
    indicador: 692,
    indicadorDescricao: "Usuários",
    descricao: "Não foram atendidos na RAPS nos 6 meses anteriores à internação nem até o mês após a alta",
    statusAntes: true,
    statusDepois: true,
  },
  {
    indicador: 692,
    indicadorDescricao: "Usuários",
    descricao: "Não foram atendidos na RAPS nos 6 meses anteriores à internação nem até o mês após a alta",
    statusAntes: false,
    statusDepois: false,
  },
];

const cardsTipoA = cardsDataTipoA.map((card) => (
  <CardInfoTipoA
    titulo={ card.titulo }
    indicador={ card.indicador }
    indicadorDescricao={ card.indicadorDescricao }
    indicadorSimbolo={ card.indicadorSimbolo }
    indice={ card.indice }
    indiceDescricao={ card.indiceDescricao }
    indiceSimbolo={ card.indiceSimbolo }
    link={ card.link }
    fonte={ card.fonte }
    tooltip={ card.tooltip }
  />
));

const cardsTipoC = cardsDataTipoC.map((card) => (
  <CardInfoTipoC
    descricao={ card.descricao }
    indicador={ card.indicador }
    indicadorDescricao={ card.indicadorDescricao }
    indicadorSimbolo={ card.indicadorSimbolo }
    statusAntes={ card.statusAntes }
    statusDepois={ card.statusDepois }
  />
));

const cardsTipoB = cardsDataTipoB.map((card) => (
  <CardInfoTipoB
    descricao={ card.descricao }
    indicador={ card.indicador }
    indicadorSimbolo={ card.indicadorSimbolo }
    indicadorDescricao={ card.indicadorDescricao }
    indice={ card.indice }
    indiceSimbolo={ card.indiceSimbolo }
    indiceDescricao={ card.indiceDescricao }
    titulo={ card.titulo }
    tooltip={ card.tooltip }
    porcentagemSim={ card.porcentagemSim }
    porcentagemNao={ card.porcentagemNao }
  />
));

const Template = (args) => <Grid12Col { ...args } />;

export const Proporcao66 = Template.bind({});
Proporcao66.args = {
  items: cardsTipoB,
  proporcao: "6-6"
};

export const Proporcao57 = Template.bind({});
Proporcao57.args = {
  items: cardsTipoB,
  proporcao: "5-7"
};

export const Proporcao48 = Template.bind({});
Proporcao48.args = {
  items: cardsTipoB,
  proporcao: "4-8"
};

export const Proporcao39 = Template.bind({});
Proporcao39.args = {
  items: cardsTipoB,
  proporcao: "3-9"
};

export const Proporcao444 = Template.bind({});
Proporcao444.args = {
  items: cardsTipoC,
  proporcao: "4-4-4"
};

export const Proporcao255 = Template.bind({});
Proporcao255.args = {
  items: cardsTipoC,
  proporcao: "2-5-5"
};

export const Proporcao3333 = Template.bind({});
Proporcao3333.args = {
  items: cardsTipoA,
  proporcao: "3-3-3-3"
};

export const Proporcao2244 = Template.bind({});
Proporcao2244.args = {
  items: cardsTipoA,
  proporcao: "2-2-4-4"
};
