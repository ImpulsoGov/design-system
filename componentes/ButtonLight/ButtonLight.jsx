import React from "react";
import style from "./ButtonLight.module.css"
import Link from "next/link"

const ButtonLight = ({
    label,
    link
})=>{
    return(
        <Link
            href={link}
        >
            <a className={style.ButtonLightContainer}>{label}</a>
        </Link>
    )
}

export {ButtonLight}