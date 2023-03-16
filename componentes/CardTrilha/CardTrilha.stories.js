import React from 'react'
import { CardTrilha } from './index'

export default {
  title: "Componentes/CardTrilha",
  component: CardTrilha,
  argTypes: {
    titulo: {
      name: "titulo",
      description: "Título da trilha *string*"
    },
    progressao: {
      name: "progressao",
      description: "Progresso feito na trilha *number*"
    },
    linkTrilha: {
      name: "linkTrilha",
      description: "Link da trilha *URL*"
    },
    linkCertificado: {
      name: "linkCertificado",
      description: "Link para retirar certificado da trilha *URL*"
    },
    certificadoLiberado: {
      name: "certificadoLiberado",
      description: "Estado de liberação de retirada do certificado *boolean*"
    }
  }
}
const Template = (args) => <CardTrilha {...args}/>

export const CronicosNaoIniciado = Template.bind({});
CronicosNaoIniciado.args={
    titulo:"Hipertensão e Diabetes",
    progressao:0,
    linkTrilha:"/",
    //linkSobre:"/",
    linkCertificado:"/",
    certificadoLiberado: false
}

export const CronicosIniciado = Template.bind({});
CronicosIniciado.args={
    titulo:"Hipertensão e Diabetes",
    progressao:10,
    linkTrilha:"/",
    //linkSobre:"/",
    linkCertificado:"/",
    certificadoLiberado: false
}

export const CertificadoLiberado = Template.bind({});
CertificadoLiberado.args={
    titulo:"Hipertensão e Diabetes",
    progressao:30,
    linkTrilha:"/",
    //linkSobre:"/",
    linkCertificado:"/",
    certificadoLiberado: true
}
