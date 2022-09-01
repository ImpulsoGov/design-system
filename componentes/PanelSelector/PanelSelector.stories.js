import React from "react";
import { PanelSelector } from "./index";

const tabs = [
  {
    label: "RESUMO",
    link: "https://www.delftstack.com/pt/api/",
  },
  {
    label: "APS E CAPS",
    link: "https://www.delftstack.com/pt/tutorial/",
  },
  {
    label: "APS E AMBULATÓRIO",
    link: "https://www.delftstack.com/pt/howto/css/hide-scrollbar-css/#defina-scrollbar-width-como-none-para-ocultar-a-barra-de-rolagem-em-css",
  },
  {
    label: "CAPS E REUE",
    link: "https://www.delftstack.com/howto/node.js/",
  },
  {
    label: "RAPS E ATENÇÃO HOSPITALAR",
    link: "https://www.delftstack.com/howto/typescript/",
  },
  {
    label: "RAPS E ATENÇÃO HOSPITALAR",
    link: "https://developer.mozilla.org/pt-BR/docs/Web/CSS/overflow",
  },

  ,
];
const props = {
  list: tabs,
  title: "Cuidado compartilhado de Saúde Mental entre as redes de saúde",
};
export default {
  title: "Componentes/PanelSelector",
  component: PanelSelector,
};

export const Default = () => {
  return (
    <PanelSelector
      list={tabs}
      title="Cuidado compartilhado de Saúde Mental entre as redes de saúde"
    />
  );
};
