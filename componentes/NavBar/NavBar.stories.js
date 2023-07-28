import React from 'react'
import { NavBar } from './index'
import { useState } from 'react'

export default {
    title: "Componentes/NavBar",
    component: NavBar,
    argTypes: {
        user: {
            name: "Dados do Usuário",
            description: "Dados do usuário autenticado, utilizado pelo modal.\n\n**nome** : nome do usuário *string*,\n\n**cargo**: Cargo do usuário *string*,\n\n**button**: Rótulo do botão de sair *object*,\n\n**label**: Letra do botão de usuário quando autenticado *string*, \n\n**equipe**: Código INE *string*,\n\n**login**: Função de login *function*,\n\n**logout**: Função de logout *function* "
        },
        login: {
            name: "Área de login",
            description: "Informações exibidas na área de login.\n\n**titulo**: texto convidando usuário a fazer login *string*"
        },
        data:{
            name: "Lista de Municípios",
            description: "Lista de municípios do auto-complete no seletor de municípios *object array*.\n\n**nome**: Nome do município *string*,\n\n**uf**: Sigla da Unidade Federativa *string*"
        },
        theme: {
            name: "Tema",
            description: '**logoProjeto** : url do logo da barra de navegação *string/url*;\n\n**cor** : Tema que define o esquema de cores por projeto *string*:\n\n valores aceitos : *ColorIP, ColorAGP, ColorSM, White*',
        },
        menu:{
            name: "Menu",
            description: "Menus da barra de navegação.\n\n**label**: Rótulo do menu *string*,\n\n**url**: URL do menu *string/url*"
        },
        NavBarIconBranco:{
            description: "Ícone do menu hamburger no versão mobile, quando o tema ColorXXX é selecionado *string/url*"
        },
        NavBarIconDark:{
            description: "Ícone do menu hamburger no versão mobile, quando o tema White é selecionado *string/url*"
        }
      },
}
const Template = (args) => {
    const [municipio, setMunicipio] = useState("Recife - PE")
    const [active, setMode] = useState(true)
    args["showMenuMobile"] = {states:{active : active, setMode : setMode}}
    args["municipio"] = municipio
    args["setMunicipio"] = setMunicipio 
    return <NavBar {...args}/>

}

