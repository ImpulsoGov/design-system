import React from 'react'
import { Footer } from './index'

export default {
    title: "Componentes/Footer",
    component: Footer,
    argTypes: {
        contactCopyright:{
            name: "contactCopyright",
            description:"**email:** email de contato da Impulso *string*, \n\n **copyright:** informações de copyright da Impulso *string*."
        },
        theme: {
            name: "theme",
            description: "**logoProjeto:** URL do logo do projeto referente *URL*, \n\n **logoImpulso:** URL do logo da Impulso *URL*, \n\n **cor:** sigla referente ao tema do projeto *string*."
        },
        menu: {
            name: "menu",
            description: "**label:** rótulo da opção *string*, \n\n **url:** URL da opção *URL*."
        },
        links: {
            name: "links",
            description: "**label:** rótulo do link *string*, \n\n **url:** URL da opção *URL*."
        },
        address: {
            name: "addres",
            description: "**first:** dados do endereço 1 *string*, \n\n **second:** dados do endereço 1 *string*."
        },
        socialMediaURLs: {
            name: "socialMediaURLs",
            description: "**url:** URL da rede social *URL*, \n\n **logo:** URL contendo logo da rede social *URL*."
        },
    },
};
const Template = (args) => <Footer {...args}/>
export const IP = Template.bind({});
IP.args={
    contactCopyright:{
        email: "contato@impulsogov.org",
        copyright: "© 2021 Impulso"
    },
    theme:{
        logoProjeto: "https://media.graphassets.com/Kal4aulRmYkqd0L6RBAd",
        logoImpulso: "https://media.graphassets.com/TqQYycQISEOiq0g2bOv0?_gl=1*z5qtb6*_ga*MzY0MzkwNjMwLjE2NTg1OTU1NjU.*_ga_G6FYGSYGZ4*MTY2NzUzMjc3OS4xMDUuMS4xNjY3NTMyODg0LjI1LjAuMA..",
        cor: "IP"
    },
    menu:
        [
            { label: "A Impulso Gov", url: "/impulsogov" },
            { label: "O Previne Brasil", url: "/previnebrasil" },
            { label: "Análise", url: "" },
            { label: "Consultoria", url: "/consultoria" }
        ],
    links:[
        {
            label: "Sobre", url: "/sobre"
        },
        {
            label: "Competências e Soluções", url: "/competencias"
        }
    ],

    address:{
        first: "",
        second: ""
    },

    socialMediaURLs:[
        {
            url: "http://instagram.com",
            logo: "https://media.graphassets.com/MJcBtSGSQPnCS2ZMSgge?_gl=1*2qa3tp*_ga*MzY0MzkwNjMwLjE2NTg1OTU1NjU.*_ga_G6FYGSYGZ4*MTY2NzUzMjc3OS4xMDUuMS4xNjY3NTMzNDgyLjM0LjAuMA.."
        }
    ]

}

export const SM = Template.bind({});
SM.args={
    contactCopyright:{
        email: "contato@impulsogov.org",
        copyright: "© 2021 Impulso"
    },
    theme:{
        logoProjeto: "https://media.graphassets.com/Xvh8jUvxTiaimkk4AD75",
        logoImpulso: "https://media.graphassets.com/TqQYycQISEOiq0g2bOv0?_gl=1*z5qtb6*_ga*MzY0MzkwNjMwLjE2NTg1OTU1NjU.*_ga_G6FYGSYGZ4*MTY2NzUzMjc3OS4xMDUuMS4xNjY3NTMyODg0LjI1LjAuMA..",
        cor: "SM"
    },
    menu:
        [
            { label: "A Impulso Gov", url: "/impulsogov" },
            { label: "O Previne Brasil", url: "/previnebrasil" },
            { label: "Análise", url: "" },
            { label: "Consultoria", url: "/consultoria" }
        ],
    links:[
        {
            label: "Sobre", url: "/sobre"
        },
        {
            label: "Competências e Soluções", url: "/competencias"
        }
    ],

    address:{
        first: "",
        second: ""
    },

    socialMediaURLs:[
        {
            url: "http://instagram.com",
            logo: "https://media.graphassets.com/MJcBtSGSQPnCS2ZMSgge?_gl=1*2qa3tp*_ga*MzY0MzkwNjMwLjE2NTg1OTU1NjU.*_ga_G6FYGSYGZ4*MTY2NzUzMjc3OS4xMDUuMS4xNjY3NTMzNDgyLjM0LjAuMA.."
        }
    ]

}
