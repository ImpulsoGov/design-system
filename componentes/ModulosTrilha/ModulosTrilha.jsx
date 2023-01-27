import React from "react";
import style from "./ModulosTrilha.module.css"
import { ButtonLight } from "../ButtonLight/ButtonLight"
import { ButtonColor } from "../ButtonColor/ButtonColor"

const PastaModulo = ({id,titulo,status,link}) => {  
    if (status == true) {
        return (
        <a href={link} className={style.PastaModuloAtual}>
            <div>
                <img src="https://media.graphassets.com/hdhX6nuoS8esvmyxBHMk"></img>
            </div>
            <div>
                <div>
                    MÓDULO {id}
                </div>
                <div>
                    {titulo}
                </div>
            </div>
        </a>
        )
    }else if (status == false) {
        return (
        <a href={link} className={style.PastaModulo}>
             <div>
                <img src="https://media.graphassets.com/W8ChKPCTdCiQFTCGU8sB"></img>
            </div>
            <div>
                <div>
                    MÓDULO {id}
                </div>
                <div>
                    {titulo}
                </div>
            </div>
        </a>
        )
    }
}

const Conteudo = ({id,formato,titulo,status,link}) => {  
    if (status == true) {
        return (
        <a href={link} className={style.Conteudo}>
            <div>
                <img src="https://media.graphassets.com/CEN9z38RyKNwf3dTrpVd"></img>
            </div>
            <div>
                <div>
                    {id}. {titulo}
                </div>
            </div>
            <div>
                <img src="https://media.graphassets.com/wwr70QThSTGWkqmbR0Mt"></img>
            </div>
        </a>
        )
    }else if (status == false) {
        return (
        <a href={link} className={style.Conteudo}>
             <div>
                <img src="https://media.graphassets.com/CEN9z38RyKNwf3dTrpVd"></img>
            </div>
            <div>
                <div>
                    {id}. {titulo}
                </div>
            </div>
            <div>
                <img src="https://media.graphassets.com/bhs7XtqTQWuEdi2mPWmD"></img>
            </div>
        </a>
        )
    }
}

const ModulosTrilha = ({
    tituloTrilha,
    linkVoltar,
    linkWhatsapp,
    modulos,
    moduloAtual,
    conteudosModuloAtual
})=>{
    return(
        <div className={style.ModulosTrilha}>
           <div className={style.Butoes}>
                <ButtonLight
                    icone={{
                        posicao: 'right',
                        url: 'https://media.graphassets.com/8NbkQQkyRSiouNfFpLOG'
                    }}
                    label="VOLTAR"
                    link={linkVoltar}
                />
                <ButtonColor
                    icone={{
                        posicao: 'right',
                        url: 'https://media.graphassets.com/M6WOlS0QYt4dEpwPrerQ'
                    }}
                    label="ENTRAR NO GRUPO DO WHATSAPP"
                    link={linkWhatsapp}
                    />
           </div>
           <div className={style.tituloTexto}>
                {tituloTrilha}
           </div>
           <div>
            <div className={style.divModulos}>
                    {modulos.map((modulo) => {
                            return(
                                <PastaModulo id={modulo.id} titulo={modulo.titulo} status={modulo.status} link={modulo.link} />
                            );
                    })}
            </div>
            <div className={style.divConteudo}>
                    <div className={style.idModulo}>
                        Módulo {moduloAtual.id}
                    </div>
                    <div className={style.tituloModulo}>
                        {moduloAtual.titulo}
                    </div>
                    {conteudosModuloAtual.map((conteudo) => {
                            return(
                                <Conteudo id={conteudo.id}  formato={conteudo.formato} titulo={conteudo.titulo} status={conteudo.status} link={conteudo.link} />
                            );
                    })}
            </div>
           </div>
        </div>
    )
}

export {ModulosTrilha}