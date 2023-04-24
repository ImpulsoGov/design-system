import Tippy from "@tippyjs/react";
import cx from "classnames";
import ReactEcharts from "echarts-for-react";
import Link from "next/link";
import React from "react";
import "tippy.js/themes/light.css";
import style from "./CardInfo.module.css";

const CardInfoTitulo = ({ titulo, tooltip }) => {
    return (
        <div className={ style.CardInfoTitulo }>
            { titulo }

            { tooltip && (
                <Tippy
                    content={ tooltip }
                    placement="auto"
                    className={ style.CardInfoTooltip }
                    theme="light"
                >
                    <span className={ style.CardInfoSymbol }>
                        <strong>ⓘ</strong>
                    </span>
                </Tippy>
            ) }
        </div>
    );
};

const CardInfoIndicador = ({ indicador, simbolo, descricao }) => {
    return (
        <>
            <span className={ style.CardInfoIndicador }>
                { `${indicador}${simbolo ? simbolo : ""}` }
            </span>

            { descricao && (
                <span className={ style.CardInfoIndicadorDescricao }>
                    { descricao }
                </span>
            ) }
        </>
    );
};

const CardInfoIndice = ({ indice, simbolo, descricao }) => {
    return (
        <div className={ style.CardInfoIndiceContainer }>
            {
                indice != 0 &&
                <>
                    <span className={
                        indice < 0
                            ? cx(style.CardInfoSymbolDown, style.TextoVermelho)
                            : cx(style.CardInfoSymbolUp, style.TextoVerde)
                    }>
                        »
                    </span>

                    <span className={ cx(
                        style.CardInfoIndice,
                        indice < 0 ? style.TextoVermelho : style.TextoVerde
                    ) }>
                        { `${indice}${simbolo ? simbolo : ""}` }
                    </span>
                </>
            }
            { indice === 0 && <span style={ { marginRight: "10px" } }>igual</span> }
            { descricao && <span>{ descricao }</span> }
        </div>
    );
};

const CardInfoDescricao = ({ descricao }) => {
    return (
        <p className={ style.CardInfoDescricao }>{ descricao }</p>
    );
};

const CardInfoStatus = ({ descricao, status }) => {
    return (
        <div className={ style.CardInfoStatus }>
            <span className={ cx(
                style.CardInfoStatusSymbol,
                status ? style.TextoVerde : style.TextoVermelho
            ) }>
                { status ? "✓" : "✕" }
            </span>

            <p className={ style.CardInfoDescricao }>{ descricao }</p>
        </div>
    );
};

const CardInfoFonte = ({ fonte }) => {
    return (
        <div className={ style.CardInfoFonte }>{ fonte }</div>
    );
};

const CardInfoTipoA = ({
    titulo,
    indicador,
    indicadorSimbolo,
    indicadorDescricao,
    indice,
    indiceSimbolo,
    indiceDescricao,
    link,
    fonte,
    tooltip,
}) => {
    return (
        <div className={ style.CardInfo }>
            <CardInfoTitulo
                titulo={ titulo }
                tooltip={ tooltip }
            />

            <div className={ style.CardInfoIndicadorContainer }>
                <CardInfoIndicador
                    indicador={ indicador }
                    descricao={ indicadorDescricao }
                    simbolo={ indicadorSimbolo }
                />
            </div>

            {
                indice || indice === 0 ? (
                    <CardInfoIndice
                        indice={ indice }
                        descricao={ indiceDescricao }
                        simbolo={ indiceSimbolo }
                    />
                ) : null
            }

            { link && (
                <Link href={ link.url }>
                    <a className={ style.CardInfoLink }>
                        { link.label }
                    </a>
                </Link>
            ) }

            { fonte && <CardInfoFonte fonte={ fonte } /> }
        </div>
    );
};

const CardInfoTipoB = ({
    titulo,
    tooltip,
    indicador,
    indicadorSimbolo,
    indicadorDescricao,
    indice,
    indiceSimbolo,
    indiceDescricao,
    descricao,
    porcentagemSim,
    porcentagemNao
}) => {
    const echartsOptions = {
        tooltip: {
            trigger: 'item',
            valueFormatter: (value) => `${value.toFixed(2)}%`
        },
        series: [
            {
                type: 'pie',
                radius: ['60%', '80%'],
                avoidLabelOverlap: false,
                percentPrecision: 2,
                cursor: "default",
                label: {
                    show: true,
                    fontSize: 14,
                    color: "black",
                    fontWeight: 'bold',
                    formatter: "{d}%",
                    position: 'center',
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 14,
                        color: "black",
                        fontWeight: 'bold',
                    }
                },
                data: [
                    {
                        value: porcentagemSim,
                        name: "Sim",
                        itemStyle: {
                            color: "#5367C9"
                        }
                    },
                    {
                        value: porcentagemNao,
                        label: { show: false },
                        name: "Não",
                        itemStyle: {
                            color: "#CACCFE"
                        }
                    },
                ]
            }
        ]
    };

    return (
        <div className={ cx(style.CardInfo, style.TipoB) }>
            <div className={ style.CardInfoDireita }>
                <CardInfoTitulo
                    titulo={ titulo }
                    tooltip={ tooltip }
                />

                <div className={ style.CardInfoIndicadorContainer }>
                    <CardInfoIndicador
                        indicador={ indicador }
                        descricao={ indicadorDescricao }
                        simbolo={ indicadorSimbolo }
                    />
                </div>

                { indice && (
                    <CardInfoIndice
                        indice={ indice }
                        descricao={ indiceDescricao }
                        simbolo={ indiceSimbolo }
                    />
                ) }

                { descricao && <CardInfoDescricao descricao={ descricao } /> }
            </div>

            <div className={ style.CardInfoEsquerda }>
                <ReactEcharts
                    option={ echartsOptions }
                    style={ { width: "100%", height: "100%" } }
                />
            </div>
        </div>
    );
};

const CardInfoTipoC = ({
    descricao,
    indicador,
    indicadorSimbolo,
    indicadorDescricao,
    statusAntes,
    statusDepois
}) => {
    return (
        <div className={ cx(style.CardInfo, style.TipoC) }>
            <div className={ style.CardInfoIndicadorContainer }>
                <CardInfoIndicador
                    indicador={ indicador }
                    descricao={ indicadorDescricao }
                    simbolo={ indicadorSimbolo }
                />
            </div>

            { descricao && <CardInfoDescricao descricao={ descricao } /> }

            <div className={ style.CardInfoStatusContainer }>
                { statusAntes
                    ? <CardInfoStatus descricao="Antes" status={ statusAntes } />
                    : <CardInfoStatus descricao="Antes" status={ statusAntes } />
                }

                { statusDepois
                    ? <CardInfoStatus descricao="Depois" status={ statusDepois } />
                    : <CardInfoStatus descricao="Depois" status={ statusDepois } />
                }
            </div>
        </div>
    );
};

export {
    CardInfoTipoA,
    CardInfoTipoB,
    CardInfoTipoC,
};

