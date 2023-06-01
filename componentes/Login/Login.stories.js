import React from 'react';
import { Login } from './index';

export default {
    title: "Componentes/Login",
    component: Login,
    argTypes: {
        titulo: {
            name: 'título',
            description: 'Título da página *string*'
        },
        campos: {
            name: 'campos',
            description: 'Array de objetos contendo rótulos dos campos de login *array/object* \n\n**label:** rótulo dos campos *string*',
            control: { control: 'object' },
        },
        button: {
            name: 'button',
            description: 'Objeto contendo informações do botão *objectF*\n\n**label:** rótulo do botão *string* \n\n **link:** URL do botão *URL*',
            control: { control: 'object' },
        },
    },
};
const entrar = async (mail, senha) => {
    const numeroAleatorio = Math.round(Math.random() * 10);

    console.log(numeroAleatorio);

    if (numeroAleatorio % 2 === 0) {
        return { "access_token": "token" };
    }
    return { "detail": "E-mail Incorreto" };
};

const args = {
    titulo: "Faça o login para ver o painel de busca ativa",
    botaoSecundario: {
        label: "voltar",
        submit: () => console.log(true)
    },
    entrar: entrar,
    validarCredencial: entrar,
    validacao: (setResposta, validarCredencial, entrar, mail, senha, setLoading) => {
        if (mail.length < 1 || senha.length < 1) {
            const msg_campo_vazio = "Preencha todos os campos";
            setResposta(msg_campo_vazio);
        } else {
            setTimeout(() => {
                validarCredencial(mail, senha).then((response) => {
                    if (typeof (response["access_token"]) !== "undefined") {
                        setResposta("");
                        setLoading(false);
                    } else {
                        setResposta(response["detail"]);
                        setLoading(false);
                    }
                });
            }, 5000);
        }
    }
};

const botaoPrincipalIP = {
    label: "entrar",
    submit: () => console.log(false),
    theme: "ColorIP"
};

const botaoPrincipalSM = {
    label: "entrar",
    submit: () => console.log(false),
    theme: "ColorSM"
};

const Template = (args) => <Login { ...args } />;

export const Default = Template.bind({});

Default.args = {
    ...args,
    botaoPrincipal: botaoPrincipalIP
};

export const ColorSM = Template.bind({});

ColorSM.args = {
    ...args,
    botaoPrincipal: botaoPrincipalSM
};
