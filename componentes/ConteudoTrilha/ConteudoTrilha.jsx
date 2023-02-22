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
    const [starHover,setStarHover] = useState(avaliacao?.nota)
    const [Avaliacao,setAvaliacao] = useState(avaliacao?.nota)
    const [concluido,setConcluido] = useState(avaliacao?.concluido)
    const estrelas = [1,2,3,4,5]
    function concluir(arg){
        if(!concluido){
            avaliacao?.botaoConcluir.submit(...arg);
            setConcluido(true);
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
                        !concluido &&
                        <ButtonLightSubmit
                            icon='https://media.graphassets.com/DkcNDm4QteY5Gjst9XsC'
                            label={avaliacao?.botaoConcluir.label}
                            submit={concluir}
                            arg={avaliacao?.botaoConcluir?.arg}
                        />
                    }
                    {
                        concluido &&
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
                                        src={estrela <= starHover ? "https://media.graphassets.com/VXmCLpFCSQymMFSJKmQP":"https://media.graphassets.com/JteHCpjJTPes0RyFcgEU"}
                                        onMouseEnter={()=>{if(!Avaliacao) setStarHover(estrela)}}
                                        onMouseLeave={()=>{if(!Avaliacao) setStarHover(false)}}
                                        onClick={()=>{
                                            if(!Avaliacao){
                                                setAvaliacao(estrela);
                                                setStarHover(estrela);
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
            <div style={{height:"fit-content"}}>
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
            </div>
            <p 
                style={{textDecoration:"underline",cursor:"pointer",color:"#2EB380",marginTop:0}}
                onClick={()=>setVerMais(!verMais)}
            >{!verMais ? "ver mais" : "ver menos"}</p>
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
                <Link href={materialComplementar?.card?.url}>
                    <a>{materialComplementar.card.arquivo}</a>
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
                    <ConteudoDescricao
                        descricao={descricao}
                    />
                    <MaterialCompletar
                        materialComplementar={materialComplementar}
                    />
                </>
            }
        </div>
    )
}

export {ConteudoTrilha}