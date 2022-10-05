import React from "react";
import style from "./Cadastro.module.css"
import { ButtonColor } from "../ButtonColor";


const Cadastro = ({
    titulo,
    campos,
    button
})=>{
    return(
        <div className={style.CadastroConteiner}>
            <div className={style.CadastroTitulo}>{titulo}</div>
            <div className={style.CadastroCampos}>
                {campos.map((campo,index)=>{
                    return(
                        <>
                            <input 
                                key={index}
                                className={style.CadastroCampo} 
                                type="text" 
                                placeholder={campo.label}
                            />
                            { 
                                campo.label === "(DDD) Telefone" &&
                                <>
                                    <span className={style.CadastroCampoWP} ><input className={style.CadastroCampoCheck} type="checkbox"/> <label> Esse número possui WhatsApp </label></span>
                                </>
                            }
                        </>

                    )
                })}
            </div>
            <div className={style.CadastroCampoButton}>
                <ButtonColor
                    label={button.label}
                    link={button.link}
                />
            </div>
        </div>
    )
}

export {Cadastro}