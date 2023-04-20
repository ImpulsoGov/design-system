import cx from "classnames";
import React from "react";
import style from "./Parcerias.module.css";

const Parcerias = ({
    parceiros,
    theme,
    titulo
}) => {
    return (
        <div className={ cx(style.container_parceiros, style["theme" + theme]) }>
            { titulo && <div className={ style.parceirosLabel }>{ titulo }</div> }
            <div className={ style.gridContainer }>
                { parceiros.map((parceiro, index) => {
                    return (
                        <div className={ style.info_parceiro } key={ index }>
                            {
                                parceiro.titulo && (
                                    <p className={ style.tituloParceiro }>
                                        { parceiro.titulo }
                                    </p>
                                )
                            }
                            <img className={ style.imageContainer }
                                alt={ parceiro.alt }
                                src={ parceiro.src }
                            />
                        </div>
                    );
                }) }
            </div>
        </div>
    );
};

const ParceriasDescritivo = ({
    parceiros,
    theme,
    titulo,
}) => {
    return (
        <div className={ cx(
            style.container_parceiros,
            style["theme" + theme],
            style.container_parceiros_descritivo
        ) }>
            { titulo && <div className={ style.parceirosLabelDescritivo }>{ titulo }</div> }
            <div className={ cx(style.gridContainer, style.gridContainerDescritivo) }>
                { parceiros.map((parceiro, index) => {
                    return (
                        <div className={ cx(style.info_parceiro, style.info_parceiro_descritivo) } key={ index }>
                            {
                                parceiro.titulo && (
                                    <p className={ cx(style.tituloParceiro, style.tituloParceiroDescritivo) }>
                                        { parceiro.titulo }
                                    </p>
                                )
                            }
                            <img className={ cx(style.imageContainer, style.imageContainerDescritivo) }
                                alt={ parceiro.alt }
                                src={ parceiro.src }
                            />

                            {
                                parceiro.descricao && (
                                    <p className={ style.descricaoParceiro }>
                                        { parceiro.descricao }
                                    </p>
                                )
                            }
                        </div>
                    );
                }) }
            </div>
        </div>
    );
};

export { Parcerias, ParceriasDescritivo };

