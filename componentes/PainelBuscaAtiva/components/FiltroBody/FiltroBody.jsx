import React, { useState } from "react";
import style from "../../PainelBuscaAtiva.module.css";
import { FiltroCard } from "../FiltroCard";

export const FiltroBody = ({
  data,
  value = {},
  handleCheckbox = () => {},
})=>{
  const [show, toggleShow] = useState(false);
  return(
    <div data-testid="FiltroBody">
      <div className={style.ConteinerFiltro}>
        <div className={style.tituloFiltro}>
          <p>{data.rotulo}</p>
          <button
            className={style.ShowFiltros}
            onClick={() => toggleShow(!show)}
          >
            {show ? "-" : "+"}
          </button>
      </div>
        {
          show &&
          <div className={style.ConteinerFiltros}>
            {
              data.data.sort().map((item)=>{
                return(
                  <FiltroCard
                    label={
                      data?.labels && data?.labels[item]
                      ? data?.labels[item]
                      : item
                    }
                    id={item}
                    filtroID={data.filtro}
                    handleCheckbox={handleCheckbox}
                    initiallyChecked={value[item]}
                  />
                )
              })
            }
          </div>
        }
      </div>
    </div>
  )
}