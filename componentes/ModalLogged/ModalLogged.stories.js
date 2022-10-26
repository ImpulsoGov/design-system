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
                cargo = "Coordenadora APS"
                button = {{label:"sair",link:""}}
                logout = {sout}
            />
}