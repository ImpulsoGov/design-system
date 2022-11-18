import React from 'react'
import { Login } from './index'

export default {
    title: "Componentes/Login",
    component: Login,
    argTypes: {
        campos: {
            description: 'demo description',
            control: { control: 'object' },
        },
        button: {
            description: 'demo description',
            control: { control: 'object' },
        },
      },
}
const Template = (args) => <Login {...args}/>

export const Default = Template.bind({});

Default.args ={
    titulo: "Faça o login para ver o painel de busca ativa",
    campos:[
        {label:"E-mail"},
        {label:"Senha"},
    ],
    button : {label:"entrar",link:""}
}

export const Default2 = Template.bind({});

Default2.args ={
    titulo: "Faça o login para ver o painel de busca ativa",
    campos:[
        {label:"E-mail"},
        {label:"Senha"},
    ],
    button : {label:"entrar",link:""}
}
