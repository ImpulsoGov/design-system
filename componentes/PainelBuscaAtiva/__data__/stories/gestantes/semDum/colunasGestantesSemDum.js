import { StatusDDP } from "../../../../components/Impressao/componentes/auxiliares/StatusDDP";
import { formatarCPFOuDataNascimento } from "../../../../components/Impressao/helpers/formatarCPF";

export const colunasSemDum = [
  {
    align: 'left',
    field: 'cidadao_nome',
    showOnPrint: true,
    headerAlign: 'center',
    headerName: 'NOME',
    // renderCell : formatar_nome,
    width: 320,
    sortable: false
  },
  {
    align: 'center',
    field: 'cidadao_cpf_dt_nascimento',
    showOnPrint: true,
    headerName: 'CPF / DATA DE NASCIMENTO',
    width: 140,
    sortable: false,
    renderCell: formatarCPFOuDataNascimento
  },
  {
    align: 'center',
    field: 'gestacao_data_dpp',
    showOnPrint: true,
    headerAlign: 'center',
    headerName: 'DPP + 14 DIAS',
    width: 130,
    sortable: false,
    renderCell: StatusDDP
  },
  {
    align: 'center',
    field: 'gestacao_idade_gestacional_primeiro_atendimento',
    showOnPrint: true,
    headerAlign: 'center',
    headerName: 'IG (1ª CONSULTA)',
    width: 90,
    sortable: false,
    // renderCell : StatusIdadeGestacional,

  },
  {
    align: 'center',
    field: 'gestacao_idade_gestacional_atual',
    showOnPrint: true,
    headerAlign: 'center',
    headerName: 'IG ATUAL',
    width: 65,
    sortable: false,
    // renderCell : IG_ATUAL_STYLE
  },
  {
    align: 'center',
    field: 'consultas_pre_natal_validas',
    showOnPrint: true,
    headerAlign: 'center',
    headerName: 'TOTAL DE CONSULTAS VALIDAS',
    width: 100,
    sortable: false,
    // renderCell : StatusTotalConsultasValidas
  },
  {
    align: 'center',
    field: 'consulta_prenatal_ultima_data',
    showOnPrint: true,
    headerAlign: 'center',
    headerName: 'ÚLTIMA CONSULTA',
    width: 115,
    sortable: false,
    // renderCell : FormatarData
  },
  {
    align: 'center',
    field: 'id_exame_hiv_sifilis',
    showOnPrint: true,
    headerAlign: 'center',
    headerName: 'EXAME DE HIV/SÍFILIS',
    width: 150,
    sortable: false,
    // renderCell : StatusExameSifilisHIV
  },
  {
    align: 'center',
    field: 'id_atendimento_odontologico',
    showOnPrint: true,
    headerAlign: 'center',
    headerName: 'ATENDIMENTO ODONTOLÓGICO',
    width: 120,
    sortable: false,
    // renderCell : StatusAtendimentoOdontologico
  },
  {
    align: 'center',
    field: 'equipe_nome',
    showOnPrint: true,
    headerAlign: 'center',
    headerName: 'EQUIPE',
    width: 250,
    sortable: false
  },
  {
    align: 'center',
    field: 'acs_nome',
    showOnPrint: true,
    headerAlign: 'center',
    headerName: 'PROFISSIONAL RESPONSÁVEL',
    width: 250,
    sortable: false
  },
];
