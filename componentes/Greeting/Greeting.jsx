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
        <div className={style.Greeting} data-testid="Greeting">
            <div className={style.GreetingcargoMunicipio}>{cargo?.toUpperCase()} · {municipio_uf?.toUpperCase()}</div>
            <div className={style.GreetingNome}>{greeting}, {nome_usuario}</div>
            <div className={style.GreetingTexto}>{texto}</div>
        </div>
    )
}

export {Greeting}