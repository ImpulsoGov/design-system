import React from 'react'
import { TabelaHiperDia } from './index'

export default {
  title: "Componentes/TabelaHiperDia",
  component: TabelaHiperDia,
};

const PrazoProximaConsultaStyle = ({value})=> {
    const emDia = {
        backgroundColor: "#E7FBF3",
        border: "1px solid #9DEECD",
        borderRadius: "5px",
        color: "#1D856C",
        padding: "2px",
        fontWeight : 550,
    }
    const prazo = {
        backgroundColor: "#FFF0E1",
        border: "1px solid #F4CCAB",
        borderRadius: "5px",
        color: "#E98633",
        padding: "2px",
        fontWeight : 550,
    }
    const style = (value=="Em dia") ? emDia : prazo
    return <div style={style}>{value}</div>
}
const columns = [
    { field: 'nome', headerName: 'NOME', width: 240 ,headerAlign : 'center',align : 'left'},
    { field: 'cpf', headerName: 'CPF', width: 130 , headerAlign : 'center',align : 'center'},
    { field: 'identificacao_condicao', headerName: 'IDENTIFICAÇÃO DA CONDIÇÃO', width: 150, headerAlign : 'center',align : 'center'},
    { field: 'dt_consulta_mais_recente',headerName: 'DATA DA CONSULTA MAIS RECENTE', width: 120, headerAlign : 'center',align : 'center'},
    { field: 'prazo_proxima_consulta', headerName: 'PRAZO PARA PRÓXIMA CONSULTA', width: 130 , headerAlign : 'center',align : 'center', renderCell : PrazoProximaConsultaStyle},
    { field: 'dt_afericao_pressao_mais_recente', headerName: 'DATA DA AFERIÇÃO DE PA MAIS RECENTE', width: 130 , headerAlign : 'center',align : 'center'},
    { field: 'prazo_proxima_afericao_pa', headerName: 'PRAZO PARA PRÓXIMA AFERIÇÃO DE PA', width: 130 , headerAlign : 'center',align : 'center', renderCell : PrazoProximaConsultaStyle},
    { field: 'acs_nome_cadastro', headerName: 'ACS RESPONSÁVEL', width: 250 , headerAlign : 'center',align : 'center'},
];

