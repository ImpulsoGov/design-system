import React from "react";
import cx from "classnames";
import "./Parcerias.css";

const Parcerias = ({
    parceiros,
    theme
}) => {

    //"container_parceiros"
  return (
    <div className={cx("container_parceiros","theme"+theme)}>
        <div className="parceirosLabel">Parceiros</div>
        <div className="gridContainer">
                {parceiros.map((parceiro,index)=>{
                    return(
                        <div className="logo_parceiros" key={index}>
                            <img className="imageContainer"
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