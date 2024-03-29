import React from "react";
import PropTypes from "prop-types";

import style from "./ImagensFull.module.css";
import style2 from "./ImagensFull2.module.css";
import style3 from "./ImagensFull3.module.css";

const ImagensFull = ({
  imagem
  }) => {
    return (
      <div className={style.containerBanner1}>
        <img
            className={style.imageContainerBanner1}
            alt="BannerImage1"
            src= {String(imagem)}
          />
      </div>
  )};

  const ImagensFull2 = ({
    imagem,
    width
    }) => {
      return (
        <div className={style2.containerBanner2}>
          <img
              className={style2.imageContainerBanner2}
              alt="BannerImage1"
              src= {String(imagem)}
              style={{ width }}
            />
        </div>
    )};
    const ImagensFull3 = ({
      imagem
      }) => {
        return (
          <div className={style3.containerBanner3}>
            <img
                className={style3.imageContainerBanner3}
                alt="BannerImage1"
                src= {String(imagem)}
              />
          </div>
      )};

ImagensFull2.defaultProps = {
  width: "100%"
}

ImagensFull2.propTypes = {
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])
}

export {ImagensFull, ImagensFull2,ImagensFull3};
