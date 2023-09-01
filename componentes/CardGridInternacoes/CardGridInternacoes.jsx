import cx from "classnames";
import React from "react";
import style from "./CardGridInternacoes.module.css";

const CardStatusDescricao = ({ icone, descricao, titulo }) => {
    return (
        <div className={ style.CardInfoStatus }>
            <img src={icone} />

            <div className={style.CardInfoStatusDescricao}>
                <span className={ style.CardInfoDescricao }>{ descricao }</span>
                <span className={ style.AntesDepois }>{titulo}</span>
            </div>
        </div>
    );
};

const CardInternacaoStatus = ({ antes, depois, icones }) => {
    return (
        <div className={ style.CardInternacaoStatus }>
            <CardStatusDescricao
                titulo="ANTES"
                icone={ antes.status ? icones.sim : icones.nao }
                descricao={ antes.descricao }
            />

            <CardStatusDescricao
                titulo="DEPOIS"
                icone={ depois.status ? icones.sim : icones.nao }
                descricao={ depois.descricao }
            />
        </div>
    );
};

const CardIndicadorDescricao = ({ descricao, indicador }) => {
    return (
        <div className={ style.CardInfo }>
            <span className={ style.CardInfoIndicador }>
                { indicador }
            </span>

            <span className={ style.CardInfoIndicadorDescricao }>
                { descricao }
            </span>
        </div>
    );
};

const CardsGridInternacao = ({ cardsArray }) => {
    return (
        <div className={ style.ContainerCards }>
            <div className={ cx(
                style.SegundaColuna,
                style.BordaRedondaSuperiorEsquerda
            ) }>
                {cardsArray[0]}
            </div>

            <div className={ style.TerceiraColuna }>
                {cardsArray[1]}
            </div>

            <div className={ style.QuartaColuna }>
                {cardsArray[2]}
            </div>

            <div className={ cx(
                style.QuintaColuna,
                style.BordaRedondaSuperiorDireita
            ) }>
                {cardsArray[3]}
            </div>

            <div className={ cx(
                style.PrimeiraColuna,
                style.BordaRedondaSuperiorEsquerda
            ) }>
                {cardsArray[4]}
            </div>

            <div className={ style.SegundaColuna }>
                {cardsArray[5]}
            </div>

            <div className={ style.TerceiraColuna }>
                {cardsArray[6]}
            </div>

            <div className={ style.QuartaColuna }>
                {cardsArray[7]}
            </div>

            <div className={ style.QuintaColuna }>
                {cardsArray[8]}
            </div>

            <div className={ cx(
                style.PrimeiraColuna,
                style.BordaInferior,
                style.BordaRedondaInferiorEsquerda
            ) }>
                {cardsArray[9]}
            </div>

            <div className={ cx(
                style.SegundaColuna,
                style.BordaInferior
            ) }>
                {cardsArray[10]}
            </div>

            <div className={ cx(
                style.TerceiraColuna,
                style.BordaInferior
            ) }>
                {cardsArray[11]}
            </div>

            <div className={ cx(
                style.QuartaColuna,
                style.BordaInferior
            ) }>
                {cardsArray[12]}
            </div>

            <div className={ cx(
                style.QuintaColuna,
                style.BordaInferior,
                style.BordaRedondaInferiorDireita
            ) }>
                {cardsArray[13]}
            </div>
        </div>
    );
};

const CardPeriodosInternacao = ({
    periodo,
    descricao,
    filtro
}) =>{
    return (
        <div className={style.CardPeriodos}>
            <p className={style.CardPeriodosTitulo}>{periodo}</p>
            <p className={style.CardPeriodosDescricao}>{descricao}</p>
            {filtro && <>{filtro}</>}
        </div>
    );
}

export {
    CardIndicadorDescricao,
    CardInternacaoStatus,
    CardPeriodosInternacao,
    CardsGridInternacao
};
