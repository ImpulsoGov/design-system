import React from "react";
import { useState } from "react";
import style from "./RecuperarSenha.module.css"

const validacaoSenha = (senha)=>{
    let restricoes ={}
    if (senha?.length<8) restricoes.tamanho = "Senha deve conter ao menos 8 caracteres"
    if (senha?.search(/[a-z]/)==-1) restricoes.minuscula = "Senha deve conter letras minusculas"
    if (senha?.search(/[A-Z]/)==-1) restricoes.maiuscula = "Senha deve conter letras maiusculas"
    if (senha?.search(/[0-9]/)==-1) restricoes.numeros = "Senha deve conter numeros"
    if (senha?.search(/\W/)==-1) restricoes.especiais = "Senha deve conter caracteres especiais"
    if (senha?.search(/\s/)!=-1) restricoes.espaco = "Senha não deve conter espaços e quebras"
    const validacao = (Object.keys(restricoes).length == 0) ? true : false
    return {restricoes:restricoes,validacao:validacao}
}

const InserirInfo = ({
    titulo,
    chamada,
    aviso,
    botaoVoltar,
    botaoProximo,
    botaoSucesso,
    alert,
    setAlert,
    alertMsg,
    etapa,
    setEtapa,
    req,
    validarsenha,
    placeholder,
    sucesso,
    showEsqueciSenha,
    setAlterarSenhaArgs,
    alterarSenhaArgs
})=>{
    const [value, setValue] = useState('');
    const [novaSenhaConfirmacao,setNovaSenhaConfirmacao] = useState('')
    const ProximaEtapa = ()=> {
        if(etapa==0 && value.length > 0){
            req(value).then((response)=>{
                if (response==true && value.length>0){
                    setEtapa(etapa+1) 
                    setAlterarSenhaArgs({
                        mail : value
                    })
                    setAlert('')
                }else{
                    setAlert(alertMsg)
                    setValue('')
                }
            })
        }
        if(etapa==1 && value.length > 0){
            req(alterarSenhaArgs.mail,value).then((response)=>{
                if (response==true && value.length>0){
                    setEtapa(etapa+1)
                    setAlterarSenhaArgs({
                        mail : alterarSenhaArgs.mail,
                        codigo : value
                    })
                    setAlert('')
                }else{
                    setAlert(alertMsg)
                    setValue('')
                }
            })
        }
        if(etapa==2 && value.length > 0 && value == novaSenhaConfirmacao && validacaoSenha(novaSenhaConfirmacao).validacao){
            req(alterarSenhaArgs.mail,alterarSenhaArgs.codigo,value)
            .then((response)=>{
                if (response==true){
                    setEtapa(etapa+1) 
                    setAlert('')
                }else{
                    setAlert(alertMsg)
                }
            })
        }
    }
    const EtapaAnterior = ()=> (etapa-1>=0) ? setEtapa(etapa-1) : showEsqueciSenha(false)
    const AtivarBotao = ()=>{
        if (value.length>0 && etapa!=2) return true
        if (value.length>0 && value == novaSenhaConfirmacao && validacaoSenha(novaSenhaConfirmacao).validacao) return true
        return false
    }
    return(
        <div className={style.RecuperarSenhaConteiner}>
            <div className={style.RecuperarSenhaTitulo}>{titulo}</div>
            <div className={style.RecuperarSenhaChamada}>{chamada}</div>
            {aviso && <div className={style.RecuperarSenhaChamada}>{aviso}</div>}
            {   !sucesso &&
                <>
                    <input 
                        className={(alert.length>0 && value==0) ? style.RecuperarSenhaInputErro : style.RecuperarSenhaInput}
                        type={(etapa==0) ? 'text' : 'password'}
                        placeholder={placeholder}
                        value={value}
                        onChange={(e) => {setValue(e.target.value);}}
                    ></input>
                    {   validarsenha && value.length>0 &&
                        <ValidarSenha
                            novaSenha={value}
                            novaSenhaConfirmacao = {novaSenhaConfirmacao}
                            setNovaSenhaConfirmacao = {setNovaSenhaConfirmacao}
                        />
                    }
                    {alert && etapa != 2 && value.length==0 && <div className={style.RecuperarSenhaMensagem}>{alert}</div>}
                    <div className={style.RecuperarSenhaButtonConteiner}>
                        <div 
                            className={style.RecuperarSenhaBotaoVoltar}
                            onClick={EtapaAnterior}
                        >{botaoVoltar.label.toUpperCase()}</div>
                        <div 
                            className={
                                (AtivarBotao())?
                                style.RecuperarSenhaBotaoProximo:
                                style.RecuperarSenhaBotaoProximoInativo
                            }
                            onClick={ProximaEtapa}
                        >{botaoProximo.label.toUpperCase()}</div>
                    </div>
                </>
            }
            {
                sucesso &&
                <div 
                    className={style.RecuperarSenhaBotaoProximo}
                    onClick={()=>showEsqueciSenha(false)}
                >{botaoSucesso.toUpperCase()}</div>
            }
        </div>
    )
}

