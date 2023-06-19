import React, {useState} from "react";
import style from "./Modal.module.css"

const Modal= (props)=>{
    return(
        <>
            {
                props.show &&
                <div className={style.ModalContainer}>
                    <a 
                        className={style.ModalExit}
                        onClick={()=>props.setModal(false)}
                    ></a>
                    {props.children}
                </div>
            }
        </>
    )
}

export {Modal}
