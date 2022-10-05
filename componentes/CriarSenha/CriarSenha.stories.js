import React from 'react'
import { CriarSenha } from './index'

export default {
    title: "Componentes/CriarSenha",
    component: CriarSenha,
}


export const Default = () => {
    return <CriarSenha
                titulo= "Crie sua senha"
                campos={{
                    senha:"Crie sua senha",
                    ConfirmarSenha:"Digite sua senha novamente",
                }}
                button = {{label:"entrar",link:""}}
            />
}