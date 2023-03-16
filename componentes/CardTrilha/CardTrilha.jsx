import React from "react";
import style from "./CardTrilha.module.css";
import { ButtonLight, ButtonLightMobile } from "../ButtonLight/ButtonLight";
import { ButtonColor, ButtonColorMobile } from "../ButtonColor/ButtonColor";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';


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
    linkSobre,
    linkCertificado,
    certificadoLiberado
})=>{
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
                    <div className={style.BotoesCardTrilha}>
                        <ButtonColor
                            label={progressao > 0 ? "CONTINUAR DE ONDE PAREI" : "INICIAR CAPACITAÇÃO"}
                            link={linkTrilha}
                        />
                        {
                            linkSobre &&
                            <ButtonLight
                            label="VER CONTEÚDO"
                            link={linkSobre}
                            />
                        }
                        <Tippy
                            content="O certificado ficará acessível com 50% do curso completo."
                            disabled={certificadoLiberado}
                            className={style.Tooltip}
                            theme="light"
                        >
                            <div>
                                <ButtonLight
                                    label="RETIRE SEU CERTIFICADO"
                                    link={linkCertificado}
                                    disabled={!certificadoLiberado}
                                />
                            </div>
                        </Tippy>
                    </div>
                    <div className={style.BotoesCardTrilhaMobile}>
                        <ButtonColorMobile
                            label={progressao > 0 ? "CONTINUAR DE ONDE PAREI" : "INICIAR CAPACITAÇÃO"}
                            link={linkTrilha}
                        />
                        {
                            linkSobre &&
                            <ButtonLightMobile
                                label="VER CONTEÚDO"
                                link={linkSobre}
                            />
                        }
                        <Tippy
                            content="O certificado ficará acessível com 50% do curso completo."
                            disabled={certificadoLiberado}
                            className={style.Tooltip}
                            theme="light"
                        >
                            <div>
                                <ButtonLightMobile
                                    label="RETIRE SEU CERTIFICADO"
                                    link={linkCertificado}
                                    disabled={!certificadoLiberado}
                                />
                            </div>
                        </Tippy>
                    </div>
                </div>

            </div>
        )
}


export {CardTrilha}
