import { dadosFiltrosGestantesIndicador1 } from "./dadosFiltrosGestantesIndicador1"
import { colunasGestantesIndicador1 } from "./colunasGestantesIndicador1"
import { dataGestantesIndicador1 } from "./dataGestantesIndicador1"
import { datefiltrosGestantesIndicador1 } from "./dateFiltrosGestantesIndicador1"
import { IDFiltrosGestantesIndicador1 } from "./IDFiltrosGestantesIndicador1"
import { rotulosfiltrosGestantesIndicador1 } from "./rotulosfiltrosGestantesIndicador1"
import { IDFiltrosOrdenacaoGestantesIndicador1 } from "./IDFiltrosOrdenacaoGestantesIndicador1"
import { larguraColunasGestantesIndicador1Paisagem, larguraColunasGestantesIndicador1Retrato } from "./larguraColunasGestantesIndicador1"
import { colunasImpressaoGestantesIndicador1 } from "./colunasImpressaoGestantesIndicador1"

export const GestantesIndicador1Args = {
    painel : "aps",
    lista : "PRÉ-NATAL INDICADOR 1 (6 CONSULTAS)",
    divisorVertical : [0,4],
    largura_colunas_impressao : {
        paisagem : larguraColunasGestantesIndicador1Paisagem,
        retrato : larguraColunasGestantesIndicador1Retrato
    },
    dadosFiltros : dadosFiltrosGestantesIndicador1,
    tabela : {
        colunas : colunasGestantesIndicador1,
        data : dataGestantesIndicador1
    },
    colunasImpressao : colunasImpressaoGestantesIndicador1,
    datefiltros : datefiltrosGestantesIndicador1,
    IDFiltros : IDFiltrosGestantesIndicador1,
    rotulosfiltros : rotulosfiltrosGestantesIndicador1,
    IDFiltrosOrdenacao : IDFiltrosOrdenacaoGestantesIndicador1,
    trackObject : {
        track : (evento, propriedades)=> console.log(evento, propriedades)
    },
    atualizacao : new Date(dataGestantesIndicador1.reduce((maisRecente, objeto) => {
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
    liberarPesquisa: () => console.log("liberar pesquisa"),
}