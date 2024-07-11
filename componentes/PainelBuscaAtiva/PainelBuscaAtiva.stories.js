import React, {useState} from 'react'
import { PainelBuscaAtiva } from './index'
import * as ReactDOMServer from 'react-dom/server';
import { TabelaCitoImpressao, TabelaHiperDiaImpressao } from '../TabelaHiperDia';

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
      field: 'dt_consulta_mais_recente',
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
    field: 'dt_consulta_mais_recente',
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

const status_usuario_descricao = [
    {
      "id_status_usuario" : 0,
      "status_usuario_descricao" : "Sem dados",
      "atualizacao_data" : "2023-05-02T03:00:00.000Z"
    },
    {
      "id_status_usuario" : 1,
      "status_usuario_descricao" : "Com consulta e aferição de PA em dia",
      "atualizacao_data" : "2023-05-02T03:00:00.000Z"
    },
    {
      "id_status_usuario" : 2,
      "status_usuario_descricao" : "Sem consulta e aferição de PA em dia",
      "atualizacao_data" : "2023-05-02T03:00:00.000Z"
    },
    {
      "id_status_usuario" : 3,
      "status_usuario_descricao" : "Sem consulta em dia",
      "atualizacao_data" : "2023-05-02T03:00:00.000Z"
    },
    {
      "id_status_usuario" : 4,
      "status_usuario_descricao" : "Sem aferição de PA em dia",
      "atualizacao_data" : "2023-05-02T03:00:00.000Z"
    },
    {
      "id_status_usuario" : 5,
      "status_usuario_descricao" : "Com consulta e solicitação de hemoglobina em dia",
      "atualizacao_data" : "2023-05-02T03:00:00.000Z"
    },
    {
      "id_status_usuario" : 6,
      "status_usuario_descricao" : "Sem consulta e solicitação de hemoglobina em dia",
      "atualizacao_data" : "2023-05-02T03:00:00.000Z"
    },
    {
      "id_status_usuario" : 7,
      "status_usuario_descricao" : "Sem solicitação de hemoglobina em dia",
      "atualizacao_data" : "2023-05-02T03:00:00.000Z"
    },
    {
      "id_status_usuario" : 8,
      "status_usuario_descricao" : "Encerradas por DPP + 14 dias",
      "atualizacao_data" : "2023-05-02T03:00:00.000Z"
    },
    {
      "id_status_usuario" : 9,
      "status_usuario_descricao" : "Encerradas por parto ou aborto",
      "atualizacao_data" : "2023-05-15T03:00:00.000Z"
    },
    {
      "id_status_usuario" : 10,
      "status_usuario_descricao" : "Ativas",
      "atualizacao_data" : "2023-05-15T03:00:00.000Z"
    },
    {
      "id_status_usuario" : 11,
      "status_usuario_descricao" : "Gestantes inválidas",
      "atualizacao_data" : "2023-05-15T03:00:00.000Z"
    },
    {
      "id_status_usuario" : 12,
      "status_usuario_descricao" : "Coleta em dia",
      "atualizacao_data" : "2023-07-03T03:00:00.000Z"
    },
    {
      "id_status_usuario" : 13,
      "status_usuario_descricao" : "Nunca realizou coleta",
      "atualizacao_data" : "2023-07-03T03:00:00.000Z"
    },
    {
      "id_status_usuario" : 14,
      "status_usuario_descricao" : "Coleta com menos de 25 anos",
      "atualizacao_data" : "2023-07-03T03:00:00.000Z"
    },
    {
      "id_status_usuario" : 15,
      "status_usuario_descricao" : "Vence no final do quadrimestre",
      "atualizacao_data" : "2023-07-03T03:00:00.000Z"
    },
    {
      "id_status_usuario" : 16,
      "status_usuario_descricao" : "Coleta vencida",
      "atualizacao_data" : "2023-07-03T03:00:00.000Z"
    }
]
const selecionar_status_usuario_descricao = ({value})=> {
  const alert = {
    backgroundColor: "#F8BBAE",
    border: "1px solid #EF565D",
    borderRadius: "5px",
    color: "#EF565D",
    padding: "2px",
    fontWeight : 550,
    width : "90%",
    display : "flex",
    gap : "5px",
    alignItems: "center",
    justifyContent : "center",
    padding : "3px 10px"
  }
  const atencao = {
    backgroundColor: "#F4CCAB",
    border: "1px solid #E98633",
    borderRadius: "5px",
    color: "#E98633",
    padding: "2px",
    fontWeight : 550,
    width : "fit-content",
    display : "flex",
    gap : "5px",
    alignItems: "center",
    justifyContent : "center",
    padding : "3px 10px"
  }
  const styleStatus = {
    13 : alert,
    14 : alert,
    15 : atencao,
    16 : alert
  }
  const alertSymbolStyle = {
    border: "2px solid #EF565D",
    borderRadius : "100%",
    width : "18px",
    height : "18px",
    fontSize : "8px",
    fontWeight : "600",
    display : "flex",
    alignItems: "center",
    justifyContent : "center"
  }
  const atencaoSymbolStyle = {
    border: "2px solid #E98633",
    borderRadius : "100%",
    width : "18px",
    height : "18px",
    fontSize : "8px",
    fontWeight : "600",
    display : "flex",
    alignItems: "center",
    justifyContent : "center"
  }

  const descricao = status_usuario_descricao.find(item => item?.id_status_usuario == value)?.status_usuario_descricao
  return <div style={styleStatus[value]}> 
    {[13,14,16].includes(value) &&  <span style={alertSymbolStyle}>✖</span>} 
    {[15].includes(value) &&  <span style={atencaoSymbolStyle}>!</span>} 
    <span>{descricao}</span>
    </div>
}

