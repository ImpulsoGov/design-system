import React from "react";
import "tippy.js/themes/light.css";
import style from "./CardIP.module.css";

const CardIP = ({
    titulo,
    indicador,
    descricao
}) => {
    return (
        <div className={ style.CardInfo }>
            <div className={ style.CardInfoTitulo }>
                { titulo }
            </div>

            <div className={ style.CardInfoIndicadorContainer }>
                <span className={ style.CardInfoIndicador }>
                    { indicador }
                </span>
            </div>

            <p className={ style.CardInfoDescricao }>{ descricao }</p>

        </div>
    );
};


export { CardIP };

