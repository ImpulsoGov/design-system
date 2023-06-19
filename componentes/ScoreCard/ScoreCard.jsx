import React from "react";
import style from "./ScoreCard.module.css"

const ScoreCard = ({card})=>{
    console.log(card)
    return(
        <div className={style.ScoreCard}>
            <p style={{width:"75%"}}>{card.descricao}</p>
            <p style={{fontSize: "35px"}}>{card.valor}</p>
        </div>
    )
}

const ScoreCardGrid = ({
    valores
})=>{
    return(
        <div className={style.Grid}>
            {
                valores.map((card,index)=> <ScoreCard card={card} key={index}/>)
            }
        </div>
    )
}


export { ScoreCard, ScoreCardGrid }