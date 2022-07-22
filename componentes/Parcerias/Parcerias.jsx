import React from "react";
import "./Parcerias.css";

const Parcerias = ({
    parceiros
}) => {
  return (
    <div className="container_parceiros">
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