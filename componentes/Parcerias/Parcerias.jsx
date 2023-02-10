import React from "react";
import cx from "classnames";
import style from "./Parcerias.module.css";
import Link from "next/link";

const Parcerias = ({
    parceiros,
    theme
}) => {
  return (
    <div className={cx(style.container_parceiros,style["theme"+theme])}>
        <div className={style.parceirosLabel}>Parceiros</div>
        <div className={style.gridContainer}>
                {parceiros.map((parceiro,index)=>{
                    return(
                        <div className={style.logo_parceiros} key={index}>
                            <Link href={parceiro.link}>
                                <a>
                                    <img
                                        className={style.imageContainer}
                                        alt= {parceiro.alt}
                                        src= {parceiro.src}
                                    />
                                </a>
                            </Link>
                        </div>
                    )
                })}
        </div>
    </div>
  );
};

export {Parcerias};
