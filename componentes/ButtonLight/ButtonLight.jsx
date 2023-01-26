import React from "react";
import style from "./ButtonLight.module.css"
import Link from "next/link"


const ButtonLight = ({
    icone,
    label,
    link
})=>{
  if (icone === undefined) {
    return(
      <Link
          href={link}
      >
          <a className={style.ButtonLightContainer}>{label}</a>
      </Link>
    )
  }else if (icone.posicao=='left'){
    return(
          <Link href={link}>
              <a className={style.ButtonLightIconContainer}> {label} <img className={style.IconeLeft} src={icone.url} /></a>
          </Link>
    )
  }
  else{
    return(
          <Link href={link}>
              <a className={style.ButtonLightIconContainer}> <img className={style.IconeRight} src={icone.url} />{label}</a>
          </Link>
    )
  }
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
