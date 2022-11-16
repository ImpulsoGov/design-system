import React from 'react'
import { ButtonColor } from './index'

export default {
  title: "Componentes/ButtonColor",
  component: ButtonColor,
  argTypes: { 
    label: { 
      name:"label",
      description: "Rótulo do botão *string*"
    },
    link: {
      name: "link",
      description: "URL do botão *URL*"
    },
  },
};
const Template = (args) => <ButtonColor {...args}/>
export const Default = Template.bind({});
Default.args={
  label :"INDICADORES DE DESEMPENHO",
  link :"indicadores"
} 
