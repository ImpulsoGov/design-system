import Link from "next/link";
import Tippy from "@tippyjs/react";
import React from "react";
import style from "./CardInfo.module.css"
import cx from "classnames";
import "tippy.js/themes/light.css";

const CardInfoTitulo = ({ titulo, tooltip }) => {
    return (
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
    )
}

const CardInfoIndicador = ({ indicador, descricao }) => {
    return (
        <>
            <span className={style.CardInfoIndicador}>{indicador}</span>

            {descricao && (
                <span className={style.CardInfoIndicadorDescricao}>
                    {descricao}
                </span>
            )}
        </>
    )
}

const CardInfoIndice = ({ indice, descricao }) => {
    return (
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

            {descricao && <span>{descricao}</span>}
        </div>
    )
}

const CardInfoDescricao = ({ descricao }) => {
    return (
        <p className={style.CardInfoDescricao}>{descricao}</p>
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

const CardInfoFonte = ({ fonte }) => {
    return (
        <div className={style.CardInfoFonte}>{fonte}</div>
    )
}

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
        <div className={style.CardInfo}>
            <CardInfoTitulo
                titulo={titulo}
                tooltip={tooltip}
            />

            <div className={style.CardInfoIndicadorContainer}>
                <CardInfoIndicador
                    indicador={indicador}
                    descricao={indicadorDescricao}
                />
            </div>

            {indice && (
                <CardInfoIndice
                    indice={indice}
                    descricao={indiceDescricao}
                />
            )}

            {link && (
                <Link href={link.url}>
                    <a className={style.CardInfoLink}>
                        {link.label}
                    </a>
                </Link>
            )}

            {fonte && <CardInfoFonte fonte={fonte} />}
        </div>
    )
}

const CardInfoTipoB = ({
    titulo,
    tooltip,
    indicador,
    indicadorDescricao,
    indice,
    indiceDescricao,
    descricao,
}) => {
    return (
        <div className={cx(style.CardInfo, style.TipoB)}>
            <div className={style.CardInfoDireita}>
                <CardInfoTitulo
                    titulo={titulo}
                    tooltip={tooltip}
                />

                <div className={style.CardInfoIndicadorContainer}>
                    <CardInfoIndicador
                        indicador={indicador}
                        descricao={indicadorDescricao}
                    />
                </div>

                {indice && (
                    <CardInfoIndice
                        indice={indice}
                        descricao={indiceDescricao}
                    />
                )}

                {descricao && <CardInfoDescricao descricao={descricao} />}
            </div>

            <div className={style.CardInfoEsquerda}>Gráfico</div>
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
        <div className={cx(style.CardInfo, style.TipoC)}>
            <div className={style.CardInfoIndicadorContainer}>
                <CardInfoIndicador
                    indicador={indicador}
                    descricao={indicadorDescricao}
                />
            </div>

            {descricao && <CardInfoDescricao descricao={descricao} />}

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

export { CardInfoTipoA, CardInfoTipoB, CardInfoTipoC }
