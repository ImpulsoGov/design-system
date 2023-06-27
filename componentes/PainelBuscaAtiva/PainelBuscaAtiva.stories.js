import React from 'react'
import { PainelBuscaAtiva } from './index'

export default {
  title: "Componentes/PainelBuscaAtiva",
  component: PainelBuscaAtiva,
};

const cards = [
    {
        descricao : "Total de pessoas com Hipertensão",
        valor : 102
    },   
    {
        descricao : "Total de pessoas com Hipertensão",
        valor : 102
    },    
    {
        descricao : "Total de pessoas com Hipertensão",
        valor : 102
    },    
    {
        descricao : "Total de pessoas com Hipertensão",
        valor : 102
    },    
]

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
const colunasDiabetes=[
  {
    align: 'left',
    field: 'cidadao_nome',
    headerAlign: 'center',
    headerName: 'NOME',
    width: 240
  },
  {
    align: 'center',
    field: 'cidadao_cpf_dt_nascimento',
    headerAlign: 'center',
    headerName: 'CPF',
    width: 130
  },
  {
    align: 'center',
    field: 'identificacao_condicao_diabetes',
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
    field: 'dt_solicitacao_hemoglobina_glicada_mais_recente',
    headerAlign: 'center',
    headerName: 'DATA DE SOLICITAÇÃO DE HEMOGLOBINA GLICADA MAIS RECENTE',
    width: 180
  },
  {
    align: 'center',
    field: 'prazo_proxima_afericao_pa',
    headerAlign: 'center',
    headerName: 'PRAZO PARA PRÓXIMA SOLICITAÇÃO DE HEMOGLOBINA GLICADA',
    renderCell: function noRefCheck() {},
    width: 180
  },
  {
    align: 'center',
    field: 'acs_nome_cadastro',
    headerAlign: 'center',
    headerName: 'ACS RESPONSÁVEL',
    width: 250
  }
]

