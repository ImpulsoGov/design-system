import React from "react";
import PropTypes from "prop-types";
import "tippy.js/themes/light.css";
import style from "./CardIP.module.css";

const CardIP = ({
    titulo,
    indicador,
    descricao,
    height
}) => {
    return (
        <div
            className={ style.CardInfo }
            style={{ height }}
        >
            { titulo &&
                <div className={ style.CardInfoTitulo }>
                    { titulo }
                </div>
            }

            <div className={ style.CardInfoIndicadorContainer }>
                <span className={ style.CardInfoIndicador }>
                    { indicador }
                </span>
            </div>

            <p className={ style.CardInfoDescricao }>{ descricao }</p>

        </div>
    );
};

CardIP.defaultProps = {
    height: "100%"
}

CardIP.propTypes = {
    height: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ])
}

export { CardIP };