const prazoStyle = ({value})=>{
  const atencao = {
    backgroundColor: "#F4CCAB",
    border: "1px solid #E98633",
    borderRadius: "5px",
    color: "#E98633",
    padding: "2px",
    fontWeight : 550,
    width : "fit-content",
    display : "flex",
    gap : "5px",
    alignItems: "center",
    justifyContent : "center",
    padding : "3px 10px"
  }
  const atencaoSymbolStyle = {
    border: "2px solid #E98633",
    borderRadius : "100%",
    width : "18px",
    height : "18px",
    fontSize : "8px",
    fontWeight : "600",
    display : "flex",
    alignItems: "center",
    justifyContent : "center"
  }

  return <div style={value != "Em dia" ? atencao : {}}>{value != "Em dia" && <span style={atencaoSymbolStyle}>!</span>} {value}</div>

}

const colunasCito=[
  {
    align: 'left',
    field: 'paciente_nome',
    headerAlign: 'center',
    headerName: 'NOME',
    width: 320
  },
  {
    align: 'center',
    field: 'cidadao_cpf_dt_nascimento',
    headerAlign: 'center',
    headerName: 'CPF / DATA DE NASCIMENTO',
    width: 140
  },
  {
    align: 'center',
    field: 'id_status_usuario',
    headerAlign: 'center',
    headerName: 'STATUS DA COLETA',
    renderCell : selecionar_status_usuario_descricao,
    width: 300
  },
  {
    align: 'center',
    field: 'vencimento_da_coleta',
    headerAlign: 'center',
    headerName: 'VENCIMENTO DA COLETA',
    width: 100
  },
  {
    align: 'center',
    field: 'prazo_proxima_coleta',
    headerAlign: 'center',
    headerName: 'PRAZO PARA PRÓXIMA COLETA',
    renderCell: prazoStyle,
    width: 130
  },
  {
    align: 'center',
    field: 'idade',
    headerAlign: 'center',
    headerName: 'IDADE',
    width: 80
  },
  {
    align: 'center',
    field: 'acs_nome',
    headerAlign: 'center',
    headerName: 'ACS',
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
    data : ["Luana", "Soraia", "Estela","Camila", "Joana", "Samira", "Maiara", "Maria", "Antonio", "José", "Carlos","Birajar"],
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
    rotulo : "Filtrar por nome do ACS",
    data : ["Luana", "Soraia", "Estela","Camila", "Joana", "Samira", "Maiara", "Maria", "Antonio", "José", "Carlos","Birajar"],
    filtro : "acs_nome_cadastro"

  },
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
    rotulo : "Filtrar por tipo de diagnóstico",
    data : ["Diagnóstico Clínico","Autorreferida"],
    filtro : "identificacao_condicao_diabetes"

  },
]

