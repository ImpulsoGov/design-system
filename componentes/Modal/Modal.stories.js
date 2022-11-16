import React from 'react'
import { ModalLogged } from '../ModalLogged'
import { Login } from '../Login'
import { Modal } from './index'

export default {
    title: "Componentes/Modal",
    component: Modal,
    argTypes: {
        show:{
            name: 'show',
            description:''
        },
        child: {
            name:'child',
            description: ''
        },
        Logged: {
            name:'Logged',
            description:' Informações do usuário logado **nome:** Nome do usuário *string* \n\n **Label:** Rótulo do usuário (letra inicial do nome) *string* \n\n **cargo**: Cargo do usuário *string* \n\n **button:** Botão para efetuar o logout \n\n**-label:** rótulo do botão *string* \n\n **link:** Link do botão *URL*'
        },
        login: {
            name:'login',
            description:'Página de login \n\n **titulo:** Título da página *string* \n\n **campos:** \n\n **-label:** rótulo dos campos e-mail e senha *string* \n\n **button:** Botão para efeturar o login \n\n **-label:** rótulo do botão *string* \n\n **-link:** URL do botão *URL*'
        },
    },
};
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
