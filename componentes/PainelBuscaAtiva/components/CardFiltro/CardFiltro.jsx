import React, { useState } from "react";
import style from "../../PainelBuscaAtiva.module.css";

export const CardFiltro = (props)=>{
  const [property, setProperty] = useState("");
  const OrdenarPor = ()=>{
    // Atualiza estado local
    setProperty(props.ID[props.label]);
    // Atualiza estado do pai
    props.setOrdenar(props.ID[props.label]);
  }
  return (
    <div
      data-testid="CardFiltro"
      onClick={OrdenarPor}
      className={
        props.ID[props.label] !== property ?
        style.cardFiltro :
        style.cardFiltroSelected
      }
    >
      {props.label.toUpperCase()}
    </div>
  );
}