const dataHipertensao=[
  {
      "cidadao_nome": "DAVIDSON MUSTAFA ZEHED",
      "cidadao_cpf": "32702133878",
      "identificacao_condicao_hipertensao": "Autorreferida",
      "dt_consulta_mais_recente": "2020-09-23",
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
      "dt_consulta_mais_recente": "2023-05-11",
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
      "dt_consulta_mais_recente": "2023-05-12",
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
      "dt_consulta_mais_recente": "2022-11-23",
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
      "dt_consulta_mais_recente": "2023-05-26",
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
      "dt_consulta_mais_recente": "2015-07-24",
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
      "dt_consulta_mais_recente": "2019-02-05",
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
      "dt_consulta_mais_recente": "2023-05-22",
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
      "dt_consulta_mais_recente": "2022-12-19",
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
      "dt_consulta_mais_recente": "2020-10-19",
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
      "dt_consulta_mais_recente": "2022-09-27",
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
    "dt_consulta_mais_recente": "2022-02-08",
    "prazo_proxima_consulta": "Até 31/Agosto",
    "dt_solicitacao_hemoglobina_glicada_mais_recente": null,
    "prazo_proxima_solicitacao_hemoglobina": "Até 31/Agosto",
    "acs_nome_cadastro": "Soraia"
  },
  {
    "cidadao_nome": "DESUITA JANSEN",
    "cidadao_cpf_dt_nascimento": "1952-11-12",
    "identificacao_condicao_diabetes": "Diagnóstico Clínico",
    "dt_consulta_mais_recente": null,
    "prazo_proxima_consulta": "Até 31/Agosto",
    "dt_solicitacao_hemoglobina_glicada_mais_recente": null,
    "prazo_proxima_solicitacao_hemoglobina": "Até 31/Agosto",
    "acs_nome_cadastro": "Samira"
  },
  {
    "cidadao_nome": "EDMILSON CASTRO SILVA",
    "cidadao_cpf_dt_nascimento": "45037680344",
    "identificacao_condicao_diabetes": "Diagnóstico Clínico",
    "dt_consulta_mais_recente": "2023-03-15",
    "prazo_proxima_consulta": "Em dia",
    "dt_solicitacao_hemoglobina_glicada_mais_recente": "2023-03-15",
    "prazo_proxima_solicitacao_hemoglobina": "Em dia",
    "acs_nome_cadastro": "Karliane Cunha Gomes"
  },
  {
    "cidadao_nome": "GILMARA MACHADO SANTOS",
    "cidadao_cpf_dt_nascimento": "1981-06-11",
    "identificacao_condicao_diabetes": "Diagnóstico Clínico",
    "dt_consulta_mais_recente": "2020-07-27",
    "prazo_proxima_consulta": "Até 31/Agosto",
    "dt_solicitacao_hemoglobina_glicada_mais_recente": null,
    "prazo_proxima_solicitacao_hemoglobina": "Até 31/Agosto",
    "acs_nome_cadastro": "Genilson Nascimento Lindoso"
  },
  {
    "cidadao_nome": "JOAO PEDRO MENDES",
    "cidadao_cpf_dt_nascimento": "1955-05-30",
    "identificacao_condicao_diabetes": "Diagnóstico Clínico",
    "dt_consulta_mais_recente": "2022-04-14",
    "prazo_proxima_consulta": "Até 31/Agosto",
    "dt_solicitacao_hemoglobina_glicada_mais_recente": null,
    "prazo_proxima_solicitacao_hemoglobina": "Até 31/Agosto",
    "acs_nome_cadastro": "Nerita Maia Travassos"
  },
  {
    "cidadao_nome": "JOSE ROBERTO PINHEIRO CAMARA",
    "cidadao_cpf_dt_nascimento": "1976-11-22",
    "identificacao_condicao_diabetes": "Diagnóstico Clínico",
    "dt_consulta_mais_recente": "2021-07-22",
    "prazo_proxima_consulta": "Até 31/Agosto",
    "dt_solicitacao_hemoglobina_glicada_mais_recente": null,
    "prazo_proxima_solicitacao_hemoglobina": "Até 31/Agosto",
    "acs_nome_cadastro": "Ines Pinheiro Costa"
  },
  {
    "cidadao_nome": "RAIMUNDA COSTA DOS SANTOS",
    "cidadao_cpf_dt_nascimento": "1933-03-30",
    "identificacao_condicao_diabetes": "Diagnóstico Clínico",
    "dt_consulta_mais_recente": "2022-09-05",
    "prazo_proxima_consulta": "Até 31/Agosto",
    "dt_solicitacao_hemoglobina_glicada_mais_recente": "2022-09-05",
    "prazo_proxima_solicitacao_hemoglobina": "Até 31/Agosto",
    "acs_nome_cadastro": "Ana Lucia Correa"
  },
  {
    "cidadao_nome": "ADRIEL ARAUJO MENDONCA",
    "cidadao_cpf_dt_nascimento": "2001-08-21",
    "identificacao_condicao_diabetes": "Diagnóstico Clínico",
    "dt_consulta_mais_recente": "2021-07-12",
    "prazo_proxima_consulta": "Até 31/Agosto",
    "dt_solicitacao_hemoglobina_glicada_mais_recente": null,
    "prazo_proxima_solicitacao_hemoglobina": "Até 31/Agosto",
    "acs_nome_cadastro": "Joao Gutemberg Pereira Soeiro"
  },
  {
    "cidadao_nome": "ALEXANDRINA MATA MAIA",
    "cidadao_cpf_dt_nascimento": "1950-05-19",
    "identificacao_condicao_diabetes": "Diagnóstico Clínico",
    "dt_consulta_mais_recente": "2021-08-24",
    "prazo_proxima_consulta": "Até 31/Agosto",
    "dt_solicitacao_hemoglobina_glicada_mais_recente": "2021-08-24",
    "prazo_proxima_solicitacao_hemoglobina": "Até 31/Agosto",
    "acs_nome_cadastro": "Raimundo Rosa Barros"
  },
]
const dadosFiltrosCito = [
  {
    rotulo : "Filtrar por nome da equipe",
    data :  ["ESF TABOAO 2","ESF GOIANA","ESF MAILASQUI 1.2"],
    filtro : "equipe_nome"
  },
  {
    rotulo : "Filtrar por INE da equipe",
    data : ["0002277573","0001540971","0000369799"],
    filtro : "equipe_ine"

  },
  {
    rotulo : "Filtrar por faixa etária",
    data : ['0','1','2','3','4','5','6','7','8'],
    filtro : "id_faixa_etaria"

  },
  {
    rotulo : "Idade",
    data : ['Maior ou igual a 34','Menor que 34'],
    filtro : "idade"

  },
  {
    rotulo : "Filtrar por status",
    data : [12,13,14,15,16],
    labels : {
      12 : "Coleta em dia",
      13 : "Nunca realizou coleta",
      14 : "Coleta com menos de 25 anos",
      15 : "Vence no final do quadrimestre",
      16 : "Coleta vencida"
    },
    filtro : "id_status_usuario"

  },
  {
    rotulo : "Filtrar por nome do ACS",
    data : ["Alessandra de Fatima Pereira", "Raquel Nascimento da Silva", "Rafaela Aparecida de Moraes"],
    filtro : "acs_nome"

  },
]

