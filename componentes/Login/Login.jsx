import React from "react";
import { useState } from "react";
import style from "./Login.module.css"

const Login = (props)=>{
    const [senha, setSenha] = useState("");
    const [mail, setMail] = useState("");
    const [resposta,setResposta] = useState()
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
                <div 
                    className={style.LoginEsqueciMinhaSenha}
                    onClick={()=>props.showEsqueciSenha(true)}
                >
                    Esqueceu sua senha?
                </div>
                {resposta && <div className={style.LoginResposta}>{resposta}</div>
}
            </div>
            <div className={style.LoginCampoButton}>
            <button 
                className={style.LoginButton}
                onClick={() => props.validacao(setResposta,props.validarCredencial,props.entrar,mail,senha)}
            >{props.button.label.toUpperCase()}</button>
            </div>
        </div>
    )
}

export {Login}