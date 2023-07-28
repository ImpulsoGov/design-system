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

const Template = (args) => <TabelaHiperDiaImpressao {...args}/>

export const Default = Template.bind({});

Default.args={
  data : data,
  colunas : colunas
}

export const Citopatologico = Template.bind({});

Citopatologico.args={
  data : dataCito,
  colunas : colunasCito,
}