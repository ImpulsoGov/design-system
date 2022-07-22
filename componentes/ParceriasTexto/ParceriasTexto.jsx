import React from "react";
import style from "./ParceriasTexto.module.css";
import { sanitize } from "../sanitize";
  
const ParceriasTexto = ({
    text,
    label,
    parceiros
}) => {
  return (
    <div className={style.container_parceiros}>
        <div 
            className={style.textoParcerias}
            dangerouslySetInnerHTML={{
                __html: sanitize(text),
              }}        ></div>
        <div className={style.parceirosLabel}>{label}</div>
        <div className={style.gridContainer}>
                {parceiros.map((parceiro,index)=>{
                    return(
                        <div className={style.logo_parceiros} key={index}>
                            <img className={style.imageContainer}
                            alt= {parceiro.alt}
                            src= {parceiro.src}
                            />
                        </div>
                    )
                })}
        </div>
    </div>
  );
};

export {ParceriasTexto};