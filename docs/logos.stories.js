import React from 'react'
import { LogoGrade } from '../componentes/LogoGrade/index'

export default {
  title: "DOCS/FundamentosVisuais/Logos",
  component: LogoGrade,
};

const logos = [
  {alt : "logo_previne_preto_pequeno", src:"https://media.graphassets.com/753MAuqSsuZOW8mR0seA?_gl=1*1inq43v*_ga*NDUzNzQzNDgyLjE2NzE3MzUxNzY.*_ga_G6FYGSYGZ4*MTY3MTczNTE3OC4xLjEuMTY3MTczNTIzNC40LjAuMA.."},

  {alt : "logo_previne_branco_pequeno", src: "https://media.graphassets.com/CxlFQyhRoy19USnE4FH0?_gl=1*3h9kan*_ga*NDUzNzQzNDgyLjE2NzE3MzUxNzY.*_ga_G6FYGSYGZ4*MTY3MTczNTE3OC4xLjEuMTY3MTczNTIzNC40LjAuMA.."},

  {alt : "logo_impulso_branco_pequeno", src: "https://media.graphassets.com/rVYVqkPTaSRB2qRb1hGt?_gl=1*1taybp4*_ga*NDUzNzQzNDgyLjE2NzE3MzUxNzY.*_ga_G6FYGSYGZ4*MTY3MTczNTE3OC4xLjEuMTY3MTczNTIzNC40LjAuMA.."},

  {alt : "logo_impulso_preto_pequeno", src: "https://media.graphassets.com/c79uLUqSbGhuAkD1C7SB?_gl=1*jh7q7i*_ga*NDUzNzQzNDgyLjE2NzE3MzUxNzY.*_ga_G6FYGSYGZ4*MTY3MTczNTE3OC4xLjEuMTY3MTczNTg5MS41OC4wLjA."},

  {alt : "logo_impulso_preto_curto", src: "https://media.graphassets.com/MYDf1lBmR9OHMktydUKw?_gl=1*jh7q7i*_ga*NDUzNzQzNDgyLjE2NzE3MzUxNzY.*_ga_G6FYGSYGZ4*MTY3MTczNTE3OC4xLjEuMTY3MTczNTg5MS41OC4wLjA."},

  {alt : "logo_impulso_azul_curto", src: "https://media.graphassets.com/XrnbNcaeSs65o67JT7Te?_gl=1*1t29x4w*_ga*NDUzNzQzNDgyLjE2NzE3MzUxNzY.*_ga_G6FYGSYGZ4*MTY3MTczNTE3OC4xLjEuMTY3MTczNTg5MS41OC4wLjA."},

]


const Template = (args) => <LogoGrade {...args}/>

export const Default = Template.bind({});

Default.args ={
  parceiros:logos,
  theme:"ColorIP"
};