const dataCito = [
    {
        "paciente_nome": "ABIGAIR DE SOUZA BADA",
        "cidadao_cpf_dt_nascimento": "106.106.638-01",
        "id_status_usuario": 15,
        "vencimento_da_coleta": "-",
        "prazo_proxima_coleta": "31/08/2023",
        "idade": 5,
        "id_faixa_etaria": 8,
        "acs_nome": "Alessandra de Fatima Pereira",
        "estabelecimento_cnes": "2879085",
        "estabelecimento_nome": "Unidade de Saude da Familia Taboao",
        "equipe_ine": "0002277573",
        "ine_master": "0002277573",
        "equipe_nome": "ESF GOIANA",
        "dt_registro_producao_mais_recente" : "2023-10-22"
    },
    {
        "paciente_nome": "ACSA DOS SANTOS LOPES",
        "cidadao_cpf_dt_nascimento": "327.043.598-30",
        "id_status_usuario": 12,
        "vencimento_da_coleta": "11/05/2026",
        "prazo_proxima_coleta": "31/08/2023",
        "idade": 35,
        "id_faixa_etaria": 6,
        "acs_nome": "Raquel Nascimento da Silva",
        "estabelecimento_cnes": "2752506",
        "estabelecimento_nome": "Posto de Saude do Goiana",
        "equipe_ine": "0001540971",
        "ine_master": "0001540971",
        "equipe_nome": "ESF GOIANA",
        "dt_registro_producao_mais_recente" : "2023-10-22"
    },
    {
        "paciente_nome": "ADAGUIMAR DE CASTRO SANTOS",
        "cidadao_cpf_dt_nascimento": "100.941.638-39",
        "id_status_usuario": 12,
        "vencimento_da_coleta": "27/07/2025",
        "prazo_proxima_coleta": "Em dia",
        "idade": 55,
        "id_faixa_etaria": 8,
        "acs_nome": "Estela Ribeiro",
        "estabelecimento_cnes": "2752522",
        "estabelecimento_nome": "Posto de Saude de Mailasqui Sao Roque",
        "equipe_ine": "0000369799",
        "ine_master": "0000369799",
        "equipe_nome": "ESF MAILASQUI 1.2",
        "dt_registro_producao_mais_recente" : "2023-10-22"

    },
    {
        "paciente_nome": "ADA IMACULADA PADILHA DO SANOS",
        "cidadao_cpf_dt_nascimento": "305.569.958-05",
        "id_status_usuario": 13,
        "vencimento_da_coleta": "-",
        "prazo_proxima_coleta": "31/08/2023",
        "idade": 64,
        "id_faixa_etaria": 8,
        "acs_nome": "Rafaela Aparecida de Moraes",
        "estabelecimento_cnes": "2793377",
        "estabelecimento_nome": "Unidade de Saude da Familia Carmo Sao Roque",
        "equipe_ine": "0000369802",
        "ine_master": "0000369802",
        "equipe_nome": "ESF CARMO",
        "dt_registro_producao_mais_recente" : "2023-10-22"

    },
    {
        "paciente_nome": "ADEILDES DE JESUS SOARES DOS SANTOS",
        "cidadao_cpf_dt_nascimento": "391.395.288-80",
        "id_status_usuario": 13,
        "vencimento_da_coleta": "-",
        "prazo_proxima_coleta": "31/08/2023",
        "idade": 34,
        "id_faixa_etaria": 6,
        "acs_nome": "Marco Alberto Costa Santi",
        "estabelecimento_cnes": "2752506",
        "estabelecimento_nome": "Posto de Saude do Goiana",
        "equipe_ine": "0001540971",
        "ine_master": "0001540971",
        "equipe_nome": "ESF GOIANA",
        "dt_registro_producao_mais_recente" : "2023-10-22"

    },
    {
        "paciente_nome": "ADEITA SOARES DE OLIVEIRA",
        "cidadao_cpf_dt_nascimento": "164.405.328-47",
        "id_status_usuario": 12,
        "vencimento_da_coleta": "15/02/2026",
        "prazo_proxima_coleta": "Em dia",
        "idade": 51,
        "id_faixa_etaria": 8,
        "acs_nome": "Lucineia Pereira de Souza",
        "estabelecimento_cnes": "2793377",
        "estabelecimento_nome": "Unidade de Saude da Familia Carmo Sao Roque",
        "equipe_ine": "0000369802",
        "ine_master": "0000369802",
        "equipe_nome": "ESF CARMO",
        "dt_registro_producao_mais_recente" : "2023-10-22"

    },
    {
        "paciente_nome": "ADELAIDE GOMES FERREIRA",
        "cidadao_cpf_dt_nascimento": "167.328.578-35",
        "id_status_usuario": 12,
        "vencimento_da_coleta": "03/07/2026",
        "prazo_proxima_coleta": "Em dia",
        "idade": 49,
        "id_faixa_etaria": 7,
        "acs_nome": null,
        "estabelecimento_cnes": "2752506",
        "estabelecimento_nome": "Posto de Saude do Goiana",
        "equipe_ine": "0001540971",
        "ine_master": "0001540971",
        "equipe_nome": "ESF GOIANA",
        "dt_registro_producao_mais_recente" : "2023-10-22"

    }
]
const datefiltrosDiabetes = [
  "dt_consulta_mais_recente",
  "dt_solicitacao_hemoglobina_glicada_mais_recente"
]
const datefiltros = [
  "dt_afericao_pressao_mais_recente",
  "dt_consulta_mais_recente",
]
const datefiltrosCito = [
  "vencimento_da_coleta",
]
const IntfiltrosCito = [
    "idade"
]

