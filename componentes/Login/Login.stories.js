import React from 'react'
import { Login } from './index'

export default {
    title: "Componentes/Login",
    component: Login,
    argTypes: {
        titulo: {
            name: 'título',
            description: 'Título descritivo da página *string*'
        },
        campos: {
            name: 'campos',
            description: '**label:** rótulo dos campos *string*',
            control: { control: 'object' },
        },
        button: {
            name: 'button',
            description: '**label:** rótulo do botão *string* \n\n **link:** URL do botão *URL*',
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

