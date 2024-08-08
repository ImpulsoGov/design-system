import React, { useMemo } from "react";
import * as estilos from "../constantes/estilosTags";
import * as icones from "../constantes/icones";

export const StatusDataConsulta = ({
  value,
  orientacao = "paisagem"
})=> {
  const dataFormatada = useMemo(() => {
    if(!value) return null;

    const parts = value.split('-');
    const dia = parts[2];
    const mes = parts[1];
    const ano = parts[0];
    const ano2Digitos = ano.slice(-2);
    const date = `${dia}/${mes}/${ano2Digitos}`;

    return date;
  }, [value]);

  return (
    <>
      {dataFormatada
        ? <span>{dataFormatada}</span>
        : (
          <div style={{
            ...estilos.tagCinzaComIcone,
            width: "75%",
            fontSize: orientacao === "retrato" && "9px"
          }}>
            <img width={9} height={9} src={ icones.ampulheta_simbolo } />
            <div>Não realizada</div>
          </div>
        )
      }
    </>
  );
}
