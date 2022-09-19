import React from 'react'
import {NavBar} from './index'

export default {
    title: "Componentes/NavBar",
    component: NavBar,
}

const data = [
  {
      "nome" : "Maraã",
      "uf" : "AM"
  },
  {
      "nome" : "Uruará",
      "uf" : "PA"
  },
  {
      "nome" : "Icó",
      "uf" : "CE"
  },
  {
      "nome" : "Mãe d'Água",
      "uf" : "PB"
  },
  {
      "nome" : "Lapão",
      "uf" : "BA"
  },
  {
      "nome" : "Cândido Mota",
      "uf" : "SP"
  },
  {
      "nome" : "Terra Roxa",
      "uf" : "PR"
  },
  {
      "nome" : "Castanheiras",
      "uf" : "RO"
  },
  {
      "nome" : "Chupinguaia",
      "uf" : "RO"
  },
  {
      "nome" : "Cujubim",
      "uf" : "RO"
  },
  {
      "nome" : "Bragança",
      "uf" : "PA"
  },
  {
      "nome" : "Brasil Novo",
      "uf" : "PA"
  },
  {
      "nome" : "Alta Floresta D'Oeste",
      "uf" : "RO"
  },
  {
      "nome" : "Ariquemes",
      "uf" : "RO"
  },
  {
      "nome" : "Cabixi",
      "uf" : "RO"
  },
  {
      "nome" : "Cacoal",
      "uf" : "RO"
  },
  {
      "nome" : "Cerejeiras",
      "uf" : "RO"
  },
  {
      "nome" : "Colorado do Oeste",
      "uf" : "RO"
  },
  {
      "nome" : "Corumbiara",
      "uf" : "RO"
  },
  {
      "nome" : "Costa Marques",
      "uf" : "RO"
  },
  {
      "nome" : "Espigão D'Oeste",
      "uf" : "RO"
  },
  {
      "nome" : "Guajará-Mirim",
      "uf" : "RO"
  },
  {
      "nome" : "Jaru",
      "uf" : "RO"
  },
  {
      "nome" : "Ji-Paraná",
      "uf" : "RO"
  },
  {
      "nome" : "Machadinho D'Oeste",
      "uf" : "RO"
  },
  {
      "nome" : "Nova Brasilândia D'Oeste",
      "uf" : "RO"
  },
  {
      "nome" : "Ouro Preto do Oeste",
      "uf" : "RO"
  },
  {
      "nome" : "Pimenta Bueno",
      "uf" : "RO"
  },
  {
      "nome" : "Presidente Médici",
      "uf" : "RO"
  },
  {
      "nome" : "Rio Crespo",
      "uf" : "RO"
  },
  {
      "nome" : "Rolim de Moura",
      "uf" : "RO"
  },
  {
      "nome" : "Santa Luzia D'Oeste",
      "uf" : "RO"
  },
  {
      "nome" : "Vilhena",
      "uf" : "RO"
  },
  {
      "nome" : "São Miguel do Guaporé",
      "uf" : "RO"
  },
  {
      "nome" : "Bagre",
      "uf" : "PA"
  },
  {
      "nome" : "Nova Mamoré",
      "uf" : "RO"
  },
  {
      "nome" : "Alvorada D'Oeste",
      "uf" : "RO"
  },
  {
      "nome" : "Alto Alegre dos Parecis",
      "uf" : "RO"
  },
  {
      "nome" : "Alto Paraíso",
      "uf" : "RO"
  },
  {
      "nome" : "Buritis",
      "uf" : "RO"
  },
  {
      "nome" : "Novo Horizonte do Oeste",
      "uf" : "RO"
  },
  {
      "nome" : "Cacaulândia",
      "uf" : "RO"
  },
  {
      "nome" : "Campo Novo de Rondônia",
      "uf" : "RO"
  },
  {
      "nome" : "Candeias do Jamari",
      "uf" : "RO"
  },
  {
      "nome" : "Governador Jorge Teixeira",
      "uf" : "RO"
  },
  {
      "nome" : "Itapuã do Oeste",
      "uf" : "RO"
  },
  {
      "nome" : "Ministro Andreazza",
      "uf" : "RO"
  },
  {
      "nome" : "Mirante da Serra",
      "uf" : "RO"
  },
  {
      "nome" : "Monte Negro",
      "uf" : "RO"
  },
  {
      "nome" : "Nova União",
      "uf" : "RO"
  },
  {
      "nome" : "Parecis",
      "uf" : "RO"
  },
  {
      "nome" : "Pimenteiras do Oeste",
      "uf" : "RO"
  },
  {
      "nome" : "Primavera de Rondônia",
      "uf" : "RO"
  },
  {
      "nome" : "São Felipe D'Oeste",
      "uf" : "RO"
  },
]
import { useState } from 'react'  
export const ColorIP = () =>{
  const[state, setState]=useState("São Felipe D'Oeste - RO");
  return(
    <NavBar 
      municipio = {state}
      setMunicipio = {setState}
      data={data}
      theme={{
        logoProjeto : "https://media.graphassets.com/0q9BBD4xRCivV24aSg80",
        cor : "ColorAGP"
      }}
      menu={
          [
            { label: "A Impulso Gov", url: "/impulsogov" },
            { label: "O Previne Brasil", url: "/previnebrasil" },
            { label: "Análise", url: "analise" },
            { label: "Consultoria", url: "/consultoria" }
          ]
      }
      subtitles = {[
        { label: "Indicadores de Desempenho", url:"/indicadores" },
        { label: "Capitação Ponderada", url:"/capitacao" },
        { label: "Ações Estratégicas", url: "/acoes-estrategicas" },
      ]}
      NavBarIconBranco = "https://raw.githubusercontent.com/ImpulsoGov/ImpulsoPrevine/main/public/hamburgerIconBranco.svg"
      NavBarIconDark = "https://raw.githubusercontent.com/ImpulsoGov/ImpulsoPrevine/main/public/hamburgerIconDark.svg"
    />
  )
}

export const White = () =>{
  return(
    <NavBar 
      municipio = "Brazil"
      data={data}
      theme={{
        logoProjeto : "https://media.graphassets.com/8QBvEx9R8WD5CR8YkCGR",
        cor : "White"
      }}
      menu={
          [
            { label: "A Impulso Gov", url: "/impulsogov" },
            { label: "O Previne Brasil", url: "/previnebrasil" },
            { label: "Análise", url: "analise" },
            { label: "Consultoria", url: "/consultoria" }
          ]
      }
      subtitles = {[
        { label: "Indicadores de Desempenho", url:"/indicadores" },
        { label: "Capitação Ponderada", url:"/capitacao" },
        { label: "Ações Estratégicas", url: "/acoes-estrategicas" },
      ]}
      NavBarIconBranco = "https://raw.githubusercontent.com/ImpulsoGov/ImpulsoPrevine/main/public/hamburgerIconBranco.svg"
      NavBarIconDark = "https://raw.githubusercontent.com/ImpulsoGov/ImpulsoPrevine/main/public/hamburgerIconDark.svg"
    />
  )
}

