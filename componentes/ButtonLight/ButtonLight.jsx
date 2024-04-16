import React from "react";
import style from "./ButtonLight.module.css";
import Link from "next/link";
import PropTypes from "prop-types";

const ButtonLight = ({
    icone,
    label,
    link,
    disabled
})=>{
    return(
          <Link href={link} data-testid="ButtonLight">
            <a className={disabled ? style.ButtonLightDisabled : style.ButtonLightIconContainer}>
                {icone?.posicao=='right' && <img className={style.IconeRight} src={icone?.url} />}
                {label} 
                {icone?.posicao=='left' && <img className={style.IconeLeft} src={icone?.url} />}
            </a>
          </Link>
    )
  }

const ButtonLightLarge = ({
    label,
    link
})=>{
    return(
          <Link target="_blank" href={link} data-testid="ButtonLightLarge">
            <a target="_blank" className={style.ButtonLightLarge}>
                {label} 
            </a>
          </Link>
    )
  }

const ButtonLightMobile = ({
    icone,
    label,
    link,
    disabled
})=>{
    return(
        <Link href={link} data-testid="ButtonLightMobile">
            <a className={disabled ? style.ButtonLightDisabled : style.ButtonLightMobile}>
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
    arg,
    disabled
})=>{
    return(
        <button 
            className={disabled ? style.ButtonLightDisabled : style.ButtonLightContainer}
            onClick={()=>{
                if(arg&&!disabled){
                    submit(arg)
                }else{
                    if(!disabled) submit()
                }
                    
            }}
        >
            {icon && <img className={style.IconeRight} src={icon} />}
            {label?.toUpperCase()}
        </button>
    )
}

const ButtonLightSubmitLarge = ({
    label,
    submit,
    icon,
    arg,
    disabled
})=>{
    return(
        <button 
            className={disabled ? style.ButtonLightLargeDisabled : style.ButtonLightContainerLarge}
            onClick={()=>{
                if(arg&&!disabled){
                    submit(arg)
                }else{
                    if(!disabled) submit()
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
    disabled
})=>{
    const handleClick = ()=>{if(!disabled){submit()}}
    return(
        <button 
            className={disabled ? style.ButtonLightDisabled : style.ButtonLightMobile}
            onClick={handleClick}
        >{label?.toUpperCase()}</button>
    )
}

ButtonLight.defaultProps = {
    disabled: false
}

ButtonLight.propTypes = {
    disabled: PropTypes.bool,
}

ButtonLightMobile.defaultProps = {
    disabled: false
}

ButtonLightMobile.propTypes = {
    disabled: PropTypes.bool,
}

export {ButtonLight,ButtonLightSubmit,ButtonLightSubmitMobile,ButtonLightMobile, ButtonLightLarge,ButtonLightSubmitLarge}
