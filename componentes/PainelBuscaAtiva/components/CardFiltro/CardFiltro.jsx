import React, { useState } from "react";
import style from "../../PainelBuscaAtiva.module.css";

export const CardFiltro = ({
  label,
  setOrdenar,
  ID,
})=>{
  const [property, setProperty] = useState("");
  const OrdenarPor = ()=>{
    // Atualiza estado local
    setProperty(ID[label]);
    // Atualiza estado do pai
    setOrdenar(ID[label]);
  }

  return (
    <div
      data-testid="CardFiltro"
      onClick={OrdenarPor}
      className={
        ID[label] !== property ?
        style.cardFiltro :
        style.cardFiltroSelected
      }
    >
      {label.toUpperCase()}
    </div>
  );
}