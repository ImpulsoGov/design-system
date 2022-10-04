import React from 'react'
import { ImagemFundo } from './index'

export default {
    title: "Componentes/ImagemFundo",
    component: ImagemFundo,
}


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