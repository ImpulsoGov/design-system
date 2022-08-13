import React from "react";
import style from "./ButtonLight.module.css"

const ButtonLight = ({
    label,
    link
})=>{
    return(
        <a 
            className={style.ButtonLightContainer}
            href={link}
        >
            {label}
        </a>
    )
}

export {ButtonLight}