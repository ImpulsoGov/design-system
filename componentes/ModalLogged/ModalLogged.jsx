import React from "react";
import style from "./ModalLogged.module.css"

const ModalLogged = (props)=>{
    return(
        <div className={style.LoggedContainer}>
            <div className={style.LoggedIcon}>{props.label}</div>
            <div className={style.LoggedName}>{props.nome}</div>
            <div className={style.LoggedCargo}>{props.cargo}</div>
            <button
                className={style.ButtonLogOut}
                onClick={()=>props.logout()}
            >SAIR</button>
        </div>
    )
}

export {ModalLogged}