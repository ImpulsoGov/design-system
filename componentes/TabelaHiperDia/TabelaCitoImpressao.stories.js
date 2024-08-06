import React from 'react'
import { TabelaImpressao } from '../PainelBuscaAtiva/components/Impressao/componentes/TabelaImpressao';
import { larguraColunasCito } from "../PainelBuscaAtiva/__data__/stories/citopatologico/larguraColunasCito";
import { dadosFiltrosCito } from "../PainelBuscaAtiva/__data__/stories/citopatologico/dadosFiltrosCito";
import { colunasCito } from "../PainelBuscaAtiva/__data__/stories/citopatologico/colunasCito";
import { dataCito } from "../PainelBuscaAtiva/__data__/stories/citopatologico/dataCito";
import { datefiltrosCito } from "../PainelBuscaAtiva/__data__/stories/citopatologico/datefiltrosCito";
import { IntfiltrosCito } from "../PainelBuscaAtiva/__data__/stories/citopatologico/IntfiltrosCito";
import { IDFiltrosCito } from "../PainelBuscaAtiva/__data__/stories/citopatologico/IDFiltrosCito";
import { rotulosfiltrosCito } from "../PainelBuscaAtiva/__data__/stories/citopatologico/rotulosfiltrosCito";
import { IDFiltrosOrdenacaoCito } from "../PainelBuscaAtiva/__data__/stories/citopatologico/IDFiltrosOrdenacaoCito";
import { status_usuario_descricao } from "../PainelBuscaAtiva/__data__/stories/citopatologico/status_usuario_descricao";
import { colunasImpressaoCito } from "../PainelBuscaAtiva/__data__/stories/citopatologico/colunasImpressaoCito";
export default {
  title: "Componentes/TabelaImpressao",
  component: TabelaImpressao,
};



const Template = (args) => <TabelaImpressao {...args}/>

export const Citopatologico = Template.bind({});

Citopatologico.args= {           
  data : dataCito,
  colunas : colunasImpressaoCito,
  lista : "CITOPATOLOGICO",
  listas_auxiliares : {
    status_usuario_descricao
  },
  data_producao_mais_recente : new Date(dataCito.reduce((maisRecente, objeto) => {
    const dataAtual = new Date(objeto.dt_registro_producao_mais_recente);
    const dataMaisRecenteAnterior = new Date(maisRecente);
    return dataAtual > dataMaisRecenteAnterior ? objeto.dt_registro_producao_mais_recente : maisRecente
  }, "2000-01-01")).toLocaleString('pt-BR', { 
    timeZone: 'UTC',
    year: '2-digit',
    month: '2-digit',
    day: '2-digit'
  }),
  fontFamily : "Arial",
  divisao_dados : true,
  divisao_paginas : false,
  filtros_aplicados : [],
  largura_colunas_impressao : larguraColunasCito,
  divisorVertical : [1,4],
  propAgrupamentoImpressao : 'equipe_nome',
}