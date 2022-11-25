import React,{useState} from 'react'
import { ModalLogged } from '../ModalLogged'
import { MenuMoblie } from './index'

export default {
    title: "Componentes/MenuMoblie",
    component: MenuMoblie,
    argTypes: {
        menus: {
            name: 'menus',
            description:'Array de objetos contendo os dados do menu *array* \n\n **label:** Rótulo dos campos do menu \n\n **URL:** URL da opção do menu *URL*'
        },
        LoggedIn: {
            name: 'LoggedIn',
            description: 'Função para login do usuário *function*'
        },
        LoggedOut:{
            name:'LoggedOut',
            description:'Função para logout do usuário *function*'
        },
        setEtapa: {
            name:'setEtapa',
            description:'Função que define as etapas do login *function*'
        },
        etapa: {
            name:'etapa',
            description:'Objeto que indica as etapas do login. Se possui o valor 0 indica a etapa de logout. Se possui o valor 1 a etapa de login *int*'
        },
        logged : {
            name:'logged',
            description: 'Objeto que recebe os valores True quando o usuário está logado e False quando não está. *boolean*'
        },
        user: {
            name:'user',
            description:'Array d eobjetos contendo dados do usuário *array* \n\n **label:** Primeira letra do nome do usuário *string* \n\n **nome:** Nome do usuário *string* \n\n **cargo:** Cargo do usuário *string*'
        }
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