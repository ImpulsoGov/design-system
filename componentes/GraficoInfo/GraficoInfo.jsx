import React from "react";
import Tippy from "@tippyjs/react";
import Link from "next/link";
import style from "./GraficoInfo.module.css";
import "tippy.js/themes/light.css";
import { sanitize } from "../sanitize";

const GraficoInfo = ({
    titulo,
    fonte,
    descricao,
    link,
    tooltip
}) => {
  return (
    <div className={style.GraficoInfo}>

        <div className={style.TituloContainer}>
            <h5 className={style.Titulo}>{titulo}</h5>

            {tooltip && (
                <Tippy
                    content={tooltip}
                    placement="auto"
                    className={style.Tooltip}
                    theme="light"
                >
                    <span className={style.InfoSimbolo}>ⓘ</span>
                </Tippy>
            )}
        </div>

        <div className={style.InfoContainer}>
            {descricao && <p className={style.Descricao} dangerouslySetInnerHTML={{__html: sanitize(descricao)}}></p>}
            {fonte && <p className={style.Fonte}>{fonte}</p>}
        </div>

        {link && (
            <Link href={link.url}>
                <a className={style.Link}>{link.label}</a>
            </Link>
        )}

    </div>
  )
}

export { GraficoInfo };
