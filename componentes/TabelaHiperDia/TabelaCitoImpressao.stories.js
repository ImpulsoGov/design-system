import React from 'react'
import { TabelaCitoImpressao } from './index'
export default {
  title: "Componentes/TabelaCitoImpressao",
  component: TabelaCitoImpressao,
};

const status_usuario_descricao = {
  "data" : [
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
}


const dataCito = [
  {
      "paciente_nome": "ABIGAIR DE SOUZA BADA",
      "cidadao_cpf_dt_nascimento": "106.106.638-01",
      "id_status_usuario": 15,
      "vencimento_da_coleta": "-",
      "prazo_proxima_coleta": "31/08/2023",
      "idade": 55,
      "id_faixa_etaria": 8,
      "acs_nome": "Alessandra de Fatima Pereira",
      "estabelecimento_cnes": "2879085",
      "estabelecimento_nome": "Unidade de Saude da Familia Taboao",
      "equipe_ine": "0002277573",
      "ine_master": "0002277573",
      "equipe_nome": "ESF TABOAO 2"
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
      "equipe_nome": "ESF GOIANA"
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
      "equipe_nome": "ESF MAILASQUI 1.2"
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
      "equipe_nome": "ESF CARMO"
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
      "equipe_nome": "ESF GOIANA"
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
      "equipe_nome": "ESF CARMO"
  },
  {
      "paciente_nome": "ADELAIDE GOMES FERREIRA",
      "cidadao_cpf_dt_nascimento": "167.328.578-35",
      "id_status_usuario": 12,
      "vencimento_da_coleta": "03/07/2026",
      "prazo_proxima_coleta": "Em dia",
      "idade": 49,
      "id_faixa_etaria": 7,
      "acs_nome": "Fabiana Matias de Oliveira",
      "estabelecimento_cnes": "2752506",
      "estabelecimento_nome": "Posto de Saude do Goiana",
      "equipe_ine": "0001540971",
      "ine_master": "0001540971",
      "equipe_nome": "ESF GOIANA"
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

const Template = (args) => <TabelaCitoImpressao {...args}/>

export const Citopatologico = Template.bind({});

Citopatologico.args={
  data : dataCito,
  colunas : colunasCito,
  status_usuario_descricao : status_usuario_descricao
}