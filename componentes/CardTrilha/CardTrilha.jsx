import React, { useState, useEffect, useRef } from "react";
import style from "./CardTrilha.module.css";
import {
    ButtonLight,
    ButtonLightMobile,
    ButtonLightSubmit,
    ButtonLightSubmitMobile
} from "../ButtonLight/ButtonLight";
import { ButtonColor, ButtonColorMobile } from "../ButtonColor/ButtonColor";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';

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
        if (cardRef.current) {
            const cardWidth = cardRef.current.offsetWidth;
            if (cardWidth <= 500) {
                setIsMobileButton(true);
            } else {
                setIsMobileButton(false);
            }
        }
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
                        <ButtonColorMobile
                            label={progressao > 0 ? "CONTINUAR DE ONDE PAREI" : "INICIAR CAPACITAÇÃO"}
                            link={linkTrilha}
                        />
                        {linkSobre && (
                            <ButtonLightMobile
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
                                <ButtonLightSubmitMobile
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
