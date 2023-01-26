import React from "react";
import style from "./ModalInicio.module.css"
import { ButtonColorSubmit } from "../ButtonColor";
import { ButtonColorSubmitMobile } from "../ButtonColor";
import { ButtonLightSubmit } from "../ButtonLight";
import { ButtonLightSubmitMobile } from "../ButtonLight";
const ModalInicio = ({
    titulo,
    chamada,
    botaoPrincipal,
    botaoSecundario
})=>{
    return(
        <div className={style.ModalInicioContainer}>
            <div className={style.ModalInicioTitulo}>{titulo}</div>
            <div className={style.ModalInicioChamada}>{chamada}</div>
            <div className={style.ModalInicioButtonContainer}>
                <ButtonColorSubmit
                    label={botaoPrincipal.label}
                    submit={botaoPrincipal.submit}
                />
                <ButtonLightSubmit
                    label={botaoSecundario.label}
                    submit={botaoSecundario.submit}
                />
            </div>
            <div className={style.ModalInicioButtonContainerMobile}>
                <ButtonColorSubmitMobile
                    label={botaoPrincipal.label}
                    submit={botaoPrincipal.submit}
                />
                <ButtonLightSubmitMobile
                    label={botaoSecundario.label}
                    submit={botaoSecundario.submit}
                />
            </div>
            <div className={style.ModalInicioChamadaMobile}>{chamada}</div>
        </div>
    )
}

export {ModalInicio}