import React from "react";
import style from "./CardAlert.module.css"

const CardAlert = ({
    msg,
    destaque
})=>{
    return(
        <div className={style.CardAlert}>
            <b>{destaque}</b>
            {msg}
        </div>
    )
}

export {CardAlert}