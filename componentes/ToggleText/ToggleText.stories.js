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
      description:'Array de objetos contendo siglas e suas respectivas explicações *array*\n\n **initials:** rótulo da sigla *string* \n\n **label:** explicação da sigla *string* '
    },
    rightSubtitle:{
      name: 'rightSubtitle',
      description: 'Subtítulo do lado direito do item *string* \n\n **leftSubtitle**: Título do lado esquerdo do item *string* \n\n **imgLink:** Imagem do item *URL*'
    },
    leftSubtitle:{
      name: 'leftSubtitle',
      description: 'Subtítulo do lado esquerdo do item *string*' 
    },
    imgLink: {
      name:'imgLink',
      description:'Link da imagem do item *URL*'
    },
  },
};

export const Default = () => {
  return (
    <ToggleText
      title="Entenda como interpretar os indicadores Impulso"
      list={list}
      rightSubtitle="Siglas"
      leftSubtitle="Glossário"
      imgLink={"https://media.graphassets.com/WRihknmuQGKEPw9xmMOy"}
    />
  )
};

