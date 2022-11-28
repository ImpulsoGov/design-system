import React from 'react'
import {TextCol} from './index'

export default {
  title: "Componentes/TextCol",
  component: TextCol,
  argTypes: { 
    titulo: { 
      name: 'titulo',
      description:'Título do componente *string*'
    },
    corpo: {
      name: 'corpo',
      description:'Texto descritivo *string*'
    },
  },
};

const Template = (args) => <TextCol {...args}/>

export const Default = Template.bind({});
Default.args={
  titulo :  "Como funciona?",
  corpo : "Três encontros gratuitos com nosso time de especialistas, que preparam diagnóstico, plano de ação e acompanhamento de resultados personalizados para o seu município."
}


