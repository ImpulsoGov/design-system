import React from "react";

import style from "./ImagemFundo.module.css"

const ImagemFundo = ({
    chamada,
    chamadacolor,
    subtexto,
    cards,
    botao,
    imagem
}) =>{
    return(
        <div className={style.containerImagemFundo}>
            <div className={style.containerImagemGradiente}>
                <img
                    className={style.imagemFundo}
                    src={imagem}
                />
                <div className={style.gradienteImagemFundo}>
                    <div className={style.chamadaImagemFundo}>{chamada}<span className={style.chamadaColor}>{chamadacolor}</span></div>
                    {subtexto && <div className={style.ImagemFundoSubTexto}>{subtexto}</div>}
                    <div className={style.cardsImagemFundo}>
                        {cards.map((card,index)=>{
                            return(
                                <div className={style.cardImagemFundo} key={index}>
                                    <div className={style.cardTitleImagemFundo}>{card.title}</div>
                                    <div className={style.cardBodyImagemFundo}>{card.body}</div>
                                </div>
                            )
                    })}
                    </div>
                    {botao.url && <a href={botao.url} className={style.botaoImagemFundo}>{botao.label.toUpperCase()}</a>}
                </div>
            </div>
        </div>
    )
}

export {ImagemFundo}