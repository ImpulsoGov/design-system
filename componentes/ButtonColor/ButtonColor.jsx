import Link from "next/link";
import React from "react";
import style from "./ButtonColor.module.css";

const ButtonColor = ({
    icone,
    label,
    link
})=>{
    return(
        <Link href={link}>
            <a  className={style.ButtonColorIconContainer}> 
                {icone?.posicao=='right' && <img className={style.IconeRight} src={icone?.url} />}
                {label} 
                {icone?.posicao=='left' && <img className={style.IconeLeft} src={icone?.url} />}
            </a>
        </Link>
    )
}
const ButtonColorMobile = ({
    icone,
    label,
    link
})=>{
    return(
        <Link href={link}>
            <a  className={style.ButtonColorIconContainerMobile}> 
                {icone?.posicao=='right' && <img className={style.IconeRight} src={icone?.url} />}
                {label} 
                {icone?.posicao=='left' && <img className={style.IconeLeft} src={icone?.url} />}
            </a>
        </Link>
    )
}

const ButtonColorSubmit = ({
    label,
    submit,
    arg,
    icon
})=>{
    return(
        <button 
            className={style.ButtonColorContainer}
            onClick={()=>submit(arg)}
        >
            {icon && <img className={style.IconeRight} src={icon} />}
            {label?.toUpperCase()}
        </button>
    )
}
const ButtonColorSubmitIcon = ({
    label,
    submit,
    icon,
    disable
})=>{
    return(
        <button 
            className={style.ButtonColorContainer}
            onClick={()=>{if(!disable) submit()}}
            style={(disable) ? {cursor:"default"} : {cursor:"pointer"}}
        >
            {icon && <img className={style.IconeRight} src={icon} />}
            {label?.toUpperCase()}
        </button>
    )
}

const ButtonColorSubmitMobile = ({
    label,
    submit,
    arg
})=>{
    return(
        <button 
            className={style.ButtonColorMobile}
            onClick={()=>submit(arg)}
        >
            {label.toUpperCase()}
        </button>
    )
}

const ButtonColorSubmitMultiple = ({
    label,
    submit,
})=>{
    return(
        <button 
            className={style.ButtonColorContainer}
            onClick={()=>submit[1]()}
        >
            {label.toUpperCase()}
        </button>
    )
}

export {ButtonColor,ButtonColorSubmit,ButtonColorSubmitMultiple,ButtonColorSubmitMobile,ButtonColorMobile,ButtonColorSubmitIcon}