const dataSM =[
    {
        "nome": "Aracaju",
        "uf": "SE"
    },
    {
        "nome": "Aparecida de Goiânia",
        "uf": "GO"
    },
    {
        "nome": "Recife",
        "uf": "PE"
    },
]
const data = [
    {
        "nome": "Maraã",
        "uf": "AM"
    },
    {
        "nome": "Uruará",
        "uf": "PA"
    },
    {
        "nome": "Icó",
        "uf": "CE"
    },
    {
        "nome": "Mãe d'Água",
        "uf": "PB"
    },
    {
        "nome": "Lapão",
        "uf": "BA"
    },
    {
        "nome": "Cândido Mota",
        "uf": "SP"
    },
    {
        "nome": "Terra Roxa",
        "uf": "PR"
    },
    {
        "nome": "Castanheiras",
        "uf": "RO"
    },
    {
        "nome": "Chupinguaia",
        "uf": "RO"
    },
    {
        "nome": "Cujubim",
        "uf": "RO"
    },
    {
        "nome": "Bragança",
        "uf": "PA"
    },
    {
        "nome": "Brasil Novo",
        "uf": "PA"
    },
    {
        "nome": "Alta Floresta D'Oeste",
        "uf": "RO"
    },
    {
        "nome": "Ariquemes",
        "uf": "RO"
    },
    {
        "nome": "Cabixi",
        "uf": "RO"
    },
    {
        "nome": "Cacoal",
        "uf": "RO"
    },
    {
        "nome": "Cerejeiras",
        "uf": "RO"
    },
    {
        "nome": "Colorado do Oeste",
        "uf": "RO"
    },
    {
        "nome": "Corumbiara",
        "uf": "RO"
    },
    {
        "nome": "Costa Marques",
        "uf": "RO"
    },
    {
        "nome": "Espigão D'Oeste",
        "uf": "RO"
    },
    {
        "nome": "Guajará-Mirim",
        "uf": "RO"
    },
    {
        "nome": "Jaru",
        "uf": "RO"
    },
    {
        "nome": "Ji-Paraná",
        "uf": "RO"
    },
    {
        "nome": "Machadinho D'Oeste",
        "uf": "RO"
    },
    {
        "nome": "Nova Brasilândia D'Oeste",
        "uf": "RO"
    },
    {
        "nome": "Ouro Preto do Oeste",
        "uf": "RO"
    },
    {
        "nome": "Pimenta Bueno",
        "uf": "RO"
    },
    {
        "nome": "Presidente Médici",
        "uf": "RO"
    },
    {
        "nome": "Rio Crespo",
        "uf": "RO"
    },
    {
        "nome": "Rolim de Moura",
        "uf": "RO"
    },
    {
        "nome": "Santa Luzia D'Oeste",
        "uf": "RO"
    },
    {
        "nome": "Vilhena",
        "uf": "RO"
    },
    {
        "nome": "São Miguel do Guaporé",
        "uf": "RO"
    },
    {
        "nome": "Bagre",
        "uf": "PA"
    },
    {
        "nome": "Nova Mamoré",
        "uf": "RO"
    },
    {
        "nome": "Alvorada D'Oeste",
        "uf": "RO"
    },
    {
        "nome": "Alto Alegre dos Parecis",
        "uf": "RO"
    },
    {
        "nome": "Alto Paraíso",
        "uf": "RO"
    },
    {
        "nome": "Buritis",
        "uf": "RO"
    },
    {
        "nome": "Novo Horizonte do Oeste",
        "uf": "RO"
    },
    {
        "nome": "Cacaulândia",
        "uf": "RO"
    },
    {
        "nome": "Campo Novo de Rondônia",
        "uf": "RO"
    },
    {
        "nome": "Candeias do Jamari",
        "uf": "RO"
    },
    {
        "nome": "Governador Jorge Teixeira",
        "uf": "RO"
    },
    {
        "nome": "Itapuã do Oeste",
        "uf": "RO"
    },
    {
        "nome": "Ministro Andreazza",
        "uf": "RO"
    },
    {
        "nome": "Mirante da Serra",
        "uf": "RO"
    },
    {
        "nome": "Monte Negro",
        "uf": "RO"
    },
    {
        "nome": "Nova União",
        "uf": "RO"
    },
    {
        "nome": "Parecis",
        "uf": "RO"
    },
    {
        "nome": "Pimenteiras do Oeste",
        "uf": "RO"
    },
    {
        "nome": "Primavera de Rondônia",
        "uf": "RO"
    },
    {
        "nome": "São Felipe D'Oeste",
        "uf": "RO"
    },
]

const subMenus =  [
    {
      "label": "Acompanhamento dos serviços CAPS",
      "url": "/caps",
      "item": [
        {
            "label": "Resumo",
            "url": "/paineis?painel=1"
        },
        {
            "label": "Perfil de Usuários",
            "url": "/paineis?painel=2"
        },
        {
            "label": "Novos Usuários",
            "url": "/paineis?painel=3"
        },
        {
            "label": "Taxa de Abandono",
            "url": "/paineis?painel=4"
        },
        {
            "label": "Atendimentos Individuais",
            "url": "/paineis?painel=5"
        },
        {
            "label": "Procedimentos por Usuário",
            "url": "/paineis?painel=6"
        },
        {
            "label": "Produção",
            "url": "/paineis?painel=7"
        },

      ]
    },
    {
      "label": "Outros serviços RAPS",
      "url": "/outros-raps",
      "item":[
        {
            "label": "Resumo",
            "url": "/paineis?painel=1"
        },
        {
            "label": "Ambulatório de Saúde Mental",
            "url": "/paineis?painel=2"
        },
        {
            "label": "Consultório na Rua",
            "url": "/paineis?painel=3"
        },
        {
            "label": "Redução de Danos",
            "url": "/paineis?painel=4"
        },
      ]
    },
    {
      "label": "Cuidado compartilhado de saúde mental",
      "url": "/cuidado-compartilhado",
      "item":[
        {
            "label": "Resumo",
            "url": "/paineis?painel=1"
        },
        {
            "label": "APS e CAPS",
            "url": "/paineis?painel=2"
        },
        {
            "label": "APS e Ambulatório",
            "url": "/paineis?painel=3"
        },
        {
            "label": "RAPS e Atenção Hospitalar",
            "url": "/paineis?painel=4"
        },

      ]
    }
  ]

