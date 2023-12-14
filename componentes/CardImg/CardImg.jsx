import React from "react";
import PropTypes from "prop-types";
import "tippy.js/themes/light.css";
import style from "./CardImg.module.css";

const CardImg = ({
  imagemSrc,
  indicador,
  descricao,
  height
}) => {
  return (
    <div
      className={style.CardInfo}
      style={{ height }}
    >

      <div className={style.CardInfoImagemContainer}>
        {imagemSrc && (
          <img
            src={imagemSrc}
            alt="Imagem do card"
            className={style.CardInfoImagem}
          />
        )}
      </div>

      <div className={style.CardInfoIndicadorContainer}>
        <span className={style.CardInfoIndicador}>
          {indicador}
        </span>
      </div>

      <p className={style.CardInfoDescricao}>{descricao}</p>

    </div>
  );
};

CardImg.defaultProps = {
  height: "100%",
  imagemSrc: "",
}

CardImg.propTypes = {
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])
}

export { CardImg };
