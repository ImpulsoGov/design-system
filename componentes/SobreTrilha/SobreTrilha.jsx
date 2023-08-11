import React from "react";
import style from "./SobreTrilha.module.css"
import { ButtonLight, ButtonLightMobile } from "../ButtonLight/ButtonLight"
import { ButtonColor, ButtonColorMobile } from "../ButtonColor";
import { sanitize } from "../sanitize";

const NossoTime = ({
    titulo,
    membros
})=>{
    return(
        <div className={style.NossotimeContainer}>
            <div className={style.NossoTimeTitulo}>{titulo}</div>
            <div className={style.NossoTimeMembrosGrid}>
                {
                    membros.map((membro,index)=>{
                        return <MembroTime membro={membro} key={index}/>
                    })
                }
            </div>
        </div>
    )
}

const MembroTime = ({
    membro
})=>{
    return(
        <div className={style.MembroTimeContainer}>
            <div className={style.MembroTimeFotoContainer}>
                <img
                    className={style.MembroTimeFoto} 
                    src={membro.foto} 
                />
            </div>
            <div className={style.MembroTimeTextoContainer}>
                <div className={style.MembroTimeNome}>{membro.nome}</div>
                <div className={style.MembroTimeTitulo}>{membro.titulo}</div>
            </div>
        </div>
    )
}

const Realizacao = ({
    titulo,
    logo
})=>{
    return(
        <div className={style.realizacaoContainer}>
            <div className={style.realizacaoTitulo}>{titulo}</div>
            <div className={style.realizacaoLogo}>
                <img src={logo} />
            </div>
        </div>
    )
}

const SobreTrilha = ({
    tituloTrilha,
    botaoVoltar,
    botaoWhatsapp,
    botaoIniciar,
    sobre,
    conteudo,
    nossoTime
})=>{
    return(
        <div className={style.SobreTrilha}>
            <div className={style.Butoes}>
                    <ButtonLight
                        icone={{
                            posicao: 'right',
                            url: 'https://media.graphassets.com/8NbkQQkyRSiouNfFpLOG'
                        }}
                        label="VOLTAR"
                        link={botaoVoltar?.url}
                    />
            </div>
            <div className={style.tituloTexto}>{tituloTrilha}</div>
            <div className={style.divTexto}>
                    <div className={style.divSobre}>
                        <div className={style.tituloTexto}>{sobre.titulo}</div>
                        <div 
                            className={style.Texto}
                            dangerouslySetInnerHTML={{
                                __html: sanitize(sobre.texto)
                            }} 
                        ></div>
                    </div>
                    <div className={style.divConteudo}>
                        <div className={style.tituloTexto}>{conteudo.titulo}</div>
                        <div className={style.Texto}>
                            {conteudo?.texto.map((item,index) => {
                                    return(
                                        <li key={index}
                                            dangerouslySetInnerHTML={{
                                                __html: sanitize(item.texto)
                                            }} 
                                        ></li>
                                    );
                            })}
                        </div>
                    <div className={style.buttonWPDesktop}>
                        {
                            botaoIniciar.label &&
                            <ButtonColor
                            label={botaoIniciar.label}
                            link={botaoIniciar.url}
                            />
                        }
                        <ButtonLight
                            icone={{
                                posicao: 'right',
                                url: 'https://media.graphassets.com/X8qAQFkrTLapqBDlfkMO'
                            }}
                            label="ENTRAR NO GRUPO DO WHATSAPP"
                            link={botaoWhatsapp?.url}
                        />
                    </div>
                    <div className={style.buttonWPMobile}>
                        <ButtonColorMobile
                            label={botaoIniciar.label}
                            link={botaoIniciar.url}
                        />
                        <ButtonLightMobile
                            icone={{
                                posicao: 'right',
                                url: 'https://media.graphassets.com/X8qAQFkrTLapqBDlfkMO'
                            }}
                            label="GRUPO DO WHATSAPP"
                            link={botaoWhatsapp?.url}
                        />
                    </div>
                    </div>
            </div>
            <NossoTime 
                titulo={nossoTime.titulo}
                membros={nossoTime.membros}
            />
            <Realizacao
                titulo="Realização"
                logo="https://media.graphassets.com/GHfdxB6QqSAjDRAaEOtw"
            />
        </div>
    )
}

export {SobreTrilha}