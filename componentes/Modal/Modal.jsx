import React from "react";
import style from "./Modal.module.css"

const Modal= (props)=>{
    return(
        <>
            {
                props.show &&
                <div className={style.ModalContainer} data-testid="Modal">
                    <a
                        data-testid="ModalExit"
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
