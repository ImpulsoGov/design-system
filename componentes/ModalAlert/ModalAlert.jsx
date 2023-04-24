import React, {useState,useRef,useEffect} from "react";
import style from "./ModalAlert.module.css";
import { ButtonColor,ButtonColorMobile, ButtonColorSubmit } from "../ButtonColor";

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
            <div className={style.botaoDesktop}><ButtonColor label={props.botao.label} link={props.botao.url} /></div>
            <div className={style.botaoMobile}><ButtonColorMobile label={props.botao.label} link={props.botao.url} /></div>
        </div>
    )
}

const NPS = ({props})=>{
    const [avaliacao,setAvaliacao] = useState(0)
    const [avaliacaoHover,setAvaliacaoHover] = useState(0)
    const avaliacoes = [1,2,3,4,5]
    return(
        <div className={style.NPS}>
        <div className={style.tituloNPS}>{props.titulo}</div>
        <div className={style.NPSAvaliacao}>
            {avaliacoes.map((item)=>{
                return(
                    <div 
                        className={
                            avaliacaoHover+1 <= item ?
                            style.avaliacao : 
                            style.avaliacaoColor 
                        } 
                        key={item}
                        onMouseEnter={()=>{setAvaliacaoHover(item)}}
                        onMouseLeave={()=>{setAvaliacaoHover(avaliacao==0 ? 0 : avaliacao)}}
                        onClick={()=>setAvaliacao(item)}
    >{item}</div>
                )
            })}
        </div>
        <div className={style.escala}>
            <div>Muito ruim</div>
            <div>Muito boa</div>
        </div>
        <ButtonColorSubmit
            label="Avaliar"
            submit={props.submit}
            arg={{"user":props.user,"avaliacao":avaliacao}}
            disable={avaliacao==0}
        />
        </div>
    )
}
const CardAlertModal = ({
    refModal,
    props
})=>{
    console.log(props.childProps)
    return (
        <div className={style.Alert} ref={refModal}>
            <div className={style.close}>
                <a 
                    className={style.ModalExit}
                    onClick={()=>props.setDisplay(false)}
                ></a>
            </div>
            <div className={style.Container}>
                <props.child props={{...props.childProps}} />
            </div>
        </div>
    )
}


const ModalAlert= ({Child,childProps})=>{
    const [display, setDisplay] = useState(true)
    const refModal = useRef()
    useEffect(() => {
      const handleClick = e => {if (display && !refModal?.current?.contains(e.target)) setDisplay(false);}
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

const ModalAlertOff= ({Child,childProps,display,setDisplay})=>{
    const refModal = useRef()
    useEffect(() => {
        const handleClick = e => {if (!display && !refModal?.current.contains(e.target)) setDisplay(false);}
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    },[display]);
    console.log(display)
        return(
            display &&
            <div className={style.ModalAlert}> 
                <Child refModal={refModal} props={{...childProps,setDisplay : setDisplay}}/>
            </div>
    )
}

export {ModalAlert,Alert,CardAlertModal,ModalAlertOff,NPS}