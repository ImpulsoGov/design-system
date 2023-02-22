import React from 'react'
import { ButtonLightSubmit } from './index'

export default {
  title: "Componentes/ButtonLightSubmit",
  component: ButtonLightSubmit,
  argTypes: { 
    label: { 
      name:"label",
      description: "Rótulo do botão *string*"
    },
    submit: {
      name: "submit",
      description: "Função executada ao clickar no botão *função*"
    },
  },
};
const Template = (args) => <ButtonLightSubmit {...args}/>
export const Default = Template.bind({});
Default.args={
  label : "Entrar",
  submit : ()=> console.log("logado")
}
export const Icon = Template.bind({});
Icon.args={
  label : "",
  submit : ()=> console.log("logado"),
  icon : "https://media.graphassets.com/8NbkQQkyRSiouNfFpLOG"
}
