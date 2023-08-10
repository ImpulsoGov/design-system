import React from 'react';
import { CardIP } from './index';

export default {
  title: "Componentes/CardIP",
  component: CardIP,
  argTypes: {
    descricao: {
      name: "descricao",
      description: "Descrição do card *string*"
    },
    titulo: {
      name: "titulo",
      description: "Titulo do card *string*"
    },
    indicador: {
      name: "indicador",
      description: "Valor do indicador do card *number*"
    },
    height: {
      name: "height",
      description: "Altura atribuída ao card *string* ou *number*"
    },
  }
}
const Template = (args) => <CardIP {...args}/>
export const Completo = Template.bind({});
Completo.args={
    titulo:"Usuários que frequentaram",
    indicador:"Brejo de Areia/MA",
    descricao:"que recebem dicas semanais sobre APS"
}
