import { dadosFiltrosDiabetes } from "./dadosFiltrosDiabetes"
import { colunasDiabetes } from "./colunasDiabetes"
import { dataDiabetes } from "./dataDiabetes"
import { datefiltrosDiabetes } from "./dateFiltrosDiabetes"
import { IDFiltrosDiabetes } from "./IDFiltrosDiabetes"
import { rotulosfiltrosDiabetes } from "./rotulosfiltrosDiabetes"
import { IDFiltrosOrdenacaoDiabetes } from "./IDFiltrosOrdenacaoDiabetes"
import { larguraColunasDiabetesPaisagem, larguraColunasDiabetesRetrato } from "./larguraColunasDiabetes"
import { colunasImpressaoDiabetes } from "./colunasImpressaoDiabetes"

export const DiabetesArgs = {
    painel : "aps",
    lista : "DIABETES",
    divisorVertical : [3,5],
    largura_colunas_impressao : {
        retrato : larguraColunasDiabetesRetrato,
        paisagem : larguraColunasDiabetesPaisagem
    },
    dadosFiltros : dadosFiltrosDiabetes,
    tabela : {
        colunas : colunasDiabetes,
        data : dataDiabetes
    },
    colunasImpressao : colunasImpressaoDiabetes,
    datefiltros : datefiltrosDiabetes,
    IDFiltros : IDFiltrosDiabetes,
    rotulosfiltros : rotulosfiltrosDiabetes,
    IDFiltrosOrdenacao : IDFiltrosOrdenacaoDiabetes,
    trackObject : {
        track : (evento, propriedades)=> console.log(evento, propriedades)
    },
    atualizacao : new Date(dataDiabetes.reduce((maisRecente, objeto) => {
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
    propAgrupamentoImpressao: "equipe_nome_cadastro",
    propOrdenacaoImpressao: "acs_nome_cadastro",
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