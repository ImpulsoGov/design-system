import React from 'react'
import { ModulosTrilha } from './index'

export default {
  title: "Componentes/ModulosTrilha",
  component: ModulosTrilha,
}
const Template = (args) => <ModulosTrilha {...args}/>

export const Mobile = Template.bind({});
Mobile.args={
      tituloTrilha: "Hipertensão e Diabetes",
      botaoVoltar: {label: "VOLTAR",url:"/"},
      botaoWhatsapp: {label: "ENTRAR NO GRUPO DO WHATSAPP",url:"/"},
      modulos:[
            {id: 0, titulo: "Introdução a capacitação",liberado:true},
            {id: 1, titulo: "Introdução aos indicadores de Hipertensão e Diabetes na APS",liberado:true},
            {id: 2, titulo: "Qualificação do registro e monitoramento de dados",liberado:true},
            {id: 3, titulo: "Qualificação do cuidado",liberado:false},
            {id: 4, titulo: "Gestão de processos de trabalho",liberado:false}
      ],
      modulo:[
            {id: 0, moduloID: 0, formato:"VIDEO", titulo:"Introdução sobre a Capacitação", concluido: true, link:"/"},
            {id: 1, moduloID: 1, formato:"VIDEO", titulo:"Introdução sobre a Capacitação", concluido: true, link:"/"},
            {id: 2, moduloID: 1, formato:"PPT", titulo:"Introdução ao Indicador de Hipertensão + Introdução ao Indicador de Diabetes", concluido: false, link:"/"},
            {id: 3, moduloID: 1, formato:"PDF", titulo:"Introdução ao Previne Brasil", concluido: false, link:"/"},
            {id: 4, moduloID: 1, formato:"QUIZ", titulo:"Quizz de avaliação desses conteúdos", concluido: false, link:"/"}
      ],
      ultimoModulo: 1,
      mobile: true
}

export const Desktop = Template.bind({});
Desktop.args={
      tituloTrilha: "Hipertensão e Diabetes",
      botaoVoltar: {label: "VOLTAR",url:"/"},
      botaoWhatsapp: {label: "ENTRAR NO GRUPO DO WHATSAPP",url:"/"},
      modulos:[
            {id: 0, titulo: "Introdução aos indicadores de Hipertensão e Diabetes na APS",liberado:true,concluido:true},
            {id: 1, titulo: "Introdução aos indicadores de Hipertensão e Diabetes na APS",liberado:true,concluido:true},
            {id: 2, titulo: "Qualificação do registro e monitoramento de dados",liberado:true,concluido:false},
            {id: 3, titulo: "Qualificação do cuidado",liberado:false,concluido:false},
            {id: 4, titulo: "Gestão de processos de trabalho",liberado:false,concluido:false}
      ],
      modulo:[
            {id: 1, moduloID: 0, formato:"VIDEO", titulo:"Introdução sobre a Capacitação", concluido: true, link:"/"},
            {id: 1, moduloID: 1, formato:"VIDEO", titulo:"Introdução sobre a Capacitação", concluido: true, link:"/"},
            {id: 2, moduloID: 1, formato:"PPT", titulo:"Introdução ao Indicador de Hipertensão + Introdução ao Indicador de Diabetes", concluido: false, link:"/"},
            {id: 1, moduloID: 2, formato:"PDF", titulo:"Introdução ao Previne Brasil", concluido: false, link:"/"},
            {id: 2, moduloID: 2, formato:"QUIZ", titulo:"Quizz de avaliação desses conteúdos", concluido: false, link:"/"}
      ],
      ultimoModulo: 0,
      mobile: false
}