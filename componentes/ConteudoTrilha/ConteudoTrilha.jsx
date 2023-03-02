import React, { useState } from "react";
import { ButtonColorSubmitIcon,ButtonColor } from "../ButtonColor/ButtonColor";
import { ButtonLightSubmit,ButtonLight } from "../ButtonLight/ButtonLight";
import style from "./ConteudoTrilha.module.css"
import { sanitize } from "../sanitize";
import Link from "next/link";

const ConteudoVideoPPT = ({
    avaliacao,
    conteudo,
})=>{
    const estrelas = [1,2,3,4,5]
    function concluir(arg){
        if(!avaliacao.states.concluido){
            avaliacao?.botaoConcluir.submit(...arg);
            avaliacao.states.setConcluido(true);
        }}
    return(
        <div className={
            conteudo.tipo == "video" ?
            style.ConteudoTrilhaVideoAvaliacaoVideo :
            style.ConteudoTrilhaVideoAvaliacaoPDF
        }>
            {
                conteudo.tipo == "pdf" &&
                    <embed src={conteudo.url} allowFullScreen type="application/pdf" width="100%" height="1200vh"/>
            }
            {
                conteudo.tipo == "quizz" &&
                    <embed src={conteudo.url} allowFullScreen type="application/pdf" width="100%" height="1200vh"/>
            }
            {
                conteudo.tipo == "video" &&
                <div className={style.ConteudoTrilhaVideo}>
                    <iframe src={conteudo.url} allowFullScreen></iframe>
                </div>
            }
            <div className={style.ConteudoTrilhaAvaliacaoConclusao}>
                <div className={style.ConteudoTrilhaConclusao}>
                    {
                        !avaliacao.states.concluido &&
                        <ButtonLightSubmit
                            icon='https://media.graphassets.com/DkcNDm4QteY5Gjst9XsC'
                            label={avaliacao?.botaoConcluir.label}
                            submit={concluir}
                            arg={avaliacao?.botaoConcluir?.arg}
                        />
                    }
                    {
                        avaliacao.states.concluido &&
                        <ButtonColorSubmitIcon
                            icon='https://media.graphassets.com/ItjNUt1ZQKekAzwmKxxJ'
                            label={avaliacao?.botaoConcluido.label}
                            disable={true}
                        />
                    }
                </div>
                <div className={style.ConteudoTrilhaAvaliacao}>
                    <p>{avaliacao?.chamadaAvaliacao}</p>
                    <div className={style.ConteudoTrilhaEstrelas}>
                        {
                            estrelas.map((estrela)=>{
                                return(
                                    <img key={estrela}
                                        src={estrela <= avaliacao.states.starHover ? "https://media.graphassets.com/VXmCLpFCSQymMFSJKmQP":"https://media.graphassets.com/JteHCpjJTPes0RyFcgEU"}
                                        onMouseEnter={()=>{if(!avaliacao.states.Avaliacao) avaliacao.states.setStarHover(estrela)}}
                                        onMouseLeave={()=>{if(!avaliacao.states.Avaliacao) avaliacao.states.setStarHover(false)}}
                                        onClick={()=>{
                                            if(!avaliacao.states.Avaliacao){
                                                avaliacao.states.setAvaliacao(estrela);
                                                avaliacao.states.setStarHover(estrela);
                                                avaliacao.req(
                                                    avaliacao.botaoConcluir.arg[0],
                                                    avaliacao.botaoConcluir.arg[1],
                                                    estrela,
                                                    avaliacao.botaoConcluir.arg[2]
                                                )
                                            }}}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
)
}
const ConteudoDescricao = ({
    descricao
})=>{
    const [verMais,setVerMais] = useState(false)

    return(
        <div className={style.ConteudoTrilhaDescricao}>
        <div className={style.ConteudoTrilhaDescricaoHeader} style={{fontSize:"14px"}}>
            <span>{descricao.trilha}</span>
            <span> • {descricao.modulo} • </span>
            <span>{descricao.moduloTitulo}</span>
            <p style={{fontSize:"32px"}}>{descricao.titulo}</p>
            {    
                descricao?.texto &&       
                <div style={{height:"fit-content"}}>
                    {
                        descricao?.texto.length > 300
                        ? <> 
                            <div className={
                                !verMais ?
                                style.ConteudoTrilhaDescricaoTextoDegrade:
                                style.ConteudoTrilhaDescricaoTextoDegradeFull
                            }></div>
                            <div  
                                className={
                                    !verMais ?
                                    style.ConteudoTrilhaDescricaoTexto:
                                    style.ConteudoTrilhaDescricaoTextoFull
                                }
                                dangerouslySetInnerHTML={{
                                    __html: sanitize(descricao.texto),
                                }}
                            ></div>
                        <p 
                            style={{textDecoration:"underline",cursor:"pointer",color:"#2EB380",marginTop:0}}
                            onClick={()=>setVerMais(!verMais)}
                        >{!verMais ? "ver mais" : "ver menos"}</p>
                    </>
                    : <div  
                            className={
                                !verMais ?
                                style.ConteudoTrilhaDescricaoTexto:
                                style.ConteudoTrilhaDescricaoTextoFull
                            }
                            dangerouslySetInnerHTML={{
                                __html: sanitize(descricao.texto),
                            }}
                        ></div>
                    }
                </div>
            }
        </div>
    </div>
)
}
const MaterialCompletar = ({materialComplementar})=>{
    return(
        <div className={style.ConteudoTrilhaMaterialComplementar}>
        <p style={{fontSize:"20px"}}>{materialComplementar.titulo}</p>
        <div className={style.ConteudoTrilhaMaterialComplementarCard}>
            <p>{materialComplementar.card.titulo}</p>
            <span>
                <img style={{marginRight:"8px"}} src={materialComplementar.card.icon}/>
                <Link target="_blank" href={materialComplementar?.card?.url}>
                    <a target="_blank">{materialComplementar.card.arquivo}</a>
                </Link>
            </span>
        </div>
    </div>
)
}
const ButtonBar = ({
    buttonBar
})=>{
    return(
        <div className={style.ConteudoTrilhaButtonBar}>
            <ButtonLight
                icone={{
                    posicao: 'right',
                    url: buttonBar.botaoVoltar.icon
                }}
                label={buttonBar.botaoVoltar.label}
                link={buttonBar.botaoVoltar.url}
            />
            <div style={{display:"flex",gap:"30px"}}>
                <ButtonLight
                    icone={{
                        posicao: 'right',
                        url: buttonBar.botaoDuvidas.icon
                    }}
                    label={buttonBar.botaoDuvidas.label}
                    link={buttonBar.botaoDuvidas.url}
                />
                <ButtonColor
                    icone={{
                        posicao: 'right',
                        url: buttonBar.botaoProximo.icon
                    }}
                    label={buttonBar.botaoProximo.label}
                    link={buttonBar.botaoProximo.url}
                />
            </div>
        </div>
    )
}
const ConteudoTrilha = ({
    buttonBar,
    conteudo,
    avaliacao,
    descricao,
    materialComplementar,
})=>{
    return(
        <div className={style.ConteudoTrilha}>
            <ButtonBar buttonBar={buttonBar} />
            <ConteudoDescricao
                    descricao={descricao}
                />
            {
                conteudo &&
                <ConteudoVideoPPT
                    avaliacao={avaliacao}
                    conteudo={conteudo}
                />
            }
            {
                conteudo.tipo != 'quizz' && conteudo.tipo != 'pdf' &&
                <>
                    <MaterialCompletar
                        materialComplementar={materialComplementar}
                    />
                </>
            }
        </div>
    )
}

export {ConteudoTrilha}