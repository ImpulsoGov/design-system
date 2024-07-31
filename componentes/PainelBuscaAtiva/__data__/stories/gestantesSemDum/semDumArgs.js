import atendimentoOdontologico from "./atendimentoOdontologico.json";
import { colunasSemDum } from "./colunasSemDum";
import { dadosFiltrosSemDum } from "./dadosFiltrosSemDum";
import { dataSemDum } from "./dataSemDum";
import { datefiltrosSemDum } from "./dateFiltrosSemDum";
import exameSifilisHiv from "./exameSifilisHiv.json";
import { IDFiltrosOrdenacaoSemDum } from "./IDFiltrosOrdenacaoSemDum";
import { IDFiltrosSemDum } from "./IDFiltrosSemDum";
import { larguraColunasSemDum } from "./larguraColunasSemDum";
import { rotulosfiltrosSemDum } from "./rotulosfiltrosSemDum";

export const semDumArgs = {
  painel: "aps",
  lista: "GETANTES",
  divisorVertical: [1, 8],
  largura_colunas_impressao: larguraColunasSemDum,
  dadosFiltros: dadosFiltrosSemDum,
  tabela: {
    colunas: colunasSemDum,
    data: dataSemDum
  },
  datefiltros: datefiltrosSemDum,
  IDFiltros: IDFiltrosSemDum,
  rotulosfiltros: rotulosfiltrosSemDum,
  IDFiltrosOrdenacao: IDFiltrosOrdenacaoSemDum,
  trackObject: {
    track: (evento, propriedades) => console.log(evento, propriedades)
  },
  atualizacao: new Date(dataSemDum.reduce((maisRecente, objeto) => {
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
    identificacao_atendimento_odontologico: atendimentoOdontologico,
    identificacao_exame_hiv_sifilis: exameSifilisHiv
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
};