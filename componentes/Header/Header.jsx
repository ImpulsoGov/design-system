import React from "react";
import Link from "next/link";
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
            {
                botao.label && 
                <Link href={botao.url}>
                    <a className={cx(style.buttonHeader,style["buttonHeader"+theme])}>
                        {botao.label.toUpperCase()}
                    </a>
                </Link>
            }
            {
                chamada.label && 
                <Link href={chamada.url}>
                    <a className={cx(style.consultoriaHeader, style["consultoriaHeader"+theme])}>
                        {chamada.label.toUpperCase()}
                    </a>
                </Link>
            }
        </div>}
    </div>
)};

export {Header};