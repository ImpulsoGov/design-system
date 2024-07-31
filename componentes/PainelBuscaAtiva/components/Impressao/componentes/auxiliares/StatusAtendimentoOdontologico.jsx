import { useMemo } from "react";
import * as estilos from "../constantes/estilosTags";
import * as icones from "../constantes/icones";

const STYLE = {
  1: estilos.tagVerdeComIcone,
  2: estilos.tagVermelhaComIcone,
  3: estilos.tagNulaComIcone,
}

export const StatusAtendimentoOdontologico = ({value, identificacao_atendimento_odontologico})=> {
  const descricao = useMemo(() => {
    return identificacao_atendimento_odontologico.identificacao_atendimento_odontologico.find(item => item.id_atendimento_odontologico == value).atendimento_odontologico_descricao;
  }, [identificacao_atendimento_odontologico, value]);

  return (
    <div style={STYLE[value]}>
      {value == 1 && <img src={icones.check_simbolo} />}
      {value == 2 && <img src={icones.alerta_simbolo} />}
      {descricao}
    </div>
  )
}
