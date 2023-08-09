import React, { useState } from "react";
import { PanelSelector } from "./index";

const dsLink = [
  "https://datastudio.google.com/embed/reporting/12fb288f-4955-4930-b091-63da3f846c51/page/p_1i1fd8auvc?params=%7B%22df58%22:%22include%25EE%2580%25800%25EE%2580%2580IN%25EE%2580%2580Santo%2520Andr%25C3%25A9%2520-%2520SP%22%7D",
  "https://datastudio.google.com/embed/reporting/12fb288f-4955-4930-b091-63da3f846c51/page/p_8qgdgiz2xc?params=%7B%22df56%22:%22include%25EE%2580%25800%25EE%2580%2580IN%25EE%2580%2580Abadi%25C3%25A2nia%2520-%2520GO%22%7D",
  "https://datastudio.google.com/embed/reporting/12fb288f-4955-4930-b091-63da3f846c51/page/p_1i1fd8auvc?params=%7B%22df58%22:%22include%25EE%2580%25800%25EE%2580%2580IN%25EE%2580%2580Santo%2520Andr%25C3%25A9%2520-%2520SP%22%7D",
]
const dsLinkBuscaAtiva =[
  [
    "https://www.impulsogov.org/",
    "https://saude.sp.gov.br/"
  ],
  [
    "http://cnes.datasus.gov.br/",
    "https://aps.saude.gov.br/gestor/financiamento"
  ]
]
const dsLinkBuscaAtivaEquipe =[
    [
      "https://www.impulsogov.org/",
      "https://saude.sp.gov.br/"
    ],
  ]
  
const labels = [
  {
    label: "Indicadores de Desempenho",
  },
  {
    label: "Captação Ponderada",
  },
  {
    label: "Incentivos a Ações Estratégicas",
  },
]
const labelsBuscaAtiva = [
  [
    {
      label: "Coordenação APS",
    },
    {
      label: "Coordenação de Equipe",
    },
  ],
  [
    {
      label: "Coordenação APS2",
    },
    {
      label: "Coordenação de Equipe2",
    },
  ]
]
const labelsBuscaAtivaEquipe = [
    [
      {
        label: "Coordenação de Equipe",
      },
    ],
  ]
  
const titlesBuscaAtiva = [
  {
    label: "Indicadores Gestantes",
  },
  {
    label: "Cadastros - Gestantes",
  },
]
const titlesBuscaAtivaEquipe = [
    {
      label: "Indicadores Gestantes",
    },
  ]
  
const titles = [
  {
    label: "Análises",
  }
]


export default {
    title: "Componentes/PanelSelector",
    component: PanelSelector,
    argTypes: {
        links:{
            name:'links',
            description:'Array de arrays contendo os links utilizados no painel *array* \n\n **dsLink:** links dos painéis do data studio *array/URL* **\n\n **dsLinkBuscaAtiva** e **dsLinkBuscaAtivaEquipe:** links das organizações de saúde e da Impulso *array/URL*'
        },
        list:{
            name:'list',
            description:'Array de objetos contento os rótulos das abas *array/object* \n\n **labels:** Rótulos das sub abas dos paineis do Impulso Previne "Análises" \n\n **labelsBuscaAtiva** e **labelsBuscaAtivaEquipe:** Rótulos das sub abas do painel de busca ativa'
        },
        titles:{
            name:'titles',
            description:'Array de objetos contento os rótulos das abas *array/object* \n\n **titles:** Rótulos da aba "Análises" dos paineis do Impulso Previne  \n\n **titlesBuscaAtiva** e **titlesBuscaAtivaEquipe:** Rótulos das abas do painel de busca ativa'
        },
    },
  };

const Child_zero = ()=><div>Child 0</div>
const Child_one = ()=><div>Child 1</div>
const Child_two = ()=><div>Child 2</div>
const children = [<Child_zero/>,<Child_one/>,<Child_two/>]

const Template = (args) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [activeTitleTabIndex, setActiveTitleTabIndex] = useState(0);
  args["states"] = {
    activeTabIndex : activeTabIndex,
    setActiveTabIndex : setActiveTabIndex,
    activeTitleTabIndex : activeTitleTabIndex,
    setActiveTitleTabIndex : setActiveTitleTabIndex
  }
  return <PanelSelector {...args}/>
}
export const BuscaAtiva = Template.bind({});
BuscaAtiva.args={
  links: dsLinkBuscaAtiva,
  list: labelsBuscaAtiva,
  titles: titlesBuscaAtiva,
  initialTitle: 1
}

export const BuscaAtivaEquipe = Template.bind({});
BuscaAtivaEquipe.args={
  links: dsLinkBuscaAtivaEquipe,
  list: labelsBuscaAtivaEquipe,
  titles: titlesBuscaAtivaEquipe
}

export const Analises = Template.bind({});
Analises.args={
  links: [dsLink],
  list: [labels],
  titles: titles
}
export const Componentes = Template.bind({});
Componentes.args={
  links: [dsLink],
  list: [labels],
  titles: titles,
  conteudo : "components",
  components : [children]
}
  
