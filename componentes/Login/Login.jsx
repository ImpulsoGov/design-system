import React from "react";
import { useState } from "react";
import style from "./Login.module.css"
import { ButtonLightSubmit } from "../ButtonLight";
import { CardAlert } from "../CardAlert"
import cx from 'classnames';
import { Spinner } from "../Spinner";
import { cpf } from 'cpf-cnpj-validator';


const Login = (props)=>{
    const [senha, setSenha] = useState("");
    const [mail, setMail] = useState("");
    const [mostraSenha, setMostraSenha] = useState(false);
    const [resposta,setResposta] = useState();
    const [loading, setLoading] = useState(false);
    const [alertCPF, setAlertCPF] = useState(false)
    const color = props.botaoPrincipal.theme ? props.botaoPrincipal.theme : 'ColorIP';
    const handleUser = (e)=>{
        if(props.projeto != 'IP'){ 
            setMail(e.target.value)
        }else{
            let value = e.target.value;
            // Procura todos os caracteres não numericos
            let naoNumeros = value.match(/[^\d.-]/g)
            setAlertCPF(naoNumeros ? true : false)
            // Remove qualquer caractere que não seja um dígito numerico
            value = value.replace(/\D/g, '');
            // Se o valor tem mais de 3 dígitos, adicione um ponto após os primeiros 3 dígitos
            if (value.length > 3) {
                value = value.replace(/(\d{3})/, '$1.');
            }
        
            // Se o valor tem mais de 7 dígitos, adicione um ponto após os próximos 3 dígitos
            if (value.length > 7) {
                value = value.replace(/(\d{3}\.)(\d{3})/, '$1$2.');
            }
        
            // Se o valor tem mais de 11 dígitos, adicione um traço após os próximos 3 dígitos
            if (value.length > 11) {
                value = value.replace(/(\d{3}\.\d{3}\.)(\d{3})/, '$1$2-');
                cpf.isValid(value)
            }
            
            // Atualiza o estado
            setMail(value);
        }

    }
    return(
        <>
            {loading
                ? <Spinner theme={color} height={"50vh"} />
                : (
                    <div className={style.LoginConteiner}>
                        <div className={style.LoginTitulo}>{props.titulo}</div>
                        {
                            props.projeto == 'IP' &&
                            <>
                                <CardAlert
                                    msg = "Agora não utilizamos mais e-mail para login. Você deve utilizar seu CPF e senha cadastrada."
                                    background="#ADE3F4"
                                    margin="0"
                                />
                                <p className={style.LoginMSG}>Se você é de um município parceiro e já possui senha cadastrada, preencha os campos de CPF e senha para entrar.</p>
                            </>
                        }
                        <div className={style.LoginCampos}>
                            <input
                                className={style.LoginCampo} 
                                type="text"
                                placeholder= {props.projeto == 'IP' ? "CPF" : "E-mail"}
                                rows="2" 
                                style={{resize: "none"}}
                                value={mail}
                                maxLength={14}
                                onChange={(e) => handleUser(e)}
                            />
                            {
                                alertCPF &&
                                <CardAlert
                                    msg = "Lembre-se de que agora o login é realizado com CPF e senha."
                                    background="#EABF2E"
                                    margin="0"
                                    padding="16px"
                                    color="#FFF"
                                />

                            }
                            <div className={style.InputSenhaContainer}>
                                <input
                                    className={style.LoginCampo}
                                    type={ mostraSenha ? "text" : "password" }
                                    placeholder="Senha"
                                    value={senha}
                                    onChange={(e) => {setSenha(e.target.value);}}
                                />

                                <button
                                    className={style.BotaoMostraSenha}
                                    onClick={() => setMostraSenha(!mostraSenha)}
                                >
                                    <img
                                        className={style.IconeMostraSenha}
                                        src={ mostraSenha ?  "https://media.graphassets.com/drpbgyNgRy2TcgPzsFZe" : "https://media.graphassets.com/6SOGlnrdTGbEkjQPEggA" }
                                        alt="eye"
                                    />
                                </button>
                            </div>
                            <div 
                                className={style.LoginEsqueciMinhaSenha}
                                onClick={()=>props.showEsqueciSenha(true)}
                            >
                                Esqueceu ou quer trocar sua senha?
                            </div>
                            {resposta && <div className={style.LoginResposta}>{resposta}</div>}
                        </div>
                        <div className={style.LoginCampoButton}>
                            <button 
                                className={
                                    (mail.length>0 && senha.length>0 ) ?
                                    cx(style.LoginButton, style[`${color}`]):
                                    style.LoginButtonInativo
                                }
                                onClick={() => {
                                    if (mail.length>0 && senha.length>0){
                                        setLoading(true);
                                        props.botaoPrincipal.submit(true);
                                        props.validacao(setResposta,props.validarCredencial,props.entrar,mail,senha, setLoading);
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
        </>
    )
}

export {Login}
