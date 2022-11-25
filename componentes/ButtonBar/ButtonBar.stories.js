import React from 'react'
import { ButtonBar } from './index'
import { ButtonLight } from '../ButtonLight/index'


export default {
  title: "Componentes/ButtonBar",
  component: ButtonBar,
  argTypes: { 
    child1: { 
      name: "child1",
      description: "Botão para o painel Indicadores de Desempenho *function* \n\n**label**: rótulo do botão *string* \n\n **link** Url da página do painel de indicadores *URL*"
    },
    child2:{
      name: "child2",
      description: "Botão para o painel Capitação Ponderada *function* \n\n**label**: rótulo do botão *string* \n\n **link** Url da página do painel de capitação ponderada *URL*"
    },
    child3: {
      name: "child3",
      description: "Botão para o painel Incentivo a Ações Estratégicas *function* \n\n**label**: rótulo do botão *string* \n\n **link** Url da página do painel de ações estratégicas *URL*"
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

