import React from "react";
import style from "./ButtonBar.module.css"
const ButtonBar = ({
    child1,
    child2,
    child3
})=>{
    return(
        <div className={style.ButtonBar}>
            {child1}
            {child2}
            {child3}
        </div>
    )
}

export {ButtonBar}