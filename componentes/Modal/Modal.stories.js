import React from 'react'
import { ModalLogged } from '../ModalLogged'
import { Login } from '../Login'
import { Modal } from './index'

export default {
    title: "Componentes/Modal",
    component: Modal,
}

const Logged = <ModalLogged
                    nome = "Camila Alves"
                    label = "C"
                    cargo = "Coordenadora APS"
                    button = {{label:"sair",link:""}}
                />

const login = <Login
                titulo= "Faça o login para ver o painel de busca ativa"
                campos={[
                    {label:"E-mail"},
                    {label:"Senha"},
                ]}
                button = {{label:"entrar",link:""}}
            />

export const LoggedIn = () => {
    return <Modal
                show = {true}
                child={Logged}
            />
}

export const LogIn = () => {
    return <Modal
                show = {true}
                child={login}
            />
}