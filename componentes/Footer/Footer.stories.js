import React from 'react'
import { Footer } from './index'

export default {
    title: "Componentes/Footer",
    component: Footer,
}

export const Default = () => {
    return (
        <Footer
            contactCopyright={{
                email: "contato@impulsogov.org",
                copyright: "© 2021 Impulso"
            }}
            theme={{
                logoProjeto: "https://media.graphassets.com/Kal4aulRmYkqd0L6RBAd",
                cor: "Black"
            }}
            menu={
                [
                    { label: "A Impulso Gov", url: "/impulsogov" },
                    { label: "O Previne Brasil", url: "/previnebrasil" },
                    { label: "Análise", url: "" },
                    { label: "Consultoria", url: "/consultoria" }
                ]
            }
            subtitles={[
                { label: "Indicadores de Desempenho", url: "/indicadores" },
                { label: "Capitação Ponderada", url: "/capitacao" },
                { label: "Ações Estratégicas", url: "/acoes-estrategicas" },
            ]}
            links={[
                {
                    label: "Sobre", url: "/sobre"
                },
                {
                    label: "Competências e Soluções", url: "/competencias"
                }
            ]}

            address={{
                first: "Rua Aracaju 100 - Vila Madalena,",
                second: "São Paulo - SP, 01010-100"
            }}

            socialMediaURLs={[
                {
                    url: "http://instagran.com",
                    logo: ""
                }
            ]}
        />
    )
}

