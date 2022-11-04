import React from 'react'
import { ModalLogged } from '../ModalLogged'
import { Login } from '../Login'
import { Modal } from './index'

export default {
    title: "Componentes/Modal",
    component: Modal,
}
const Template = (args) => <Modal {...args}/>

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
export const LoggedIn = Template.bind({});
LoggedIn.args ={
    show: true,
    child:Logged
}
export const LogIn = Template.bind({});
LogIn.args ={
    show :true,
    child:login
}
