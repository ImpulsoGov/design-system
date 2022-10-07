import React from "react";
import style from "./ButtonColor.module.css"

const ButtonColor = ({
    label,
    link
})=>{
    return(
        <a 
            className={style.ButtonColorContainer}
            href={link}
        >
            {label}
        </a>
    )
}

const ButtonColorSubmit = ({
    label,
    link
})=>{
    return(
        <button 
            className={style.ButtonColorContainer}
            href={link}
        >
            {label.toUpperCase()}
        </button>
    )
}

export {ButtonColor,ButtonColorSubmit}