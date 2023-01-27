import React from 'react'
import { ModulosTrilha } from './index'

export default {
  title: "Componentes/ModulosTrilha",
  component: ModulosTrilha,
}
const Template = (args) => <ModulosTrilha {...args}/>

export const ModulosCronicos = Template.bind({});
ModulosCronicos.args={
    tituloTrilha: "Hipertensão e Diabetes",
    linkVoltar: "/",
    linkWhatsapp: "/",
    modulos:[
          {id: 1, titulo: "Introdução aos indicadores de Hipertensão e Diabetes na APS", status: true, link:"/"},
          {id: 2, titulo: "Qualificação do registro e monitoramento de dados", status: false, link:"/"},
          {id: 3, titulo: "Qualificação do cuidado", status: false, link:"/"},
          {id: 4, titulo: "Gestão de processos de trabalho", status: false, link:"/"}
    ],
    moduloAtual:{id: 1, titulo: "Introdução aos indicadores de Hipertensão e Diabetes na APS"},
    conteudosModuloAtual:[
          {id: 1, formato:"PPT", titulo:"Introdução sobre a Capacitação", status: true, link:"/"},
          {id: 2, formato:"PPT", titulo:"Introdução ao Indicador de Hipertensão + Introdução ao Indicador de Diabetes", status: false, link:"/"},
          {id: 3, formato:"PDF", titulo:"Introdução ao Previne Brasil", status: false, link:"/"},
          {id: 4, formato:"QUIZ", titulo:"Quizz de avaliação desses conteúdos", status: false, link:"/"}
    ]
}