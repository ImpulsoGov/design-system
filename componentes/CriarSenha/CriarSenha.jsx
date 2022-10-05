import React, { useState } from "react";
import style from "./CriarSenha.module.css"
import { ButtonColorSubmit } from "../ButtonColor";


const CriarSenha = ({
    titulo,
    campos,
    button
})=>{
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [message, setMessage] = useState("");

    let match = (e)=> {
      if (senha == e || e== confirmarSenha ) {
        setMessage("")
      }else{
        setMessage("As senhas não estão iguais")
      }
    }

    let handleSubmit = async (e) => {
        e.preventDefault();
        if (senha!=confirmarSenha){setMessage("As senhas não estão iguais");return null}
        try {
          let res = await fetch("https://httpbin.org/post", {
            method: "POST",
            body: JSON.stringify({
              senha: senha,
            }),
          });
          let resJson = await res.json();
          if (res.status === 200) {
            setSenha("");
            setConfirmarSenha("");
            setMessage("Municipio Cadastrado com Sucesso ");
          } else {
            setMessage("Erro");
          }
        } catch (err) {
          console.log(err);
        }
      };

    return(
        <form onSubmit={handleSubmit} className={style.CriarSenhaContainer}>
          <div className={style.CriarSenhaTitulo}>{titulo}</div>
          <div className={style.CriarSenhaCampos}>
              <input 
                  className={style.CriarSenhaCampo} 
                  type="password"
                  placeholder={campos.senha}
                  value={senha}
                  onChange={(e) => {setSenha(e.target.value);match(e.target.value);}}
              />
              <input 
                  className={style.CriarSenhaCampo} 
                  type="password" 
                  placeholder={campos.ConfirmarSenha}
                  value={confirmarSenha}
                  onChange={(e) => {setConfirmarSenha(e.target.value);match(e.target.value);}}
              />
          </div>
          {message &&<div className={style.CriarSenhaMessage}><p>{message}</p></div>}
          <div className={style.CriarSenhaCampoButton}>
              <ButtonColorSubmit
                  label={button.label}
                  link={button.link}
              />
          </div>
        </form>
    )
}

export {CriarSenha}