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

const ButtonLightMobile = ({
    label,
    link
})=>{
    return(
        <Link
            href={link}
        >
            <a className={style.ButtonLightMobile}>{label}</a>
        </Link>
    )
}


const ButtonLightSubmit = ({
    label,
    submit,
})=>{
    return(
        <button 
            className={style.ButtonLightContainer}
            onClick={submit}
        >{label.toUpperCase()}</button>
    )
}

const ButtonLightSubmitMobile = ({
    label,
    submit,
})=>{
    return(
        <button 
            className={style.ButtonLightMobile}
            onClick={submit}
        >{label.toUpperCase()}</button>
    )
}


export {ButtonLight,ButtonLightSubmit,ButtonLightSubmitMobile,ButtonLightMobile}