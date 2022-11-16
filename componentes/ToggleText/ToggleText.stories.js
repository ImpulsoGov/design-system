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
    Default: {
      name: 'Default',
      description:'Item da toggle list \n\n **title:** Título do toggle *string* \n\n **list:** Lista contendo as siglas suas explicações *list/*string* \n\n **rightSubtitle:** Subtítulo do lado direito do item *string* \n\n **leftSubtitle**: Título do lado esquerdo do item *string* \n\n **imgLink:** Imagem do item *URL*'
    },
    lista: {
      name: 'lista',
      description: 'Lista contendo explicações sobre as siglas utilizadas \n\n **initials:** rótulo da sigla *string* \n\n **label:** explicação da sigla *string* '
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

