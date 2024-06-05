import React from "react";
import style from "./CardAlert.module.css"
import { sanitize } from "../sanitize";

const CardAlert = ({
    msg,
    destaque,
    background,
    margin,
    padding,
    color
})=>{
    const cardStyle = {
        background: background || "#F4CCAB",
        margin : margin || "0px 80px",
        padding: padding || "10px 16px",
        color: color || "#1F1F1F"
      };
    return(
        <div className={style.CardAlert} style={cardStyle}>
            <b>{destaque}</b>
            {msg}
        </div>
    )
}
const CardAlertChild = ({
    msg,
    background,
    margin,
})=>{
    const cardStyle = {
        background: background || "#F4CCAB",
        margin : margin || "0px 80px",
      };
    return(
        <div 
            className={style.CardAlertChild}
            style={cardStyle}
            dangerouslySetInnerHTML={{
                __html: sanitize(msg),
              }} 
        >
        </div>
    )
}

export {CardAlert,CardAlertChild}