import React from 'react'
import { ImagemFundo } from './index'

export default {
    title: "Componentes/ImagemFundo",
    component: ImagemFundo,
    argTypes : {
        imagem: {
            name: 'imagem',
            description: 'Imagem de fundo da página *URL*'
        },
        chamada: {
            name: 'chamada',
            description: 'Texto descritivo da página *string*'
        },
        chamadacolor: {
            name: 'chamadacolor',
            description: ''
        },
        subtexto: {
            name:'subtexto',
            description:'Texto descritivo da página *string*'
        },
        cards: {
            name:'cards',
            description:' Blocos de texto da página \n\n **title:** Título do bloco de texto *string* \n\n **body:** Corpo de texto do bloco *string*'
        },
        botao: {
            name:'botao',
            description: '**label: ** Rótulo do botão *string* \n\n **URL:** URL do botão *URL* '
        },
    },
};


export const Default = () => {
    return <ImagemFundo
                    imagem = "https://www.impulsoprevine.org/imagem-fundo.png"
                    chamada = "Painéis de indicadores da plataforma"
                    chamadacolor = ""
                    subtexto = "A plataforma está dividida em três blocos que reúnem dados e indicadores para acompanhamento da RAPS."
                    cards = {[
                        {
                            title : "Acompanhamento dos serviços CAPS",
                            body : "Resumo, Perfil do Usuário, novos Usuários, taxa de Abandono, atendimentos individuais, Procedimento por usuário, Produção"
                        },
                        {
                            title : "Outros serviços RAPS",
                            body : "Resumo, Ambulatório de saúde mental, Consultório na rua, redução de danos"
                        },
                        {
                            title : "Cuidado compartilhado de saúde mental",
                            body : "Perfil do Usuário, Cuidado compartilhado entre APS e CAPS, Cuidado compartilhado entre APS e Ambulatório, Cuidado compartilhado de saúde mental com a rede de Urgência e emergência"
                        }
                    ]}
                    botao = {
                                {
                                    label : "",
                                    url : ""
                                }
                    }
    />
}