import React from "react";
import PropTypes from "prop-types";
import { CardInfoTipoA } from "../CardInfo/CardInfo";
import { GraficoInfo } from "../GraficoInfo/GraficoInfo";
import styles from "./GraficoGrid.module.css";

const PROPORCOES_ACEITAS = ["6-6", "5-7", "4-8", "3-9", "4-4-4", "2-5-5", "3-3-3-3", "2-2-4-4"];

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
          <div className={styles[`GraficoGridCard${
            PROPORCOES_ACEITAS.includes(proporcao)
              ? proporcao
              : "6-6"
          }`]}>
            <CardInfoTipoA
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
