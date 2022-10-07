import React from "react";
import style from "./Login.module.css"
import { ButtonColor } from "../ButtonColor";


const Login = ({
    titulo,
    campos,
    button
})=>{
    return(
        <div className={style.LoginConteiner}>
            <div className={style.LoginTitulo}>{titulo}</div>
            <div className={style.LoginCampos}>
                {campos.map((campo,index)=>{
                    return(
                        <>
                            <input 
                                key={index}
                                className={style.LoginCampo} 
                                type="text" 
                                placeholder={campo.label}
                            />
                            { 
                                campo.label === "(DDD) Telefone" &&
                                <>
                                    <span className={style.LoginCampoWP} ><input className={style.LoginCampoCheck} type="checkbox"/> <label> Esse número possui WhatsApp </label></span>
                                </>
                            }
                        </>

                    )
                })}
            </div>
            <div className={style.LoginCampoButton}>
                <ButtonColor
                    label={button.label}
                    link={button.link}
                />
            </div>
        </div>
    )
}

export {Login}