import Link from "next/link";
import React from "react";
import style from "./PreviewArtigo.module.css"

const PreviewArtigo = ({
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
        <div className={style.PreviewArtigoContainer}>
            <div className={style.PreviewArtigoAutor} id={style.PreviewArtigoAutorID}>
                <img
                    className={style.PreviewArtigoAutorAvatar}
                    src={autor.avatar}
                    alt={autor.avatar}
                ></img>
                <div>{autor.nome} <span className={style.PreviewArtigoData}>  ·  {meses[mes]} {ano}</span></div>
            </div>
            <div className={style.PreviewArtigoContainerInner} id={style.PreviewArtigoContainerID}>
                <div className={style.PreviewArtigoContainerTituloTexto}>
                    <Link href={"blog/artigos/"+id}>
                        <a><div className={style.PreviewArtigoTitulo}>{titulo}</div></a>
                    </Link>
                    <div className={style.PreviewArtigoTexto}>{texto.slice(0,300)+"..."}</div>
                </div>
                <div className={style.PreviewArtigoImage}>
                    <Link href={"blog/artigos/"+id}>
                        <a >
                            <img 
                                className={style.PreviewArtigoImage}
                                src={imagem}
                                alt={imagem}
                            ></img>
                        </a>
                    </Link>
                </div>

            </div>
            <div className={style.PreviewArtigoTag} id={style.PreviewArtigoTagID}>{tag}</div>
            <div className={style.PreviewArtigoLine} id={style.PreviewArtigoLineID}></div>
        </div>
    )
}

export {PreviewArtigo}