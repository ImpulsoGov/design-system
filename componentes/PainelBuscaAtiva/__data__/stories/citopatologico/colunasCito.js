import { PrazoStyle } from "../../../components/Impressao/componentes/auxiliares/PrazoStyle";
import { selecionar_status_usuario_descricao } from "../../../components/Impressao/componentes/auxiliares/Selecionar_status_usuario_descricao";

export const colunasCito=[
    {
      align: 'left',
      field: 'paciente_nome',
      showOnPrint: true,
      headerAlign: 'center',
      headerName: 'NOME',
      width: 320
    },
    {
      align: 'center',
      field: 'cidadao_cpf_dt_nascimento',
      showOnPrint: true,
      headerAlign: 'center',
      headerName: 'CPF / DATA DE NASCIMENTO',
      width: 140
    },
    {
      align: 'center',
      field: 'id_status_usuario',
      showOnPrint: true,
      headerAlign: 'center',
      headerName: 'STATUS DA COLETA',
      renderCell : selecionar_status_usuario_descricao,
      width: 300
    },
    {
      align: 'center',
      field: 'vencimento_da_coleta',
      showOnPrint: true,
      headerAlign: 'center',
      headerName: 'VENCIMENTO DA COLETA',
      width: 100
    },
    {
      align: 'center',
      field: 'prazo_proxima_coleta',
      showOnPrint: true,
      headerAlign: 'center',
      headerName: 'PRAZO PARA PRÓXIMA COLETA',
      renderCell: PrazoStyle,
      width: 130
    },
    {
      align: 'center',
      field: 'idade',
      showOnPrint: true,
      headerAlign: 'center',
      headerName: 'IDADE',
      width: 80
    },
    {
      align: 'center',
      field: 'equipe_nome',
      showOnPrint: true,
      headerAlign: 'center',
      headerName: 'EQUIPE',
      width: 250,
      sortable : false
    },
    {
      align: 'center',
      field: 'acs_nome',
      showOnPrint: true,
      headerAlign: 'center',
      headerName: 'Profissional Responsável',
      width: 250
    }
  ]