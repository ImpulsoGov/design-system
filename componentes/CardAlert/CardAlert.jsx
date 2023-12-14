import React from "react";
import style from "./CardAlert.module.css"
import { sanitize } from "../sanitize";

const CardAlert = ({
    msg,
    destaque,
    background
})=>{
    const cardStyle = {
        background: background || "#F4CCAB",
      };
    return(
        <div className={style.CardAlert} style={cardStyle}>
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