import React from "react";
import style from "./SobreTrilha.module.css"
import { ButtonLight } from "../ButtonLight/ButtonLight"
import { ButtonColor } from "../ButtonColor/ButtonColor"



const SobreTrilha = ({
    tituloTrilha,
    linkVoltar,
    linkWhatsapp,
    linkCapacitacao,
    sobre,
    conteudo
})=>{
    return(
        <div className={style.SobreTrilha}>
           <div className={style.Butoes}>
                <ButtonLight
                    icone={{
                        posicao: 'right',
                        url: 'https://media.graphassets.com/8NbkQQkyRSiouNfFpLOG'
                    }}
                    label="VOLTAR"
                    link={linkVoltar}
                />
           </div>
           <div className={style.tituloTexto}>
                {tituloTrilha}
           </div>
           <div className={style.divTexto}>
                <div className={style.divSobre}>
                    <div className={style.tituloTexto}>
                        Sobre
                    </div>
                    <div className={style.Texto}>{sobre}</div>
                </div>
                <div className={style.divConteudo}>
                    <div className={style.tituloTexto}>
                        Conteúdo
                    </div>
                    {conteudo.map((item) => {
                            return(
                                <div className={style.Texto}><li>{item.titulo}</li></div>
                            );
                    })}
                <ButtonColor
                    label="INICIAR CAPACITAÇÃO"
                    link={linkCapacitacao}
                    />
                <p></p>
                <ButtonLight
                    icone={{
                        posicao: 'right',
                        url: 'https://media.graphassets.com/X8qAQFkrTLapqBDlfkMO'
                    }}
                    label="ENTRAR NO GRUPO DO WHATSAPP"
                    link={linkWhatsapp}
                    />
                </div>
           </div>
        </div>
    )
}

export {SobreTrilha}