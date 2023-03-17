import React from "react";
import PropTypes from "prop-types";
import { CardInfo } from "../CardInfo/CardInfo";
import { GraficoInfo } from "../GraficoInfo/GraficoInfo";
import styles from "./GraficoGrid.module.css";
// import cx from "classnames";

const GraficoGrid = ({ info, cards, proporcao }) => {
  return (
    <div className={styles.GraficoGrid}>
        {info && (
            <GraficoInfo
                titulo={info.titulo}
                descricao={info.descricao}
                fonte={info.fonte}
                link={info.link}
                tooltip={info.tooltip}
            />
        )}

        <div className={styles.GraficoGridCards}>
            {cards.map((card) => (
                <div className={styles[`Proporcao${proporcao}`]}>
                    <CardInfo
                        titulo={card.titulo}
                        indicador={card.indicador}
                        indice={card.indice}
                        indiceDescricao={card.indiceDescricao}
                        link={card.link}
                        fonte={card.fonte}
                        tooltip={card.tooltip}
                    />
                </div>
            ))}
        </div>
    </div>
  )
}

GraficoGrid.defaultProps = {
    proporcao: "6-6"
}

GraficoGrid.propTypes = {
    proporcao: PropTypes.string
}

export { GraficoGrid }
