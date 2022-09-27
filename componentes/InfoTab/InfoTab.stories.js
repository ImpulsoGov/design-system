import React from "react";

import { InfoTab } from "./index";

const props = [
  {
    leftTitle: "Saúde Mental",
    rightTitle: "O que é a plataforma de indicadores de Saúde Mental?",
    rightContent: "Uma plataforma gratuita, que utiliza bases de dados públicas para auxiliar na gestão dos serviços de saúde mental do município. Conheça mais sobre o trabalho realizado pela Impulso em parceria com o Instituto Cactus e o município de Aracaju (SE).",
    buttonTitle: "SOBRE SAÚDE MENTAL",
    onClick: () => console.log("primeiro botão")
  },
  {
    leftTitle: "Glossário",
    rightTitle: "Entenda como interpretar os indicadores",
    rightContent: "Acesse um siglário e a ficha técnica de nossos indicadores para compreender como eles são calculados, quais são as bases de dados que os alimentam, com qual periodicidade eles são atualizados e muito mais",
    buttonTitle: "entenda",
    onClick: () => console.log("segundo botão")
  },
]
export default {
  title: "Componentes/InfoTab",
  component: InfoTab,
};

export const Default = () => {
  return (
    <InfoTab
      contentList={props}
    />
  )
};
