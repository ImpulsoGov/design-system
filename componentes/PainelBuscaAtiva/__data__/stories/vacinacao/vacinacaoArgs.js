import { dadosFiltrosVacinacao } from "./dadosFiltrosVacinacao"
import { colunasVacinacao } from "./colunasVacinacao"
import { dataVacinacao } from "./dataVacinacao"
import { datefiltrosVacinacao } from "./dateFiltrosVacinacao"
import { IDFiltrosVacinacao } from "./IDFiltrosVacinacao"
import { rotulosfiltrosVacinacao } from "./rotulosfiltrosVacinacao"
import { IDFiltrosOrdenacaoVacinacao } from "./IDFiltrosOrdenacaoVacinacao"
import { larguraColunasVacinacao } from "./larguraColunasVacinacao"
import { intFiltrosVacinacao } from "./intFiltrosVacinacao";


export const vacinacaoArgs = {
    painel : "aps",
    lista : "VACINAÇÃO",
    divisorVertical : [2,4],
    largura_colunas_impressao : larguraColunasVacinacao,
    dadosFiltros : dadosFiltrosVacinacao,
    tabela : {
        colunas : colunasVacinacao,
        data : dataVacinacao
    },
    datefiltros : datefiltrosVacinacao,
    IntFiltros: intFiltrosVacinacao,
    IDFiltros : IDFiltrosVacinacao,
    rotulosfiltros : rotulosfiltrosVacinacao,
    IDFiltrosOrdenacao : IDFiltrosOrdenacaoVacinacao,
    trackObject : {
      track : (evento, propriedades)=> console.log(evento, propriedades)
    },
    atualizacao : new Date(dataVacinacao.reduce((maisRecente, objeto) => {
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
}