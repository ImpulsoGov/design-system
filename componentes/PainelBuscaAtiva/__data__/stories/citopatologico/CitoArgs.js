import { larguraColunasCito } from "./larguraColunasCito";
import { dadosFiltrosCito } from "./dadosFiltrosCito";
import { colunasCito } from "./colunasCito";
import { dataCito } from "./dataCito";
import { datefiltrosCito } from "./datefiltrosCito";
import { IntfiltrosCito } from "./IntfiltrosCito";
import { IDFiltrosCito } from "./IDFiltrosCito";
import { rotulosfiltrosCito } from "./rotulosfiltrosCito";
import { IDFiltrosOrdenacaoCito } from "./IDFiltrosOrdenacaoCito";
import { status_usuario_descricao } from "./status_usuario_descricao";

export const CitoArgs = {
    painel : "aps",
    lista : "CITOPATOLÓGICO",
    divisorVertical : [1,4],
    largura_colunas_impressao : larguraColunasCito,
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
    atualizacao : new Date(dataCito.reduce((maisRecente, objeto) => {
      const dataAtual = new Date(objeto.dt_registro_producao_mais_recente);
      const dataMaisRecenteAnterior = new Date(maisRecente);
      return dataAtual > dataMaisRecenteAnterior ? objeto.dt_registro_producao_mais_recente : maisRecente
    }, "2000-01-01")).toLocaleString('pt-BR', { 
      timeZone: 'UTC',
      year: '2-digit',
      month: '2-digit',
      day: '2-digit'
    }),
    listas_auxiliares : {
      status_usuario_descricao
    },
    propAgrupamentoImpressao: "equipe_nome",
    propOrdenacaoImpressao: "acs_nome",
    labelsModalImpressao: {
      titulo: "IMPRESSÃO POR EQUIPES",
      personalizacaoPrincipal: {
        titulo: "Deseja imprimir as listas divididas por Equipes?",
        descricao: "Essa impressão agrupa os cidadãos de acordo com as Equipes correspondentes. Qualquer filtro ou ordenação selecionados anteriormente serão mantidos e aplicados dentro desses grupos.",
        agrupamentoSim: "Sim, dividir listas por equipes.",
        agrupamentoNao: "Não, imprimir a lista como ela está.",
      },
    personalizacaoSecundaria: {
      titulo: "Outras opções de impressão por equipes:",
      recomendacao: "Ideal para distribuir listas para coordenadoras de equipe",
      separacaoGrupoPorFolha: "Também dividir equipes em folhas separadas",
      ordenacao: "Também ordenar listas por profissional responsável",
    },
    botao: "IMPRIMIR LISTA",
    },
  }