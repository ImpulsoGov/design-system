import React from 'react'
import {FormConsultoria} from './index'

export default {
  title: "Componentes/FormConsultoria",
  component: FormConsultoria,
  argTypes: { label: { control: 'text' }}
}

export const Default = () => {
  return <FormConsultoria
  title="Se interessou pela nossa consultoria? Preencha o formulário abaixo para fazer sua inscrição.Em caso de dúvidas, escreva para "
  mail="previne@impulsogov.org"
  link="https://docs.google.com/forms/d/e/1FAIpQLSce3dYZO3tdRmNq-Oy8Z_0IFu5RXtwDDsSw6BXLaWx7BBfv_Q/viewform?embedded=true"
  button="enviar"
/>  

}


