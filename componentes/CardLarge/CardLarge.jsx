import React from "react";
import style from "./CardLarge.module.css"
import Link from "next/link";
import { ButtonLightMobile } from "../ButtonLight";
import cx from 'classnames';

const CardLarge = ({
    icon,
    titulo,
    texto,
    links,
    theme
})=>{
    return(
        <div className={cx(style.CardLargeContainer, style[`${theme}`])}>
            <div>
                <img 
                    className={style.CardLargeIcon}
                    src={icon}
                />
            </div>
            <div className={style.CardLargeTitulo}>{titulo}</div>
            {texto && <div className={style.CardLargeTexto}>{texto}</div>}
            <div className={style.CardLargeLinks}>
                {links.map((item,index)=>{
                    return(
                        <Link href={item.link} key={index}>
                            <a className={style.CardLargeLink}><span className={style.CardLargeListIcon}>›</span>{item.label}</a>
                        </Link>
                    )
                })}
            </div>
            <div className={style.CardLargeLinksMobile}>
                {links.map((item)=>{
                    return(
                        <ButtonLightMobile key={item.label}
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
                    {cards.map((card,index)=>{
                        return(
                            <CardLarge key={index}
                                icon = {card.icon}
                                titulo = {card.titulo}
                                texto = {card.texto}
                                links = {card.links}
                                theme = {theme}
                            />
                        )
                    })}
            </div>
            {obs && <p className={style.CardLargeOBS}>{obs}</p>}
        </>

    )
}

const CardLargeGridInicioSM = ({cards, cardsExtra, obs, theme})=>{
    var theme = theme;
    return(
        <>
            <div className={style.CardLargeGrid}>
                    <a href={cards[0].link}>
                        <div style={{height: '100%'}} className={cx(style.CardLargeContainer, style[`${theme}`])}>
                            <div className={style.CardLargeTitulo}>
                                <img 
                                    className={style.CardLargeIcon}
                                    src={cards[0].icon}
                                /> 
                                <div>{cards[0].titulo}</div>
                            </div>
                            <div className={style.CardLargeTexto}>{cards[0].texto}</div>
                        </div>
                    </a>
                    <a href={cards[1].link}>
                        <div style={{height: '100%'}} className={cx(style.CardLargeContainer, style[`${theme}`])}>
                            <div className={style.CardLargeTitulo}>
                                <img 
                                    className={style.CardLargeIcon}
                                    src={cards[1].icon}
                                />
                                <div>{cards[1].titulo}</div>
                            </div>
                            <div className={style.CardLargeTexto}>{cards[1].texto}</div>
                        </div>
                    </a>
                    <div>
                        <a href={cardsExtra[0].link} >
                            <div className={cx(style.CardLargeContainer, style[`${theme}`])}>
                                <div className={style.CardLargeTitulo}>
                                    <img 
                                        className={style.CardLargeIcon}
                                        src={cardsExtra[0].icon}
                                    /> {cardsExtra[0].titulo}
                                </div>
                            </div>
                        </a>
                        <a href={cardsExtra[1].link} >
                            <div style={{marginTop: 20}} className={cx(style.CardLargeContainer, style[`${theme}`])}>
                                <div className={style.CardLargeTitulo}>
                                    <img 
                                        className={style.CardLargeIcon}
                                        src={cardsExtra[1].icon}
                                    /> {cardsExtra[1].titulo}
                                </div>
                            </div>
                        </a>
                    </div>
            </div>
            <p className={style.CardLargeOBS}>{obs}</p>
        </>

    )
}

export {CardLarge,CardLargeGrid,CardLargeGridInicioSM}