const rotulosfiltrosHipertensao = [
  "NOMES DE A-Z",
  "DATA DA CONSULTA MAIS RECENTE",
  "PRAZO PARA PRÓXIMA CONSULTA",
  "DATA DA AFERIÇÃO DE PA MAIS RECENTE",
  "PRAZO PARA PRÓXIMA AFERIÇÃO DE PA",
  "NOME DO ACS DE A-Z"
]
const rotulosfiltrosDiabetes = [
  "NOMES DE A-Z",
  "NOME DO ACS DE A-Z",
  "DATA DA CONSULTA MAIS RECENTE",
  "PRAZO PARA PRÓXIMA CONSULTA",
  "DATA DE SOLICITAÇÃO DE HEMOGLOBINA GLICADA MAIS RECENTE",
  "PRAZO PARA PRÓXIMA SOLICITAÇÃO DE HEMOGLOBINA GLICADA MAIS RECENTE"
]
const rotulosfiltrosCito = [
  "NOMES DE A-Z",
  "NOME DO ACS DE A-Z",
  "VENCIMENTO DA COLETA MAIS ANTIGO",
  "IDADE",
  "PRAZO PARA PRÓXIMA COLETA",
]

const IDFiltrosHipertensao = {
  "NOMES DE A-Z": "cidadao_nome",
  "DATA DA CONSULTA MAIS RECENTE" : "dt_consulta_mais_recente",
  "PRAZO PARA PRÓXIMA CONSULTA" : "prazo_proxima_consulta",
  "DATA DA AFERIÇÃO DE PA MAIS RECENTE": "dt_afericao_pressao_mais_recente",
  "PRAZO PARA PRÓXIMA AFERIÇÃO DE PA" : "prazo_proxima_afericao_pa",
  "NOME DO ACS DE A-Z" : "acs_nome_cadastro"
}
const IDFiltrosDiabetes = {
  "NOMES DE A-Z": "cidadao_nome",
  "NOME DO ACS DE A-Z": "acs_nome_cadastro",
  "DATA DA CONSULTA MAIS RECENTE" : "dt_consulta_mais_recente",
  "PRAZO PARA PRÓXIMA CONSULTA" : "prazo_proxima_consulta",
  "DATA DE SOLICITAÇÃO DE HEMOGLOBINA GLICADA MAIS RECENTE" : "dt_solicitacao_hemoglobina_glicada_mais_recente",
  "PRAZO PARA PRÓXIMA SOLICITAÇÃO DE HEMOGLOBINA GLICADA MAIS RECENTE" : "prazo_proxima_solicitacao_hemoglobina"
}
const IDFiltrosCito = {
  "NOMES DE A-Z": "paciente_nome",
  "NOME DO ACS DE A-Z": "acs_nome",
  "IDADE" : "idade",
  "VENCIMENTO DA COLETA MAIS ANTIGO" : "vencimento_da_coleta",
  "PRAZO PARA PRÓXIMA COLETA" : "prazo_proxima_coleta",
}
const IDFiltrosOrdenacaoHipertensao = {
  "cidadao_nome" : "asc",
  "dt_consulta_mais_recente" : "asc",
  "prazo_proxima_consulta" : "asc",
  "dt_afericao_pressao_mais_recente" : "asc",
  "prazo_proxima_afericao_pa" : "asc",
  "acs_nome_cadastro" : "asc",
}
const IDFiltrosOrdenacaoDiabetes = {
  "cidadao_nome" : "asc",
  "acs_nome_cadastro" : "asc",
  "dt_consulta_mais_recente" : "asc",
  "prazo_proxima_consulta" : "asc",
  "dt_solicitacao_hemoglobina_glicada_mais_recente" : "asc",
  "prazo_proxima_solicitacao_hemoglobina" : "asc",
}
const IDFiltrosOrdenacaoCito = {
  "paciente_nome" : "asc",
  "acs_nome" : "asc",
  "idade" : "asc",
  "vencimento_da_coleta" : "desc",
  "prazo_proxima_coleta" : "asc",
}


