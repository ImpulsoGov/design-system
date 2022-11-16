import React,{useState} from 'react'
import { ModalLogged } from '../ModalLogged'
import { MenuMoblie } from './index'

export default {
    title: "Componentes/MenuMoblie",
    component: MenuMoblie,
    argTypes: {
        menus: {
            name: 'menus',
            description:'**label:** Rótulo dos campos do menu \n\n **URL:** URL da opção do menu *URL*'
        },
        LoggedIn: {
            name: 'LoggedIn',
            description: 'Função para login do usuário *func*'
        },
        LoggedOut:{
            name:'LoggedOut',
            description:'Função para logout do usuário *func*'
        },
    },
};

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