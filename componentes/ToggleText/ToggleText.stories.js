import React from "react";

import { ToggleText } from "./index";

const list = [
  {
    initials: "AIH",
    label: "Autorização de Internação Hospitalar"
  },
  {
    initials: "AIH",
    label: "Autorização de Internação Hospitalar"
  },
  {
    initials: "AIH",
    label: "Autorização de Internação Hospitalar"
  },
  {
    initials: "AIH",
    label: "Autorização de Internação Hospitalar"
  },
  {
    initials: "AIH",
    label: "Autorização de Internação Hospitalar"
  },
  {
    initials: "AIH",
    label: "Autorização de Internação Hospitalar"
  },
]

export default {
  title: "Componentes/ToggleText",
  component: ToggleText,
  argTypes: {
    title: {
      name:'title',
      description:'Título do texto *string*'
    },
    list: {
      name: 'list',
      description:'Array de objetos contendo siglas e suas respectivas explicações *array/object*\n\n **initials:** rótulo da sigla *string* \n\n **label:** explicação da sigla *string* '
    },
    rightSubtitle:{
      name: 'rightSubtitle',
      description: 'Subtítulo do lado direito  *string* \n\n **leftSubtitle**: Título do lado esquerdo *string* \n\n **imgLink:** Imagem do item *URL*'
    },
    leftSubtitle:{
      name: 'leftSubtitle',
      description: 'Subtítulo do lado esquerdo *string*' 
    },
    imgLink: {
      name:'imgLink',
      description:'Link da imagem do item *URL*'
    },
  },
};


const Template = (args) => <ToggleText {...args}/>

export const Default = Template.bind({});
Default.args={
  title:"Entenda como interpretar os indicadores Impulso",
  list:list,
  rightSubtitle:"Siglas",
  leftSubtitle:"Glossário",
  imgLink:"https://media.graphassets.com/WRihknmuQGKEPw9xmMOy"
}




