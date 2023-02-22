import React from "react";
import style from "./ButtonLight.module.css"
import Link from "next/link"

const ButtonLight = ({
    icone,
    label,
    link
})=>{
    return(
          <Link href={link}>
            <a className={style.ButtonLightIconContainer}>
                {icone?.posicao=='right' && <img className={style.IconeRight} src={icone?.url} />}
                {label} 
                {icone?.posicao=='left' && <img className={style.IconeLeft} src={icone?.url} />}
            </a>
          </Link>
    )
  }

const ButtonLightMobile = ({
    icone,
    label,
    link
})=>{
    return(
        <Link
            href={link}
        >
            <a className={style.ButtonLightMobile}>
                {icone?.posicao=='right' && <img className={style.IconeRightMobile} src={icone?.url} />}
                {label} 
                {icone?.posicao=='left' && <img className={style.IconeLeftMobile} src={icone?.url} />}
            </a>
        </Link>
    )
}


const ButtonLightSubmit = ({
    label,
    submit,
    icon,
    arg
})=>{
    return(
        <button 
            className={style.ButtonLightContainer}
            onClick={()=>{
                if(arg){
                    submit(arg)
                }else{
                    submit()
                }
                    
            }}
        >
            {icon && <img className={style.IconeRight} src={icon} />}
            {label?.toUpperCase()}
        </button>
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
        >{label?.toUpperCase()}</button>
    )
}


export {ButtonLight,ButtonLightSubmit,ButtonLightSubmitMobile,ButtonLightMobile}
