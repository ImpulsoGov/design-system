import React,{useState} from 'react'
import { ModalLogged } from '../ModalLogged'
import { MenuMoblie } from './index'

export default {
    title: "Componentes/MenuMoblie",
    component: MenuMoblie,
    argTypes: {
        menus: {
            name: 'menus',
            description:'Array de objetos contendo os dados do menu *array/object* \n\n **label:** Rótulo dos campos do menu \n\n **URL:** URL da opção do menu *URL*'
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
            description:'Função de estado que define as etapas do login *function*'
        },
        etapa: {
            name:'etapa',
            description:'Estado que indica as etapas do login. Se possui o valor 0 indica a etapa de logout. Se possui o valor 1 a etapa de login *int*'
        },
        logged : {
            name:'logged',
            description: 'Objeto que recebe os valores True quando o usuário está logado e False quando não está. *boolean*'
        },
        user: {
            name:'user',
            description:'Objeto contendo dados do usuário *object* \n\n **label:** Primeira letra do nome do usuário *string* \n\n **nome:** Nome do usuário *string* \n\n **cargo:** Cargo do usuário *string*'
        }
    },
};

const menus = [
                    { label: "A Impulso Gov", url: "/impulsogov" },
                    { label: "Resultados", url: "analise" },
                    { label: "Busca Ativa", url: "/busca-ativa-gestantes" },
                    { label: "Consultoria", url: "/consultoria" }
                ]

const Template = (args) => {
    const [etapa, setEtapa] = useState(0)
    args["setEtapa"] = etapa
    args["etapa"] = setEtapa

    return <MenuMoblie {...args}/>
}
export const LoggedIn = Template.bind({});
LoggedIn.args={
    menus:menus,
    logged:true,
    user:{
        label:"C",
        nome: "Camila Alves",
        cargo: "Impulser"
    }
}

export const LoggedOut = Template.bind({});
LoggedOut.args={
    menus:menus,
    logged:false,
    user:{
        label:"C",
        nome: "Camila Alves",
        cargo: "Impulser"
    }
}

