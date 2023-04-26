import Tippy from "@tippyjs/react";
import cx from "classnames";
import Link from "next/link";
import React from "react";
import "tippy.js/themes/light.css";
import { sanitize } from "../sanitize";
import style from "./GraficoInfo.module.css";

const GraficoInfo = ({
    titulo,
    fonte,
    descricao,
    link,
    tooltip,
    destaque
}) => {
    return (
        <div className={ style.GraficoInfo }>

            <div className={ style.TituloContainer }>
                <h5 className={ cx(style.Titulo, destaque && style.TituloMargem) }>{ titulo }</h5>

                { destaque && <p className={ style.Destaque }>{ destaque }</p> }

                { tooltip && (
                    <Tippy
                        content={ tooltip }
                        placement="auto"
                        className={ style.Tooltip }
                        theme="light"
                    >
                        <span className={ style.InfoSimbolo }>ⓘ</span>
                    </Tippy>
                ) }
            </div>

            <div className={ style.InfoContainer }>
                { descricao && <p className={ style.Descricao } dangerouslySetInnerHTML={ { __html: sanitize(descricao) } }></p> }
                { fonte && <p className={ style.Fonte }>{ fonte }</p> }
            </div>

            { link && (
                <Link href={ link.url }>
                    <a className={ style.Link }>{ link.label }</a>
                </Link>
            ) }

        </div>
    );
};

export { GraficoInfo };
