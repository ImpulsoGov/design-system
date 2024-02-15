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

const ModalLogged = (props)=>{
    return(
        <div className={style.LoggedContainer}>
            <UserAvatar 
                label = {props.label}
                nome = {props.nome}
                cargo = {props.cargo}
                equipe = {props.equipe}
            />

            {props.botaoAuxiliar &&
                <button
                    className={cx(style.Button, style.ButtonAuxiliar)}
                    onClick={props.botaoAuxiliar.handelClick}
                >
                    {props.botaoAuxiliar.label}
                </button>
            }

            <button
                className={cx(
                    style.Button,
                    props.botaoAuxiliar ? style.ButtonAuxiliar : style.ButtonLogOut
                )}
                onClick={()=>props.logout()}
            >SAIR</button>
        </div>
    )
}

ModalLogged.defaultProps = {
    botaoAuxiliar: null
}

ModalLogged.propTypes = {
    botaoAuxiliar: PropTypes.shape({
        label: PropTypes.string,
        handelClick: PropTypes.func,
    })
}

export {ModalLogged,UserAvatar}
