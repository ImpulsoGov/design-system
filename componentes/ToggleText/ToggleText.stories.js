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

