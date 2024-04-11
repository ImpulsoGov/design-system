import React from "react";
import style from "./CardFiltro.module.css";

export const CardFiltro = ({
  label,
  isSelected,
  sortProperty,
  setOrdenar,
})=>{
  function handleClick() {
    setOrdenar(sortProperty);
  }

  return (
    <div
      data-testid="CardFiltro"
      onClick={handleClick}
      className={isSelected ? style.cardFiltroSelected : style.cardFiltro}
    >
      {label.toUpperCase()}
    </div>
  );
}