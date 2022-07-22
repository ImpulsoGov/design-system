import React from "react";
import style from "./IFrame.module.css"

const IFrame = ({
  height,
  link,
  id
}) => {
  return (
    <div className={style["iframe"]} align="center" id="formulario">
      <iframe width="80%" height={height} src={link} allowFullScreen></iframe>
    </div>
  );
};

export {IFrame};