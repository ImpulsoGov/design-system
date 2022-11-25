import React from "react";
import { PanelSelector } from "./index";
import { NavBar } from "../NavBar";

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
};
const data = [
  {
      "nome": "Maraã",
      "uf": "AM"
  },
  {
      "nome": "Uruará",
      "uf": "PA"
  },
  {
      "nome": "Icó",
      "uf": "CE"
  },
  {
      "nome": "Mãe d'Água",
      "uf": "PB"
  },
  {
      "nome": "Lapão",
      "uf": "BA"
  },
  {
      "nome": "Cândido Mota",
      "uf": "SP"
  },
  {
      "nome": "Terra Roxa",
      "uf": "PR"
  },
  {
      "nome": "Castanheiras",
      "uf": "RO"
  },
  {
      "nome": "Chupinguaia",
      "uf": "RO"
  },
  {
      "nome": "Cujubim",
      "uf": "RO"
  },
  {
      "nome": "Bragança",
      "uf": "PA"
  },
  {
      "nome": "Brasil Novo",
      "uf": "PA"
  },
  {
      "nome": "Alta Floresta D'Oeste",
      "uf": "RO"
  },
  {
      "nome": "Ariquemes",
      "uf": "RO"
  },
  {
      "nome": "Cabixi",
      "uf": "RO"
  },
  {
      "nome": "Cacoal",
      "uf": "RO"
  },
  {
      "nome": "Cerejeiras",
      "uf": "RO"
  },
  {
      "nome": "Colorado do Oeste",
      "uf": "RO"
  },
  {
      "nome": "Corumbiara",
      "uf": "RO"
  },
  {
      "nome": "Costa Marques",
      "uf": "RO"
  },
  {
      "nome": "Espigão D'Oeste",
      "uf": "RO"
  },
  {
      "nome": "Guajará-Mirim",
      "uf": "RO"
  },
  {
      "nome": "Jaru",
      "uf": "RO"
  },
  {
      "nome": "Ji-Paraná",
      "uf": "RO"
  },
  {
      "nome": "Machadinho D'Oeste",
      "uf": "RO"
  },
  {
      "nome": "Nova Brasilândia D'Oeste",
      "uf": "RO"
  },
  {
      "nome": "Ouro Preto do Oeste",
      "uf": "RO"
  },
  {
      "nome": "Pimenta Bueno",
      "uf": "RO"
  },
  {
      "nome": "Presidente Médici",
      "uf": "RO"
  },
  {
      "nome": "Rio Crespo",
      "uf": "RO"
  },
  {
      "nome": "Rolim de Moura",
      "uf": "RO"
  },
  {
      "nome": "Santa Luzia D'Oeste",
      "uf": "RO"
  },
  {
      "nome": "Vilhena",
      "uf": "RO"
  },
  {
      "nome": "São Miguel do Guaporé",
      "uf": "RO"
  },
  {
      "nome": "Bagre",
      "uf": "PA"
  },
  {
      "nome": "Nova Mamoré",
      "uf": "RO"
  },
  {
      "nome": "Alvorada D'Oeste",
      "uf": "RO"
  },
  {
      "nome": "Alto Alegre dos Parecis",
      "uf": "RO"
  },
  {
      "nome": "Alto Paraíso",
      "uf": "RO"
  },
  {
      "nome": "Buritis",
      "uf": "RO"
  },
  {
      "nome": "Novo Horizonte do Oeste",
      "uf": "RO"
  },
  {
      "nome": "Cacaulândia",
      "uf": "RO"
  },
  {
      "nome": "Campo Novo de Rondônia",
      "uf": "RO"
  },
  {
      "nome": "Candeias do Jamari",
      "uf": "RO"
  },
  {
      "nome": "Governador Jorge Teixeira",
      "uf": "RO"
  },
  {
      "nome": "Itapuã do Oeste",
      "uf": "RO"
  },
  {
      "nome": "Ministro Andreazza",
      "uf": "RO"
  },
  {
      "nome": "Mirante da Serra",
      "uf": "RO"
  },
  {
      "nome": "Monte Negro",
      "uf": "RO"
  },
  {
      "nome": "Nova União",
      "uf": "RO"
  },
  {
      "nome": "Parecis",
      "uf": "RO"
  },
  {
      "nome": "Pimenteiras do Oeste",
      "uf": "RO"
  },
  {
      "nome": "Primavera de Rondônia",
      "uf": "RO"
  },
  {
      "nome": "São Felipe D'Oeste",
      "uf": "RO"
  },
]

export const Analises = () => {
  return (
    <>
        <PanelSelector
            panel={2}
            links = {[dsLink]}
            list={[labels]}
            titles={titles}
        />

    </>
  );
};

export const BuscaAtiva = () => {
  return (
    <PanelSelector
      links = {dsLinkBuscaAtiva}
      list={labelsBuscaAtiva}
      titles={titlesBuscaAtiva}
  />
  );
};

export const BuscaAtivaEquipe = () => {
    return (
      <PanelSelector
        links = {dsLinkBuscaAtiva}
        list={labelsBuscaAtivaEquipe}
        titles={titlesBuscaAtivaEquipe}
    />
    );
  };