const loggedUser = {
    nome: "Camila Alves",
    cargo :"Coordenadora APS",
    button : {label:"sair"},
    label : "e",
    equipe : "000003456",
    login : ()=> console.log('logado'),
    logout : ()=> console.log('deslogado')
};

const entrar = async (mail,senha)=> {
    const numeroAleatorio = Math.round(Math.random() * 10);

    if (numeroAleatorio % 2 === 0) {
        return { "access_token": "token" }
    }
    return { "detail": "E-mail Incorreto" };
}

const notLoggedUser = {
    button : {label:"sair",link:""},
    label : "ENTRAR",
    login : ()=> console.log('logado'),
    logout : ()=> console.log('deslogado'),
    validarCredencial : entrar,
    validacao: (setResposta,validarCredencial,entrar,mail,senha,setLoading) => {
        if(mail.length < 1 || senha.length < 1){
            const msg_campo_vazio = "Preencha todos os campos"
            setResposta(msg_campo_vazio)
        }else{
            setTimeout(() => {
                validarCredencial(mail,senha).then((response)=>{
                if (typeof(response["access_token"]) !== "undefined"){
                    setResposta("");
                    setLoading(false);
                }else{
                    setResposta(response["detail"]);
                    setLoading(false);
                }
                })
            }, 5000)
        }
    }
};

const loggedReqsEsqueciSenha = {
    mail : async()=> {
                    const aguarde = async()=> await new Promise(r => setTimeout(r, 1000));
                    const res = aguarde().then(async(res)=>{
                        return true;
        })
        return await res
    },
    codigo : ()=> true,
    alterarSenha : ()=> true
};

const notLoggedReqsEsqueciSenha = {
    mail : async(mail)=> {
                    const aguarde = async()=> await new Promise(r => setTimeout(r, 2000));
                    const res = aguarde().then(async(res)=>{
                        if (mail == 'danilo') return true
                        return false 
        })
        return await res
    },
    codigo : async(mail,codigo)=>{
        const aguarde = async()=> await new Promise(r => setTimeout(r, 2000));
        const res = aguarde().then(async(res)=>{
            if (codigo.toString() == '123') return true
            return false;
        })
        return await res
    },
    alterarSenha : async()=>{
        const aguarde = async()=> await new Promise(r => setTimeout(r, 2000));
        const res = aguarde().then(async(res)=>{
            return true
        })
        return await res
    }
};

const reqsPrimeiroAcesso = {
    mail : async(mail)=> {
        const aguarde = async()=> await new Promise(r => setTimeout(r, 2000));
        const res = aguarde().then(async(res)=>{
            console.log(mail)
            if (mail == 'danilo') return true
            return false 
        })
        return await res
    },
    codigo : async(mail,codigo)=>{
        const aguarde = async()=> await new Promise(r => setTimeout(r, 2000));
        const res = aguarde().then(async(res)=>{
            console.log(codigo)
            if (codigo.toString() == '123') return true
            return false;
        })
        return await res
    },
    alterarSenha : async()=>{
        const aguarde = async()=> await new Promise(r => setTimeout(r, 2000));
        const res = aguarde().then(async(res)=>{
            return true
        })
        return await res
    }
};

