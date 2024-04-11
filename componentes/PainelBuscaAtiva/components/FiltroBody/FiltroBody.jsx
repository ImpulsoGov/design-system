import React, { useState } from "react";
import style from "./FiltroBody.module.css";
import { FiltroCard } from "../FiltroCard";

export const FiltroBody = ({
  data,
  value = {},
  handleCheckbox = () => {},
  isUnfolded = false,
  onClick = () => {},
})=>{
  const [show, toggleShow] = useState(false);

  useEffect(() => {
    toggleShow(isUnfolded);
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