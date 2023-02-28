import React from "react";
import style from "./CardAlert.module.css"
import { sanitize } from "../sanitize";

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
const CardAlertChild = ({
    msg
})=>{
    return(
        <div 
            className={style.CardAlertChild}
            dangerouslySetInnerHTML={{
                __html: sanitize(msg),
              }} 
        >
        </div>
    )
}

export {CardAlert,CardAlertChild}