const Template = (args) =>{
  const dados = {
    "diabetes" : dataDiabetes,
    "hipertensao" : dataHipertensao,
    "cito" : dataCito
  }

  const [data,setData]=useState(dados[args.painel])
  const [filtrosAplicados, setFiltrosAplicados] = useState(false)
  const [showSnackBar, setShowSnackBar] = useState({
    open: false,
    message: "",
    background: "",
    color: "",
  })
  args["data"] = data
  args["setData"] = setData
  args["showSnackBar"] = showSnackBar
  args["setShowSnackBar"] = setShowSnackBar
  args["setFiltros_aplicados"] = setFiltrosAplicados
  return <PainelBuscaAtiva {...args}/>
}

const imprimir = (escala,child)=>{
  if (typeof window !== 'undefined') {
    const largura = window.innerWidth;
    const altura = window.innerHeight;
    const janelaImpressao = window.open('', '', `width=${largura},height=${altura}`);
    const conteudo = ReactDOMServer.renderToString(child);
    janelaImpressao.document.write(`
    <html>
        <head>
        <style>
            @media print {
                @page {
                    transform: scale(${escala});
                    transform-origin: top left;
                }
                body {
                    margin: 0;
                }
            }
        </style>
        </head>
        <body>${conteudo}</body>
    </html>
    `);
    janelaImpressao.document.close();
    janelaImpressao.print();
  }
}

