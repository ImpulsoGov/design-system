import React from "react";

import { InfoTab } from "./index";

export default {
  title: "Componentes/InfoTab",
  component: InfoTab,
  argTypes : {
    leftTitle: {
      name: 'leftTitle',
      description: 'Título descritivo da página contendo o nome do projuto *string*'
    },
    rightTitle: {
      name: 'rightTitle',
      description: 'Título descritivo sobre o que é a plataforma *string*'
    },
    rightContent: {
      name: 'rightContent',
      description: 'Texto explicativo sobre a plataforma *string*'
    },
    buttonTitle: {
      name: 'buttonTitle',
      description: 'Rótulo do botão *string*'
    },
    buttonLink: {
      name:'buttonLink',
      description: 'Link do botão *URL*'
    }
  },
}
const props = [
  {
    leftTitle: "Saúde Mental",
    rightTitle: "O que é a plataforma de indicadores de Saúde Mental?",
    rightContent: "Uma plataforma gratuita, que utiliza bases de dados públicas para auxiliar na gestão dos serviços de saúde mental do município. Conheça mais sobre o trabalho realizado pela Impulso em parceria com o Instituto Cactus e o município de Aracaju (SE).",
    buttonTitle: "SOBRE SAÚDE MENTAL",
    buttonLink: "/"
  },
  {
    leftTitle: "Glossário",
    rightTitle: "Entenda como interpretar os indicadores",
    rightContent: "Acesse um siglário e a ficha técnica de nossos indicadores para compreender como eles são calculados, quais são as bases de dados que os alimentam, com qual periodicidade eles são atualizados e muito mais",
    buttonTitle: "entenda",
    buttonLink: "/2"
  },
]


export const Default = () => {
  return (
    <InfoTab
      contentList={props}
    />
  )
};
