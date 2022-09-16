import React from "react";
import { sanitize } from "../sanitize";
import cx from "classnames";

import style from "./Header.module.css";

const Header = ({
    titulo,
    texto,
    botao,
    chamada,
    theme
}) => {
  return (
    <div className={cx(style.conteinerHeader,style["theme"+theme])}>
        <div 
            className={style.tituloHeader}
            dangerouslySetInnerHTML={{
                __html: sanitize(titulo),
              }}            
        ></div>
        <div 
            className={style.textoHeader}
            dangerouslySetInnerHTML={{
                __html: sanitize(texto),
              }}            
            ></div>
        {(botao.label || chamada.label) && <div className={style.conteinerChamadasHeader}>
            {botao.label && <a className={cx(style.buttonHeader,style["buttonHeader"+theme])} href={botao.url}>{botao.label.toUpperCase()}</a>}
            {chamada.label && <a className={cx(style.consultoriaHeader, style["consultoriaHeader"+theme])} href={chamada.url}>{chamada.label.toUpperCase()}</a>}
        </div>}
    </div>
)};

export {Header};