import React from "react";
import style from "./CardTrilha.module.css"
import { ButtonLight } from "../ButtonLight/ButtonLight"
import { ButtonColor } from "../ButtonColor/ButtonColor"


const ProgressBar = ({bgcolor,progress}) => {
    const Parentdiv = {
        height: 8,
        width: '100%',
        backgroundColor: '#9DEECD',
        borderRadius: 40,
        marginBottom: 10
      }
      
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
        borderRadius:40,
        textAlign: 'right'
      }
      
        
    return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
      </div>
    </div>
    )
}


const CardTrilha = ({
    titulo,
    progressao,
    linkTrilha,
    linkSobre
})=>{
    if (progressao > 0) {
        return(
            <div className={style.DivTrilha}>
                <div className={style.CardTrilha}>
                    <div className={style.CardTrilhaTitulo}>
                        {titulo}
                    </div>
                    <ProgressBar bgcolor="#1D856C" progress={progressao} />
                    <div className={style.CardTrilhaProgressoTitulo}>
                        {progressao}% da capacitação completa
                    </div>
                    <div className={style.ButoesCardTrilha}>
                        <ButtonColor
                            label="CONTINUAR DE ONDE PAREI"
                            link={linkTrilha}
                        />
                        <ButtonLight
                            label="VER CONTEÚDO"
                            link={linkSobre}
                        />
                    </div>
                </div>

            </div>
        )
      }
      else{
        return(
            <div className={style.DivTrilha}>
                <div className={style.CardTrilha}>
                    <div className={style.CardTrilhaTitulo}>
                        {titulo}
                    </div>
                    <ProgressBar bgcolor="#1D856C" progress='0' />
                    <div className={style.CardTrilhaProgressoTitulo}>
                        {progressao}% da capacitação completa
                    </div>
                    <div className={style.ButoesCardTrilha}>
                        <ButtonColor
                            label="INICIAR CAPACITAÇÃO"
                            link={linkTrilha}
                        />
                        <ButtonLight
                            label="VER CONTEÚDO"
                            link={linkSobre}
                        />
                    </div>
                </div>
            </div>
        )
      }    
}

export {CardTrilha}