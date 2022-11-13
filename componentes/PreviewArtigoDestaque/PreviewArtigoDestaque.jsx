import Link from "next/link";
import React from "react";
import style from "./PreviewArtigoDestaque.module.css"

const PreviewArtigoDestaque = ({
    id,
    tag,
    titulo,
    texto,
    autor,
    imagem
})=>{
    const meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]
    const mes = new Date(autor.data).getMonth()
    const ano = new Date(autor.data).getFullYear()
    return(
        <div className={style.PreviewArtigoDestaqueContainer}>
            <div className={style.ContainerDestaque}>
                <div className={style.PreviewArtigoDestaqueTag}>{tag}</div>
                <Link href={"blog/"+id}>
                    <a className={style.PreviewArtigoDestaqueTitulo}>{titulo}</a>
                </Link>
                <div className={style.PreviewArtigoDestaqueTexto}>{texto.slice(0,300)+"..."}</div>
                <div className={style.PreviewArtigoDestaqueAutor}>
                    <img
                        className={style.PreviewArtigoDestaqueAutorAvatar}
                        src={autor.avatar}
                        alt={autor.avatar}
                    ></img>
                    <div>{autor.nome} <span className={style.PreviewArtigoDestaqueData}>  ·  {meses[mes]} {ano}</span></div>
                </div>
            </div>
            <Link href={"blog/"+id}>
                <a className={style.PreviewArtigoDestaqueImageContainer}>
                    <img 
                        className={style.PreviewArtigoDestaqueImage}
                        src={imagem}
                        alt={imagem}
                    ></img>
                </a>
            </Link>
        </div>
    )
}

export {PreviewArtigoDestaque}