export const ColorIPLogin = Template.bind({});
ColorIPLogin.args = {
    user: loggedUser,
    login: {
        titulo: "Faça o login para ver o painel de busca ativa"
    },
    data:data,
    theme:{
        logoProjeto: "https://media.graphassets.com/Kal4aulRmYkqd0L6RBAd",
        cor: "ColorIP",
        logoLink: "/"
    },
    menu:
        [
            { label: "A Impulso Gov", url: "/impulsogov" },
            { label: "Resultados", url: "analise" },
            { label: "Busca Ativa", url: "/busca-ativa-gestantes" },
            { label: "Consultoria", url: "/consultoria" },
        ],
    esqueciMinhaSenha : {
        reqs : loggedReqsEsqueciSenha,
        chamadas: {
            sucesso: "Agora é só entrar na área restrita com seu e-mail e a senha criada."
        }
    },
    ModalInicio:{
        titulo: "Faça o login para ver os dados restritos.",
        chamada: "Se esse é o seu primeiro acesso e sua senha ainda não foi criada, clique abaixo em ‘primeiro acesso’. Se você já possui uma senha, clique em ‘entrar’.",
        botaoPrincipal : {
            label: "entrar",
            submit: ()=>console.log("teste")
        },
        botaoSecundario : {
            label: "primeiro acesso",
            submit: ()=>console.log("teste")
        }
    },
    primeiroAcesso:{
        reqs: reqsPrimeiroAcesso,
        chamadas: {
            sucesso: "Agora é só entrar na área restrita com seu e-mail e a senha criada."
        }
    },
    NavBarIconBranco:"https://raw.githubusercontent.com/ImpulsoGov/ImpulsoPrevine/main/public/hamburgerIconBranco.svg",
    NavBarIconDark:"https://raw.githubusercontent.com/ImpulsoGov/ImpulsoPrevine/main/public/hamburgerIconDark.svg",
}

