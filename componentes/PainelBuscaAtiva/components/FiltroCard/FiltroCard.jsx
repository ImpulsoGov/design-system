import React, { useState } from "react";
import style from "../../PainelBuscaAtiva.module.css";

export const FiltroCard = ({
  id,
  label = "",
  filtroID,
  handleCheckbox = () => {},
  initiallyChecked = false,
})=>{
  const [checked, toggleChecked] = useState(initiallyChecked);
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
        id={id}
      />
      <label
        data-testid="FiltroCardLabel"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  )
}
