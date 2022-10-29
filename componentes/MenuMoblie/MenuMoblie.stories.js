import React,{useState} from 'react'
import { ModalLogged } from '../ModalLogged'
import { MenuMoblie } from './index'

export default {
    title: "Componentes/MenuMoblie",
    component: MenuMoblie,
}

const menus = [
                    { label: "A Impulso Gov", url: "/impulsogov" },
                    { label: "Resultados", url: "analise" },
                    { label: "Busca Ativa", url: "/busca-ativa-gestantes" },
                    { label: "Consultoria", url: "/consultoria" }
                ]


export const LoggedIn = () => {
    const [etapa, setEtapa] = useState(0)

    return <MenuMoblie
                menus={menus}
                setEtapa={setEtapa}
                etapa={etapa}
                logged={true}
                user={{
                    label:"C",
                    nome: "Camila Alves",
                    cargo: "Impulser"
                }}

            />
}

export const LoggedOut = () => {
    const [etapa, setEtapa] = useState(0)

    return <MenuMoblie
                menus={menus}
                setEtapa={setEtapa}
                etapa={etapa}
                logged={false}
            />
}