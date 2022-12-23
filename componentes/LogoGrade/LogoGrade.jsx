import React from "react";
import cx from "classnames";
import style from "./LogoGrade.module.css";

const downloadLogo = "https://media.graphassets.com/aQOiD0hS6abWyLUoXvnk"

const LogoGrade = ({
    parceiros,
    theme
}) => {
  return (
    <div className={cx(style.container_parceiros,style["theme"+theme])}>
        <p>Impulso</p>
        <div className={style.gridContainer}>
            <div className={style.logo_parceiros}>
                <a href={parceiros[2].src} style={{height:"100%"}}>
                    <img className={style.DownloadContainer} src={downloadLogo} />
                </a>
                <img className={style.imageContainer}
                alt= {parceiros.alt}
                src= {parceiros[2].src}
                />
            </div>
            <div className={style.logo_parceiros}>
                <a href={parceiros[2].src} style={{height:"100%"}}>
                    <img className={style.DownloadContainer} src={downloadLogo} />
                </a>
                <img className={style.imageContainer}
                alt= {parceiros.alt}
                src= {parceiros[3].src}
                />
            </div>
            <div className={style.logo_parceiros}>
                <a href={parceiros[2].src} style={{height:"100%"}}>
                    <img className={style.DownloadContainer} src={downloadLogo} />
                </a>
                <img className={style.imageContainer}
                alt= {parceiros.alt}
                src= {parceiros[4].src}
                />
            </div>
            <div className={style.logo_parceiros}>
                <a href={parceiros[2].src} style={{height:"100%"}}>
                    <img className={style.DownloadContainer} src={downloadLogo} />
                </a>
                <img className={style.imageContainer}
                alt= {parceiros.alt}
                src= {parceiros[5].src}
                />
            </div>
        </div>
        <p>Impulso Previne</p>
        <div className={style.gridContainer}>
            <div className={style.logo_parceiros}>
                <a href={parceiros[2].src} style={{height:"100%"}}>
                    <img className={style.DownloadContainer} src={downloadLogo} />
                </a>
                <img className={style.imageContainer}
                alt= {parceiros.alt}
                src= {parceiros[0].src}
                />
            </div>
            <div className={style.logo_parceiros}>
                <a href={parceiros[2].src} style={{height:"100%"}}>
                    <img className={style.DownloadContainer} src={downloadLogo} />
                </a>
                <img className={style.imageContainer}
                alt= {parceiros.alt}
                src= {parceiros[1].src}
                />
            </div>
        </div>
    </div>
  );
};

export {LogoGrade};