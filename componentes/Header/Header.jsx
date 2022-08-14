import React from "react";
import { sanitize } from "../sanitize";

import style from "./Header.module.css";

const Header = ({
    titulo,
    texto,
    botao,
    chamada
}) => {
  return (
    <div className={style.conteinerHeader}>
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
            {botao.label && <a className={style.buttonHeader} href={botao.url}>{botao.label.toUpperCase()}</a>}
            {chamada.label && <a className={style.consultoriaHeader} href={chamada.url}>{chamada.label.toUpperCase()}</a>}
        </div>}
    </div>
)};

export {Header};