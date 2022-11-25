import React from "react";
import style from "./CardInfo.module.css"

const CardInfo = ({
    titulo,
    info,
    indicador,
    indice,
    indiceDescricao,
    link,
    fonte
})=>{
    return(
        <div className={style.CardInfo}>
            <div className={style.CardInfoTitulo}>
                {titulo} 
                <span className={style.CardInfoSymbol}>
                    <strong>ⓘ</strong>
                </span>
            </div>
            <div className={style.CardInfoText}>{info}</div>
            <div style={{fontSize:'18px'}}><strong>{indicador}</strong></div>
            <div className={style.CardInfoIndiceContainer}>
                <span className={
                        indice>0 ?
                        style.CardInfoSymbolUp:
                        style.CardInfoSymbolDown
                    }
                >»</span>
                <span className={
                    indice>0 ?
                    style.CardInfoIndicePositivo:
                    style.CardInfoIndiceNegativo
                }>
                    {indice}
                </span>
                <span className={style.CardInfoIndiceDescricao}>{indiceDescricao}</span>
            </div>
            <a 
                href={link.url}
                className={style.CardInfoLink}
            >
                {link.label}
            </a>
            <div className={style.CardInfoFonte}>{fonte}</div>
        </div>
    )
}

export {CardInfo}