import React from 'react'
import { RecuperarSenha } from './index'

export default {
    title: "Componentes/RecuperarSenha",
    component: RecuperarSenha,
}
const Template = (args) => <RecuperarSenha {...args}/>


export const Default = Template.bind({});

Default.args ={
    titulos: {
                senha : "Recuperação de senha",
                sucesso : "Nova senha criada com sucesso!"
            },
    chamadas:{
        mail : "Digite o email cadastrado para receber um código de autorização de recuperação da senha.",
        codigo : "Digite abaixo o código recebido no e-mail cadastrado",
        senha : "Escolha uma nova senha",
        sucesso : "Agora é só entrar na área restrita com seu email e a nova senha."
    },
    botaoVoltar : {label:"voltar",function : ""},
    botaoProximo : {label:"proximo",function : ""},
}