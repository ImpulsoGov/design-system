import React, { useState,useEffect } from "react";
import style from "./ModulosTrilha.module.css"
import { ButtonLight,ButtonLightSubmit } from "../ButtonLight/ButtonLight"
import { ButtonColor } from "../ButtonColor/ButtonColor"
import Link from "next/link"


const PastaModulo = ({
    id,
    titulo,
    link,
    ativo,
    click,
    liberado
}) => {  
        const pastaLogo = (liberado)=>{
            let logo
            if(liberado){
                logo = ativo?
                "https://media.graphassets.com/hdhX6nuoS8esvmyxBHMk":
                "https://media.graphassets.com/W8ChKPCTdCiQFTCGU8sB"

            }else{
                logo = "https://media.graphassets.com/SEwi8ASvT6mAxuwFL6cA"
            }
            return logo
        }
        return (
            <div 
                href={link} 
                className={
                    ativo?
                    style.PastaModuloAtual:
                    style.PastaModulo
                }
                onClick={()=>{if(liberado) click(id)}}
            >
                <img 
                    src={pastaLogo(liberado)}
                ></img>
                <div>
                    <div>MÓDULO {id}</div>
                    <div>{titulo}</div>
                </div>
            </div>
        )
}

const Conteudo = ({
    id,
    formato,
    titulo,
    concluido,
    link
}) => {  
        const Icon = {
            "VIDEO" : "https://media.graphassets.com/CEN9z38RyKNwf3dTrpVd",
            "PDF" : "https://media.graphassets.com/FbnwvteSyzLB9mVSSy3w",
            "PPT" : "https://media.graphassets.com/FbnwvteSyzLB9mVSSy3w",
            "QUIZ" : "https://media.graphassets.com/qEhLR01jTpGY97RbAOrc"
        }
        return (
            <Link href={link}>
                <a  className={style.Conteudo}>
                    <img 
                        src={Icon[formato]}
                    ></img>
                    <div>{id}. {titulo}</div>
                    <div>
                        <img src={
                                    concluido ?
                                    "https://media.graphassets.com/wwr70QThSTGWkqmbR0Mt":
                                    "https://media.graphassets.com/bhs7XtqTQWuEdi2mPWmD"
                            }
                        ></img>
                    </div>
                </a>
            </Link>
        )
}

const ModulosTrilha = ({
    tituloTrilha,
    botaoVoltar,
    botaoWhatsapp,
    modulos,
    modulo,
    ultimoModulo,
    mobile
})=>{
    const [moduloAtivo,setModuloAtivo] = useState(mobile ? -1 : ultimoModulo)
    const showModulos = ()=>{
        if(!mobile) return true
        if(moduloAtivo < 0) return true
        return false
    }
    return(
        <div className={style.ModulosTrilha}>
           <div className={style.Botoes}>
                {
                    showModulos() &&
                    <ButtonLight
                        icone={{
                            posicao: 'right',
                            url: 'https://media.graphassets.com/8NbkQQkyRSiouNfFpLOG'
                        }}
                        label={botaoVoltar.label}
                        link={botaoVoltar.url}
                    />
                }
                {
                    moduloAtivo >= 0 && mobile &&
                    <ButtonLightSubmit
                        label = ""
                        submit={()=>setModuloAtivo(-1)}
                        icon = "https://media.graphassets.com/8NbkQQkyRSiouNfFpLOG"
                    />
                }
                <ButtonColor
                    icone={{
                        posicao: 'right',
                        url: 'https://media.graphassets.com/JFNSZopRIORoy8FnmQlw'
                    }}
                    label={botaoWhatsapp.label}
                    link={botaoWhatsapp.url}
                />
           </div>
           <div className={style.tituloTexto}>{tituloTrilha}</div>
           <div>
            {
                showModulos() &&
                <div className={style.divModulos}>
                    {modulos.map((modulo,index) => {
                            return(
                                <PastaModulo key={index}
                                    id={modulo.id} 
                                    titulo={modulo.titulo} 
                                    ativo={moduloAtivo == modulo.id} 
                                    link={modulo.link} 
                                    click={setModuloAtivo}
                                    liberado={modulo.liberado}
                                />
                            );
                    })}
                </div>
            }
            {
                moduloAtivo >= 0 &&
                <div className={style.divConteudo}>
                <div className={style.idModulo}>Módulo {moduloAtivo}</div>
                {
                    modulos.map((modulo,index)=>{
                        if(modulo.id==moduloAtivo) return <div className={style.tituloModulo} key={index}>{modulo.titulo}</div>
                    })
                }
                
                {modulo.map((conteudo,index) => {
                        return(
                                conteudo.moduloID == moduloAtivo &&
                                <>
                                    <Conteudo key={index}
                                        id={conteudo.id}  
                                        formato={conteudo.formato} 
                                        titulo={conteudo.titulo} 
                                        concluido={conteudo.concluido} 
                                        link={conteudo.link} 
                                    />
                                </>
                        );
                })}
                </div>
            }
           </div>
        </div>
    )
}

export {ModulosTrilha}