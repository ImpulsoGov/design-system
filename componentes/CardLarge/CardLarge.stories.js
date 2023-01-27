import React from 'react'
import { CardLargeGrid } from './index'

export default {
    title: "Componentes/CardLarge",
    component: CardLargeGrid
}
const Template = (args) => <CardLargeGrid {...args}/>

export const Grid = Template.bind({});

Grid.args ={
    cards:[
        {
            icon : "https://media.graphassets.com/6cOfkxeyT7245Fn19kgU",
            titulo: "Listas Nominais",
            texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            links : [
                {label:"Pré-Natal",link : ""},
                {label:"Pré-Natal",link : ""},
                {label:"Pré-Natal",link : ""},
            ],
        },
        {
            icon : "https://media.graphassets.com/6cOfkxeyT7245Fn19kgU",
            titulo: "Listas Nominais",
            texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            links : [
                {label:"Pré-Natal",link : ""},
            ],
        },
    ],
    obs:"Para sair da área logada, basta ir no seu usuário no menu superior e clicar em ‘SAIR’."
}