const data = [
        {
            "mail": "aangelicasouza24@gmail.com",
            "cpf": "06385182604",
            "nome": "Angelica Souza Toledo Andrade",
            "identificacao_condicao": "Diagnostico Clinico",
            "dt_consulta_mais_recente": "22/09/21",
            "prazo_proxima_consulta": "até 30/04/23",
            "dt_afericao_pressao_mais_recente": "22/02/21",
            "prazo_proxima_afericao_pa": "em dia",
            "acs_nome_cadastro": "Angelica Souza Toledo Andrade",
        },
        {
            "mail": "aangelicasouza24@gmail.com",
            "cpf": "06385172614",
            "nome": "Angelica Souza Toledo Andrade",
            "identificacao_condicao": "diagnostico Clinico",
            "dt_consulta_mais_recente": "22/09/21",
            "prazo_proxima_consulta": "em dia",
            "dt_afericao_pressao_mais_recente": "22/02/21",
            "prazo_proxima_afericao_pa": "em dia",
            "acs_nome_cadastro": "Angelica Souza Toledo Andrade",
        },
        {
            "mail": "aangelicasouza24@gmail.com",
            "cpf": "06385582614",
            "nome": "Angelica Souza Toledo Andrade",
            "identificacao_condicao": "diagnostico Clinico",
            "dt_consulta_mais_recente": "22/09/21",
            "prazo_proxima_consulta": "em dia",
            "dt_afericao_pressao_mais_recente": "22/02/21",
            "prazo_proxima_afericao_pa": "em dia",
            "acs_nome_cadastro": "Angelica Souza Toledo Andrade",
        },
        {
            "mail": "aangelicasouza24@gmail.com",
            "cpf": "06385122614",
            "nome": "Angelica Souza Toledo Andrade",
            "identificacao_condicao": "diagnostico Clinico",
            "dt_consulta_mais_recente": "22/09/21",
            "prazo_proxima_consulta": "em dia",
            "dt_afericao_pressao_mais_recente": "22/02/21",
            "prazo_proxima_afericao_pa": "em dia",
            "acs_nome_cadastro": "Angelica Souza Toledo Andrade",
        },
        {
            "mail": "aangelicasouza24@gmail.com",
            "cpf": "06185182614",
            "nome": "Angelica Souza Toledo Andrade",
            "identificacao_condicao": "diagnostico Clinico",
            "dt_consulta_mais_recente": "22/09/21",
            "prazo_proxima_consulta": "em dia",
            "dt_afericao_pressao_mais_recente": "22/02/21",
            "prazo_proxima_afericao_pa": "em dia",
            "acs_nome_cadastro": "Angelica Souza Toledo Andrade",
        },
        {
            "mail": "aangelicasouza24@gmail.com",
            "cpf": "06185182614",
            "nome": "Angelica Souza Toledo Andrade",
            "identificacao_condicao": "diagnostico Clinico",
            "dt_consulta_mais_recente": "22/09/21",
            "prazo_proxima_consulta": "em dia",
            "dt_afericao_pressao_mais_recente": "22/02/21",
            "prazo_proxima_afericao_pa": "em dia",
            "acs_nome_cadastro": "Angelica Souza Toledo Andrade",
        },
        {
            "mail": "aangelicasouza24@gmail.com",
            "cpf": "06385182614",
            "nome": "Angelica Souza Toledo Andrade",
            "identificacao_condicao": "diagnostico Clinico",
            "dt_consulta_mais_recente": "22/09/21",
            "prazo_proxima_consulta": "em dia",
            "dt_afericao_pressao_mais_recente": "22/02/21",
            "prazo_proxima_afericao_pa": "em dia",
            "acs_nome_cadastro": "Angelica Souza Toledo Andrade",
        },
        {
            "mail": "aangelicasouza24@gmail.com",
            "cpf": "06385182614",
            "nome": "Danilo Lopes Neves",
            "identificacao_condicao": "diagnostico Clinico",
            "dt_consulta_mais_recente": "22/09/21",
            "prazo_proxima_consulta": "em dia",
            "dt_afericao_pressao_mais_recente": "22/02/21",
            "prazo_proxima_afericao_pa": "em dia",
            "acs_nome_cadastro": "Angelica Souza Toledo Andrade",
        },
        {
            "mail": "aangelicasouza24@gmail.com",
            "cpf": "06885182619",
            "nome": "Angelica Souza Toledo Andrade",
            "identificacao_condicao": "diagnostico Clinico",
            "dt_consulta_mais_recente": "22/09/21",
            "prazo_proxima_consulta": "em dia",
            "dt_afericao_pressao_mais_recente": "22/02/21",
            "prazo_proxima_afericao_pa": "em dia",
            "acs_nome_cadastro": "Angelica Souza Toledo Andrade",
        },
        {
            "mail": "aangelicasouza24@gmail.com",
            "cpf": "04385182615",
            "nome": "Angelica Souza Toledo Andrade",
            "identificacao_condicao": "diagnostico Clinico",
            "dt_consulta_mais_recente": "22/09/21",
            "prazo_proxima_consulta": "em dia",
            "dt_afericao_pressao_mais_recente": "22/02/21",
            "prazo_proxima_afericao_pa": "em dia",
            "acs_nome_cadastro": "Angelica Souza Toledo Andrade",
        },
        {
            "mail": "aangelicasouza24@gmail.com",
            "cpf": "16385182614",
            "nome": "Angelica Souza Toledo Andrade",
            "identificacao_condicao": "diagnostico Clinico",
            "dt_consulta_mais_recente": "22/09/21",
            "prazo_proxima_consulta": "em dia",
            "dt_afericao_pressao_mais_recente": "22/02/21",
            "prazo_proxima_afericao_pa": "em dia",
            "acs_nome_cadastro": "Angelica Souza Toledo Andrade",
        },
        {
            "mail": "aangelicasouza24@gmail.com",
            "cpf": "06385182619",
            "nome": "Angelica Souza Toledo Andrade",
            "identificacao_condicao": "diagnostico Clinico",
            "dt_consulta_mais_recente": "22/09/21",
            "prazo_proxima_consulta": "em dia",
            "dt_afericao_pressao_mais_recente": "22/02/21",
            "prazo_proxima_afericao_pa": "em dia",
            "acs_nome_cadastro": "Angelica Souza Toledo Andrade",
        },
        {
            "mail": "aangelicasouza24@gmail.com",
            "cpf": "46385182614",
            "nome": "Angelica Souza Toledo Andrade",
            "identificacao_condicao": "diagnostico Clinico",
            "dt_consulta_mais_recente": "22/09/21",
            "prazo_proxima_consulta": "em dia",
            "dt_afericao_pressao_mais_recente": "22/02/21",
            "prazo_proxima_afericao_pa": "em dia",
            "acs_nome_cadastro": "Angelica Souza Toledo Andrade",
        },
        {
            "mail": "aangelicasouza24@gmail.com",
            "cpf": "56385182614",
            "nome": "Angelica Souza Toledo Andrade",
            "identificacao_condicao": "Diagnostico Clinico",
            "dt_consulta_mais_recente": "22/09/21",
            "prazo_proxima_consulta": "em dia",
            "dt_afericao_pressao_mais_recente": "22/02/21",
            "prazo_proxima_afericao_pa": "em dia",
            "acs_nome_cadastro": "Angelica Souza Toledo Andrade",
        },
    ]

const Template = (args) => <TabelaHiperDia {...args}/>

export const Default = Template.bind({});

Default.args={
  colunas : columns,
  data : data,
}