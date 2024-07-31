import { dadosFiltrosGestantesIndicador2 } from "./dadosFiltrosGestantesIndicador2"
import { colunasGestantesIndicador2 } from "./colunasGestantesIndicador2"
import { dataGestantesIndicador2 } from "./dataGestantesIndicador2"
import { datefiltrosGestantesIndicador2 } from "./dateFiltrosGestantesIndicador2"
import { IDFiltrosGestantesIndicador2 } from "./IDFiltrosGestantesIndicador2"
import { rotulosfiltrosGestantesIndicador2 } from "./rotulosfiltrosGestantesIndicador2"
import { IDFiltrosOrdenacaoGestantesIndicador2 } from "./IDFiltrosOrdenacaoGestantesIndicador2"
import { larguraColunasGestantesIndicador2 } from "./larguraColunasGestantesIndicador2"
import { identificacao_exame_sifilis_hiv } from "./identificacao_exame_hiv_sifilis"
export const GestantesIndicador2Args = {
    painel : "aps",
    lista : "GESTANTES",
    divisorVertical : [0,3],
    largura_colunas_impressao : larguraColunasGestantesIndicador2,
    dadosFiltros : dadosFiltrosGestantesIndicador2,
    tabela : {
        colunas : colunasGestantesIndicador2,
        data : dataGestantesIndicador2
    },
    datefiltros : datefiltrosGestantesIndicador2,
    IDFiltros : IDFiltrosGestantesIndicador2,
    rotulosfiltros : rotulosfiltrosGestantesIndicador2,
    IDFiltrosOrdenacao : IDFiltrosOrdenacaoGestantesIndicador2,
    trackObject : {
        track : (evento, propriedades)=> console.log(evento, propriedades)
    },
    atualizacao : new Date(dataGestantesIndicador2.reduce((maisRecente, objeto) => {
    const dataAtual = new Date(objeto.dt_registro_producao_mais_recente);
    const dataMaisRecenteAnterior = new Date(maisRecente);
    return dataAtual > dataMaisRecenteAnterior ? objeto.dt_registro_producao_mais_recente : maisRecente
    }, "2000-02-02")).toLocaleString('pt-BR', { 
    timeZone: 'UTC',
    year: '2-digit',
    month: '2-digit',
    day: '2-digit'
    }),
    listas_auxiliares : {
        identificacao_exame_sifilis_hiv : identificacao_exame_sifilis_hiv
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