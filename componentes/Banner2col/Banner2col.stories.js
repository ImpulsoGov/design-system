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
            description:'Texto descritivo da chamada com outra cor *string*'
        },
        subtexto: {
            name: 'subtexto',
            description:'Texto descritivo da página *string*'
        },
        cards: {
            name: 'cards',
            description:'Array de objetos contendo informações dos cards *array/object* \n\n **title**: Título do card *string* \n\n **body:** Corpo do card *string*'
        },
    },
};

const cards = [ { title:'titulo', body:'corpo'}]

const Template = (args) => <Banner2col {...args}/>
export const Default = Template.bind({});
Default.args={
    chamada: "chamada",
    chamadacolor:"chamada color",
    subtexto:"subtexto",
    cards:cards,
}
