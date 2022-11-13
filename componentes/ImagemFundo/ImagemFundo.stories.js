import React from 'react'
import { ImagemFundo } from './index'

export default {
    title: "Componentes/ImagemFundo",
    component: ImagemFundo,
}


export const CardText = () => {
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

export const CardList = () => {
    return <ImagemFundo
                    imagem = "https://www.impulsoprevine.org/imagem-fundo.png"
                    chamada = "Painéis de indicadores da plataforma"
                    chamadacolor = ""
                    subtexto = "A plataforma está dividida em três blocos que reúnem dados e indicadores para acompanhamento da RAPS."
                    cards = {[
                        {
                          "title": "Acompanhamento dos serviços CAPS",
                          "body": [
                            {
                              "label": "Resumo",
                              "url": "/"
                            },
                            {
                              "label": "Perfil do Usuário",
                              "url": "/"
                            },
                            {
                              "label": "Novos Usuários",
                              "url": "/"
                            },
                            {
                              "label": "Taxa de Abandono",
                              "url": "/"
                            },
                            {
                              "label": "Atendimentos Individuais",
                              "url": "/"
                            },
                            {
                              "label": "Procedimento por Usuário",
                              "url": "/"
                            },
                            {
                              "label": "Produção",
                              "url": "/"
                            }
                          ]
                        },
                        {
                          "title": "Outros serviços RAPS",
                          "body": [
                            {
                              "label": "Resumo",
                              "url": "/"
                            },
                            {
                              "label": "Ambulatório de Saúde Mental",
                              "url": "/"
                            },
                            {
                              "label": "Consultório na Rua",
                              "url": "/"
                            },
                            {
                              "label": "Redução de Danos",
                              "url": "/"
                            }
                          ]
                        },
                        {
                          "title": "Cuidado compartilhado de saúde mental",
                          "body": [
                            {
                              "label": "Perfil do Usuário",
                              "url": "/"
                            },
                            {
                              "label": "Cuidado compartilhado entre APS e CAPS",
                              "url": "/"
                            },
                            {
                              "label": "Cuidado compartilhado entre APS e Ambulatório",
                              "url": "/"
                            },
                            {
                              "label": "Cuidado compartilhado de saúde mental com a rede de Urgência e emergência",
                              "url": "/"
                            }
                          ]
                        }
                      ]
                    }
                    botao = {
                                {
                                    label : "",
                                    url : ""
                                }
                    }
    />
}