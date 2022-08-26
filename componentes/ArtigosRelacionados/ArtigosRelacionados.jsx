import React from "react";
import style from "./ArtigosRelacionados.module.css";
import {PreviewArtigo} from "../PreviewArtigo"

const ArtigosRelacionados = ({list})=>{
    return(
        <div className={style.ArtigosRelacionadosContainer}>
        <header>
          <h1>Artigos Relacionados</h1>
        </header>
  
        <section>
          {list.map((item, index) => (
            <PreviewArtigo
              key={index}
              tag={item.tag}
              titulo={item.titulo}
              texto={item.texto}
              autor={{ nome: item.autor, avatar: item.avatar, data: item.data }}
              imagem={item.imagem}
            />
          ))}
        </section>
      </div>
    )
}

export {ArtigosRelacionados}