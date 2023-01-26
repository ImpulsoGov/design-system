import React from 'react'
import { CardAlert } from './index'

export default {
    title: "Componentes/CardAlert",
    component: CardAlert,
}
const Template = (args) => <CardAlert {...args}/>


export const Default = Template.bind({});

Default.args ={
    destaque: "IMPORTANTE: ",
    msg : "Os dados exibidos nesta plataforma refletem a base de dados local do município e podem divergir dos divulgados quadrimestralmente pelo SISAB. O Ministério da Saúde aplica regras de vinculação e validações cadastrais do usuário, profissional e estabelecimento que não são replicadas nesta ferramenta.",
}