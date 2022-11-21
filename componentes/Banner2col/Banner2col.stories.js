import React from 'react'
import {Banner2col} from './index'

export default {
    title: "Componentes/Banner2col",
    component: Banner2col,
    argTypes: {
        chamada: {
            name: 'chamada',
            description:'Texto descritivo *string*'
        },
        chamadacolor: {
            name: 'chamadacolor',
            description:'Código de cor do tema *string*'
        },
        subtexto: {
            name: 'subtexto',
            description:'Texto descritivo da página *string*'
        },
        cards: {
            name: 'cards',
            description:'Array de objetos contendo informações dos cards *array*'
        },
    },
};

const cards = [ { alt:'card', desc:'texto'}]

const Template = (args) => <Banner2col {...args}/>
export const Default = Template.bind({});
Default.args={
    chamada: "",
    chamadacolor:"",
    subtexto:"",
    cards:{cards},
}
