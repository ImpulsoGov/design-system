import React from 'react'
import { ButtonLogin } from './index'

export default {
  title: "Componentes/ButtonLogin",
  component: ButtonLogin,
  argTypes: { 
    label: { 
      name:"label",
      description: "Rótulo do botão *string*"
    },
  },
};
const Template = (args) => <ButtonLogin {...args}/>
export const Default = Template.bind({});
Default.args={
  label : "Entrar",
}
