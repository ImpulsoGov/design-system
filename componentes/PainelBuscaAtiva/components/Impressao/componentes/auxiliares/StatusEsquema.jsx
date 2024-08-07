import * as estilos from "../constantes/estilosTags";
import * as icones from "../constantes/icones";
import React from "react";

const STYLE = {
  1: estilos.tagVerdeComIcone,
  2: estilos.tagLaranjaComIcone,
  3: estilos.tagVermelhaComIcone,
  4: estilos.tagCinzaPreenchidaComIcone,
};

const DESCRICOES = {
  1: "Completo",
  2: "Em andamento",
  3: "Em atraso",
  4: "Não iniciado"
};

export const StatusEsquema = ({value})=> {
  return (
    <div style={{...STYLE[value], width: "90%"}}>
      {value == 1 && <img src={icones.check_simbolo} width={9} height={9} />}
      {value == 2 && <img src={icones.andamento_simbolo} width={9} height={9} />}
      {value == 3 && <img src={icones.relogio_simbolo} width={9} height={9} />}
      {value == 4 && <img src={icones.ampulheta_simbolo} width={9} height={9} />}
      <div>{DESCRICOES[value]}</div>
    </div>
  )
}
