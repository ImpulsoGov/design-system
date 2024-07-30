import { StatusEsquema } from "../../../components/Impressao/componentes/auxiliares/StatusEsquema";

export const colunasVacinacao=[
  {
    align: 'left',
    field: 'cidadao_nome',
    headerAlign: 'center',
    headerName: 'NOME DA CRIANÇA',
    width: 240,
    sortable : false,
    showOnPrint: true
    // renderCell : formatar_nome,
  },
  {
    align: 'center',
    field: 'cidadao_cpf_dt_nascimento',
    headerName: 'CPF / DATA DE NASCIMENTO',
    align: 'center',
    width: 120,
    sortable : false,
    showOnPrint: true
    // renderCell : cpf_style,
  },
  {
    align: 'center',
    field: 'cidadao_idade_meses',
    headerAlign: 'center',
    headerName: 'IDADE (MESES)',
    // renderCell : idade_style,
    width: 80,
    sortable : false,
    showOnPrint: true
  },
  {
    align: 'center',
    field: 'id_status_polio',
    headerAlign: 'center',
    headerName: 'STATUS DO ESQUEMA POLIOMIELITE',
    width: 160,
    sortable : false,
    showOnPrint: true,
    renderCell : StatusEsquema
  },
  {
    align: 'center',
    field: 'datas_doses_polio',
    headerAlign: 'center',
    // Inserir o objeto dessa coluna no array de colunas nas posições
    // específicas que elas devem ser exibidas na tabela de impressão.
    // COMO? https://www.freecodecamp.org/news/insert-into-javascript-array-at-specific-index/
    // QUANDO? Ao passar o array de colunas para a tabela de impressão de 
    // vacinação antes de abrir a guia de impressão
    headerName: 'DATAS DOSES',
    width: 100,
    sortable : false,
    showOnPrint: true
  },
  {
    align: 'center',
    field: 'data_ou_prazo_1dose_polio',
    headerAlign: 'center',
    headerName: '1ª DOSE POLIO',
    width: 120,
    sortable : false,
    showOnPrint: false
    // renderCell : STYLE_1_DOSE_POLIO
  },
  {
    align: 'center',
    field: 'data_ou_prazo_2dose_polio',
    headerAlign: 'center',
    headerName: '2ª DOSE POLIO',
    width: 120,
    sortable : false,
    showOnPrint: false
    // renderCell : STYLE_2_DOSE_POLIO
  },
  {
    align: 'center',
    field: 'data_ou_prazo_3dose_polio',
    headerAlign: 'center',
    headerName: '3ª DOSE POLIO',
    width: 120,
    sortable : false,
    showOnPrint: false
    // renderCell : STYLE_3_DOSE_POLIO
  },
  {
      align: 'center',
      field: 'id_status_penta',
      headerAlign: 'center',
      headerName: 'STATUS DO ESQUEMA PENTAVALENTE',
      width: 160,
      sortable : false,
      showOnPrint: true,
      renderCell : StatusEsquema
  },
  {
    align: 'center',
    field: 'datas_doses_penta',
    headerAlign: 'center',
    // Inserir o objeto dessa coluna no array de colunas nas posições
    // específicas que elas devem ser exibidas na tabela de impressão.
    // COMO? https://www.freecodecamp.org/news/insert-into-javascript-array-at-specific-index/
    // QUANDO? Ao passar o array de colunas para a tabela de impressão de 
    // vacinação antes de abrir a guia de impressão
    headerName: 'DATAS DOSES',
    width: 100,
    sortable : false,
    showOnPrint: true
  },
  {
    align: 'center',
    field: 'data_ou_prazo_1dose_penta',
    headerAlign: 'center',
    headerName: '1ª DOSE PENTA',
    width: 120,
    sortable : false,
    showOnPrint: false
    // renderCell : STYLE_1_DOSE_PENTA
  },
  {
    align: 'center',
    field: 'data_ou_prazo_2dose_penta',
    headerAlign: 'center',
    headerName: '2ª DOSE PENTA',
    width: 120,
    sortable : false,
    showOnPrint: false
    // renderCell : STYLE_2_DOSE_PENTA
  },
  {
    align: 'center',
    field: 'data_ou_prazo_3dose_penta',
    headerAlign: 'center',
    headerName: '3ª DOSE PENTA',
    width: 120,
    sortable : false,
    showOnPrint: false
    // renderCell : STYLE_3_DOSE_PENTA
  },
  {
    align: 'left',
    field: 'cidadao_nome_responsavel',
    headerAlign: 'center',
    headerName: 'NOME DO RESPONSÁVEL FAMILIAR',
    align : 'center',
    width: 300,
    sortable : false,
    showOnPrint: true
  },
  {
    align: 'center',
    field: 'equipe_nome',
    headerAlign: 'center',
    headerName: 'EQUIPE',
    width: 250,
    sortable : false,
    showOnPrint: true
  },
  {
    align: 'center',
    field: 'acs_nome',
    headerAlign: 'center',
    headerName: 'PROFISSIONAL RESPONSÁVEL',
    width: 300,
    sortable : false,
    showOnPrint: true
  },
]
