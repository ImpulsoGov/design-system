import React from 'react';
import { Margem } from './index';
import { CardIP } from '../CardIP';

export default {
  title: 'Componentes/Margem',
  component: Margem,
  argTypes: {
    componente: {
      name: 'componente',
      description: 'Componente a ser exibido com a margem'
    },
  }
}

const componente = <CardIP
  titulo='Usuários que frequentaram'
  indicador='Brejo de Areia/MA'
  descricao='que recebem dicas semanais sobre APS'
/>

const Template = (args) => <Margem {...args}/>

export const Completo = Template.bind({});

Completo.args={
  componente
}
