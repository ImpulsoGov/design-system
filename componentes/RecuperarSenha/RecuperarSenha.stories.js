import React from 'react'
import { RecuperarSenha } from './index'

export default {
    title: "Componentes/RecuperarSenha",
    component: RecuperarSenha,
    argTypes: {
        theme: {
            name: 'theme',
            description: 'Tema de cor aplicado ao componente *string* \n\n Valores aceitos: ColorIP, ColorSM'
        }
    }
}

const reqs = {
    mail : async(mail)=> {
        const aguarde = async()=> await new Promise(r => setTimeout(r, 2000));
        const res = aguarde().then(async(res)=>{
            console.log(mail)
            if (mail == '390.270.498-58') return true
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
    },
};

const Template = (args) => <RecuperarSenha {...args}/>

export const ColorIP = Template.bind({});

ColorIP.args ={
    titulos: {
        mail : "Bem vindo(a)! Precisamos que você crie uma senha para acessar os dados.",
        codigo : "Validação do e-mail",
        senha : "Recuperação de senha",
        sucesso : "Nova senha criada com sucesso!"
            },
    chamadas:{
        mail : "Digite o e-mail cadastrado para receber um código de autorização de criação da senha.",
        aviso : "Caso não lembre o e-mail cadastrado, entre em contato conosco pelo grupo de mensagens do seu município com a Impulso Gov.",
        codigo : "Digite abaixo o código recebido no e-mail cadastrado",
        senha : "Crie sua senha de acesso",
        sucesso : "Agora é só entrar na área restrita com seu e-mail e a senha criada."
    },
    botaoVoltar : {label:"voltar",function : ""},
    botaoProximo : {label:"proximo",function : ""},
    botaoSucesso : "Inicio",
    showEsqueciSenha : ()=>{console.log("teste")},
    reqs,
}

export const ColorSM = Template.bind({});

ColorSM.args ={
    titulos: {
        mail : "Bem vindo(a)! Precisamos que você crie uma senha para acessar os dados.",
        codigo : "Validação do e-mail",
        senha : "Recuperação de senha",
        sucesso : "Nova senha criada com sucesso!"
            },
    chamadas:{
        mail : "Digite o e-mail cadastrado para receber um código de autorização de criação da senha.",
        aviso : "Caso não lembre o e-mail cadastrado, entre em contato conosco pelo grupo de mensagens do seu município com a Impulso Gov.",
        codigo : "Digite abaixo o código recebido no e-mail cadastrado",
        senha : "Crie sua senha de acesso",
        sucesso : "Agora é só clicar no botão ENTRAR com seu e-mail e a senha criada."
    },
    botaoVoltar : {label:"voltar",function : ""},
    botaoProximo : {label:"proximo",function : ""},
    botaoSucesso : "Inicio",
    showEsqueciSenha : ()=>{console.log("teste")},
    reqs,
    theme : "ColorSM",
}
