import React from "react";
import { useState } from "react";
import style from "./Login.module.css"
import { ButtonLightSubmit } from "../ButtonLight";
import cx from 'classnames';

const Login = (props)=>{
    const [senha, setSenha] = useState("");
    const [mail, setMail] = useState("");
    const [resposta,setResposta] = useState();
    const color = props.botaoPrincipal.theme ? props.botaoPrincipal.theme : 'ColorIP';

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
                    className={
                        (mail.length>0 && senha.length>0)?
                        cx(style.LoginButton, style[`${color}`]):
                        style.LoginButtonInativo
                    }
                    onClick={() => {
                        if (mail.length>0 && senha.length>0){
                            props.botaoPrincipal.submit(true)
                            props.validacao(setResposta,props.validarCredencial,props.entrar,mail,senha)
                        }
                    }}
                >{props.botaoPrincipal.label.toUpperCase()}</button>
                <ButtonLightSubmit
                    label={props.botaoSecundario.label}
                    submit={props.botaoSecundario.submit}
                />
            </div>
        </div>
    )
}

export {Login}
