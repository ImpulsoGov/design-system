import React from 'react'
import { CardLargeGrid } from './index'

export default {
    title: "Componentes/CardLarge",
    component: CardLargeGrid,
    argTypes: {
        cards: {
            name: "cards",
            description: "Lista de cards exibidos no grid. \n\n Propriedades de cada card:\n\n **icon**: ícone exibido no card *URL* \n\n **titulo**: título do card *string* \n\n **texto**: descrição do tema abordado pelo card *string* \n\n **links**: lista de links exibidos no card *array*"
        },
        obs: {
            name: 'obs',
            description: 'Mensagem de observação para usuário *string*'
        },
        theme: {
            name: 'theme',
            description: 'Tema de cor aplicado aos cards *string* \n\n Valores aceitos: ColorIP, ColorSM'
        }
    }
}

const Template = (args) => <CardLargeGrid {...args}/>

export const ColorIP = Template.bind({});
ColorIP.args ={
    cards:[
        {
            icon : "https://media.graphassets.com/6cOfkxeyT7245Fn19kgU",
            titulo: "Listas Nominais",
            texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            links : [
                {label:"Pré-Natal",link : ""},
                {label:"Pré-Natal",link : ""},
                {label:"Pré-Natal",link : ""},
                {label:"Pré-Natal",link : ""},
                {label:"Pré-Natal",link : ""},
            ],
        },
        {
            icon : "https://media.graphassets.com/6cOfkxeyT7245Fn19kgU",
            titulo: "Listas Nominais",
            texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            links : [
                {label:"Pré-Natal",link : ""},
            ],
        },
    ],
    obs:"Para sair da área logada, basta ir no seu usuário no menu superior e clicar em ‘SAIR’.",
    theme: "ColorIP"
}

export const ColorSM = Template.bind({});
ColorSM.args ={
    cards:[
        {
            icon : "https://media.graphassets.com/6cOfkxeyT7245Fn19kgU",
            titulo: "Acompanhamento dos serviços CAPS",
            links : [
                {label:"Resumo",link : ""},
                {label:"Perfil dos usuários",link : ""},
                {label:"Novos usuários",link : ""},
                {label:"Taxa de abandono",link : ""},
                {label:"Atendimentos individuais",link : ""},
                {label:"Procedimento por usuário",link : ""},
                {label:"Produção",link : ""},
            ],
        },
        {
            icon : "https://media.graphassets.com/6cOfkxeyT7245Fn19kgU",
            titulo: "Outros serviços RAPS",
            links : [
                {label:"Resumo",link : ""},
                {label:"Ambulatório de Saúde Mental",link : ""},
                {label:"Consultório na Rua",link : ""},
                {label:"Redução de Danos", link : ""},
            ],
        },
        {
            icon : "https://media.graphassets.com/6cOfkxeyT7245Fn19kgU",
            titulo: "Cuidado compartilhado de saúde mental",
            links : [
                {label:"Resumo",link : ""},
                {label:"Cuidado compartilhado entre APS e CAPS",link : ""},
                {label:"Cuidado compartilhado entre APS e Ambulatório",link : ""},
                {label:"Cuidado compartilhado de Saúde Mental com a rede de Urgência  e Emergência",link : ""},
            ],
        },
    ],
    obs:"Para sair da área logada, basta ir no seu usuário no menu superior e clicar em ‘SAIR’.",
    theme: "ColorSM"
}
