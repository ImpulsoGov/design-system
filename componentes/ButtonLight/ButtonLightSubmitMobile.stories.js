import React from 'react'
import { ButtonLightSubmitMobile } from './index'

export default {
  title: "Componentes/ButtonLightSubmitMobile",
  component: ButtonLightSubmitMobile,
  argTypes: { 
    label: { 
      name:"label",
      description: "Rótulo do botão *string*"
    },
    submit: {
      name: "submit",
      description: "Função executada ao clicar no botão *function*"
    },
    disabled: {
      name: "disabled",
      description: "Define se o botão está desabilitado ou não *boolean*"
    }
  },
};
const Template = (args) => <ButtonLightSubmitMobile {...args}/>
export const SemIcone = Template.bind({});
SemIcone.args={
  label : "INDICADORES DE DESEMPENHO",
  submit: () => console.log('submit')
}

export const Desabilitado = Template.bind({});
Desabilitado.args={
  label : "INDICADORES DE DESEMPENHO",
  submit: () => console.log('submit'),
  disabled: true
}
