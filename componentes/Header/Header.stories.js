import React from 'react'
import { Header } from './index'

export default {
  title: "Componentes/Header",
  component: Header,
}

const Template = (args) => <Header {...args}/>

export const AGP = Template.bind({});

AGP.args = {
  titulo:"Consultoria para o seu município",
  tituloDestaque:" 100% gratuita",
  texto:"Queremos ajudar você e seu município e temos um time preparado para isso. Você pode marcar uma consultoria ou tirar suas dúvidas de forma rápida e descomplicada. E o melhor: tudo de forma gratuita.",
  botao:{ label: "Inscreva-se para a consultoria", url: "#formulario" },
  chamada:{ label: "CONHEÇA NOSSAS SOLUÇÕES >", url: "" },
  theme:"ColorAGP"
}


export const IP = Template.bind({});

IP.args = {
  titulo:"Consultoria para o seu município",
  tituloDestaque:" 100% gratuita",
  texto:"Queremos ajudar você e seu município e temos um time preparado para isso. Você pode marcar uma consultoria ou tirar suas dúvidas de forma rápida e descomplicada. E o melhor: tudo de forma gratuita.",
  botao:{ label: "Inscreva-se para a consultoria", url: "#formulario" },
  chamada:{ label: "CONHEÇA NOSSAS SOLUÇÕES >", url: "" },
  };

  