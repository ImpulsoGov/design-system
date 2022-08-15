import React from "react";
import style from "./PreviewArtigoDestaque.module.css"

const PreviewArtigoDestaque = ({
    tag,
    titulo,
    texto,
    autor,
    imagem
})=>{
    return(
        <div className={style.PreviewArtigoDestaqueContainer}>
            <div className={style.ContainerDestaque}>
                <div className={style.PreviewArtigoDestaqueTag}>{tag}</div>
                <div className={style.PreviewArtigoDestaqueTitulo}>{titulo}</div>
                <div className={style.PreviewArtigoDestaqueTexto}>{texto}</div>
                <div className={style.PreviewArtigoDestaqueAutor}>
                    <img
                        className={style.PreviewArtigoDestaqueAutorAvatar}
                        src={autor.avatar}
                        alt={autor.avatar}
                    ></img>
                    <div>{autor.nome} <span className={style.PreviewArtigoDestaqueData}>{autor.data}</span></div>
                </div>
            </div>
            <div className={style.PreviewArtigoDestaqueImage}>
                <img 
                    src={imagem}
                    alt={imagem}
                ></img>
            </div>
        </div>
    )
}

export {PreviewArtigoDestaque}