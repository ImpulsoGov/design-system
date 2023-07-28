import React from "react";
import Link from "next/link";
import style from "./FormConsultoria.module.css"
import cx from "classnames";

const FormConsultoria = ({
    title,
    mail,
    link,
    button,
    theme
})=>{
    return(
        <div id="formulario">
            <div className={cx(style.containerFormConsultoria, style["containerFormConsultoria" + theme])} >
                <div className={style.titleFormConsultoria}>{title}
                    <span className={style.mailFormConsultoria}>{mail}</span>
                </div>
                {
                    button != "" && 
                    <Link href={link}>
                        <a className={cx(style.buttonFormConsultoria, style["buttonFormConsultoria" + theme])} >
                            {button.toUpperCase()}
                        </a>
                    </Link>
                }
            </div>
        </div>
    )
}

export {FormConsultoria}