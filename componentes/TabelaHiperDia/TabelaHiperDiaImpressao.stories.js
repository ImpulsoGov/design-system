import React from 'react'
import { TabelaHiperDiaImpressao } from './index'

export default {
  title: "Componentes/TabelaHiperDiaImpressao",
  component: TabelaHiperDiaImpressao,
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
const colunas=[
  {
    align: 'left',
    field: 'cidadao_nome',
    headerAlign: 'center',
    headerName: 'NOME',
    width: 240
  },
  {
    align: 'center',
    field: 'cidadao_cpf',
    headerAlign: 'center',
    headerName: 'CPF',
    width: 130
  },
  {
    align: 'center',
    field: 'identificacao_condicao_hipertensao',
    headerAlign: 'center',
    headerName: 'IDENTIFICAÇÃO DA CONDIÇÃO',
    width: 150
  },
  {
    align: 'center',
    field: 'dt_ultima_consulta',
    headerAlign: 'center',
    headerName: 'DATA DA CONSULTA MAIS RECENTE',
    width: 120
  },
  {
    align: 'center',
    field: 'prazo_proxima_consulta',
    headerAlign: 'center',
    headerName: 'PRAZO PARA PRÓXIMA CONSULTA',
    renderCell: () => {},
    width: 130
  },
  {
    align: 'center',
    field: 'dt_afericao_pressao_mais_recente',
    headerAlign: 'center',
    headerName: 'DATA DA AFERIÇÃO DE PA MAIS RECENTE',
    width: 130
  },
  {
    align: 'center',
    field: 'prazo_proxima_afericao_pa',
    headerAlign: 'center',
    headerName: 'PRAZO PARA PRÓXIMA AFERIÇÃO DE PA',
    renderCell: function noRefCheck() {},
    width: 130
  },
  {
    align: 'center',
    field: 'acs_nome_cadastro',
    headerAlign: 'center',
    headerName: 'ACS RESPONSÁVEL',
    width: 250
  }
]


const data=[
  {
      "cidadao_nome": "DAVIDSON MUSTAFA ZEHED",
      "cidadao_cpf": "32702133878",
      "identificacao_condicao_hipertensao": "Autorreferida",
      "dt_ultima_consulta": "2020-09-23",
      "prazo_proxima_consulta": "Até 31/Agosto",
      "dt_afericao_pressao_mais_recente": null,
      "prazo_proxima_afericao_pa": "Até 31/Agosto",
      "acs_nome_cadastro": "Fernanda Soares Ferreira",
      "equipe_ine_cadastro": "0001540971",
      "equipe_nome_cadastro": "ESF GOIANA"
  },
  {
      "cidadao_nome": "JOSE GALDINO ALVES DA PAZ",
      "cidadao_cpf": "33343316873",
      "identificacao_condicao_hipertensao": "Diagnóstico Clínico",
      "dt_ultima_consulta": "2023-05-11",
      "prazo_proxima_consulta": "Em dia",
      "dt_afericao_pressao_mais_recente": "2023-05-11",
      "prazo_proxima_afericao_pa": "Em dia",
      "acs_nome_cadastro": "Fabiana Matias de Oliveira",
      "equipe_ine_cadastro": "0001540971",
      "equipe_nome_cadastro": "ESF GOIANA"
  },
  {
      "cidadao_nome": "ACSA DOS SANTOS LOPES",
      "cidadao_cpf": "32704359830",
      "identificacao_condicao_hipertensao": "Diagnóstico Clínico",
      "dt_ultima_consulta": "2023-05-12",
      "prazo_proxima_consulta": "Até 31/Agosto",
      "dt_afericao_pressao_mais_recente": null,
      "prazo_proxima_afericao_pa": "Até 31/Agosto",
      "acs_nome_cadastro": "Thais Jensen",
      "equipe_ine_cadastro": "0001540971",
      "equipe_nome_cadastro": "ESF GOIANA"
  },
  {
      "cidadao_nome": "ANA PAULA DA SILVA SOARES",
      "cidadao_cpf": "41364717859",
      "identificacao_condicao_hipertensao": "Autorreferida",
      "dt_ultima_consulta": "2022-11-23",
      "prazo_proxima_consulta": "Até 31/Agosto",
      "dt_afericao_pressao_mais_recente": null,
      "prazo_proxima_afericao_pa": "Até 31/Agosto",
      "acs_nome_cadastro": "Fernanda Soares Ferreira",
      "equipe_ine_cadastro": "0001540971",
      "equipe_nome_cadastro": "ESF GOIANA"
  },
  {
      "cidadao_nome": "APARECIDA VANESSA DO AMARAL",
      "cidadao_cpf": "35299537840",
      "identificacao_condicao_hipertensao": "Diagnóstico Clínico",
      "dt_ultima_consulta": "2023-05-26",
      "prazo_proxima_consulta": "Até 31/Agosto",
      "dt_afericao_pressao_mais_recente": null,
      "prazo_proxima_afericao_pa": "Até 31/Agosto",
      "acs_nome_cadastro": "Marco Alberto Costa Santi",
      "equipe_ine_cadastro": "0001540971",
      "equipe_nome_cadastro": "ESF GOIANA"
  },
  {
      "cidadao_nome": "CLAUDINEI DO ROSARIO",
      "cidadao_cpf": "34353421883",
      "identificacao_condicao_hipertensao": "Diagnóstico Clínico",
      "dt_ultima_consulta": "2015-07-24",
      "prazo_proxima_consulta": "Até 31/Agosto",
      "dt_afericao_pressao_mais_recente": null,
      "prazo_proxima_afericao_pa": "Até 31/Agosto",
      "acs_nome_cadastro": "Marco Alberto Costa Santi",
      "equipe_ine_cadastro": "0001540971",
      "equipe_nome_cadastro": "ESF GOIANA"
  },
  {
      "cidadao_nome": "CRISTIANE DELGADO SEMO",
      "cidadao_cpf": "42402357827",
      "identificacao_condicao_hipertensao": "Autorreferida",
      "dt_ultima_consulta": "2019-02-05",
      "prazo_proxima_consulta": "Até 31/Agosto",
      "dt_afericao_pressao_mais_recente": null,
      "prazo_proxima_afericao_pa": "Até 31/Agosto",
      "acs_nome_cadastro": "Fernanda Soares Ferreira",
      "equipe_ine_cadastro": "0001540971",
      "equipe_nome_cadastro": "ESF GOIANA"
  },
  {
      "cidadao_nome": "DEBORA CAROLINA SOUZA",
      "cidadao_cpf": "22910043878",
      "identificacao_condicao_hipertensao": "Diagnóstico Clínico",
      "dt_ultima_consulta": "2023-05-22",
      "prazo_proxima_consulta": "Em dia",
      "dt_afericao_pressao_mais_recente": "2023-05-22",
      "prazo_proxima_afericao_pa": "Em dia",
      "acs_nome_cadastro": "Marco Alberto Costa Santi",
      "equipe_ine_cadastro": "0001540971",
      "equipe_nome_cadastro": "ESF GOIANA"
  },
  {
      "cidadao_nome": "FAUSTINO DA COSTA JUNIOR",
      "cidadao_cpf": "34445553859",
      "identificacao_condicao_hipertensao": "Diagnóstico Clínico",
      "dt_ultima_consulta": "2022-12-19",
      "prazo_proxima_consulta": "Até 31/Agosto",
      "dt_afericao_pressao_mais_recente": null,
      "prazo_proxima_afericao_pa": "Até 31/Agosto",
      "acs_nome_cadastro": "Fernanda Soares Ferreira",
      "equipe_ine_cadastro": "0001540971",
      "equipe_nome_cadastro": "ESF GOIANA"
  },
  {
      "cidadao_nome": "FRANCIELE DE DEUS BOA VENTURA",
      "cidadao_cpf": "43656184828",
      "identificacao_condicao_hipertensao": "Diagnóstico Clínico",
      "dt_ultima_consulta": "2020-10-19",
      "prazo_proxima_consulta": "Até 31/Agosto",
      "dt_afericao_pressao_mais_recente": null,
      "prazo_proxima_afericao_pa": "Até 31/Agosto",
      "acs_nome_cadastro": "Raquel Nascimento da Silva",
      "equipe_ine_cadastro": "0001540971",
      "equipe_nome_cadastro": "ESF GOIANA"
  },
  {
      "cidadao_nome": "GABRIEL DE ALMEIDA FERNANDES",
      "cidadao_cpf": "44455263802",
      "identificacao_condicao_hipertensao": "Diagnostico Clinico",
      "dt_ultima_consulta": "2022-09-27",
      "prazo_proxima_consulta": "Até 31/Agosto",
      "dt_afericao_pressao_mais_recente": null,
      "prazo_proxima_afericao_pa": "Até 31/Agosto",
      "acs_nome_cadastro": "Fernanda Soares Ferreira",
      "equipe_ine_cadastro": "0001540971",
      "equipe_nome_cadastro": "ESF GOIANA"
  },
]

const Template = (args) => <TabelaHiperDiaImpressao {...args}/>

export const Default = Template.bind({});

Default.args={
  data : data,
  colunas : colunas
}