const ValidarSenha = ({novaSenha,novaSenhaConfirmacao,setNovaSenhaConfirmacao})=>{
    const Symbol = (color)=> (color?.length>0 || typeof(color)!='undefined') ?  '✘' : '✓'
    const senhaAlertMsg = "As senhas digitadas não são iguais";
    let validacao = validacaoSenha(novaSenha)
    let validacoes = [
        {restricao:'tamanho',descricao:' Mínimo de 8 caracteres'},
        {restricao:'numeros',descricao:' Pelo menos um número'},
        {restricao:'maiuscula',descricao:' Pelo menos uma letra maiúscula'},
        {restricao:'minuscula',descricao:' Pelo menos uma letra minúscula'},
        {restricao:'especiais',descricao:' Pelo menos um caractere especial (ex: @ ! “ +)'},
    ]
    return(
        <>
            <div className={style.RecuperarSenhaValidacaoConteiner}>
                {validacoes.map((item)=>{
                    return(
                        <div className={style.RecuperarSenhaValidacao} key={item.restricao}>
                            <span 
                                style={(validacao.restricoes[item.restricao]) ? {color:'#E95F3A'} : {color:'#2EB280'}}
                            >
                                {Symbol(validacao.restricoes[item.restricao])}
                            </span>
                            <span>{item.descricao}</span>
                        </div>
                    )
                })}
            </div>
            <input
                className={style.RecuperarSenhaInput}
                type="password"
                placeholder="Confirmar nova senha"
                value={novaSenhaConfirmacao}
                onChange={(e) => {setNovaSenhaConfirmacao(e.target.value);}}
            />
            
            {
                novaSenha != novaSenhaConfirmacao && novaSenhaConfirmacao.length > 0 && 
                <div className={style.RecuperarSenhaMensagem}>{senhaAlertMsg}</div>
            }
        </>
    )
}

const RecuperarSenha = ({
    titulos,
    chamadas,
    botaoVoltar,
    botaoProximo,
    botaoSucesso,
    reqs,
    showEsqueciSenha
})=>{
    const [etapa, setEtapa] = useState(0);
    const [mailAlert, setMailAlert,] = useState('');
    const [codigoAlert, setCodigoAlert] = useState('');
    const [senhaAlert, setSenhaAlert] = useState('');
    const [alterarSenhaArgs, setAlterarSenhaArgs] = useState();

    const mailAlertMsg = "E-mail invalido.";
    const codigoAlertMsg = "Código digitado é invalido";
    const senhaAlertMsg = "Falha na requisição"
    return(
        <>
            {
                etapa == 0 &&
                <InserirInfo
                    titulo = {titulos.mail}
                    chamada = {chamadas.mail}
                    aviso = {chamadas.aviso}
                    botaoVoltar = {botaoVoltar}
                    botaoProximo ={botaoProximo}
                    alert = {mailAlert}
                    setAlert = {setMailAlert}
                    alertMsg = {mailAlertMsg}
                    req = {reqs.mail}
                    etapa = {etapa}
                    setEtapa = {setEtapa}
                    placeholder = "E-mail"
                    showEsqueciSenha = {showEsqueciSenha}
                    setAlterarSenhaArgs = {setAlterarSenhaArgs}
                    alterarSenhaArgs = {alterarSenhaArgs}

                />
            }
            {
                etapa == 1 &&
                <InserirInfo
                    titulo = {titulos.codigo}
                    chamada = {chamadas.codigo}
                    botaoVoltar = {botaoVoltar}
                    botaoProximo ={botaoProximo}
                    alert = {codigoAlert}
                    setAlert = {setCodigoAlert}
                    alertMsg = {codigoAlertMsg}
                    req = {reqs.codigo}
                    etapa = {etapa}
                    setEtapa = {setEtapa}
                    placeholder = "Código de Recuperação"
                    setAlterarSenhaArgs = {setAlterarSenhaArgs}
                    alterarSenhaArgs = {alterarSenhaArgs}

                />
            }
            {
                etapa == 2 &&
                <InserirInfo
                    titulo = {titulos.senha}
                    chamada = {chamadas.senha}
                    botaoVoltar = {botaoVoltar}
                    botaoProximo ={botaoProximo}
                    alert = {senhaAlert}
                    setAlert = {setSenhaAlert}
                    alertMsg = {senhaAlertMsg}
                    etapa = {etapa}
                    req = {reqs.alterarSenha}
                    setEtapa = {setEtapa}
                    validarsenha = {true}
                    placeholder = "Nova Senha"
                    setAlterarSenhaArgs = {setAlterarSenhaArgs}
                    alterarSenhaArgs = {alterarSenhaArgs}
                />
            }
            {
                etapa == 3 &&
                <InserirInfo
                    titulo = {titulos.sucesso}
                    chamada = {chamadas.sucesso}
                    botaoVoltar = {botaoVoltar}
                    botaoProximo ={botaoProximo}
                    botaoSucesso = {botaoSucesso}
                    etapa = {etapa}
                    req = {true}
                    sucesso = {true}
                    setEtapa = {setEtapa}
                    validarsenha = {true}
                    placeholder = "Nova senha"
                    showEsqueciSenha = {showEsqueciSenha}
                    setAlterarSenhaArgs = {setAlterarSenhaArgs}
                    alterarSenhaArgs = {alterarSenhaArgs}

                />
            }                
        </>
    )
}

export {RecuperarSenha,InserirInfo}