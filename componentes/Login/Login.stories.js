import React from 'react'
import { Login } from './index'

export default {
    title: "Componentes/Login",
    component: Login,
}


export const Default = () => {
    return <Login
                titulo= "Faça o login para ver o painel de busca ativa"
                campos={[
                    {label:"E-mail"},
                    {label:"Senha"},
                ]}
                button = {{label:"entrar",link:""}}
            />
}