import React from "react";
import style from "./ModalLogged.module.css"

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
            />
            <button
                className={style.ButtonLogOut}
                onClick={()=>props.logout()}
            >SAIR</button>
        </div>
    )
}

export {ModalLogged,UserAvatar}