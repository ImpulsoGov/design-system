import { colunasGestantesIndicador3 } from "./colunasGestantesIndicador3";
import { colunasImpressaoIndicador3 } from "./colunasImpressaoGestantesIndicador3";
import { dadosFiltrosGestantesIndicador3  } from "./dadosFiltrosGestantesIndicador3";
import { dataGestantesIndicador3  } from "./dataGestantesIndicador3";
import { datefiltrosGestantesIndicador3  } from "./dateFiltrosGestantesIndicador3";
import { IDFiltrosGestantesIndicador3  } from "./IDFiltrosGestantesIndicador3";
import { IDFiltrosOrdenacaoGestantesIndicador3  } from "./IDFiltrosOrdenacaoGestantesIndicador3";
import { larguraColunasGestantesIndicador3  } from "./larguraColunasGestantesIndicador3";
import * as listasAuxiliares from "./listasAuxiliaresGestantesIndicador3";
import { rotulosfiltrosGestantesIndicador3 } from "./rotulosfiltrosGestantesIndicador3";

export const GestantesIndicador3Args = {
  painel: "aps",
  lista: "PRÉ-NATAL - INDICADOR 3 (ATENDIMENTO ODONTOLÓGICO)",
  divisorVertical: [0, 3],
  largura_colunas_impressao: larguraColunasGestantesIndicador3,
  dadosFiltros: dadosFiltrosGestantesIndicador3,
  tabela: {
    colunas: colunasGestantesIndicador3,
    data: dataGestantesIndicador3
  },
  datefiltros: datefiltrosGestantesIndicador3,
  IDFiltros: IDFiltrosGestantesIndicador3,
  rotulosfiltros: rotulosfiltrosGestantesIndicador3,
  IDFiltrosOrdenacao: IDFiltrosOrdenacaoGestantesIndicador3,
  trackObject: {
    track: (evento, propriedades) => console.log(evento, propriedades)
  },
  atualizacao: new Date(dataGestantesIndicador3.reduce((maisRecente, objeto) => {
    const dataAtual = new Date(objeto.dt_registro_producao_mais_recente);
    const dataMaisRecenteAnterior = new Date(maisRecente);
    return dataAtual > dataMaisRecenteAnterior ? objeto.dt_registro_producao_mais_recente : maisRecente;
  }, "2000-01-01")).toLocaleString('pt-BR', {
    timeZone: 'UTC',
    year: '2-digit',
    month: '2-digit',
    day: '2-digit'
  }),
  listas_auxiliares: {
    identificacao_atendimento_odontologico: listasAuxiliares.identificacao_atendimento_odontologico
  },
  colunasImpressao: colunasImpressaoIndicador3,
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
};