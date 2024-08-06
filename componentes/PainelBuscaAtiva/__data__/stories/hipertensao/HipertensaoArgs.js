import { dadosFiltrosHipertensao } from "./dadosFiltrosHipertensao"
import { colunasHipertensao } from "./colunasHipertensao"
import { dataHipertensao } from "./dataHipertensao"
import { datefiltrosHipertensao } from "./dateFiltrosHipertensao"
import { IDFiltrosHipertensao } from "./IDFiltrosHipertensao"
import { rotulosfiltrosHipertensao } from "./rotulosfiltrosHipertensao"
import { IDFiltrosOrdenacaoHipertensao } from "./IDFiltrosOrdenacaoHipertensao"
import { larguraColunasHipertensaoPaisagem, larguraColunasHipertensaoRetrato } from "./larguraColunasHipertensao"
import { colunasImpressaoHipertensao } from "./colunasImpressaoHipertensao"

export const HipertensaoArgs = {
    painel : "aps",
    lista : "HIPERTENSÃO",
    divisorVertical : [3,5],
    largura_colunas_impressao : {
        retrato : larguraColunasHipertensaoRetrato,
        paisagem : larguraColunasHipertensaoPaisagem
    },
    dadosFiltros : dadosFiltrosHipertensao,
    tabela : {
        colunas : colunasHipertensao,
        data : dataHipertensao
    },
    colunasImpressao : colunasImpressaoHipertensao,
    datefiltros : datefiltrosHipertensao,
    IDFiltros : IDFiltrosHipertensao,
    rotulosfiltros : rotulosfiltrosHipertensao,
    IDFiltrosOrdenacao : IDFiltrosOrdenacaoHipertensao,
    trackObject : {
      track : (evento, propriedades)=> console.log(evento, propriedades)
    },
    atualizacao : new Date(dataHipertensao.reduce((maisRecente, objeto) => {
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
}