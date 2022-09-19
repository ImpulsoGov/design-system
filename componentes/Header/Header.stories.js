import React from 'react'
import { Header } from './index'

export default {
  title: "Componentes/Header",
  component: Header,
  argTypes: { label: { control: 'text' } }
}

export const Default = () => {
  return <Header
    titulo="Consultoria para o seu município"
    tituloDestaque=" 100% gratuita"
    texto="Queremos ajudar você e seu município e temos um time preparado para isso. Você pode marcar uma consultoria ou tirar suas dúvidas de forma rápida e descomplicada. E o melhor: tudo de forma gratuita."
    botao={{ label: "Inscreva-se para a consultoria", url: "#formulario" }}
    chamada={{ label: "CONHEÇA NOSSAS SOLUÇÕES >", url: "" }}
  />
}

export const AGP = ()=> {
  return <Header
    titulo="Consultoria para o seu município"
    tituloDestaque=" 100% gratuita"
    texto="Queremos ajudar você e seu município e temos um time preparado para isso. Você pode marcar uma consultoria ou tirar suas dúvidas de forma rápida e descomplicada. E o melhor: tudo de forma gratuita."
    botao={{ label: "Inscreva-se para a consultoria", url: "#formulario" }}
    chamada={{ label: "CONHEÇA NOSSAS SOLUÇÕES >", url: "" }}
    theme="ColorAGP"
  />
}


