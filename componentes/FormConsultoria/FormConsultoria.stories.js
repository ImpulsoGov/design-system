import React from 'react'
import {FormConsultoria} from './index'

export default {
  title: "Componentes/FormConsultoria",
  component: FormConsultoria,
  argTypes: { 
    title: { 
      name: "title",
      description: "Título do componente *string*"
    },
    mail: {
      name: "mail",
      description: "Texto em destaque *string*"
    },
    link: {
      name: "link",
      description: "URL acionada após o click no botão *URL*"
    },
    button: {
      name: "button",
      description: "Rótulo do botão *string*"
    },
  },
};

const Template = (args) => <FormConsultoria {...args}/>
export const Default = Template.bind({});
Default.args={
  title:"Se interessou pela nossa consultoria? Preencha o formulário abaixo para fazer sua inscrição.Em caso de dúvidas, escreva para ",
  mail:"previne@impulsogov.org",
  link:"https://docs.google.com/forms/d/e/1FAIpQLSce3dYZO3tdRmNq-Oy8Z_0IFu5RXtwDDsSw6BXLaWx7BBfv_Q/viewform?embedded=true",
  button:"enviar"
}
