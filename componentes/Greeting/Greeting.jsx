import React from "react";
import style from "./Greeting.module.css"

const Greeting = ({
    cargo,
    municipio_uf,
    greeting,
    nome_usuario,
    texto
})=>{
    return(
        <div className={style.Greeting}>
            <div className={style.GreetingcargoMunicipio}>{cargo.toLocaleUpperCase()} · {municipio_uf.toLocaleUpperCase()}</div>
            <div className={style.GreetingNome}>{greeting}, {nome_usuario}</div>
            <div className={style.GreetingTexto}>{texto}</div>
        </div>
    )
}

export {Greeting}