const printDataCito = (data)=> imprimir(
  0.78,
  <TabelaCitoImpressao
    data={data}
    colunas={colunasCito}
    status_usuario_descricao={{ data: status_usuario_descricao }}
    fontFamily="sans-serif"
  />
)

const printDataDiabetes = (data)=> imprimir(
  0.78,
  <TabelaHiperDiaImpressao
    data={data}
    colunas={colunasDiabetes}
    fontFamily="sans-serif"
  />
)

const printDataHipertensao = (data)=> imprimir(
  0.78,
  <TabelaHiperDiaImpressao
    data={data}
    colunas={colunas}
    fontFamily="sans-serif"
  />
)

export const Diabetes = Template.bind({});

Diabetes.args={
  painel : "diabetes",
  dadosFiltros : dadosFiltrosDiabetes,
  tabela : {
      colunas : colunasDiabetes,
      data : dataDiabetes
  },
  datefiltros : datefiltrosDiabetes,
  IDFiltros : IDFiltrosDiabetes,
  rotulosfiltros : rotulosfiltrosDiabetes,
  IDFiltrosOrdenacao : IDFiltrosOrdenacaoDiabetes,
  atualizacao : "20/10/2023",
  trackObject : {
    track : (evento, propriedades)=> console.log(evento, propriedades)
  },
  onPrintClick: printDataDiabetes,
}