export const ColorIPLogout = Template.bind({});
ColorIPLogout.args = {
    user: notLoggedUser,
    login: {
        titulo: "Faça o login para ver o painel de busca ativa"
    },
    data:data,
    theme:{
        logoProjeto: "https://media.graphassets.com/Kal4aulRmYkqd0L6RBAd",
        cor: "ColorIP",
        logoLink: "/inicio"
    },
    seletorMunicipios: true,
    menu:
        [
            { label: "Busca Ativa", url: "/busca-ativa-gestantes" },
            { label: "Consultoria", url: "/consultoria" },
            {
                label: "Análise",
                url: "analise" ,
                sub : subMenus
            },
        ],
    NavBarIconBranco:"https://raw.githubusercontent.com/ImpulsoGov/ImpulsoPrevine/main/public/hamburgerIconBranco.svg",
    NavBarIconDark:"https://raw.githubusercontent.com/ImpulsoGov/ImpulsoPrevine/main/public/hamburgerIconDark.svg",
    esqueciMinhaSenha : {
        reqs : notLoggedReqsEsqueciSenha,
        chamadas: {
            sucesso: "Agora é só entrar na área restrita com seu e-mail e a senha criada."
        }
    },
    ModalInicio:{
        titulo: "Faça o login para ver os dados restritos.",
        chamada: "Se esse é o seu primeiro acesso e sua senha ainda não foi criada, clique abaixo em ‘primeiro acesso’. Se você já possui uma senha, clique em ‘entrar’.",
        cardAlert: "<p style='font-size:14px;'>A área logada é de acesso exclusivo para municípios parceiros. Para ver os resultados públicos do seu município, do Q3/22, <a href='analise'>clique aqui.</a></p>",
        botaoPrincipal : {
            label: "entrar",
            submit: ()=>console.log("teste")
        },
        botaoSecundario : {
            label: "primeiro acesso",
            submit: ()=>console.log("teste")
        },
        botaoSecundario : {
            label: "primeiro acesso",
        },
        botaoAjuda: {
          label: 'ESTOU COM PROBLEMAS NO LOGIN',
          link: 'https://docs.google.com/forms/d/e/1FAIpQLSe1i7zkVOz-T24xfD3F4XCM2J-hYnoTKYCMHG3EVMLUoBNpMg/viewform?usp=sf_link'
        },
    },
    primeiroAcesso:{
        reqs: reqsPrimeiroAcesso,
        chamadas: {
            sucesso: "Agora é só entrar na área restrita com seu e-mail e a senha criada."
        }
    }

}
export const ColorAGPLogin = Template.bind({});
ColorAGPLogin.args = {
    user: loggedUser,
    login: {
        titulo: "Faça o login para ver o painel de busca ativa"
    },
    data:data,
    theme:{
        logoProjeto: "https://media.graphassets.com/0q9BBD4xRCivV24aSg80",
        cor: "ColorAGP",
        logoLink: "/"
    },
    menu:
        [
            { label: "A Impulso Gov", url: "/impulsogov" },
            { label: "O Previne Brasil", url: "/previnebrasil" },
            { label: "Análise", url: "analise" },
            { label: "Consultoria", url: "/consultoria" }
        ],
    
    subtitles:[
        { label: "Indicadores de Desempenho", url: "/indicadores" },
        { label: "Capitação Ponderada", url: "/capitacao" },
        { label: "Ações Estratégicas", url: "/acoes-estrategicas" },
    ],
    NavBarIconBranco:"https://raw.githubusercontent.com/ImpulsoGov/ImpulsoPrevine/main/public/hamburgerIconBranco.svg",
    NavBarIconDark:"https://raw.githubusercontent.com/ImpulsoGov/ImpulsoPrevine/main/public/hamburgerIconDark.svg",
    esqueciMinhaSenha : {
        reqs : loggedReqsEsqueciSenha,
        chamadas: {
            sucesso: "Agora é só clicar no botão ENTRAR com seu e-mail e a senha criada."
        }
    },
    ModalInicio:{
        titulo: "Faça o login para ver os dados restritos.",
        chamada: "Se esse é o seu primeiro acesso e sua senha ainda não foi criada, clique abaixo em ‘primeiro acesso’. Se você já possui uma senha, clique em ‘entrar’.",
        botaoPrincipal : {
            label: "entrar",
            submit: ()=>console.log("teste")
        },
        botaoSecundario : {
            label: "primeiro acesso",
            submit: ()=>console.log("teste")
        }
    },
    primeiroAcesso:{
        reqs: reqsPrimeiroAcesso,
        chamadas: {
            sucesso: "Agora é só clicar no botão ENTRAR com seu e-mail e a senha criada."
        }
    }
}
export const ColorSMLogout = Template.bind({});
ColorSMLogout.args ={
    user: notLoggedUser,
    login: {
        titulo: "Faça o login para ver os indicadores do seu município."
    },
    data:dataSM,
    theme:{
        logoProjeto: "https://media.graphassets.com/Xvh8jUvxTiaimkk4AD75",
        cor: "ColorSM",
        logoLink: "/inicio"
    },
    menu:
        [
            { label: "Início", url: "/" },
            { label: "Sobre", url: "/sobre" },
            { label: "Glossário", url: "/glossario" },
            {
                label: "Análise",
                url: "analise" ,
                sub : subMenus
            },
        ],
    subtitles:[
        { label: "Indicadores de Desempenho", url: "/indicadores" },
        { label: "Capitação Ponderada", url: "/capitacao" },
        { label: "Ações Estratégicas", url: "/acoes-estrategicas" },
    ],
    seletorMunicipios: true,
    NavBarIconBranco:"https://raw.githubusercontent.com/ImpulsoGov/ImpulsoPrevine/main/public/hamburgerIconBranco.svg",
    NavBarIconDark:"https://raw.githubusercontent.com/ImpulsoGov/ImpulsoPrevine/main/public/hamburgerIconDark.svg",
    esqueciMinhaSenha : {
        reqs : notLoggedReqsEsqueciSenha,
        chamadas: {
            sucesso: "Agora é só clicar no botão ENTRAR com seu e-mail e a senha criada."
        }
    },
    ModalInicio:{
        titulo: "Faça o login para ver os indicadores do seu município.",
        chamada: "Se você já possui uma senha, clique em ENTRAR. Caso o seu município seja parceiro e seu acesso já foi autorizado, clique em PRIMEIRO ACESSO para criar a sua senha.",
        botaoPrincipal : {
            label: "entrar",
            submit: ()=>console.log("teste")
        },
        botaoSecundario : {
            label: "primeiro acesso",
            submit: ()=>console.log("teste")
        }
    },
    primeiroAcesso:{
        reqs: reqsPrimeiroAcesso,
        chamadas: {
            sucesso: "Agora é só clicar no botão ENTRAR com seu e-mail e a senha criada."
        }
    }
}
export const WhiteSM = Template.bind({});
WhiteSM.args ={
    user: loggedUser,
    login: {
        titulo: "Faça o login para ver os indicadores do seu município."
    },
    data:dataSM,
    theme:{
        logoProjeto: "https://media.graphassets.com/4vNw6WPEQwq0PvwCaW8D",
        cor: "WhiteSM",
        logoLink: "/inicio"
    },
    menu:
        [
            { label: "Início", url: "/" },
            { label: "Sobre", url: "/sobre" },
            { label: "Glossário", url: "/glossario" },
            {
                label: "Análise",
                url: "analise" ,
                sub : subMenus
            },
        ],
    subtitles:[
        { label: "Indicadores de Desempenho", url: "/indicadores" },
        { label: "Capitação Ponderada", url: "/capitacao" },
        { label: "Ações Estratégicas", url: "/acoes-estrategicas" },
    ],
    seletorMunicipios: true,
    NavBarIconBranco:"https://raw.githubusercontent.com/ImpulsoGov/ImpulsoPrevine/main/public/hamburgerIconBranco.svg",
    NavBarIconDark:"https://raw.githubusercontent.com/ImpulsoGov/ImpulsoPrevine/main/public/hamburgerIconDark.svg",
    esqueciMinhaSenha : {
        reqs : loggedReqsEsqueciSenha,
        chamadas: {
            sucesso: "Agora é só clicar no botão ENTRAR com seu e-mail e a senha criada."
        }
    },
    ModalInicio:{
        titulo: "Faça o login para ver os dados restritos.",
        chamada: "Se esse é o seu primeiro acesso e sua senha ainda não foi criada, clique abaixo em ‘primeiro acesso’. Se você já possui uma senha, clique em ‘entrar’.",
        botaoPrincipal : {
            label: "entrar",
            submit: ()=>console.log("teste")
        },
        botaoSecundario : {
            label: "primeiro acesso",
            submit: ()=>console.log("teste")
        }
    },
    primeiroAcesso:{
        reqs: reqsPrimeiroAcesso,
        chamadas: {
            sucesso: "Agora é só clicar no botão ENTRAR com seu e-mail e a senha criada."
        }
    }
}

