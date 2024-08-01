import { StatusDDP } from "../../../../components/Impressao/componentes/auxiliares/StatusDDP";
import { formatarCPFOuDataNascimento, formatarDataNascimento } from "../../../../components/Impressao/helpers/formatarCPF";

export const colunasSemDum = [
  {
    align: 'left',
    field: 'cidadao_nome',
    headerAlign: 'center',
    headerName: 'NOME',
    width: 320,
    sortable: false
  },
  {
    align: 'center',
    field: 'cidadao_cpf_dt_nascimento',
    headerName: 'CPF / DATA DE NASCIMENTO',
    width: 140,
    sortable: false,
    renderCell: formatarCPFOuDataNascimento
  },
  {
    align: 'center',
    field: 'gestacao_data_dpp',
    headerAlign: 'center',
    headerName: 'DPP + 14 DIAS',
    width: 130,
    sortable: false,
    renderCell: StatusDDP
  },
  {
    align: 'center',
    field: 'gestacao_idade_gestacional_primeiro_atendimento',
    headerAlign: 'center',
    headerName: 'IG (1ª CONSULTA)',
    width: 90,
    sortable: false,

  },
  {
    align: 'center',
    field: 'gestacao_idade_gestacional_atual',
    headerAlign: 'center',
    headerName: 'IG ATUAL',
    width: 65,
    sortable: false,
  },
  {
    align: 'center',
    field: 'consultas_pre_natal_validas',
    headerAlign: 'center',
    headerName: 'TOTAL DE CONSULTAS VALIDAS',
    width: 100,
    sortable: false,
  },
  {
    align: 'center',
    field: 'consulta_prenatal_ultima_data',
    headerAlign: 'center',
    headerName: 'ÚLTIMA CONSULTA',
    width: 115,
    sortable: false,
  },
  {
    align: 'center',
    field: 'id_exame_hiv_sifilis',
    headerAlign: 'center',
    headerName: 'EXAME DE HIV/SÍFILIS',
    width: 150,
    sortable: false,
  },
  {
    align: 'center',
    field: 'id_atendimento_odontologico',
    headerAlign: 'center',
    headerName: 'ATENDIMENTO ODONTOLÓGICO',
    width: 120,
    sortable: false,
  },
  {
    align: 'center',
    field: 'equipe_nome',
    headerAlign: 'center',
    headerName: 'EQUIPE',
    width: 250,
    sortable: false
  },
  {
    align: 'center',
    field: 'acs_nome',
    headerAlign: 'center',
    headerName: 'PROFISSIONAL RESPONSÁVEL',
    width: 250,
    sortable: false
  },
];
