import React from 'react'
import {HomeBanner} from './index'

export default {
  title: "Componentes/HomeBanner",
  component: HomeBanner,
  argTypes: { 
    titulo: { 
      name: 'titulo' ,
      description: 'Título do componente *string*'
    },
    tituloDestaque : {
      name:'tituloDestaque',
      description:'Título em destaque*string*'
    },
    texto : {
      name:'texto',
      description:'Texto descritivo *string*',
    },
    theme: {
      name:'theme',
      description:'Tema referente ao projuto. Caso não seja selecionado nenhum tema, será utilizado o tema referente ao IP *string*'
    },
  },
};


const Template = (args) => <HomeBanner {...args}/>

export const SM = Template.bind({});

SM.args = {
  titulo:"Consultoria para o seu município",
  tituloDestaque: "destaque",
  texto:"Queremos ajudar você e seu município e temos um time preparado para isso. Você pode marcar uma consultoria ou tirar suas dúvidas de forma rápida e descomplicada. E o melhor: tudo de forma gratuita.",
  theme:"ColorSM"
}


export const IP = Template.bind({});

IP.args = {
  titulo:"Consultoria para o seu município",
  tituloDestaque: "destaque",
  texto:"Queremos ajudar você e seu município e temos um time preparado para isso. Você pode marcar uma consultoria ou tirar suas dúvidas de forma rápida e descomplicada. E o melhor: tudo de forma gratuita.",
  theme:""
}

