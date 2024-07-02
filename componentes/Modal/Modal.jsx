import React from "react";
import style from "./Modal.module.css"

const Modal= (props)=>{
    return(
        <>
            {
                props.show &&
                <div className={style.ModalContainer} data-testid="Modal">
                    <div
                        data-testid="ModalExit"
                        className={style.ModalExit}
                        onClick={()=>props.setModal(false)}
                    ></div>
                    {props.children}
                </div>
            }
        </>
    )
}

export {Modal}
