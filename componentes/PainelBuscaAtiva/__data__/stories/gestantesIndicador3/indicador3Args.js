import { colunasIndicador3 } from "./colunasIndicador3";
import { dadosFiltrosIndicador3 } from "./dadosFiltrosIndicador3";
import { dataIndicador3 } from "./dataIndicador3";
import { datefiltrosIndicador3 } from "./dateFiltrosIndicador3";
import { IDFiltrosIndicador3 } from "./IDFiltrosIndicador3";
import { IDFiltrosOrdenacaoIndicador3 } from "./IDFiltrosOrdenacaoIndicador3";
import { larguraColunasIndicador3 } from "./larguraColunasIndicador3";
import listasAuxiliares from "./listasAuxiliaresIndicador3.json";
import { rotulosfiltrosIndicador3 } from "./rotulosfiltrosIndicador3";

export const indicador3Args = {
  painel: "aps",
  lista: "GETANTES",
  divisorVertical: [0, 3],
  largura_colunas_impressao: larguraColunasIndicador3,
  dadosFiltros: dadosFiltrosIndicador3,
  tabela: {
    colunas: colunasIndicador3,
    data: dataIndicador3
  },
  datefiltros: datefiltrosIndicador3,
  IDFiltros: IDFiltrosIndicador3,
  rotulosfiltros: rotulosfiltrosIndicador3,
  IDFiltrosOrdenacao: IDFiltrosOrdenacaoIndicador3,
  trackObject: {
    track: (evento, propriedades) => console.log(evento, propriedades)
  },
  atualizacao: new Date(dataIndicador3.reduce((maisRecente, objeto) => {
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
    identificacao_atendimento_odontologico: listasAuxiliares
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