import React from "react";
import * as estilos from "../constantes/estilosTags";
import * as icones from "../constantes/icones";

export const PrazoStyle = ({
  value,
  orientacao = "paisagem"
})=>{
  const style = value != "Em dia"
    ? {...estilos.tagLaranjaComIcone}
    : {...estilos.tagVerdeComIcone};

  return (
    <div style={{
      ...style,
      width: "75%",
      fontSize: orientacao === "retrato" && "9px"
    }}>
      {value != "Em dia" && <img src={icones.atencao_simbolo}/>}
      {value == "Em dia" && <img src={icones.check_simbolo}/>}
      {value}
    </div>
  )
}
