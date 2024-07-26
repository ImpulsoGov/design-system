export const colunasDiabetes=[
    {
      align: 'left',
      field: 'cidadao_nome',
      headerAlign: 'center',
      headerName: 'NOME',
      width: 240
    },
    {
      align: 'center',
      field: 'cidadao_cpf_dt_nascimento',
      headerAlign: 'center',
      headerName: 'CPF',
      width: 130
    },
    {
      align: 'center',
      field: 'identificacao_condicao_diabetes',
      headerAlign: 'center',
      headerName: 'IDENTIFICAÇÃO DA CONDIÇÃO',
      width: 150
    },
    {
      align: 'center',
      field: 'dt_consulta_mais_recente',
      headerAlign: 'center',
      headerName: 'DATA DA CONSULTA MAIS RECENTE',
      width: 120
    },
    {
      align: 'center',
      field: 'prazo_proxima_consulta',
      headerAlign: 'center',
      headerName: 'PRAZO PARA PRÓXIMA CONSULTA',
      renderCell: () => {},
      width: 130
    },
    {
      align: 'center',
      field: 'dt_solicitacao_hemoglobina_glicada_mais_recente',
      headerAlign: 'center',
      headerName: 'DATA DE SOLICITAÇÃO DE HEMOGLOBINA GLICADA MAIS RECENTE',
      width: 180
    },
    {
      align: 'center',
      field: 'prazo_proxima_solicitacao_hemoglobina',
      headerAlign: 'center',
      headerName: 'PRAZO PARA PRÓXIMA SOLICITAÇÃO DE HEMOGLOBINA GLICADA',
      renderCell: function noRefCheck() {},
      width: 180
    },
    {
      align: 'center',
      field: 'acs_nome_cadastro',
      headerAlign: 'center',
      headerName: 'ACS RESPONSÁVEL',
      width: 250
    }
  ]