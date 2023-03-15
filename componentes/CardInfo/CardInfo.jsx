import Link from "next/link";
import Tippy from "@tippyjs/react";
import React from "react";
import style from "./CardInfo.module.css"
import "tippy.js/themes/light.css";

const CardInfo = ({
    titulo,
    indicador,
    indicadorDescricao,
    indice,
    indiceDescricao,
    link,
    fonte,
    tooltip,
})=>{
    return(
        <div className={style.CardInfo}>

            <div className={style.CardInfoTitulo}>
                {titulo}

                {tooltip && (
                    <Tippy
                        content={tooltip}
                        placement="auto"
                        className={style.CardInfoTooltip}
                        theme="light"
                    >
                        <span className={style.CardInfoSymbol}>
                            <strong>ⓘ</strong>
                        </span>
                    </Tippy>
                )}
            </div>

            <div className={style.CardInfoIndicadorContainer}>
                <span className={style.CardInfoIndicador}>{indicador}</span>

                {indicadorDescricao && (
                    <span className={style.CardInfoIndicadorDescricao}>
                        {indicadorDescricao}
                    </span>
                )}
            </div>

            {indice && (
                <div className={style.CardInfoIndiceContainer}>
                    <span className={
                        indice.trim().startsWith("-")
                            ? style.CardInfoSymbolDown
                            : style.CardInfoSymbolUp
                    }>
                        »
                    </span>

                    <span className={
                        indice.trim().startsWith("-")
                            ? style.CardInfoIndiceNegativo
                            : style.CardInfoIndicePositivo
                    }>
                        {indice}
                    </span>

                    {indiceDescricao && (
                        <span className={style.CardInfoIndiceDescricao}>
                            {indiceDescricao}
                        </span>
                    )}
                </div>
            )}

            {link && (
                <Link href={link.url}>
                    <a className={style.CardInfoLink}>
                        {link.label}
                    </a>
                </Link>
            )}

            {fonte && <div className={style.CardInfoFonte}>{fonte}</div>}

        </div>
    )
}

export {CardInfo}
