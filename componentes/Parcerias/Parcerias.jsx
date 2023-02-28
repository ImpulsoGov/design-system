import React from "react";
import cx from "classnames";
import style from "./Parcerias.module.css";

const Parcerias = ({
    parceiros,
    theme,
    titulo
}) => {
  return (
    <div className={cx(style.container_parceiros,style["theme"+theme])}>
        <div className={style.parceirosLabel}>{titulo}</div>
        <div className={style.gridContainer}>
                {parceiros.map((parceiro,index)=>{
                    return(
                        <div className={style.info_parceiro} key={index}>
                            {
                                parceiro.titulo && (
                                    <p className={style.tituloParceiro}>
                                        {parceiro.titulo}
                                    </p>
                                )
                            }
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

export {Parcerias};