const dadosFiltros = [
  {
    rotulo : "Filtrar por nome da equipe",
    data :  ["equipe sol","equipe lua","equipe estrela"],
    filtro : "nome_equipe"

  },
  {
    rotulo : "Filtrar por INE da equipe",
    data : ["12345678","87654321","18273645"],
    filtro : "ine"

  },
  {
    rotulo : "Filtrar por nome do ACS",
    data : ["Luana", "Soraia", "Estela"],
    filtro : "acs_nome_cadastro"

  },
  {
    rotulo : "Filtrar por tipo de diagnóstico",
    data : ["Diagnóstico Clínico","Autorreferida"],
    filtro : "identificacao_condicao_hipertensao"

  },
  {
    rotulo : "Filtrar por faixa etária",
    data : ["apenas em dia","consulta e aferição de PA em dia","apenas aferição de PA em dia","nada em dia"],
    filtro : ""

  },
]
const dadosFiltrosDiabetes = [
  {
    rotulo : "Filtrar por nome da equipe",
    data :  ["equipe sol","equipe lua","equipe estrela"],
    filtro : "nome_equipe"
  },
  {
    rotulo : "Filtrar por INE da equipe",
    data : ["12345678","87654321","18273645"],
    filtro : "ine"

  },
  {
    rotulo : "Filtrar por nome do ACS",
    data : ["Luana", "Soraia", "Estela"],
    filtro : "acs_nome_cadastro"

  },
  {
    rotulo : "Filtrar por tipo de diagnóstico",
    data : ["Diagnóstico Clínico","Autorreferida"],
    filtro : "identificacao_condicao_diabetes"

  },
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
const dataDiabetes=[
  {
    "cidadao_nome": "DALVA MARIA CORREIA MENDES",
    "cidadao_cpf_dt_nascimento": "1966-01-18",
    "identificacao_condicao_diabetes": "Autorreferida",
    "dt_ultima_consulta": "2022-02-08",
    "prazo_proxima_consulta": "Até 31/Agosto",
    "dt_solicitacao_hemoglobina_glicada_mais_recente": null,
    "prazo_proxima_solicitacao_hemoglobina": "Até 31/Agosto",
    "acs_nome_cadastro": "Nerita Maia Travassos"
  },
  {
    "cidadao_nome": "DESUITA JANSEN",
    "cidadao_cpf_dt_nascimento": "1952-11-12",
    "identificacao_condicao_diabetes": "Diagnóstico Clínico",
    "dt_ultima_consulta": "2021-10-04",
    "prazo_proxima_consulta": "Até 31/Agosto",
    "dt_solicitacao_hemoglobina_glicada_mais_recente": null,
    "prazo_proxima_solicitacao_hemoglobina": "Até 31/Agosto",
    "acs_nome_cadastro": "Claudio de Jesus Santos"
  },
  {
    "cidadao_nome": "EDMILSON CASTRO SILVA",
    "cidadao_cpf_dt_nascimento": "45037680344",
    "identificacao_condicao_diabetes": "Diagnóstico Clínico",
    "dt_ultima_consulta": "2023-03-15",
    "prazo_proxima_consulta": "Em dia",
    "dt_solicitacao_hemoglobina_glicada_mais_recente": "2023-03-15",
    "prazo_proxima_solicitacao_hemoglobina": "Em dia",
    "acs_nome_cadastro": "Karliane Cunha Gomes"
  },
  {
    "cidadao_nome": "GILMARA MACHADO SANTOS",
    "cidadao_cpf_dt_nascimento": "1981-06-11",
    "identificacao_condicao_diabetes": "Diagnóstico Clínico",
    "dt_ultima_consulta": "2020-07-27",
    "prazo_proxima_consulta": "Até 31/Agosto",
    "dt_solicitacao_hemoglobina_glicada_mais_recente": null,
    "prazo_proxima_solicitacao_hemoglobina": "Até 31/Agosto",
    "acs_nome_cadastro": "Genilson Nascimento Lindoso"
  },
  {
    "cidadao_nome": "JOAO PEDRO MENDES",
    "cidadao_cpf_dt_nascimento": "1955-05-30",
    "identificacao_condicao_diabetes": "Diagnóstico Clínico",
    "dt_ultima_consulta": "2022-04-14",
    "prazo_proxima_consulta": "Até 31/Agosto",
    "dt_solicitacao_hemoglobina_glicada_mais_recente": null,
    "prazo_proxima_solicitacao_hemoglobina": "Até 31/Agosto",
    "acs_nome_cadastro": "Nerita Maia Travassos"
  },
  {
    "cidadao_nome": "JOSE ROBERTO PINHEIRO CAMARA",
    "cidadao_cpf_dt_nascimento": "1976-11-22",
    "identificacao_condicao_diabetes": "Diagnóstico Clínico",
    "dt_ultima_consulta": "2021-07-22",
    "prazo_proxima_consulta": "Até 31/Agosto",
    "dt_solicitacao_hemoglobina_glicada_mais_recente": null,
    "prazo_proxima_solicitacao_hemoglobina": "Até 31/Agosto",
    "acs_nome_cadastro": "Ines Pinheiro Costa"
  },
  {
    "cidadao_nome": "RAIMUNDA COSTA DOS SANTOS",
    "cidadao_cpf_dt_nascimento": "1933-03-30",
    "identificacao_condicao_diabetes": "Diagnóstico Clínico",
    "dt_ultima_consulta": "2022-09-05",
    "prazo_proxima_consulta": "Até 31/Agosto",
    "dt_solicitacao_hemoglobina_glicada_mais_recente": "2022-09-05",
    "prazo_proxima_solicitacao_hemoglobina": "Até 31/Agosto",
    "acs_nome_cadastro": "Ana Lucia Correa"
  },
  {
    "cidadao_nome": "ADRIEL ARAUJO MENDONCA",
    "cidadao_cpf_dt_nascimento": "2001-08-21",
    "identificacao_condicao_diabetes": "Diagnóstico Clínico",
    "dt_ultima_consulta": "2021-07-12",
    "prazo_proxima_consulta": "Até 31/Agosto",
    "dt_solicitacao_hemoglobina_glicada_mais_recente": null,
    "prazo_proxima_solicitacao_hemoglobina": "Até 31/Agosto",
    "acs_nome_cadastro": "Joao Gutemberg Pereira Soeiro"
  },
  {
    "cidadao_nome": "ALEXANDRINA MATA MAIA",
    "cidadao_cpf_dt_nascimento": "1950-05-19",
    "identificacao_condicao_diabetes": "Diagnóstico Clínico",
    "dt_ultima_consulta": "2021-08-24",
    "prazo_proxima_consulta": "Até 31/Agosto",
    "dt_solicitacao_hemoglobina_glicada_mais_recente": "2021-08-24",
    "prazo_proxima_solicitacao_hemoglobina": "Até 31/Agosto",
    "acs_nome_cadastro": "Raimundo Rosa Barros"
  },
]

const Template = (args) => <PainelBuscaAtiva {...args}/>

export const Diabetes = Template.bind({});

Diabetes.args={
  painel : "diabetes",
  dadosFiltros : dadosFiltrosDiabetes,
  tabela : {
      colunas : colunasDiabetes,
      data : dataDiabetes
  },
  cards : cards
}

export const Hipertensao = Template.bind({});

Hipertensao.args={
    painel : "hipertensao",
    visualizacao : "equipe",
    dadosFiltros : dadosFiltros,
    tabela : {
        colunas : colunas,
        data : data
    },
    cards : cards
}

