import React from 'react'
import { Slider } from './index'

export default {
    title: "Componentes/Slider",
    component: Slider,
    argTypes: {
      titulo: {
        name:'titulo',
        description: 'Título da página *string*'
    },
    core: {
      name:'core',
      description: 'Array de objetos contendo informações do corpo do slider *array/object* \n\n **título:** Nome do profissional *string*\n\n **subtítulo:** Cargo e município do profissional *string* \n\n **corpo**: Depoimento do profissional*string*'
  },
  chamada: {
    name:'chamada',
    description: 'Rótulo do botão *string*'
},
link: {
  name:'link',
  description: 'Link do botão *URL*'
},
  },
};

const Template = (args) => <Slider {...args}/>

export const Default = Template.bind({});

Default.args ={
    titulo:"Nossas ferramentas já alcançaram mais de 50 municípios em todo o Brasil",
    core: [
      {
          "titulo": "Márcia",
          "subtitulo": "Coordenadora de APS  | Rio Paranaíba - MG",
          "corpo": "Excelente! De uma forma geral nos sentimos satisfeitos com o trabalho realizado pelos consultores, principalmente a forma de trabalho dos mesmos, que deram o máximo de atenção possível a nós e mostraram realmente na pratica a melhor forma de atingirmos os indicadores."
      },
      {
          "titulo": "Samarina Pereira",
          "subtitulo": "Coordenadora de APS  | Cruzeiro de Fortaleza - MG",
          "corpo": "Estávamos tentando entender o que significavam os 7% que faltavam para atingir a meta de vacinação. Descobrimos, depois de mais de um mês de procura, que eram duas crianças que faltavam. Se a gente tivesse conhecido o Impulso Previne antes, nós não teríamos gasto tanto tempo procurando essa informação."
      },
      {
          "titulo": "Francine",
          "subtitulo": "Coordenadora de APS  | Minaçu - GO",
          "corpo": "A equipe do Impulso Previne fez uma análise dos indicadores do município e nos trouxe dicas para o dia a dia das equipes da APS que ajudaram muito na performance dos indicadores. Uma parceria que tem dado certo!"
      }
  ],
    chamada: "TAMBÉM QUERO A CONSULTORIA",
    link: "url"
}

