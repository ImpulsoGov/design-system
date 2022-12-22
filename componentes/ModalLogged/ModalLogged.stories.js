import React from 'react'
import { ModalLogged } from './index'

export default {
    title: "Componentes/ModalLogged",
    component: ModalLogged,
    argTypes:{
        nome: {
            name: 'name',
            description: '**nome:** Nome do usuário *string* \n\n  '
        },
        label: {
            name:'label',
            description:'Primeira letra do nome do usuário *string*'
        },
        cargo: {
            name:'cargo',
            description:'Cargo do usuário *string*'
        },
        equipe: {
            name:'equipe',
            description:'Código da equipe do usuário *string*'
        },
        button: {
            name:'button',
            description:'Objeto que recebe duas chaves referentes ao botão \n\n *object* **-label:** rótulo do botão *string* \n\n **-link:** URL do botão *URL*'
        },
        logout: {
            name:'logout',
            description:'Função para logout do usuário *function*'
        },
    },
};
const sout = ()=> console.log("logout")
const Template = (args) => <ModalLogged {...args}/>
export const Default = Template.bind({});
Default.args={
    nome : "Camila Alves",
    label : "C",
    cargo : "Coordenadora APS",
    equipe : "00003287",
    button : {label:"sair",link:""},
    logout : sout
}
