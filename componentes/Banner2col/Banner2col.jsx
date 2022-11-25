import React from "react";

import style from "./Banner2col.module.css"

const Banner2col = ({
    chamada,
    chamadacolor,
    subtexto,
    cards,
}) =>{
    return(
        <div className={style.containerImagemFundo}>
            <div className={style.containerImagemGradiente}>
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
                </div>
            </div>
        </div>
    )
}

export {Banner2col}
