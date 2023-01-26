import React from 'react'
import { Greeting } from './index'

export default {
    title: "Componentes/Greeting",
    component: Greeting,
}
const Template = (args) => <Greeting {...args}/>


export const Default = Template.bind({});

Default.args ={
    cargo : "coordenador(a) da APS",
    municipio_uf : "juquitiba - sp",
    greeting : "Bem vindo(a)",
    nome_usuario : "Roberta",
    texto: "Você está na área logada da Coordenação da APS do seu município. Aqui você vai encontrar um painel com uma lista de possíveis cadastros duplicados de gestantes e listas nominais para monitoramento, referentes aos indicadores de gestantes, hipertensão e diabetes, do Previne Brasil.",
}