import React, { useState } from "react";
import style from "../../PainelBuscaAtiva.module.css";

export const FiltroCard = ({
  label = "",
  filtroID,
  handleCheckbox = () => {},
})=>{
  const [checked, toggleChecked] = useState(false);
  const handleChange = (event) => {
    const { id: property, checked } = event.target;
    toggleChecked(checked);
    handleCheckbox(property, checked);
  }

  return(
    <div className={style.FiltroCard} data-testid="FiltroCard">
      <input
        className={style.InputFiltroCard}
        type="checkbox"
        onChange={handleChange}
        name={filtroID}
        checked={checked}
        id={label}
      />
      <p>{label}</p>
    </div>
  )
}
