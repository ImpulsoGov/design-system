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
  width
}) => {
  if (top==true) {
    return(
      <div>
        <ImagensFull2 imagem={link} width={width} />
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
        <ImagensFull2 imagem={link} width={width} />
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

const NovoTituloTexto = ({
  titulo,
  texto,
}) => {
  return (
      <div className={style.novoContainerTexto}>
        <div className={style.novoTitulo}>
          {titulo}
        </div>
        <div 
          className={style.novoCorpoTexto}
          dangerouslySetInnerHTML={{
            __html: sanitize(texto),
          }}        
        ></div>
      </div>
)};

const TituloSmallTexto = ({
  supertitulo,
  titulo,
  texto,
  imagem,
  botao
}) => {
  return (
      <div className={style.containerTextoSmall}>
        { supertitulo && 
          <div 
            className={style.superTitulo}
            dangerouslySetInnerHTML={{
              __html: sanitize(supertitulo),
            }}        
          ></div>
        }
        {
          titulo && 
        <ImageTopTitutloSmall
         top = {imagem.posicao}
         link = {imagem.url}
         titulo = {titulo}
         width = {imagem.width}
         />
        }
         {
          texto && 
            <div 
              className={style.corpoTexto}
              dangerouslySetInnerHTML={{
                __html: sanitize(texto),
              }}        
            ></div>
            }
          {
              botao.label && 
              <ButtonColor
                label={botao.label}
                link={botao.url}
              />
          }
      </div>
)};

export {TituloTexto, TituloSmallTexto, NovoTituloTexto};
