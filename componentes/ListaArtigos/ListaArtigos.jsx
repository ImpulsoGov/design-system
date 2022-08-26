import React, {useState,useEffect} from "react";
import style from "./ListaArtigos.module.css"
import { PreviewArtigo } from "../PreviewArtigo";
import { ButtonLight } from "../ButtonLight/ButtonLight"

const Lista = (props)=>{
    return(
        <div>
            {props.artigos.map((artigo,index)=>{
                return(
                    <div key={index}>
                        <PreviewArtigo
                            tag = {artigo.tag}
                            titulo = {artigo.titulo}
                            texto = {artigo.texto}
                            autor = {{nome : artigo.autor, avatar: artigo.avatar, data: artigo.data}}
                            imagem = {artigo.imagem}
                        />
                    </div>
                )
            })}
        </div>
    )
}


const ListaResumo = ({
    artigos,
    titulo,
    btn
})=>{
    const artigos5 = artigos.slice(0,6)
    return(
        <div>
            <div className={style.ListaResumoTitulo}>{titulo}</div>
            {artigos5.map((artigo)=>{
                return(
                    <div>
                        <PreviewArtigo
                            tag = {artigo.tag}
                            titulo = {artigo.titulo}
                            texto = {artigo.texto}
                            autor = {{nome : artigo.autor, avatar: artigo.avatar, data: artigo.data}}
                            imagem = {artigo.imagem}
                        />
                    </div>
                )
            })}
            <div className={style.ListaResumoBtnContainer}>
                <ButtonLight label= {btn.label.toUpperCase()} link={btn.link} />
            </div>
        </div>
    )
}
const Ordenar = (artigos,recente)=>{
    if (recente=='true'){
        return artigos.sort((a,b) => new Date(b.data) - new Date(a.data))
    }
    if(recente=='false'){
        return artigos.sort((a,b) => new Date(a.data) - new Date(b.data))
    }else{return artigos}
}
const TodosArtigos = ({
    artigos
})=>{
    const [artigos_sort,setArtigos] = useState(artigos)
    return(
        <div className={style.select}>
            <select 
                className={style.TodosArtigosSelect}
                onChange={(e) =>setArtigos([...Ordenar(artigos_sort,e.target.value)])}>
                <option selected>Ordenar</option>
                <option value={true}>Mais Recente</option>
                <option value={false}>Mais Antigo</option>
            </select>
            <Lista artigos={artigos_sort}/>
        </div>
    )
}


const ListaArtigos = (
    props
)=>{
    return(
        <div className={style.ListaArtigosContainer}>
            {
                props.resumo==true && <ListaResumo 
                                        artigos={props.artigos}
                                        titulo = {props.titulo}
                                        btn = {props.btn}
                                        />
            }
            {props.resumo==false && <TodosArtigos artigos={props.artigos} />}
        </div>
    )
}

export {ListaArtigos}