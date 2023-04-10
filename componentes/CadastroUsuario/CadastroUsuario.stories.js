import React from 'react'
import { CadastroUsuario } from './index'

export default {
  title: "Componentes/CadastroUsuario",
  component: CadastroUsuario,
};

const columns = [
    { field: 'nome_usuario', headerName: 'Nome', width: 300 , headerAlign : 'center',align : 'center'},
    { field: 'municipio', headerName: 'Município', width: 200, headerAlign : 'center',align : 'center'},
    { field: 'mail',headerName: 'E-Mail', width: 300, headerAlign : 'center',align : 'center'},
    { field: 'cpf', headerName: 'CPF', width: 200 , headerAlign : 'center',align : 'center'},
    { field: 'perfil', headerName: 'Perfil', width: 200 , headerAlign : 'center',align : 'center'},
    { field: 'cargo', headerName: 'Cargo', width: 200 , headerAlign : 'center',align : 'center'},
    { field: 'telefone', headerName: 'Telefone', width: 200 , headerAlign : 'center',align : 'center'},
    { field: 'equipe', headerName: 'Equipe (INE)', width: 200 , headerAlign : 'center',align : 'center'},
];

const data = [
        {
            "mail": "aangelicasouza24@gmail.com",
            "cpf": "06385182614",
            "nome_usuario": "Angelica Souza Toledo Andrade",
            "municipio": "Viçosa - MG",
            "cargo": "Coordenação de Equipe",
            "telefone": "31986936665",
            "equipe": "0000278130",
            "perfis": [
                6,
                7,
                9
            ]
        },
        {
            "mail": "abpirenopolis@gmail.com",
            "cpf": "01297610105",
            "nome_usuario": "Lucilia Goulão",
            "municipio": "Pirenópolis - GO",
            "cargo": "Coordenação de APS",
            "telefone": "62992700421",
            "equipe": "0",
            "perfis": [
                7,
                8
            ]
        },
        {
            "mail": "adriana-bispodos-santos@hotmail.com",
            "cpf": "25426438811",
            "nome_usuario": "Adriana Bispo Dos Santos",
            "municipio": "Juquitiba - SP",
            "cargo": "Coordenação APS",
            "telefone": "11912394343",
            "equipe": "0",
            "perfis": [
                6,
                7,
                8
            ]
        },
        {
            "mail": "aguedagabriela@gmail.com",
            "cpf": "09310820489",
            "nome_usuario": "Agueda Gabriela Ferreira Miranda Galindo",
            "municipio": "Alagoinha - PE",
            "cargo": "Coordenação de Equipe",
            "telefone": "87991527468",
            "equipe": "0000134996",
            "perfis": [
                6,
                7,
                9
            ]
        },
        {
            "mail": "aldiza_lopes@hotmail.com",
            "cpf": "01708361260",
            "nome_usuario": "Aldiza Lopes Da Silva",
            "municipio": "Lábrea - AM",
            "cargo": "Coordenação de Equipe",
            "telefone": "97991628405",
            "equipe": "0EQ01AMLAB",
            "perfis": [
                9
            ]
        },
        {
            "mail": "alessandraenfermeira2010@hotmail.com",
            "cpf": "03319837532",
            "nome_usuario": "Alessandra Ramos",
            "municipio": "Santo Antônio do Descoberto - GO",
            "cargo": "Coordenação de Equipe",
            "telefone": "61995058384",
            "equipe": "0000466204",
            "perfis": [
                9
            ]
        },
        {
            "mail": "aline.santos2277@gmail.com",
            "cpf": "01512606219",
            "nome_usuario": "Aline Alves Dos Santos",
            "municipio": "Lábrea - AM",
            "cargo": "Coordenação de Equipe",
            "telefone": "97984251509",
            "equipe": "0EQ02AMLAB",
            "perfis": [
                9
            ]
        },

    ]

const Template = (args) => <CadastroUsuario {...args}/>
const alterarMail = async(mail)=>{
    await new Promise(r => setTimeout(r, 2000));
    console.log("novo mail: "+ mail)
}
const alterarCPF = async()=> await new Promise(r => setTimeout(r, 2000));
const alterarINE = async()=> await new Promise(r => setTimeout(r, 2000));

export const Default = Template.bind({});

Default.args={
  titulo : "Bem vinda à area de gestão de usuarios",
  colunas : columns,
  data : data,
  submit : {
    mail : alterarMail,
    cpf : alterarCPF,
    ine : alterarINE
  },
}
