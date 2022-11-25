import React from 'react'
import { ButtonColorSubmitMultiple } from './index'

export default {
  title: "Componentes/ButtonColorSubmitMultiple",
  component: ButtonColorSubmitMultiple,
  argTypes: { 
    label: { 
      name:"label",
      description: "Rótulo do botão *string*"
    },
    submit: {
      name: "submit",
      description: "Função de callback executada quando é realizado o click no botão *function*"
    },
  },
};
const Template = (args) => <ButtonColorSubmitMultiple {...args}/>
export const Default = Template.bind({});
Default.args={
  label :"INDICADORES DE DESEMPENHO",
  submit : (arg)=>console.log(arg),
} 