import cx from "classnames";
import React from "react";
import style from "./CardGridInternacoes.module.css";

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

const CardInfoDescricao = ({ descricao }) => {
    return (
        <p className={ style.CardInfoDescricao }>{ descricao }</p>
    );
};

const CardInfoStatus = ({ antes, depois }) => {
    return (
        <>
        <div className={ style.CardInfoStatus }>
            <span className={ cx(
                style.CardInfoStatusSymbol,
                antes.status ? style.TextoVerde : style.TextoVermelho
            ) }>
                { antes.status ? "✓" : "✕" }
            </span>

            <p className={ style.AntesDepois }>Antes</p>
            <CardInfoDescricao descricao = {antes.descricao}
            />
        </div>
        <div className={ style.CardInfoStatus }>
        <span className={ cx(
            style.CardInfoStatusSymbol,
            depois.status ? style.TextoVerde : style.TextoVermelho
        ) }>
            { depois.status ? "✓" : "✕" }
        </span>

        <p className={ style.AntesDepois }>Depois</p>
        <CardInfoDescricao descricao = {depois.descricao}
        />
    </div>
        </>
    );
};

const CardIndicadorDescricao = ({
    descricao,
    indicador,
    indicadorSimbolo,
    indicadorDescricao
}) => {
    return (
        <div className={ cx(style.CardInfo) }>
            <div className={ style.CardInfoIndicadorContainer }>
                <CardInfoIndicador
                    indicador={ indicador }
                    descricao={ indicadorDescricao }
                    simbolo={ indicadorSimbolo }
                />
            </div>

            { descricao && <CardInfoDescricao descricao={ descricao } /> }
        </div>
    );
};

const ContainerCards = ({ cardsArray }) => {
    return (
        <div className={ style.ContainerCards }>
            <div className={ cx(style.PrimeiraColuna, style.AuxClassBorder) }></div>

            <div className={ cx(style.SegundaColuna, style.TerceiroCard) }>
                {cardsArray[0]}
            </div>

            <div className={ cx(style.TerceiraColuna, style.SextoCard) }>
                {cardsArray[1]}
            </div>

            <div className={ cx(style.QuartaColuna, style.NonoCard) }>
                {cardsArray[2]}
            </div>

            <div className={ cx(style.QuintaColuna, style.DecimoSegundoCard) }>
                {cardsArray[3]}
            </div>

            <div className={ cx(style.PrimeiraColuna, style.PrimeiroCard) }>
                {cardsArray[4]}
            </div>

            <div className={ cx(style.SegundaColuna, style.QuartoCard) }>
                {cardsArray[5]}
            </div>

            <div className={ cx(style.TerceiraColuna, style.SetimoCard) }>
                {cardsArray[6]}
            </div>

            <div className={ style.QuartaColuna }>
                {cardsArray[7]}
            </div>

            <div className={ style.QuintaColuna }>
                {cardsArray[8]}
            </div>

            <div className={ style.PrimeiraColuna }>
                {cardsArray[9]}
            </div>

            <div className={ cx(style.SegundaColuna, style.QuintoCard) }>
                {cardsArray[10]}
            </div>

            <div className={ style.TerceiraColuna }>
                {cardsArray[11]}
            </div>

            <div className={ style.QuartaColuna }>
                {cardsArray[12]}
            </div>

            <div className={ cx(style.QuintaColuna, style.DecimoQuartoCard) }>
                {cardsArray[13]}
            </div>
        </div>
    );
};

const CardPeriodos = ({
    titulo,
    descricao,
    filtro
}) =>{
    return ( <div className = {style.CardPeriodos}> 
        <h3>{titulo}</h3>
        <p className = {style.CardPeriodosDescricao}>{descricao}</p>
        {filtro && <>{filtro}</>}
    </div>

    );
}

export {
    CardIndicadorDescricao,
    CardInfoStatus, CardPeriodos, ContainerCards
};
