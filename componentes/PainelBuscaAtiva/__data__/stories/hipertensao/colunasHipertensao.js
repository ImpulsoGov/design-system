import { PrazoStyle } from "../../../components/Impressao/componentes/auxiliares/PrazoStyle";
import { StatusDataConsulta } from "../../../components/Impressao/componentes/auxiliares/StatusDataConsulta";

export const colunasHipertensao=[
  {
    align: 'left',
    field: 'cidadao_nome',
    showOnPrint: true,
    headerAlign: 'center',
    headerName: 'NOME',
    // renderCell: formatar_nome,
    width: 240,
    sortable: false
  },
  {
    align: 'center',
    field: 'cidadao_cpf',
    showOnPrint: true,
    headerAlign: 'center',
    headerName: 'CPF/DATA DE NASCIMENTO',
    // renderCell: FormatarDataNascimento,
    width: 130,
    sortable: false
  },
  {
    align: 'center',
    field: 'identificacao_condicao_hipertensao',
    showOnPrint: true,
    headerAlign: 'center',
    headerName: 'TIPO DE DIAGNÓSTICO',
    width: 150,
    sortable: false
  },
  {
    align: 'center',
    field: 'cidadao_idade',
    showOnPrint: true,
    headerAlign: 'center',
    headerName: 'IDADE (ANOS)',
    width: 70,
    sortable: false
  },
  {
    align: 'center',
    field: 'dt_consulta_mais_recente',
    showOnPrint: true,
    headerAlign: 'center',
    headerName: 'DATA DA ÚLTIMA CONSULTA',
    renderCell: StatusDataConsulta,
    width: 150,
    sortable: false
  },
  {
    align: 'center',
    field: 'prazo_proxima_consulta',
    showOnPrint: true,
    headerAlign: 'center',
    headerName: 'PRAZO PARA PRÓXIMA CONSULTA',
    renderCell: PrazoStyle,
    width: 160,
    sortable: false
  },
  {
    align: 'center',
    field: 'dt_afericao_pressao_mais_recente',
    showOnPrint: true,
    headerAlign: 'center',
    headerName: 'DATA DA ÚLTIMA AFERIÇÃO DE PA',
    renderCell: StatusDataConsulta,
    width: 150,
    sortable: false
  },
  {
    align: 'center',
    field: 'prazo_proxima_afericao_pa',
    showOnPrint: true,
    headerAlign: 'center',
    headerName: 'PRAZO PARA PRÓXIMA AFERIÇÃO DE PA',
    renderCell: PrazoStyle,
    width: 160,
    sortable: false
  },
  {
    align: 'center',
    field: 'equipe_nome_cadastro',
    showOnPrint: true,
    headerAlign: 'center',
    headerName: 'EQUIPE',
    width: 250,
    sortable : false
  },
  {
    align: 'center',
    field: 'acs_nome_cadastro',
    showOnPrint: true,
    headerAlign: 'center',
    headerName: 'PROFISSIONAL RESPONSÁVEL',
    width: 250,
    sortable: false
  }
]