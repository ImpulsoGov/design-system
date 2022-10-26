import React from 'react'
import { ModalLogged } from '../ModalLogged'
import { Modal } from './index'

export default {
    title: "Componentes/Modal",
    component: Modal,
}

const Logged = <ModalLogged
                    nome = "Camila Alves"
                    cargo = "Coordenadora APS"
                    button = {{label:"sair",link:""}}
                />

export const LoggedIn = () => {
    return <Modal
                show = {true}
                child={Logged}
            />
}