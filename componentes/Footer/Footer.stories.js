import React from 'react'
import { Footer } from './index'

export default {
    title: "Componentes/Footer",
    component: Footer,
}
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