export const Hipertensao = Template.bind({});

Hipertensao.args={
  painel : "hipertensao",
  dadosFiltros : dadosFiltros,
  tabela : {
      colunas : colunas,
      data : dataHipertensao
  },
  datefiltros : datefiltros,
  IDFiltros : IDFiltrosHipertensao,
  rotulosfiltros : rotulosfiltrosHipertensao,
  IDFiltrosOrdenacao : IDFiltrosOrdenacaoHipertensao,
  trackObject : {
    track : (evento, propriedades)=> console.log(evento, propriedades)
  },
  onPrintClick: printDataHipertensao,
}

export const Cito = Template.bind({});

Cito.args={
  painel : "aps",
  dadosFiltros : dadosFiltrosCito,
  tabela : {
      colunas : colunasCito,
      data : dataCito
  },
  datefiltros : datefiltrosCito,
  IntFiltros : IntfiltrosCito,
  IDFiltros : IDFiltrosCito,
  rotulosfiltros : rotulosfiltrosCito,
  IDFiltrosOrdenacao : IDFiltrosOrdenacaoCito,
  trackObject : {
    track : (evento, propriedades)=> console.log(evento, propriedades)
  },
  TabelaImpressao : TabelaCitoImpressao,
  atualizacao : new Date(dataCito.reduce((maisRecente, objeto) => {
    const dataAtual = new Date(objeto.dt_registro_producao_mais_recente);
    const dataMaisRecenteAnterior = new Date(maisRecente);
    return dataAtual > dataMaisRecenteAnterior ? objeto.dt_registro_producao_mais_recente : maisRecente
  }, "2000-01-01")).toLocaleString('pt-BR', { 
    timeZone: 'UTC',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }),
  onPrintClick: printDataCito,
  propAgrupamentoImpressao: "equipe_nome",
  labelsModalImpressao: {
    titulo: "IMPRESSÃO POR EQUIPES",
    personalizacaoPrincipal: {
      titulo: "Deseja imprimir as listas divididas por Equipes?",
      descricao: "Essa impressão agrupa os cidadãos de acordo com as Equipes correspondentes. Qualquer filtro ou ordenação selecionados anteriormente serão mantidos e aplicados dentro desses grupos.",
      agrupamentoSim: "Sim, dividir listas por equipes.",
      agrupamentoNao: "Não, imprimir a lista como ela está.",
    },
    personalizacaoSecundaria: {
      titulo: "Outras opções de impressão:",
      recomendacao: "Ideal para distribuir listas para coordenadoras de equipe",
      separacaoGrupoPorFolha: "Também dividir equipes em folhas separadas",
      ordenacao: "Também ordenar listas por profissional responsável",
    },
    botao: "IMPRIMIR LISTA",
  },
}
