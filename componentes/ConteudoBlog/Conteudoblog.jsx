import React from "react";
import { sanitize } from "../sanitize";
import style from "./ConteudoBlog.module.css"


const TituloTexto = ({
    titulo,
    texto,
    capa,
  }) => {
    return (
        <div className={style.containerTexto}>
        <div>
            <ImagensFull2 imagem={capa} />
            <div 
            className={style.tituloTexto}
            dangerouslySetInnerHTML={{
                __html: sanitize(titulo),
            }}        
            ></div>
        </div>
          <div 
            className={style.corpoTexto}
            dangerouslySetInnerHTML={{
              __html: sanitize(texto),
            }}        
          ></div>
        </div>
  )};
  
  export {TituloTexto};