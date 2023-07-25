import React from "react";
import { sanitize } from "../sanitize";
import style from "./TituloTexto.module.css"
import { ImagensFull2 } from "../Imagens/ImagensFull"
import { ButtonColor } from "../ButtonColor/ButtonColor";

const ImageTop = ({
  top,
  link,
  titulo,
}) => {
  if (top==true) {
    return(
      <div>
        <ImagensFull2 imagem={link} />
        <div 
          className={style.tituloTexto}
          dangerouslySetInnerHTML={{
            __html: sanitize(titulo),
          }}        
        ></div>
  </div>
    )
  }else if (top==false) {
    return(
      <div>
        <div 
          className={style.tituloTexto}
          dangerouslySetInnerHTML={{
            __html: sanitize(titulo),
          }}        
        ></div>
        <ImagensFull2 imagem={link} />
      </div>
    )
  }else{
    return(
      <div>
        <div 
          className={style.tituloTexto}
          dangerouslySetInnerHTML={{
            __html: sanitize(titulo),
          }}        
        ></div>
      </div>
    )
  }
}

const ImageTopTitutloSmall = ({
  top,
  link,
  titulo,
}) => {
  if (top==true) {
    return(
      <div>
        <ImagensFull2 imagem={link} />
        <div 
          className={style.tituloSmall}
          dangerouslySetInnerHTML={{
            __html: sanitize(titulo),
          }}        
        ></div>
  </div>
    )
  }else if (top==false) {
    return(
      <div>
        <div 
          className={style.tituloSmall}
          dangerouslySetInnerHTML={{
            __html: sanitize(titulo),
          }}        
        ></div>
        <ImagensFull2 imagem={link} />
      </div>
    )
  }else{
    return(
      <div>
        <div 
          className={style.tituloSmall}
          dangerouslySetInnerHTML={{
            __html: sanitize(titulo),
          }}        
        ></div>
      </div>
    )
  }
}

const TituloTexto = ({
  titulo,
  texto,
  imagem,
}) => {
  return (
      <div className={style.containerTexto}>
        <ImageTop
         top = {imagem.posicao}
         link = {imagem.url}
         titulo = {titulo}
         />
        <div 
          className={style.corpoTexto}
          dangerouslySetInnerHTML={{
            __html: sanitize(texto),
          }}        
        ></div>
      </div>
)};

const TituloSmallTexto = ({
  titulo,
  texto,
  imagem,
  botao
}) => {
  return (
      <div className={style.containerTextoSmall}>
        <ImageTopTitutloSmall
         top = {imagem.posicao}
         link = {imagem.url}
         titulo = {titulo}
         />
        <div 
          className={style.corpoTexto}
          dangerouslySetInnerHTML={{
            __html: sanitize(texto),
          }}        
        ></div>
          {
              botao.label && 
              <ButtonColor
                label="INDICADORES DE DESEMPENHO"
                link="indicadores"
              />
          }
      </div>
)};

export {TituloTexto, TituloSmallTexto};
