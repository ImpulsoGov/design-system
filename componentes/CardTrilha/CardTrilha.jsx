import React, { useState, useEffect, useRef } from "react";
import style from "./CardTrilha.module.css";
import {
    ButtonLight,
    ButtonLightMobile,
    ButtonLightSubmit,
    ButtonLightSubmitMobile,
    ButtonLightSubmitLarge,
    ButtonLightLarge
} from "../ButtonLight/ButtonLight";
import { ButtonColor, ButtonColorMobile, ButtonColorSubmitLarge, ButtonColorLarge } from "../ButtonColor/ButtonColor";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';

const ProgressBar = ({ bgcolor, progress }) => {
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
      borderRadius: 40,
      textAlign: 'right'
    }
  
    return (
      <div style={Parentdiv}>
        <div style={Childdiv}></div>
      </div>
    );
  }

const CardTrilha = ({
    titulo,
    progressao,
    linkTrilha,
    linkSobre,
    Certificado,
    certificadoLiberado
}) => {
    const cardRef = useRef(null);

    const checkCardWidth = () => {
        if (cardRef.current) setIsMobileButton(cardRef.current.offsetWidth < 600)
    };

    const [isMobileButton, setIsMobileButton] = useState(false);

    useEffect(() => {
        checkCardWidth();
        window.addEventListener("resize", checkCardWidth);
        return () => {
            window.removeEventListener("resize", checkCardWidth);
        };
    }, []);

    return (
        <div className={style.DivTrilha}>
            <div className={style.CardTrilha} ref={cardRef}>
                <div className={style.CardTrilhaTitulo}>
                    {titulo}
                </div>
                <ProgressBar bgcolor="#1D856C" progress={progressao} />
                <div className={style.CardTrilhaProgressoTitulo}>
                    {progressao}% da capacitação completa
                </div>
                {isMobileButton ? (
                    <div className={style.BotoesCardTrilhaMobile}>
                        <ButtonColorLarge
                            label={progressao > 0 ? "CONTINUAR DE ONDE PAREI" : "INICIAR CAPACITAÇÃO"}
                            link={linkTrilha}
                        />
                        {linkSobre && (
                            <ButtonLightLarge
                                label="VER CONTEÚDO"
                                link={linkSobre}
                            />
                        )}
                        <Tippy
                            content="O certificado ficará acessível com 50% do curso completo."
                            disabled={certificadoLiberado}
                            className={style.Tooltip}
                            theme="light"
                        >
                            <div>
                                <ButtonLightSubmitLarge
                                    label="RETIRE SEU CERTIFICADO"
                                    submit={Certificado}
                                    disabled={!certificadoLiberado}
                                />
                            </div>
                        </Tippy>
                    </div>
                ) : (
                    <div className={style.BotoesCardTrilha}>
                        <ButtonColor
                            label={progressao > 0 ? "CONTINUAR DE ONDE PAREI" : "INICIAR CAPACITAÇÃO"}
                            link={linkTrilha}
                        />
                        {linkSobre && (
                            <ButtonLight
                                label="VER CONTEÚDO"
                                link={linkSobre}
                            />
                        )}
                        <Tippy
                            content="O certificado ficará acessível com 50% do curso completo."
                            disabled={certificadoLiberado}
                            className={style.Tooltip}
                            theme="light"
                        >
                            <div>
                                <ButtonLightSubmit
                                    label="RETIRE SEU CERTIFICADO"
                                    submit={Certificado}
                                    disabled={!certificadoLiberado}
                                />
                            </div>
                        </Tippy>
                    </div>
                )}
            </div>
        </div>
    );
};

export { CardTrilha };