export const White = Template.bind({});
White.args={
    user: loggedUser,
    login: {
        titulo: "Faça o login para ver o painel de busca ativa"
    },
    data:data,
    theme:{
        logoProjeto: "https://media.graphassets.com/3Vvlszx1RraNWFWyfgaT",
            cor: "White",
        logoLink: "/inicio"
    },
    menu:
        [
            { label: "A Impulso Gov", url: "/impulsogov" },
            { label: "Consultoria", url: "/consultoria" },
            {
                label: "Análise",
                url: "analise" ,
                sub : subMenus
            },
        ],
    subtitles:[
        { label: "Indicadores de Desempenho", url: "/indicadores" },
        { label: "Capitação Ponderada", url: "/capitacao" },
        { label: "Ações Estratégicas", url: "/acoes-estrategicas" },
    ],
    seletorMunicipios: true,
    NavBarIconBranco:"https://raw.githubusercontent.com/ImpulsoGov/ImpulsoPrevine/main/public/hamburgerIconBranco.svg",
    NavBarIconDark:"https://raw.githubusercontent.com/ImpulsoGov/ImpulsoPrevine/main/public/hamburgerIconDark.svg",
    esqueciMinhaSenha : {
        reqs : loggedReqsEsqueciSenha,
        chamadas: {
            sucesso: "Agora é só clicar no botão ENTRAR com seu e-mail e a senha criada."
        }
    },
    ModalInicio:{
        titulo: "Faça o login para ver os dados restritos.",
        chamada: "Se esse é o seu primeiro acesso e sua senha ainda não foi criada, clique abaixo em ‘primeiro acesso’. Se você já possui uma senha, clique em ‘entrar’.",
        botaoPrincipal : {
            label: "entrar",
            submit: ()=>console.log("teste")
        },
        botaoSecundario : {
            label: "primeiro acesso",
            submit: ()=>console.log("teste")
        },
        botaoSecundario : {
            label: "primeiro acesso",
        },
        botaoAjuda: {
          label: 'ESTOU COM PROBLEMAS NO LOGIN',
          link: 'https://docs.google.com/forms/d/e/1FAIpQLSe1i7zkVOz-T24xfD3F4XCM2J-hYnoTKYCMHG3EVMLUoBNpMg/viewform?usp=sf_link'
        },
    },
    primeiroAcesso:{
        reqs: reqsPrimeiroAcesso,
        chamadas: {
            sucesso: "Agora é só clicar no botão ENTRAR com seu e-mail e a senha criada."
        }
    }
}

