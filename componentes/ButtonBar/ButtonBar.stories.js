import React from 'react'
import { ButtonBar } from './index'
import { ButtonLight } from '../ButtonLight/index'


export default {
  title: "Componentes/ButtonBar",
  component: ButtonBar,
  argTypes: { 
    child1: { 
      name: "child1",
      description: "Recebe componete react *componente react*"
    },
    child2:{
      name: "child2",
      description: "Recebe componete react *componente react*"
    },
    child3: {
      name: "child3",
      description: "Recebe componete react *componente react*"
    },
  },
};
const Template = (args) => <ButtonBar {...args}/>
export const Default = Template.bind({});
Default.args={
  child1 :<ButtonLight label="INDICADORES DE DESEMPENHO" link="/indicadores"/>,
  child2:<ButtonLight label="CAPITAÇÃO PONDERADA" link="/capitacao"/>,
  child3 :<ButtonLight label="INCENTIVOS A AÇÕES ESTRATÉGICAS" link="/acoes-estrategicas"/>,
}

