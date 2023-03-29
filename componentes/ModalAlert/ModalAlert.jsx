import React, {useState,useRef,useEffect} from "react";
import style from "./ModalAlert.module.css";
import { ButtonColorMobileTarget, ButtonColorTarget } from "../ButtonColor/ButtonColor";

const CardProfissional = ({cardProfissional})=>{
    return(
        <div className={style.CardProfissional}>
            <div className={style.CardProfissionalContainer}>
                <div className={style.Profissional}>
                    <img src={cardProfissional.profissional} alt="profissional" />
                </div>
                <div className={style.ProfissionalLogo}>
                    <img src={cardProfissional.logo} alt="logo" />
                </div>
            </div>
            <p className={style.ProfissionalInfo}>{cardProfissional.nome}</p>
            <p className={style.ProfissionalInfo}>{cardProfissional.cargo}</p>
        </div>
    )
}

const Alert = ({
    refModal,
    props
})=>{
    return (
        <div className={style.Alert} ref={refModal}>
            <div className={style.close}>
                <a 
                    className={style.ModalExit}
                    onClick={()=>props.setDisplay(false)}
                ></a>
            </div>
            <div className={style.Container}>
                <div className={style.ContainerTitulo}>
                    <div className={style.SubTitulo}>{props.titulos.SubTitulo}</div>
                    <div className={style.Titulo}>{props.titulos.Titulo}</div>
                </div>
                <CardProfissional cardProfissional={props.cardProfissional} />
            </div>
            <div className={style.ContainerInfo}>
                {
                    props.Info.map((item,index)=>{
                        return(
                            <div className={style.Info} key={index}>
                                <img src={item.icon} alt="icon"/>
                                <div>{item.info}</div>
                            </div>
                        )
                    })
                }
            </div>
            <div className={style.botaoDesktop}><ButtonColorTarget label={props.botao.label} link={props.botao.url} /></div>
            <div className={style.botaoMobile}><ButtonColorMobileTarget label={props.botao.label} link={props.botao.url} /></div>
        </div>
    )
}

const ModalAlert= ({Child,childProps})=>{
    const [display, setDisplay] = useState(true)
    const refModal = useRef()
    useEffect(() => {
      const handleClick = e => {if (display && !refModal?.current.contains(e.target)) setDisplay(false);}
      document.addEventListener("click", handleClick);
      return () => document.removeEventListener("click", handleClick);
    },[display]);
      return(
            display &&
            <div className={style.ModalAlert}> 
                <Child refModal={refModal} props={{...childProps,setDisplay}}/>
            </div>
    )
}

export {ModalAlert,Alert}