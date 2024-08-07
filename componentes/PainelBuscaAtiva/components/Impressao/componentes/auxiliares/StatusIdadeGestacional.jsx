import { useMemo } from "react";
import * as estilos from "../constantes/estilosTags";
import React from "react";

export const StatusIdadeGestacional = ({value})=> {
  const style = useMemo(() => {
    if(value){
      return Number(value) <= 12 ? estilos.tagVerdeSemIcone : estilos.tagVermelhaSemIcone;
    }

    return estilos.tagNulaSemIcone;
  }, [value]);

  return (
    <div style={{...style, width: "35%"}}>
      {value ? value : "-"}
    </div>
  );
}
