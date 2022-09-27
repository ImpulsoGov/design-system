import React from "react";
import cx from "classnames";

import style from "./HomeBanner.module.css"


const HomeBanner = ({
    titulo,
    tituloDestaque,
    texto,
    theme
}) => {
    return (
        <div className={cx(style.conteinerHeader, style["conteinerHeader" + theme])}>
            <div className={cx(style.tituloHeader, style["tituloHeader" + theme])}>
                {titulo}
                <span className={theme ? cx(style["tituloDestaqueHeader"+theme]): cx(style.tituloDestaqueHeader)}>
                    {tituloDestaque}
                </span>
            </div>
            <div className={style.textoHeader}>{texto}</div>
        </div>
    )
};

export { HomeBanner };