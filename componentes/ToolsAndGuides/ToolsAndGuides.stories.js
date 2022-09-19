import React from "react";

import { ToolsAndGuides } from "./index";

const right = "Conheça e utilize nossas ferramentas e guias criados para apoiar governos municipais a enfrentar os desafios atuais da atenção primária, principalmente quanto ao financiamento da saúde e qualidade  do cuidado ofertado"

export default {
  title: "Componentes/ToolsAndGuides",
  component: ToolsAndGuides,
};

export const Default = () => {
  return (
    <ToolsAndGuides 
      leftTitle="Competências e Soluções"
      rightTitle="Ferramentas e Guias"
      rightContent={right}
      buttonTitle="Ver Todos"
      onClick={()=> console.log("click do botão")}
    />
  )
};
