import React from "react";
import { useState } from "react";
import style from "./Login.module.css"
import { ButtonColor } from "../ButtonColor";


const Login = (props)=>{
    const [senha, setSenha] = useState("");
    const [mail, setMail] = useState("");
    return(
        <div className={style.LoginConteiner}>
            <div className={style.LoginTitulo}>{props.titulo}</div>
            <div className={style.LoginCampos}>
                <input 
                    className={style.LoginCampo} 
                    type="text"
                    placeholder="E-mail"
                    value={mail}
                    onChange={(e) => {setMail(e.target.value);}}
                />
                <input 
                    className={style.LoginCampo} 
                    type="password" 
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => {setSenha(e.target.value);}}
                />
            </div>
            <div className={style.LoginCampoButton}>
            <button 
                className={style.LoginButton}
                onClick={() => props.entrar('credentials', { redirect: true,username:mail, password: senha })}
            >{props.button.label.toUpperCase()}</button>
            </div>
        </div>
    )
}

export {Login}