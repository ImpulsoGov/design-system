import React from 'react'
import { Login } from './index'

export default {
    title: "Componentes/Login",
    component: Login,
    argTypes: {
        titulo: {
            name: 'título',
            description: 'Título da página *string*'
        },
        campos: {
            name: 'campos',
            description: 'Array de objetos contendo rótulos dos campos de login *array/object* \n\n**label:** rótulo dos campos *string*',
            control: { control: 'object' },
        },
        button: {
            name: 'button',
            description: 'Objeto contendo informações do botão *objectF*\n\n**label:** rótulo do botão *string* \n\n **link:** URL do botão *URL*',
            control: { control: 'object' },
        },
      },
}
const Template = (args) => <Login {...args}/>

const entrar = ()=> {
    const res = {
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJpbXB1bHNlckBpbXB1bHNvZ292Lm9yZyIsImV4cCI6MTY3MTgzNzIyN30.a1nX2_2vPONoYX_oRX79fmUGcrKj6WudHKXsYTMAWT4",
        "token_type": "bearer"
    }
    const res1 = {
        "detail": "E-mail Incorreto"
    }
    return res
    

}

export const Default = Template.bind({});

Default.args ={
    titulo: "Faça o login para ver o painel de busca ativa",
    button : {label:"entrar",link:""},
    entrar : entrar,
    validarCredencial : entrar
}
