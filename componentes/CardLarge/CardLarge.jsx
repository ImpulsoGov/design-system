import React from "react";
import style from "./CardLarge.module.css"
import Link from "next/link";
import { ButtonLightMobile } from "../ButtonLight";
import cx from 'classnames';
import { ToggleList } from "../ToggleList";

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
                    <div className={style.CardLargeGridRightCards}>
                        {cardsExtra.map((card) => (
                            <CardLargeClickable
                                link={card.link}
                                icon={card.icon}
                                titulo={card.titulo}
                                infos={card.infos}
                                theme={theme}
                            />
                        ))}
                    </div>
            </div>
            <p className={style.CardLargeOBS}>{obs}</p>
        </>

    )
}

const CardLargeClickable = ({ link, icon, titulo, theme, infos }) => {
    return (
        <a href={link} className={style.CardLargeClickable} >
            <div className={cx(style.CardLargeContainer, style[`${theme}`])}>
                <div className={style.CardLargeTitulo}>
                    <img
                        className={style.CardLargeIcon}
                        src={icon}
                        alt="Ícone"
                    />
                    {titulo}
                </div>

                {infos && (
                    <div className={style.CardLargeClickableInfosContainer}>
                        {infos.map((info) => (
                            <div className={style.CardLargeClickableInfo}>
                                {info.icon && <img
                                    className={style.CardLargeClickableInfoIcon}
                                    src={info.icon}
                                    alt="Ícone"
                                />}
                                <span className={style.CardLargeClickableInfoContent}>
                                    {info.content}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </a>
    );
}

const CardLargeGridToggleList = ({ togglelist, cards, theme }) => {
    return (
        <div className={style.CardLargeGridToggleList}>
            <ToggleList
                direction="Column"
                icon={togglelist.icon}
                list={togglelist.list}
                theme="LightGrey"
                title={togglelist.title}
            />

            <div className={style.CardLargeGridRightCards}>
                {cards.map((card) => (
                    <CardLargeClickable
                        link={card.link}
                        icon={card.icon}
                        titulo={card.titulo}
                        infos={card.infos}
                        theme={theme}
                    />
                ))}
            </div>
        </div>
    );
}

export {CardLarge,CardLargeGrid,CardLargeGridInicioSM, CardLargeGridToggleList}
