import React from 'react'
import { ButtonColor } from './index'

export default {
  title: "Componentes/ButtonColor",
  component: ButtonColor,
  argTypes: { label: { control: 'text' }}
}
const Template = (args) => <ButtonColor {...args}/>
export const Default = Template.bind({});
Default.args={
  label :"INDICADORES DE DESEMPENHO",
  link :"indicadores"
} 
