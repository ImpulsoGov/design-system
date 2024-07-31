import { StatusDDP } from "../../../../components/Impressao/componentes/auxiliares/StatusDDP";
import { formatarRegistroDeParto } from "../../../../components/Impressao/helpers/formatarRegistroDeParto";

export const colunasGestantesIndicador3 = [
  {
    align: 'left',
    field: 'cidadao_nome',
    showOnPrint: true,
    headerAlign: 'center',
    headerName: 'NOME',
    width: 320,
    sortable: false
  },
  {
    align: 'center',
    field: 'gestacao_data_dpp',
    showOnPrint: true,
    headerAlign: 'center',
    headerName: 'DPP + 14 DIAS',
    width: 100,
    sortable: false,
    renderCell: StatusDDP
  },
  {
    align: 'center',
    field: 'id_atendimento_odontologico',
    showOnPrint: true,
    headerAlign: 'center',
    headerName: 'ATENDIMENTO ODONTOLÓGICO',
    width: 120,
    sortable: false,
  },
  {
    align: 'center',
    field: 'id_registro_parto',
    showOnPrint: true,
    headerAlign: 'center',
    headerName: 'REGISTRO DE PARTO',
    width: 100,
    sortable: false,
    renderCell: formatarRegistroDeParto
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
    width: 300,
    sortable: false
  },
];
