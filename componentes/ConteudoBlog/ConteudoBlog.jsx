import React from "react";
import { sanitize } from "../sanitize";

import style from "./ConteudoBlog.module.css"

const ConteudoBlog = ({
    titulo,
    texto,
    capa,
    autor
  }) => {
    return (
      <div className={style.ConteudoBlogContainer}>
        <div>
            <div 
              className={style.ConteudoBlogTitulo}
              dangerouslySetInnerHTML={{
                __html: sanitize(titulo),
              }}        
            ></div>
            <img 
              className={style.ConteudoBlogCapa}
              src={capa} />
        </div>
        <div className={style.ConteudoBlogAutor}>
            <img
                className={style.ConteudoBlogAutorAvatar}
                src={autor.avatar}
                alt={autor.avatar}
            ></img>
            <div>{autor.nome} <span className={style.ConteudoBlogData}>{autor.data}</span></div>
        </div>
        <div 
          className={style.ConteudoBlogTexto}
          dangerouslySetInnerHTML={{
            __html: sanitize(texto.replace('\"',"'").replace('"',"'")),
          }}        
        ></div>
      </div>
    )};
        
  export {ConteudoBlog};