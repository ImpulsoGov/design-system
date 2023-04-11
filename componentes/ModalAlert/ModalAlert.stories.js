import React from 'react'
import { Alert } from './index'
import { ModalAlert } from './index'
import { CardAlert } from './index'
import { NPS } from './index'


export default {
    title: "Componentes/ModalAlert",
    component: ModalAlert,
};



const Template = (args) => <ModalAlert {...args}/>
export const Webnar = Template.bind({});
Webnar.args ={
    Child : Alert,
    childProps : {
        titulos : {
            Titulo : "Citopatológico",
            SubTitulo : "Capacitação sobre o Previne Brasil:"
        },
        Info : [
            {
                icon : "https://media.graphassets.com/mK0XWA2qSyK3tSPER5SM",
                info : "05/04"
            },
            {
                icon : "https://media.graphassets.com/Bsq3OasQQxWNFuN0Ldhs",
                info : "19h às 21h (BRT)"
            },
            {
                icon : "https://media.graphassets.com/wb3wQPKRQY6o1Mb7pLzE",
                info : "Online"
            },
            {
                icon : "https://media.graphassets.com/Ui2qHF9IR9WyqEQv8H1v",
                info : "Gratuito"
            },
        ],
        cardProfissional : {
            profissional : "https://media.graphassets.com/2sqDyLFbTJylgJKYorEy",
            logo : "https://media.graphassets.com/et6MBNobT9OA39JxsjNi",
            nome : "Isabela dos Santos",
            cargo : "Especialista em Saúde Coletiva"
        },
        botao : {
            label : "QUERO ME INSCREVER",
            url : "https://bit.ly/inscricao-webinar-9"
        }
    }
}

export const NPS_ = Template.bind({});
NPS_.args ={
    Child : CardAlert,
    childProps : {
        child : NPS,
        childProps : {
            titulo : "Como você avalia sua experiência na área logada até agora?",
            user : "userID",
            submit : (user,avaliacao)=>console.log(user,avaliacao)
        }
    }
}