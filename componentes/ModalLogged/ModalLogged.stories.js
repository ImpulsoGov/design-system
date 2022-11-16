import React from 'react'
import { ModalLogged } from './index'

export default {
    title: "Componentes/ModalLogged",
    component: ModalLogged,
    argTypes:{
        Default: {
            name: 'Default',
            description: 'Página logada do usuário \n\n **nome:** Nome do usuário *string* \n\n **label:** Rótulo do usuário (primeira letra do nome) *string* \n\n **cargo:** Cargo do usuário *string* \n\n **equipe:** Código da equipe do profissional *string* \n\n **Butotn:** botão de logout \n\n **-label:** rótulo do botão *string* \n\n **-link:** URL do botão *URL* \n\n **logout:** Função de logout do botão *func*'
        }
    }
}
const sout = ()=> console.log("logout")

export const Default = () => {
    return <ModalLogged
                nome = "Camila Alves"
                label = "C"
                cargo = "Coordenadora APS"
                equipe = "00003287"
                button = {{label:"sair",link:""}}
                logout = {sout}
            />
}