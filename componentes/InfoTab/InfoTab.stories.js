import React from "react";

import { InfoTab } from "./index";

export default {
  title: "Componentes/InfoTab",
  component: InfoTab,
  argTypes : {
    contentList :{
      name:'contentList',
      description:  'Array de objetos com os conteúdos da contentList *array/object* \n\n **leftTitle:** Título descritivo do componente contendo *string* \n\n **rightTitle**: Título descritivo do lado direito *string* \n\n**rightContent:** Texto explicativo  do lado direito *string* \n\n**buttonTitle:** Rótulo do botão *string* \n\n**buttonLink:** Link do botão *URL*'
    },
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


const Template = (args) => <InfoTab {...args}/>
export const Default = Template.bind({});
Default.args={
  contentList: props
}