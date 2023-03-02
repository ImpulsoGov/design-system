import React, { useState } from 'react'
import { ConteudoTrilha } from './index'

export default {
    title: "Componentes/ConteudoTrilha",
    component: ConteudoTrilha,
}
const Template = (args) =>{
    const [concluido,setConcluido] = useState(args.avaliacao.states.concluido);
    args.avaliacao.states.concluido = concluido
    args.avaliacao.states.setConcluido = setConcluido
    return <ConteudoTrilha {...args}/>
}

export const NaoConcluido = Template.bind({});
function teste(a,b,c,d){console.log(a,b,c,d)}
NaoConcluido.args ={
    conteudo:"https://www.youtube.com/embed/odEX6URNmJ4",
    avaliacao:{
        botaoConcluir:{label:"MARCAR COMO CONCLUÍDA",submit:teste,arg:['a','b','c']},
        botaoConcluido:{label:"CONCLUÍDA",submit:()=>console.log('')},
        concluido:false,
        states : {concluido : false},
        chamadaAvaliacao:"Como você avalia esse conteúdo?",
        req:teste
    },
    descricao: {
        trilha: "HIPERTENSÃO E DIABETES",
        modulo: "MÓDULO 2",
        moduloTitulo: "QUALIFICAÇÃO DO REGISTRO DE DADOS",
        titulo: "Introdução aos Indicadores de Hipertensão e Diabetes",
        texto: "s nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat adipiscing elit, sed dosiih ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo:s nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat adipiscing elit, sed dosiih ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo:s nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat adipiscing elit, sed dosiih ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo:s nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat adipiscing elit, sed dosiih ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo:s nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat adipiscing elit, sed dosiih ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo:s nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat adipiscing elit, sed dosiih ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo:s nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat adipiscing elit, sed dosiih ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo:"
    },
    materialComplementar:{
        titulo: "Material Complementar",
        card:{
            titulo: "Manual Impulso Previne",
            arquivo: "manual_impulso_previne.pdf",
            url: "https://media.graphassets.com/6cOfkxeyT7245Fn19kgU",
            icon: "https://media.graphassets.com/aFcM8jxSSyStgrfCL8Uw"
        }
    },
    buttonBar:{
        botaoVoltar:{
            label:"VOLTAR",
            url:"",
            icon:"https://media.graphassets.com/8NbkQQkyRSiouNfFpLOG"
        },
        botaoDuvidas:{
            label:"DÚVIDAS E SUGESTÕES",
            url:"",
            icon:"https://media.graphassets.com/yaYuyi0KS3WkqhKPUzro"
        },
        botaoProximo:{
            label:"PRÓXIMA",
            url:"",
            icon:"https://media.graphassets.com/FopDhDizS82SqCD9vD36"
        },
    }
}

export const Concluido = Template.bind({});

Concluido.args ={
    conteudo:{url:"https://www.youtube.com/embed/odEX6URNmJ4",tipo:"video"},
    avaliacao:{
        botaoConcluir:{
            label:"MARCAR COMO CONCLUÍDA",
            submit:(a,b,c)=>console.log(a,b,c),
            arg:['a','b','c']},
        botaoConcluido:{label:"CONCLUÍDA",submit:""},
        states : {concluido : true},
        nota:4,
        chamadaAvaliacao:"Como você avalia esse conteúdo?",
    },
    descricao: {
        trilha: "HIPERTENSÃO E DIABETES",
        modulo: "MÓDULO 2",
        moduloTitulo: "QUALIFICAÇÃO DO REGISTRO DE DADOS",
        titulo: "Introdução aos Indicadores de Hipertensão e Diabetes",
        texto: "s nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat adipiscing elit, sed dosiih ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo:s nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat adipiscing elit, sed dosiih ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo:s nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat adipiscing elit, sed dosiih ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo:s nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat adipiscing elit, sed dosiih ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo:s nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat adipiscing elit, sed dosiih ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo:s nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat adipiscing elit, sed dosiih ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo:s nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat adipiscing elit, sed dosiih ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo:"
    },
    materialComplementar:{
        titulo: "Material Complementar",
        card:{
            titulo: "Manual Impulso Previne",
            arquivo: "manual_impulso_previne.pdf",
            icon: "https://media.graphassets.com/aFcM8jxSSyStgrfCL8Uw",
            url: "https://media.graphassets.com/6cOfkxeyT7245Fn19kgU"
        },
    },
    buttonBar:{
        botaoVoltar:{
            label:"VOLTAR",
            url:"",
            icon:"https://media.graphassets.com/8NbkQQkyRSiouNfFpLOG"
        },
        botaoDuvidas:{
            label:"DÚVIDAS E SUGESTÕES",
            url:"",
            icon:"https://media.graphassets.com/yaYuyi0KS3WkqhKPUzro"
        },
        botaoProximo:{
            label:"PRÓXIMA",
            url:"",
            icon:"https://media.graphassets.com/FopDhDizS82SqCD9vD36"
        },
    }

}

