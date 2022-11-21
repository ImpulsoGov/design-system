import React from 'react'
import { Header } from './index'

export default {
  title: "Componentes/Header",
  component: Header,
  argTypes: {
    titulo: {
      name: "titulo",
      description: "Título da página *string*"
    },
    tituloDestaque: {
      name: "tituloDestaque",
      description: "Título em destaque da página *sring*"
    },
    texto: {
      name: "texto",
      description: "Texto descritivo da página *string*"
    },
    botao: {
      name: "botao",
      description: "Objeto contendo informações do botão *object*\n\n**label:** rótulo do botão *string*, \n\n **URL**: URL do botão *URL*"
    },
    chamada: {
      name: "chamada",
      description: "Objeto contendo informações de chamada *object*\n\n **label:** rótulo da chamada *string*, \n\n **URL:** URL da chamada *URL*."
    },
    theme: {
      name: "theme",
      description: "Nome do tema referente ao projeto *string*",
      options: [null, 'ColorAGP'],
      control: { type: 'radio' },
    },
  },
};

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

  