export const WhiteLogout = Template.bind({});
WhiteLogout.args={
    user: notLoggedUser,
    login: {
        titulo: "Faça o login para ver o painel de busca ativa"
    },
    data:data,
    theme:{
        logoProjeto: "https://media.graphassets.com/3Vvlszx1RraNWFWyfgaT",
        cor: "White",
        logoLink: "/inicio"
    },
    menu:
        [
            { label: "A Impulso Gov", url: "/impulsogov" },
            { label: "Consultoria", url: "/consultoria" },
            {
                label: "Análise",
                url: "analise" ,
                sub : subMenus
            },
        ],
    subtitles:[
        { label: "Indicadores de Desempenho", url: "/indicadores" },
        { label: "Capitação Ponderada", url: "/capitacao" },
        { label: "Ações Estratégicas", url: "/acoes-estrategicas" },
    ],
    seletorMunicipios: true,
    NavBarIconBranco:"https://raw.githubusercontent.com/ImpulsoGov/ImpulsoPrevine/main/public/hamburgerIconBranco.svg",
    NavBarIconDark:"https://raw.githubusercontent.com/ImpulsoGov/ImpulsoPrevine/main/public/hamburgerIconDark.svg",
    esqueciMinhaSenha : {
        reqs : notLoggedReqsEsqueciSenha,
        chamadas: {
            sucesso: "Agora é só clicar no botão ENTRAR com seu e-mail e a senha criada."
        }
    },
    ModalInicio:{
        titulo: "Faça o login para ver os dados restritos.",
        chamada: "Se esse é o seu primeiro acesso e sua senha ainda não foi criada, clique abaixo em ‘primeiro acesso’. Se você já possui uma senha, clique em ‘entrar’.",
        botaoPrincipal : {
            label: "entrar",
            submit: ()=>console.log("teste")
        },
        botaoSecundario : {
            label: "primeiro acesso",
            submit: ()=>console.log("teste")
        },
        botaoAjuda : {
            label : "Estou com problemas",
            link : "/"
        }
    },
    primeiroAcesso:{
        reqs: reqsPrimeiroAcesso,
        chamadas: {
            sucesso: "Agora é só clicar no botão ENTRAR com seu e-mail e a senha criada."
        }
    }
}

