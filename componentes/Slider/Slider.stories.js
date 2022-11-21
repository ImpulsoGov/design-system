import React from 'react'
import { Slider } from './index'

export default {
    title: "Componentes/Slider",
    component: Slider,
    argTypes: {
      titulo: {
        name:'titulo',
        description: 'Título da página *string*'
    },
    subtitulo: {
        name:'subtitulo',
        description:' Subtítulo da página *string*'
    },
    corpo: {
        name:'corpo',
        description:'Corpo da página *string*'
    },
  },
};

const Template = (args) => <Slider {...args}/>

export const Default = Template.bind({});

Default.args ={
    titulo:"Título da página",
    subtitulo:"Subtítulo da página",
    corpo:"corpo da página"
}

