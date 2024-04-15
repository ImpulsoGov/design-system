import React, {useState} from "react";
import style from "./Modal.module.css"

const Modal= ({
    show = false,
    setModal,
    children,
})=>{
    const [visible, toggleVisible] = useState(show);

    function closeModal(){
        toggleVisible(false);
        setModal(false);
    }

    return(
        <>
            {
                visible &&
                <div className={style.ModalContainer} data-testid="Modal">
                    <a
                        data-testid="ModalExit"
                        className={style.ModalExit}
                        onClick={closeModal}
                    ></a>
                    {children}
                </div>
            }
        </>
    )
}

export {Modal}
