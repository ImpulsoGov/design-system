import React from "react";
import style from "./IFrame.module.css"

const IFrame = ({
  height,
  link,
}) => {
  return (
    <div className={style["iframe"]} align="center" id="formulario">
      <iframe width="88%" height={height} src={link} allowFullScreen></iframe>
    </div>
  );
};

export {IFrame};