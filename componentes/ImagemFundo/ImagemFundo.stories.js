import React from 'react'
import { ImagemFundo } from './index'

export default {
    title: "Componentes/ImagemFundo",
    component: ImagemFundo,
    argTypes : {
        imagem: {
            name: 'imagem',
            description: 'Imagem de fundo do componente *URL*'
        },
        chamada: {
            name: 'chamada',
            description: 'Texto descritivo *string*'
        },
        chamadacolor: {
            name: 'chamadacolor',
            description: 'Código de cor da chamada *string*'
        },
        subtexto: {
            name:'subtexto',
            description:'Texto descritivo *string*'
        },
        cards: {
            name:'cards',
            description:' Array de objetos contendo os dados dos blocos de texto da página *array/object* \n\n **title:** Título do bloco de texto *string* \n\n **body:** Corpo de texto do bloco *string*'
        },
        botao: {
            name:'botao',
            description: 'Dicionário contendo dados do botão **label: ** Rótulo do botão *string* \n\n **URL:** URL do botão *URL* '
        },
    },
};

const cards_text = [
  {
      title : "Acompanhamento dos serviços CAPS",
      body : "Resumo, Perfil do Usuário, novos Usuários, taxa de Abandono, atendimentos individuais, Procedimento por usuário, Produção"
  },
  {
      title : "Outros serviços RAPS",
      body : "Resumo, Ambulatório de saúde mental, Consultório na rua, redução de danos"
  },
  {
      title : "Cuidado compartilhado de saúde mental",
      body : "Perfil do Usuário, Cuidado compartilhado entre APS e CAPS, Cuidado compartilhado entre APS e Ambulatório, Cuidado compartilhado de saúde mental com a rede de Urgência e emergência"
  }
]

const cards_list = [
  {
    "title": "Acompanhamento dos serviços CAPS",
    "body": [
      {
        "label": "Resumo",
        "url": "/"
      },
      {
        "label": "Perfil do Usuário",
        "url": "/"
      },
      {
        "label": "Novos Usuários",
        "url": "/"
      },
      {
        "label": "Taxa de Abandono",
        "url": "/"
      },
      {
        "label": "Atendimentos Individuais",
        "url": "/"
      },
      {
        "label": "Procedimento por Usuário",
        "url": "/"
      },
      {
        "label": "Produção",
        "url": "/"
      }
    ]
  },
  {
    "title": "Outros serviços RAPS",
    "body": [
      {
        "label": "Resumo",
        "url": "/"
      },
      {
        "label": "Ambulatório de Saúde Mental",
        "url": "/"
      },
      {
        "label": "Consultório na Rua",
        "url": "/"
      },
      {
        "label": "Redução de Danos",
        "url": "/"
      }
    ]
  },
  {
    "title": "Cuidado compartilhado de saúde mental",
    "body": [
      {
        "label": "Perfil do Usuário",
        "url": "/"
      },
      {
        "label": "Cuidado compartilhado entre APS e CAPS",
        "url": "/"
      },
      {
        "label": "Cuidado compartilhado entre APS e Ambulatório",
        "url": "/"
      },
      {
        "label": "Cuidado compartilhado de saúde mental com a rede de Urgência e emergência",
        "url": "/"
      }
    ]
  }
]


const Template = (args) => <ImagemFundo {...args}/>

export const CardText = Template.bind({});

CardText.args = {
  imagem : "https://www.impulsoprevine.org/imagem-fundo.png",
  chamada : "Painéis de indicadores da plataforma",
  chamadacolor : "",
  subtexto : "A plataforma está dividida em três blocos que reúnem dados e indicadores para acompanhamento da RAPS.",
  cards : cards_text,
  botao : {
      label : "",
      url : ""
      }
}

export const CardList = Template.bind({});

CardList.args = {
  imagem : "https://www.impulsoprevine.org/imagem-fundo.png",
  chamada : "Painéis de indicadores da plataforma",
  chamadacolor : "",
  subtexto : "A plataforma está dividida em três blocos que reúnem dados e indicadores para acompanhamento da RAPS.",
  cards : cards_list,
  botao : {
      label : "",
      url : ""
      }
}





