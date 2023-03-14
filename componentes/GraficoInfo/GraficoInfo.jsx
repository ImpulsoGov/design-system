import Tippy from "@tippyjs/react";
import Link from "next/link";
import style from "./GraficoInfo.module.css";
import 'tippy.js/themes/light.css';

const GraficoInfo = ({
    titulo,
    fonte,
    descricao,
    linkMaisInfo,
    tooltip
}) => {
  return (
    <div className={style.GraficoInfoContainer}>
        <div className={style.TituloContainer}>
            <h5 className={style.Titulo}>{titulo}</h5>
            {tooltip && (
                <Tippy
                    content={tooltip}
                    placement="right"
                    className={style.Tooltip}
                    theme="light"
                >
                    <span className={style.InfoSimbolo}>ⓘ</span>
                </Tippy>
            )}
        </div>
        <div className={style.InfoContainer}>
            {descricao && <p className={style.Descricao}>{descricao}</p>}
            {fonte && <p className={style.Fonte}>Fonte: {fonte}</p>}
        </div>
        {
            linkMaisInfo && (
                <Link href={linkMaisInfo}>
                    <a className={style.MaisInfo}>Mais informações</a>
                </Link>
            )
        }
    </div>
  )
}

export { GraficoInfo };
