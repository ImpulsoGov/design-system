import React from 'react'
import { ButtonLight } from './index'

export default {
  title: "Componentes/ButtonLight",
  component: ButtonLight,
  argTypes: { 
    icone : {
      posicao : { 
        control : 'text',
    },
      tipo : { control : 'text' },
      description: 'Insere Ícone',
    },
    label: { 
      name:"label",
      description: "Rótulo do botão *string*"
    },
    link: {
      name: "link",
      description: "URL do botão *URL*"
    },
  },
};
const Template = (args) => <ButtonLight {...args}/>
export const SemIcone = Template.bind({});
SemIcone.args={
  label : "INDICADORES DE DESEMPENHO",
  link : "indicadores"
}

export const ComIconeDireita = Template.bind({});
ComIconeDireita.args={
  icone : {
    posicao: 'right',
    url: 'https://media.graphassets.com/8NbkQQkyRSiouNfFpLOG'
  },
  label : "VOLTAR",
  link : "/"
}

export const ComIconeDireitaWhatsapp = Template.bind({});
ComIconeDireitaWhatsapp.args={
  icone : {
    posicao: 'right',
    url: 'https://media.graphassets.com/X8qAQFkrTLapqBDlfkMO'
  },
  label : "ENTRAR NO GRUPO DO WHATSAPP",
  link : "/"
}

export const ComIconeDireitaDuvidas = Template.bind({});
ComIconeDireitaDuvidas.args={
  icone : {
    posicao: 'right',
    url: 'https://media.graphassets.com/Eu5DAy5SnCFbpRetwKSl'
  },
  label : "DÚVIDAS E SUGESTÕES",
  link : "/"
}