export const ConcluidoPDF = Template.bind({});

ConcluidoPDF.args ={
    conteudo:{url:"https://media.graphassets.com/drL6Rld6Tze5XXFVAkQe",tipo:"pdf"},
    avaliacao:{
        botaoConcluir:{
            label:"MARCAR COMO CONCLUÍDA",
            submit:(a,b,c)=>console.log(a,b,c),
            arg:['a','b','c']},
        botaoConcluido:{label:"CONCLUÍDA",submit:""},
        states : {concluido : true},
        nota:4,
        chamadaAvaliacao:"Como você avalia esse conteúdo?",
    },
    descricao: {
        trilha: "HIPERTENSÃO E DIABETES",
        modulo: "MÓDULO 2",
        moduloTitulo: "QUALIFICAÇÃO DO REGISTRO DE DADOS",
        titulo: "Introdução aos Indicadores de Hipertensão e Diabetes",
        texto: "s nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat adipiscing elit, sed dosiih ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo:s nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat adipiscing elit, sed dosiih ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo:s nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat adipiscing elit, sed dosiih ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo:s nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat adipiscing elit, sed dosiih ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo:s nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat adipiscing elit, sed dosiih ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo:s nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat adipiscing elit, sed dosiih ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo:s nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat adipiscing elit, sed dosiih ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo:"
    },
    materialComplementar:{
        titulo: "Material Complementar",
        card:{
            titulo: "Manual Impulso Previne",
            arquivo: "manual_impulso_previne.pdf",
            icon: "https://media.graphassets.com/aFcM8jxSSyStgrfCL8Uw",
            url: "https://media.graphassets.com/6cOfkxeyT7245Fn19kgU"
        },
    },
    buttonBar:{
        botaoVoltar:{
            label:"VOLTAR",
            url:"",
            icon:"https://media.graphassets.com/8NbkQQkyRSiouNfFpLOG"
        },
        botaoDuvidas:{
            label:"DÚVIDAS E SUGESTÕES",
            url:"",
            icon:"https://media.graphassets.com/yaYuyi0KS3WkqhKPUzro"
        },
        botaoProximo:{
            label:"PRÓXIMA",
            url:"",
            icon:"https://media.graphassets.com/FopDhDizS82SqCD9vD36"
        },
    }

}

export const ConcluidoQuizz = Template.bind({});

ConcluidoQuizz.args ={
    conteudo:{url:"https://docs.google.com/forms/d/e/1FAIpQLSdDyiE_DBXKtHSvyY_q8FQxqMr632b-2uRaTpGgL0V-MSB2PQ/viewform?usp=pp_url&entry.1465547157=",tipo:"quizz"},
    avaliacao:{
        botaoConcluir:{
            label:"MARCAR COMO CONCLUÍDA",
            submit:(a,b,c)=>console.log(a,b,c),
            arg:['a','b','c']},
        botaoConcluido:{label:"CONCLUÍDA",submit:""},
        states : {concluido : true},
        nota:4,
        chamadaAvaliacao:"Como você avalia esse conteúdo?",
    },
    descricao: {
        trilha: "HIPERTENSÃO E DIABETES",
        modulo: "MÓDULO 2",
        moduloTitulo: "QUALIFICAÇÃO DO REGISTRO DE DADOS",
        titulo: "Introdução aos Indicadores de Hipertensão e Diabetes",
        texto: "s nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat adipiscing elit, sed dosiih ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo:s nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat adipiscing elit, sed dosiih ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo:s nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat adipiscing elit, sed dosiih ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo:s nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat adipiscing elit, sed dosiih ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo:s nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat adipiscing elit, sed dosiih ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo:s nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat adipiscing elit, sed dosiih ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo:s nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat adipiscing elit, sed dosiih ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo:"
    },
    materialComplementar:{
        titulo: "Material Complementar",
        card:{
            titulo: "Manual Impulso Previne",
            arquivo: "manual_impulso_previne.pdf",
            icon: "https://media.graphassets.com/aFcM8jxSSyStgrfCL8Uw",
            url: "https://media.graphassets.com/6cOfkxeyT7245Fn19kgU"
        },
    },
    buttonBar:{
        botaoVoltar:{
            label:"VOLTAR",
            url:"",
            icon:"https://media.graphassets.com/8NbkQQkyRSiouNfFpLOG"
        },
        botaoDuvidas:{
            label:"DÚVIDAS E SUGESTÕES",
            url:"",
            icon:"https://media.graphassets.com/yaYuyi0KS3WkqhKPUzro"
        },
        botaoProximo:{
            label:"PRÓXIMA",
            url:"",
            icon:"https://media.graphassets.com/FopDhDizS82SqCD9vD36"
        },
    }

}

