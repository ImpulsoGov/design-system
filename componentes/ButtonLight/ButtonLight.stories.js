import React from 'react'
import { ButtonLight } from './index'

export default {
  title: "Componentes/ButtonLight",
  component: ButtonLight,
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
const Template = (args) => <ButtonLight {...args}/>
export const Default = Template.bind({});
Default.args={
  label : "INDICADORES DE DESEMPENHO",
  link : "indicadores"
}
