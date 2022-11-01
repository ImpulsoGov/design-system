import React from 'react'
import { ModalLogged } from './index'

export default {
    title: "Componentes/ModalLogged",
    component: ModalLogged,
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