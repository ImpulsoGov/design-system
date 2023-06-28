import React from 'react'
import { ButtonPrint, } from './index'
import { TabelaHiperDiaImpressao } from '../TabelaHiperDia';
export default {
  title: "Componentes/ButtonPrint",
  component: ButtonPrint,
};
const colunas = [
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
    headerName: 'CPF/DATA DE NASCIMENTO',
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
      "cidadao_cpf_dt_nascimento": "2020-09-93",
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
      "cidadao_cpf_dt_nascimento": "33343316873",
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
      "cidadao_cpf_dt_nascimento": "32704359830",
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
      "cidadao_cpf_dt_nascimento": "41364717859",
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
      "cidadao_cpf_dt_nascimento": "35299537840",
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
      "cidadao_cpf_dt_nascimento": "34353421883",
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
      "cidadao_cpf_dt_nascimento": "42402357827",
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
      "cidadao_cpf_dt_nascimento": "22910043878",
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
      "cidadao_cpf_dt_nascimento": "34445553859",
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
      "cidadao_cpf_dt_nascimento": "43656184828",
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
      "cidadao_cpf_dt_nascimento": "44455263802",
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

const Child = ()=> <TabelaHiperDiaImpressao data={data} colunas={colunas}/>
const Template = (args) => <ButtonPrint {...args}/>
export const Default = Template.bind({});
Default.args={
  label :"CLICK AQUI PARA IMPRIMIR",
  child :  <Child/>,
  escala : 0.78
} 

