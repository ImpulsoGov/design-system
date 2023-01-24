import React from "react";
import style from "./ButtonColor.module.css"

const ButtonColor = ({
    icone,
    label,
    link
})=>{
    if (icone === undefined) {
    return(
        <a 
            className={style.ButtonColorContainer}
            href={link}
        >
            {label}
        </a>
    )
    }else if (icone.posicao=='left'){
        return(
            <a href={link} className={style.ButtonColorIconContainer}> 
                {label} 
                <img className={style.IconeLeft} src={icone.url} />
            </a>
        )
    }
    else{
        return(
            <a className={style.ButtonColorIconContainer} href={link}> 
                <img className={style.IconeRight} src={icone.url} />
                {label}
            </a>
        )
      }
}

const ButtonColorSubmit = ({
    label,
    submit,
    arg
})=>{
    return(
        <button 
            className={style.ButtonColorContainer}
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

export {ButtonColor,ButtonColorSubmit,ButtonColorSubmitMultiple}