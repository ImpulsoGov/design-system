import React from 'react'
import { CardLargeGridInicioSM } from './index'

export default {
    title: "Componentes/CardLargeInicioComplementar",
    component: CardLargeGridInicioSM,
    argTypes: {
        cards: {
            name: "cards",
            description: "Lista de cards exibidos no grid. \n\n Propriedades de cada card:\n\n **icon**: ícone exibido no card *URL* \n\n **titulo**: título do card *string* \n\n **texto**: descrição do tema abordado pelo card *string* \n\n **links**: lista de links exibidos no card *array*"
        },
        cardsExtra:{
            name:"cardExtra",
            description: "Lista de cards extras exibidos na 3 coluna."
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

const Template = (args) => <CardLargeGridInicioSM {...args}/>

export const InicioSM = Template.bind({});
InicioSM.args ={
    cards:[
        {
            icon : "https://media.graphassets.com/6cOfkxeyT7245Fn19kgU",
            titulo: "Materiais complementares",
            texto: "Encontrei aqui as respostas para as dúvidas enviadas ao longo da trilha de capacitação.",
            link : ""
        },
        {
            icon : "https://media.graphassets.com/6cOfkxeyT7245Fn19kgU",
            titulo: "Central de ajuda",
            texto: "Encontre aqui as respostas para as dúvidas enviadas ao longo da trilha de capacitação.",
            link : ""
        }
    ],
    cardsExtra:[
        {
            icon : "https://media.graphassets.com/6cOfkxeyT7245Fn19kgU",
            titulo: "Solicitar novo usuário",
            link: ""
        },
        {
            icon : "https://media.graphassets.com/6cOfkxeyT7245Fn19kgU",
            titulo: "Feedbacks e sugestões",
            link: ""
        }
    ],
    obs:"Para sair da área logada, basta ir no seu usuário no menu superior e clicar em ‘SAIR’.",
    theme: "ColorSM"
}
