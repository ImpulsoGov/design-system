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
      field: 'nome',
      headerAlign: 'center',
      headerName: 'NOME',
      width: 240
    },
    {
      align: 'center',
      field: 'cpf',
      headerAlign: 'center',
      headerName: 'CPF',
      width: 130
    },
    {
      align: 'center',
      field: 'identificacao_condicao',
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
    data : ["Diagnostico Clinico","Autorreferido"],
    filtro : "identificacao_condicao"

  },
  {
    rotulo : "Filtrar por faixa etária",
    data : ["apenas em dia","consulta e aferição de PA em dia","apenas aferição de PA em dia","nada em dia"],
    filtro : ""

  },
]

const data=[
    {
      acs_nome_cadastro: 'Angelica Souza Toledo Andrade',
      cpf: '06385182604',
      dt_afericao_pressao_mais_recente: '22/02/21',
      dt_consulta_mais_recente: '22/09/21',
      identificacao_condicao: 'Diagnostico Clinico',
      mail: 'aangelicasouza24@gmail.com',
      nome: 'Angelica Souza Toledo Andrade',
      prazo_proxima_afericao_pa: 'em dia',
      prazo_proxima_consulta: 'até 30/04/23'
    },
    {
        acs_nome_cadastro: 'Angelica Souza Toledo Andrade',
        cpf: '06385182214',
        dt_afericao_pressao_mais_recente: '22/02/21',
        dt_consulta_mais_recente: '01/01/21',
        identificacao_condicao: 'diagnostico Clinico',
        mail: 'aangelicasouza24@gmail.com',
        nome: 'Danilo Lopes Neves',
        prazo_proxima_afericao_pa: 'em dia',
        prazo_proxima_consulta: 'em dia'
    },  
    {
      acs_nome_cadastro: 'Angelica Souza Toledo Andrade',
      cpf: '06385172614',
      dt_afericao_pressao_mais_recente: '22/02/21',
      dt_consulta_mais_recente: '22/09/21',
      identificacao_condicao: 'diagnostico Clinico',
      mail: 'aangelicasouza24@gmail.com',
      nome: 'Angelica Souza Toledo Andrade',
      prazo_proxima_afericao_pa: 'em dia',
      prazo_proxima_consulta: 'em dia'
    },
    {
      acs_nome_cadastro: 'Angelica Souza Toledo Andrade',
      cpf: '06385582514',
      dt_afericao_pressao_mais_recente: '22/02/21',
      dt_consulta_mais_recente: '22/09/21',
      identificacao_condicao: 'diagnostico Clinico',
      mail: 'aangelicasouza24@gmail.com',
      nome: 'Angelica Souza Toledo Andrade',
      prazo_proxima_afericao_pa: 'em dia',
      prazo_proxima_consulta: 'em dia'
    },
    {
      acs_nome_cadastro: 'Angelica Souza Toledo Andrade',
      cpf: '06385122814',
      dt_afericao_pressao_mais_recente: '22/02/21',
      dt_consulta_mais_recente: '22/09/21',
      identificacao_condicao: 'diagnostico Clinico',
      mail: 'aangelicasouza24@gmail.com',
      nome: 'Angelica Souza Toledo Andrade',
      prazo_proxima_afericao_pa: 'em dia',
      prazo_proxima_consulta: 'em dia'
    },
    {
      acs_nome_cadastro: 'Angelica Souza Toledo Andrade',
      cpf: '06185182914',
      dt_afericao_pressao_mais_recente: '22/02/21',
      dt_consulta_mais_recente: '22/09/21',
      identificacao_condicao: 'diagnostico Clinico',
      mail: 'aangelicasouza24@gmail.com',
      nome: 'Angelica Souza Toledo Andrade',
      prazo_proxima_afericao_pa: 'em dia',
      prazo_proxima_consulta: 'em dia'
    },
    {
      acs_nome_cadastro: 'Angelica Souza Toledo Andrade',
      cpf: '06185182014',
      dt_afericao_pressao_mais_recente: '22/02/21',
      dt_consulta_mais_recente: '22/09/21',
      identificacao_condicao: 'diagnostico Clinico',
      mail: 'aangelicasouza24@gmail.com',
      nome: 'Angelica Souza Toledo Andrade',
      prazo_proxima_afericao_pa: 'em dia',
      prazo_proxima_consulta: 'em dia'
    },
    {
      acs_nome_cadastro: 'Angelica Souza Toledo Andrade',
      cpf: '06385182114',
      dt_afericao_pressao_mais_recente: '01/02/21',
      dt_consulta_mais_recente: '22/09/21',
      identificacao_condicao: 'diagnostico Clinico',
      mail: 'aangelicasouza24@gmail.com',
      nome: 'Angelica Souza Toledo Andrade',
      prazo_proxima_afericao_pa: 'em dia',
      prazo_proxima_consulta: 'em dia'
    },
    {
      acs_nome_cadastro: 'Angelica Souza Toledo Andrade',
      cpf: '06885182319',
      dt_afericao_pressao_mais_recente: '22/02/21',
      dt_consulta_mais_recente: '22/09/21',
      identificacao_condicao: 'diagnostico Clinico',
      mail: 'aangelicasouza24@gmail.com',
      nome: 'Angelica Souza Toledo Andrade',
      prazo_proxima_afericao_pa: 'em dia',
      prazo_proxima_consulta: 'em dia'
    },
    {
      acs_nome_cadastro: 'Angelica Souza Toledo Andrade',
      cpf: '04385182415',
      dt_afericao_pressao_mais_recente: '22/02/21',
      dt_consulta_mais_recente: '22/09/21',
      identificacao_condicao: 'diagnostico Clinico',
      mail: 'aangelicasouza24@gmail.com',
      nome: 'Angelica Souza Toledo Andrade',
      prazo_proxima_afericao_pa: 'em dia',
      prazo_proxima_consulta: 'em dia'
    },
    {
      acs_nome_cadastro: 'Angelica Souza Toledo Andrade',
      cpf: '16385182514',
      dt_afericao_pressao_mais_recente: '22/02/21',
      dt_consulta_mais_recente: '22/09/21',
      identificacao_condicao: 'diagnostico Clinico',
      mail: 'aangelicasouza24@gmail.com',
      nome: 'Angelica Souza Toledo Andrade',
      prazo_proxima_afericao_pa: 'em dia',
      prazo_proxima_consulta: 'em dia'
    },
    {
      acs_nome_cadastro: 'Angelica Souza Toledo Andrade',
      cpf: '06385182559',
      dt_afericao_pressao_mais_recente: '22/02/21',
      dt_consulta_mais_recente: '22/09/21',
      identificacao_condicao: 'diagnostico Clinico',
      mail: 'aangelicasouza24@gmail.com',
      nome: 'Angelica Souza Toledo Andrade',
      prazo_proxima_afericao_pa: 'em dia',
      prazo_proxima_consulta: 'em dia'
    },
    {
      acs_nome_cadastro: 'Angelica Souza Toledo Andrade',
      cpf: '46385182664',
      dt_afericao_pressao_mais_recente: '22/02/21',
      dt_consulta_mais_recente: '22/09/21',
      identificacao_condicao: 'diagnostico Clinico',
      mail: 'aangelicasouza24@gmail.com',
      nome: 'Angelica Souza Toledo Andrade',
      prazo_proxima_afericao_pa: 'em dia',
      prazo_proxima_consulta: 'em dia'
    },
    {
      acs_nome_cadastro: 'Angelica Souza Toledo Andrade',
      cpf: '56385182674',
      dt_afericao_pressao_mais_recente: '22/02/21',
      dt_consulta_mais_recente: '22/09/21',
      identificacao_condicao: 'Diagnostico Clinico',
      mail: 'aangelicasouza24@gmail.com',
      nome: 'Angelica Souza Toledo Andrade',
      prazo_proxima_afericao_pa: 'em dia',
      prazo_proxima_consulta: 'em dia'
    }
]
const Template = (args) => <PainelBuscaAtiva {...args}/>

export const APS = Template.bind({});

APS.args={
    painel : "hipertensao",
    visualizacao : "APS"
}

export const Equipe = Template.bind({});

Equipe.args={
    painel : "hipertensao",
    visualizacao : "equipe",
    dadosFiltros : dadosFiltros,
    tabela : {
        colunas : colunas,
        data : data
    },
    cards : cards
}