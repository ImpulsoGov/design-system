import React from "react";
import style from "./ModalLogged.module.css";
import PropTypes from "prop-types";
import cx from "classnames";

const UserAvatar = (props)=>{
    return(
        <>
            <div className={style.LoggedIcon}>{props?.label}</div>
            <div className={style.LoggedName}>{props?.nome}</div>
            <div className={style.LoggedCargo}>{props?.cargo}</div>
            <div className={style.LoggedCargo}>{props?.equipe}</div>
        </>
    )
}

const ModalLogged = ({
    botaoAuxiliar = null,
    label,
    nome,
    cargo,
    equipe,
    setModal = () => {},
    logout,
})=>{
    return(
        <div className={style.LoggedContainer}>
            <UserAvatar 
                label = {label}
                nome = {nome}
                cargo = {cargo}
                equipe = {equipe}
            />

            {botaoAuxiliar &&
                <button
                    className={cx(style.Button, style.MargemComButtonAuxiliar)}
                    onClick={ () => {
                        botaoAuxiliar.handelClick()
                        setModal(false)
                    }}
                >
                    {botaoAuxiliar.label}
                </button>
            }

            <button
                className={cx(
                    style.Button,
                    botaoAuxiliar ? style.MargemComButtonAuxiliar : style.MargemSemButtonAuxiliar
                )}
                onClick={()=>logout()}
            >SAIR</button>
        </div>
    )
}

ModalLogged.propTypes = {
    botaoAuxiliar: PropTypes.shape({
        label: PropTypes.string,
        handelClick: PropTypes.func,
    })
}

export {ModalLogged,UserAvatar}
