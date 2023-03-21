import Link from "next/link";
import Tippy from "@tippyjs/react";
import React from "react";
import style from "./CardInfo.module.css"
import cx from "classnames";
import "tippy.js/themes/light.css";

const CardInfoTipoA = ({
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
        <div className={cx(style.CardInfo, style.Coluna)}>

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
                            ? cx(style.CardInfoSymbolDown, style.TextoVermelho)
                            : cx(style.CardInfoSymbolUp, style.TextoVerde)
                    }>
                        »
                    </span>

                    <span className={cx(
                        style.CardInfoIndice,
                        indice.trim().startsWith("-")
                            ? style.TextoVermelho
                            : style.TextoVerde
                    )}>
                        {indice}
                    </span>

                    {indiceDescricao && <span>{indiceDescricao}</span>}
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

const CardInfoStatus = ({ descricao, status }) => {
    return (
        <div className={style.CardInfoStatus}>
            <span className={cx(
                style.CardInfoStatusSymbol,
                status ? style.TextoVerde : style.TextoVermelho
            )}>
                {status ? "✓" : "✕"}
            </span>

            <p className={style.CardInfoDescricao}>{descricao}</p>
        </div>
    )
}

const CardInfoTipoC = ({
    descricao,
    indicador,
    indicadorDescricao,
    statusAntes,
    statusDepois
}) => {
    return (
        <div className={cx(style.CardInfo, style.Coluna, style.TipoC)}>
            <div className={cx(style.CardInfoIndicadorContainer, style.Coluna)}>
                <span className={style.CardInfoIndicador}>{indicador}</span>

                {indicadorDescricao && (
                    <span className={style.CardInfoIndicadorDescricao}>
                        {indicadorDescricao}
                    </span>
                )}
            </div>

            {descricao && (
                <p className={style.CardInfoDescricao}>{descricao}</p>
            )}

            <div className={style.CardInfoStatusContainer}>
                {statusAntes
                    ? <CardInfoStatus descricao="Antes" status={statusAntes} />
                    : <CardInfoStatus descricao="Antes" status={statusAntes} />
                }

                {statusDepois
                    ? <CardInfoStatus descricao="Depois" status={statusDepois} />
                    : <CardInfoStatus descricao="Depois" status={statusDepois} />
                }
            </div>
        </div>
    )
}

export { CardInfoTipoA, CardInfoTipoC }
