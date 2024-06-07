import React, { useEffect, useState } from "react";
import { FiltroCard } from "../FiltroCard";
import style from "./FiltroBody.module.css";

export const FiltroBody = ({
  data,
  value = {},
  handleCheckbox = () => {},
  isUnfolded = false,
  onClick = () => {},
})=>{
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(isUnfolded);
  }, [isUnfolded])

  function handleClick() {
    setShow((prevState) => !prevState);
    onClick(data.rotulo);
  }

  return(
    <div data-testid="FiltroBody">
      <div className={style.ConteinerFiltro}>
        <div className={style.tituloFiltro}>
          <p>{data.rotulo}</p>
          <button
            className={style.ShowFiltros}
            onClick={handleClick}
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
                    key={item}
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