import React from "react";
import style from "./CardLarge.module.css"
import Link from "next/link";
import { ButtonLightMobile } from "../ButtonLight";

const CardLarge = ({
    icon,
    titulo,
    texto,
    links,
    theme
})=>{
    return(
        <div className={style[`CardLargeContainer${theme}`]}>
            <div>
                <img 
                    className={style.CardLargeIcon}
                    src={icon}
                />
            </div>
            <div className={style.CardLargeTitulo}>{titulo}</div>
            {texto && <div className={style.CardLargeTexto}>{texto}</div>}
            <div className={style.CardLargeLinks}>
                {links.map((item)=>{
                    return(
                        <Link href={item.link}>
                            <a className={style.CardLargeLink}><span className={style.CardLargeListIcon}>›</span>{item.label}</a>
                        </Link>
                    )
                })}
            </div>
            <div className={style.CardLargeLinksMobile}>
                {links.map((item)=>{
                    return(
                        <ButtonLightMobile
                            link={item.link}
                            label = {item.label}
                        />
                    )
                })}
            </div>
        </div>
    )
}

const CardLargeGrid = ({cards, obs, theme})=>{
    return(
        <>
            <div className={style.CardLargeGrid}>
                    {cards.map((card)=>{
                        return(
                            <CardLarge
                                icon = {card.icon}
                                titulo = {card.titulo}
                                texto = {card.texto}
                                links = {card.links}
                                theme = {theme}
                            />
                        )
                    })}
            </div>
            <p className={style.CardLargeOBS}>{obs}</p>
        </>

    )
}


export {CardLarge,CardLargeGrid}
