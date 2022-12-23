import React from "react";
import Link from "next/link";
import style from "./FormConsultoria.module.css"

const FormConsultoria = ({
    title,
    mail,
    link,
    button
})=>{
    return(
        <div id="formulario">
            <div className={style.containerFormConsultoria}>
                <div className={style.titleFormConsultoria}>{title}<span className={style.mailFormConsultoria}>{mail}</span></div>
                {
                    button != "" && 
                    <Link href={link}>
                        <a className={style.buttonFormConsultoria}>
                            {button.toUpperCase()}
                        </a>
                    </Link>
                }
            </div>
        </div>
    )
}

export {FormConsultoria}