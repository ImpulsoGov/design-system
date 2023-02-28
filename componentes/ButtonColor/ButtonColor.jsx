import React from "react";
import style from "./ButtonColor.module.css";
import PropTypes from 'prop-types';
import cx from 'classnames';

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
    arg,
    theme
})=>{
    return(
        <button 
            className={cx(style.ButtonColorContainer, style[`${theme}`])}
            onClick={()=>submit(arg)}
        >
            {label.toUpperCase()}
        </button>
    )
}

const ButtonColorSubmitMobile = ({
    label,
    submit,
    arg,
    theme
})=>{
    return(
        <button 
            className={cx(style.ButtonColorMobile, style[`${theme}Mobile`])}
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

ButtonColorSubmit.defaultProps = {
    theme: 'ColorIP'
}

ButtonColorSubmitMobile.defaultProps = {
    theme: 'ColorIP'
}

ButtonColorSubmit.propTypes = {
    theme: PropTypes.string
}

ButtonColorSubmitMobile.propTypes = {
    theme: PropTypes.string
}

export {ButtonColor,ButtonColorSubmit,ButtonColorSubmitMultiple,ButtonColorSubmitMobile}
