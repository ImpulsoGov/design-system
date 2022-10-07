import React from 'react'
import { FullModal } from './index'
import { Cadastro } from '../Cadastro'
import { Login } from '../Login'
import { CriarSenha } from '../CriarSenha'

export default {
    title: "Componentes/FullModal",
    component: FullModal,
}


export const CadastroMunicipio = () => {
    return <FullModal
                logo="https://media.graphassets.com/b8gtgIBS0ylOa0zlD9wT?_gl=1*hmdi2k*_ga*MzY0MzkwNjMwLjE2NTg1OTU1NjU.*_ga_G6FYGSYGZ4*MTY2NDg5MTgyMC43Ny4xLjE2NjQ4OTcyODQuMjkuMC4w"
                back="https://media.graphassets.com/mRR3uFHeQeW8SG0qYSIY?_gl=1*15r7evo*_ga*MzY0MzkwNjMwLjE2NTg1OTU1NjU.*_ga_G6FYGSYGZ4*MTY2NDg5MTgyMC43Ny4xLjE2NjQ4OTcyODQuMjkuMC4w"
                backLink="/"
                child={
                    <Cadastro
                    titulo= "Cadastro do município"
                    campos={[
                            {label:"Nome Completo"},
                            {label:"Municipio"},
                            {label:"Cargo"},
                            {label:"E-mail"},
                            {label:"(DDD) Telefone"},
                        ]}
                        button = {{label:"Próximo",link:""}}
                    />
                }
            />
}

export const ControleAcesso= () => {
    return <FullModal
                logo="https://media.graphassets.com/b8gtgIBS0ylOa0zlD9wT?_gl=1*hmdi2k*_ga*MzY0MzkwNjMwLjE2NTg1OTU1NjU.*_ga_G6FYGSYGZ4*MTY2NDg5MTgyMC43Ny4xLjE2NjQ4OTcyODQuMjkuMC4w"
                back="https://media.graphassets.com/mRR3uFHeQeW8SG0qYSIY?_gl=1*15r7evo*_ga*MzY0MzkwNjMwLjE2NTg1OTU1NjU.*_ga_G6FYGSYGZ4*MTY2NDg5MTgyMC43Ny4xLjE2NjQ4OTcyODQuMjkuMC4w"
                backLink="/"
                child={
                    <Login
                        titulo= "Faça o login para ver o painel de busca ativa"
                        campos={[
                            {label:"E-mail"},
                            {label:"Senha"},
                        ]}
                        button = {{label:"entrar",link:""}}
                    />                
                }
            />
}

export const CriarPrimeiraSenha= () => {
    return <FullModal
                logo="https://media.graphassets.com/b8gtgIBS0ylOa0zlD9wT?_gl=1*hmdi2k*_ga*MzY0MzkwNjMwLjE2NTg1OTU1NjU.*_ga_G6FYGSYGZ4*MTY2NDg5MTgyMC43Ny4xLjE2NjQ4OTcyODQuMjkuMC4w"
                back="https://media.graphassets.com/mRR3uFHeQeW8SG0qYSIY?_gl=1*15r7evo*_ga*MzY0MzkwNjMwLjE2NTg1OTU1NjU.*_ga_G6FYGSYGZ4*MTY2NDg5MTgyMC43Ny4xLjE2NjQ4OTcyODQuMjkuMC4w"
                backLink="/"
                child={
                    <CriarSenha
                        titulo= "Crie sua senha"
                        campos={{
                            senha:"Crie sua senha",
                            ConfirmarSenha:"Digite sua senha novamente",
                        }}
                        button = {{label:"entrar",link:""}}
                    />              
                }
            />
}