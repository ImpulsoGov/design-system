import { PrazoStyle } from "../../../components/Impressao/componentes/auxiliares/PrazoStyle";
import { StatusDataConsulta } from "../../../components/Impressao/componentes/auxiliares/StatusDataConsulta";

export const colunasDiabetes=[
  {
    align: 'left',
    field: 'cidadao_nome',
    headerAlign: 'center',
    headerName: 'NOME',
    // renderCell : formatar_nome,
    width: 240,
    sortable : false
  },
  {
    align: 'center',
    field: 'cidadao_cpf_dt_nascimento',
    headerAlign: 'center',
    headerName: 'CPF/DATA DE NASCIMENTO',
    // renderCell : FormatarDataNascimento,
    width: 130,
    sortable : false
  },
  {
    align: 'center',
    field: 'identificacao_condicao_diabetes',
    headerAlign: 'center',
    headerName: 'TIPO DE DIAGNÓSTICO',
    width: 150,
    sortable : false
  },
  {
    align: 'center',
    field: 'cidadao_idade',
    headerAlign: 'center',
    headerName: 'IDADE (ANOS)',
    width: 70,
    sortable: false
  },
  {
    align: 'center',
    field: 'dt_consulta_mais_recente',
    headerAlign: 'center',
    headerName: 'DATA DA ÚLTIMA CONSULTA',
    renderCell : StatusDataConsulta,
    width: 180,
    sortable : false
  },
  {
    align: 'center',
    field: 'prazo_proxima_consulta',
    headerAlign: 'center',
    headerName: 'PRAZO PARA PRÓXIMA CONSULTA',
    renderCell: PrazoStyle,
    width: 180,
    sortable : false
  },
  {
    align: 'center',
    field: 'dt_solicitacao_hemoglobina_glicada_mais_recente',
    headerAlign: 'center',
    headerName: 'DATA DA ÚLTIMA SOLICITAÇÃO DE HEMOGLOBINA GLICADA',
    renderCell : StatusDataConsulta,
    width: 180,
    sortable : false
  },
  {
    align: 'center',
    field: 'prazo_proxima_solicitacao_hemoglobina',
    headerAlign: 'center',
    headerName: 'PRAZO PARA PRÓXIMA SOLICITAÇÃO DE HEMOGLOBINA GLICADA',
    renderCell: PrazoStyle,
    width: 180,
    sortable : false
  },
  {
    align: 'center',
    field: 'equipe_nome_cadastro',
    headerAlign: 'center',
    headerName: 'EQUIPE',
    width: 250,
    sortable : false
  },
  {
    align: 'center',
    field: 'acs_nome_cadastro',
    headerAlign: 'center',
    headerName: 'PROFISSIONAL RESPONSÁVEL',
    width: 250,
    sortable : false
  }
]