const rotuloFiltro = {
    acs_nome_cadastro : "Profissional Responsável",
    acs_nome : "Profissional Responsável",
    id_status_usuario : "Status",
    id_faixa_etaria : "Faixa Etária",
    equipe_nome_e_ine : "Nome e INE",
    identificacao_condicao_diabetes : "Tipo de Diagnóstico",
    status_usuario : "Status",
    identificacao_condicao_hipertensao : "Tipo de Diagnóstico",
    cidadao_faixa_etaria : "Faixa Etária",
    id_status_polio : "Status Polio",
    id_status_penta : "Status Penta",
    consultas_pre_natal_validas : "Número de consultas",
    gestacao_quadrimestre : "Quadrimestre",
    id_exame_hiv_sifilis : "Exame de sífilis e HIV",
    id_atendimento_odontologico : "Atendimento odontológico"
}
const rotuloValoresData= {
    id_status_usuario : [
        {
          "valor" : 0,
          "descricao" : "Sem dados",
        },
        {
          "valor" : 1,
          "descricao" : "Com consulta e aferição de PA em dia",
        },
        {
          "valor" : 2,
          "descricao" : "Sem consulta e aferição de PA em dia",
        },
        {
          "valor" : 3,
          "descricao" : "Sem consulta em dia",
        },
        {
          "valor" : 4,
          "descricao" : "Sem aferição de PA em dia",
        },
        {
          "valor" : 5,
          "descricao" : "Com consulta e solicitação de hemoglobina em dia",
        },
        {
          "valor" : 6,
          "descricao" : "Sem consulta e solicitação de hemoglobina em dia",
        },
        {
          "valor" : 7,
          "descricao" : "Sem solicitação de hemoglobina em dia",
        },
        {
          "valor" : 8,
          "descricao" : "Encerradas por DPP + 14 dias",
        },
        {
          "valor" : 9,
          "descricao" : "Encerradas por parto ou aborto",
          "atualizacao_data" : "2023-05-15T03:00:00.000Z"
        },
        {
          "valor" : 10,
          "descricao" : "Ativas",
          "atualizacao_data" : "2023-05-15T03:00:00.000Z"
        },
        {
          "valor" : 11,
          "descricao" : "Gestantes inválidas",
          "atualizacao_data" : "2023-05-15T03:00:00.000Z"
        },
        {
          "valor" : 12,
          "descricao" : "Coleta em dia",
          "atualizacao_data" : "2023-07-03T03:00:00.000Z"
        },
        {
          "valor" : 13,
          "descricao" : "Nunca realizou coleta",
          "atualizacao_data" : "2023-07-03T03:00:00.000Z"
        },
        {
          "valor" : 14,
          "descricao" : "Coleta antes dos 25 anos",
          "atualizacao_data" : "2023-07-03T03:00:00.000Z"
        },
        {
          "valor" : 15,
          "descricao" : "Vence neste quadrimestre",
          "atualizacao_data" : "2023-07-03T03:00:00.000Z"
        },
        {
          "valor" : 16,
          "descricao" : "Coleta vencida",
          "atualizacao_data" : "2023-07-03T03:00:00.000Z"
        }
    ],
    id_faixa_etaria : [
        {
            "valor" : 0,
            "descricao" : "Sem dados",
        },
        {
            "valor" : 1,
            "descricao" : "0 a 40 anos",
        },
        {
            "valor" : 2,
            "descricao" : "41 a 49 anos",
        },
        {
            "valor" : 3,
            "descricao" : "50 a 59 anos",
        },
        {
            "valor" : 4,
            "descricao" : "60 a 70 anos",
        },
        {
            "valor" : 5,
            "descricao" : "70 anos ou mais",
        },
        {
            "valor" : 6,
            "descricao" : "25 a 39 anos",
        },
        {
            "valor" : 7,
            "descricao" : "40 a 49 anos",
        },
        {
            "valor" : 8,
            "descricao" : "50 a 64 anos",
        },
        {
            "valor" : 9,
            "descricao" : "Até 2 meses",
        },
        {
            "valor" : 10,
            "descricao" : "Entre 2 e 12 meses",
        },
        {
            "valor" : 11,
            "descricao" : "Maior que 12 meses",
        }
    ],
    id_status_polio : [
        {
            "valor" : 1,
            "descricao" : "Esquema completo",
        },
        {
            "valor" : 2,
            "descricao" : "Em andamento",
        },
        {
            "valor" : 3,
            "descricao" : "Em atraso",
        },
        {
            "valor" : 4,
            "descricao" : "Não iniciado",
        }
    ],
    id_status_penta : [
        {
            "valor" : 1,
            "descricao": "Esquema completo",
        },
        {
            "valor" : 2,
            "descricao": "Em andamento",
        },
        {
            "valor" : 3,
            "descricao": "Em atraso",
        },
        {
            "valor" : 4,
            "descricao": "Não iniciado",
        }
    ],
    id_exame_hiv_sifilis :  [
        {
            "valor" : 0,
            "descricao" : null,
        },
        {
            "valor" : 1,
            "descricao" : "Ex. de Sífilis não identificado",
        },
        {
            "valor" : 2,
            "descricao" : "Ex. de HIV não identificado",
        },
        {
            "valor" : 3,
            "descricao" : "Nenhum exame identificado",
        },
        {
            "valor" : 4,
            "descricao" : "Os dois exames identificados",
        },
        {
            "valor" : 5,
            "descricao" : "-",
        }
    ],
    id_atendimento_odontologico : [
        {
            "valor" : 1,
            "descricao" : "Sim",
        },
        {
            "valor" : 2,
            "descricao" : "Não",
        },
        {
            "valor" : 3,
            "descricao" : "-",
        },
        {
            "valor" : 0,
            "descricao" : null,
        }
    ]
}
const SelecionarRotulosValores = (chave,valor)=>rotuloValoresData[chave].find(item=>item.valor == valor).descricao
export const filtrosAplicadosImpressao = (chavesFiltros)=>{
    const filtros_aplicados = []
    chavesFiltros.forEach(chaveFiltro => {
        filtros_aplicados.push(`${rotuloFiltro[Object.keys(chaveFiltro)[0]]} : ${SelecionarRotulosValores(Object.keys(chaveFiltro)[0],chaveFiltro[Object.keys(chaveFiltro)[0]])}`)
    });
    return filtros_aplicados
}