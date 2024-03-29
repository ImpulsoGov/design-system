import React from "react";

import { ToolsAndGuides } from "./index";

const right = "Conheça e utilize nossas ferramentas e guias criados para apoiar governos municipais a enfrentar os desafios atuais da atenção primária, principalmente quanto ao financiamento da saúde e qualidade  do cuidado ofertado"

export default {
  title: "Componentes/ToolsAndGuides",
  component: ToolsAndGuides,
  argTypes: {
    leftTitle: {
      name: 'leftTitle',
      description:'Título do lado esquerdo*string*'
    },
    rightTitle: {
      name: 'rightTitle',
      description: 'Título do lado direito *string*'
    },
    rightContent: {
      name: 'rightContent',
      description: 'Objeto contendo o conteúdo do lado direito da página *object/string*'
    },
    buttonTitle: {
      name:'buttonTitle',
      description: 'Rótulo do botão *string*'
    },
    onClick:{
      name: 'onClick',
      description: 'Função de click do botão *function*'
    }
  }
};


const Template = (args) => <ToolsAndGuides {...args}/>

export const Default = Template.bind({});
Default.args={
  leftTitle : "Competências e Soluções",
  rightTitle : "Ferramentas e Guias",
  rightContent : right,
  buttonTitle : "Ver Todos",
  onClick : ()=> console.log("click do botão")
}
