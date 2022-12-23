import React from 'react'
import { ButtonColorSubmit } from './index'

export default {
  title: "Componentes/ButtonColorSubmit",
  component: ButtonColorSubmit,
  argTypes: { 
    label: { 
      name:"label",
      description: "Rótulo do botão *string*"
    },
    submit: {
      name: "submit",
      description: "Função de callback executada quando é realizado o click no botão *function*"
    },
    arg: {
        name:'arg',
        description: "Argumento passado para função de callback através da prop submit *argumento*"
    },
  },
};
const Template = (args) => <ButtonColorSubmit {...args}/>
export const Default = Template.bind({});
Default.args={
  label :"INDICADORES DE DESEMPENHO",
  submit : (arg)=>console.log(arg),
  arg : "teste"
} 
