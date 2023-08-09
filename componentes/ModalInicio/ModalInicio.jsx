import React from "react";
import style from "./ModalInicio.module.css"
import { ButtonColorSubmit } from "../ButtonColor";
import { ButtonColorSubmitMobile } from "../ButtonColor";
import { ButtonLightLarge } from "../ButtonLight";
import { ButtonLightSubmit } from "../ButtonLight";
import { ButtonLightSubmitMobile } from "../ButtonLight";
import { CardAlertChild } from "../CardAlert/CardAlert";

const ModalInicio = ({
    titulo,
    chamada,
    cardAlert,
    botaoPrincipal,
    botaoSecundario,
})=>{
    return(
        <div className={style.ModalInicioContainer}>
            <div className={style.ModalInicioTitulo}>{titulo}</div>
            { cardAlert && <CardAlertChild msg={cardAlert}/>}
            <div className={style.ModalInicioChamada}>{chamada}</div>
            <div className={style.ModalInicioButtonContainer}>
                <ButtonColorSubmit
                    label={botaoPrincipal.label}
                    submit={botaoPrincipal.submit}
                    theme={botaoPrincipal.theme}
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
                    theme={botaoPrincipal.theme}
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
