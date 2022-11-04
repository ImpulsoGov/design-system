import React from 'react'
import { ButtonBar } from './index'
import { ButtonLight } from '../ButtonLight/index'


export default {
  title: "Componentes/ButtonBar",
  component: ButtonBar,
  argTypes: { label: { control: 'text' }}
}
const Template = (args) => <ButtonBar {...args}/>
export const Default = Template.bind({});
Default.args={
  child1 :<ButtonLight label="INDICADORES DE DESEMPENHO" link="/indicadores"/>,
  child2:<ButtonLight label="CAPITAÇÃO PONDERADA" link="/capitacao"/>,
  child3 :<ButtonLight label="INCENTIVOS A AÇÕES ESTRATÉGICAS" link="/acoes-estrategicas"/>,
}

