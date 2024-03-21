import React from "react";
import { useState, useEffect } from "react";
import style from "./RecuperarSenha.module.css";
import cx from "classnames";
import { Spinner } from "../Spinner";
import { cpf } from 'cpf-cnpj-validator';
import { sanitize } from "../sanitize";

// Refatorar componentes, estão com muitas responsabilidades e logica complexa para manutenção


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
    trocar_telefone,
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
    sms,
    seguntaTentativa,
    setSegundaTentativa,
    saveCPF,
    setSaveCPF,
    validarsenha,
    placeholder,
    sucesso,
    showEsqueciSenha,
    setAlterarSenhaArgs,
    alterarSenhaArgs,
    theme,
    projeto,
    setLoading
})=>{
    const [value, setValue] = useState('');
    const [novaSenhaConfirmacao,setNovaSenhaConfirmacao] = useState('');
    const [alertCPF,setAlertCPF] = useState(false);
    const [seconds, setSeconds] = useState(180);
    const handleCPF = (e)=>{
        let value = e.target.value;
        if(projeto != 'IP'){ 
            setValue(e.target.value)
        }else{
            if(etapa == 0){
                // Procura todos os caracteres não numericos
                let naoNumeros = value.match(/[^\d.-]/g)
                if(naoNumeros?.length>0){
                    setAlert("A criação de senha é realizada utilizando o CPF.") 
                    setAlertCPF(true)
                }else{ 
                    setAlert("")
                    setAlertCPF(false)
                }
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
                }
            
                // Atualiza o estado
                setValue(value);
            }
            setValue(value);
            if(etapa == 1){ 
                if(value?.length > 0) setAlert("")
                let naoNumeros = value.match(/[^\d.-]/g)
                setAlertCPF(false)
                if(naoNumeros?.length>0){
                    setAlert("O código de verificação possui apenas caracteres numéricos.") 
                    setAlertCPF(true)
                    setValue(value.replace(/\D/g, ''))
                }
            }
        }

    }

    const ProximaEtapa = ()=> {
        setLoading(true);    
        if(etapa==0 && value.length > 0){
            req(value).then((response)=>{
                if (response["success"]==true && value.length>0){
                    setEtapa(etapa+0.1)
                    setAlterarSenhaArgs({
                        cpf : value.replace(/\D/g, ''),
                        telefone : `(**) ****-${response["telefone"]}`
                    })
                    setAlert('')
                    setLoading(false);
                    setSaveCPF(value)
                }else{
                    setAlert(response["mensagem"])
                    setValue('')
                    setLoading(false);
                }
            })
        }
        if(etapa==0.1){
            req(alterarSenhaArgs.cpf).then((response)=>{
                if(response["success"]==true){
                    setEtapa(etapa+0.9)
                    setAlert('')
                    setLoading(false);
                }else{
                    setValue('')
                    setLoading(false);
                }
            })
        }

        if(etapa==1 && value.length > 0){
            req(alterarSenhaArgs.cpf,value).then((response)=>{
                if (response["success"]==true && value.length>0){
                    setEtapa(etapa+1)
                    setAlterarSenhaArgs({
                        cpf : alterarSenhaArgs.cpf,
                        codigo : value,
                        telefone : alterarSenhaArgs.telefone 
                    })
                    setAlert('')
                    setLoading(false);
                }else{
                    setAlert(response["mensagem"])
                    setValue('')
                    setLoading(false);
                    setSegundaTentativa(true)
                }
            })
        }
        if(etapa==2 && value.length > 0 && value == novaSenhaConfirmacao && validacaoSenha(novaSenhaConfirmacao).validacao){
            req(alterarSenhaArgs.cpf,alterarSenhaArgs.codigo,value)
            .then((response)=>{
                if (response["success"]==true){
                    console.log(response)
                    setEtapa(etapa+1)
                    setAlert('')
                    setLoading(false);
                }else{
                    console.log(response)
                    setAlert(response["msg"])
                    setLoading(false);
                }
            })
        }
    }
    const EtapaAnterior = ()=> {
        if(etapa == 0.1){
            setEtapa(0)
        }else{
            (etapa-1>=0) ? setEtapa(etapa-1) : showEsqueciSenha(false,true)
        }
    }
    const AtivarBotao = ()=>{
        if(etapa == 0.1) return true
        if (value.length>0 && etapa!=2) return true
        if (value.length>0 && value == novaSenhaConfirmacao && validacaoSenha(novaSenhaConfirmacao).validacao) return true
        return false
    }
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const handleMostrarSenha = () => {
        setMostrarSenha(!mostrarSenha);
    };
    useEffect(() => {
        const interval = setInterval(() => {
        if (seconds > 0 && etapa == 1) {
            setSeconds(seconds - 1);
        }
        }, 1000);

        return () => clearInterval(interval);
    }, [seconds]);
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const remainingSeconds = time % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };
    console.log((alert.length>0 && value.length==0 && !alertCPF) || (value != novaSenhaConfirmacao && novaSenhaConfirmacao.length > 0),)
    return(
        <div className={style.RecuperarSenhaConteiner}>
            <div className={style.RecuperarSenhaTitulo}>{titulo}</div>
            <div className={style.RecuperarSenhaChamada}>{chamada}{etapa==1 || etapa == 0.1 ? alterarSenhaArgs.telefone : ""}</div>
            {aviso && <div className={style.RecuperarSenhaChamada}>{aviso}</div>}
            {   !sucesso && 
                <>
                    
                    <div className={style.inputContainer}>
                        {
                            (etapa != 0.1 || etapa == 3)&& 
                            <input 
                                className={
                                    ((alert.length>0 && value.length==0 && !alertCPF) || (value != novaSenhaConfirmacao && novaSenhaConfirmacao.length > 0)) ?
                                    style.RecuperarSenhaInputErro : 
                                    value.length == 14 && etapa == 0 ? 
                                    cx(style.RecuperarSenhaInput, style[`Input${theme}Sucesso`]) :
                                    ((etapa == 0 || 1) && alertCPF) ? 
                                    cx(style.RecuperarSenhaInput, style[`Input${theme}Alerta`]) : 
                                    cx(style.RecuperarSenhaInput, style[`Input${theme}`])
                                }
                                type={(etapa==0 || etapa == 1) || mostrarSenha ? 'text' : 'password'}
                                placeholder={placeholder}
                                value={value}
                                maxLength={
                                    etapa==0 ? 14 : 
                                    etapa == 1 ? 8 :
                                    null
                                }
                                onChange={(e) => {handleCPF(e) }}
                            />
                        }
                        {
                            validarsenha && 
                            <button
                                className={style.buttonHidePassword}
                                onClick={handleMostrarSenha}
                            >
                                <img 
                                    className={style.showPassword}
                                    src={ mostrarSenha ?  "https://media.graphassets.com/drpbgyNgRy2TcgPzsFZe" : "https://media.graphassets.com/6SOGlnrdTGbEkjQPEggA" }
                                    alt="eye"
                                />
                            </button>
                        }
                    </div>
                    {   validarsenha &&
                        <ValidarSenha
                            novaSenha={value.replaceAll(" ","")}
                            novaSenhaConfirmacao = {novaSenhaConfirmacao.replaceAll(" ","")}
                            setNovaSenhaConfirmacao = {setNovaSenhaConfirmacao}
                            theme={theme}
                        />
                    }
                    {
                        alert && etapa != 2 && value.length==0 && !alertCPF && 
                        <div 
                            className={style.RecuperarSenhaMensagem}
                            dangerouslySetInnerHTML={{
                                __html: sanitize(alert),
                              }} 
                        ></div>}
                    {alert && etapa != 2 && alertCPF && <div className={style.RecuperarSenhaMensagemAlerta}>{alert}</div>}
                    { 
                        etapa == 1 && seconds != 0 && !alert && !seguntaTentativa ? 
                        <p className={style.Timer}>O código enviado expira em {formatTime(seconds)}</p> : 
                        etapa == 1 && !alert && !seguntaTentativa ?
                        <p className={style.Timer}>
                            Seu código expirou. 
                            <span 
                                className={style.SMS}
                                onClick={()=>{
                                    sms(saveCPF);
                                    setSeconds(180);
                                    setAlert("");
                                    setSegundaTentativa(false);
                                }}
                            >
                                Reenviar código por SMS.
                            </span> 
                        </p> : 
                        etapa == 1 && <p className={style.Timer}>
                            <span 
                                className={style.SMS}
                                onClick={()=>{
                                    sms(saveCPF);
                                    setSeconds(180);
                                    setAlert("");
                                    setSegundaTentativa(false);
                                }}
                            >
                                Reenviar código por SMS.
                            </span> 
                        </p>
                }
                    <div className={style.RecuperarSenhaButtonConteiner}>
                        <div 
                            className={style.RecuperarSenhaBotaoVoltar}
                            onClick={EtapaAnterior}
                        >{botaoVoltar.label.toUpperCase()}</div>
                        <button
                            className={
                                (AtivarBotao())?
                                cx(style.RecuperarSenhaBotaoProximo, style[`${theme}`]):
                                style.RecuperarSenhaBotaoProximoInativo
                            }
                            disabled={!AtivarBotao()}
                            onClick={ProximaEtapa}
                        >{botaoProximo.label.toUpperCase()}</button>
                    </div>
                </>
            }
            {
                etapa == 0.1 &&
                <a 
                    href={trocar_telefone.link}
                    target="_blank"
                    className={style.CTAAtualizar}
                >{trocar_telefone.texto}</a>
            }
            {
                sucesso &&
                <div 
                    className={cx(style.RecuperarSenhaBotaoProximo, style[`${theme}`])}
                    onClick={()=>showEsqueciSenha(false,false)}
                >{botaoSucesso.toUpperCase()}</div>
            }
        </div>
    )
}

const ValidarSenha = ({novaSenha,novaSenhaConfirmacao,setNovaSenhaConfirmacao, theme})=>{
    const Symbol = (color)=> (color?.length>0 || typeof(color)!='undefined') ?  '✘' : '✓'
    const senhaAlertMsg = "As senhas digitadas não são iguais.";
    let validacao = validacaoSenha(novaSenha)
    let validacoes = [
        {restricao:'tamanho',descricao:' Mínimo de 8 caracteres'},
        {restricao:'numeros',descricao:' Pelo menos um número'},
        {restricao:'maiuscula',descricao:' Pelo menos uma letra maiúscula'},
        {restricao:'minuscula',descricao:' Pelo menos uma letra minúscula'},
        {restricao:'especiais',descricao:' Pelo menos um caractere especial (ex: @ ! “ +)'},
    ]
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const handleMostrarSenha = () => {
        setMostrarSenha(!mostrarSenha);
    };
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
            <div className={style.inputContainer}>
                <input
                    className={(novaSenha != novaSenhaConfirmacao && novaSenhaConfirmacao.length > 0) ? style.RecuperarSenhaInputErro : cx(style.RecuperarSenhaInput, style[`Input${theme}`])}
                    type={ mostrarSenha ? "text" : "password"  }
                    placeholder="Digite sua senha novamente"
                    value={novaSenhaConfirmacao.replaceAll(" ","")}
                    onChange={(e) => {setNovaSenhaConfirmacao(e.target.value.replaceAll(" ",""));}}
                />
                <button
                    className={style.buttonHidePassword}
                    onClick={handleMostrarSenha}
                >
                    <img 
                        className={style.showPassword}
                        src={ mostrarSenha ?  "https://media.graphassets.com/drpbgyNgRy2TcgPzsFZe" : "https://media.graphassets.com/6SOGlnrdTGbEkjQPEggA" }
                        alt="eye"
                    />
                </button>
            </div>
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
    showEsqueciSenha,
    theme,
    projeto
})=>{
    const [etapa, setEtapa] = useState(0);
    const [mailAlert, setMailAlert,] = useState('');
    const [codigoAlert, setCodigoAlert] = useState('');
    const [senhaAlert, setSenhaAlert] = useState('');
    const [alterarSenhaArgs, setAlterarSenhaArgs] = useState();
    const [loading, setLoading] = useState(false);
    const [seguntaTentativa, setSegundaTentativa] = useState(false)
    const [saveCPF,setSaveCPF] = useState("")

    const mailAlertMsg = "CPF inválido";
    const codigoAlertMsg = "Código digitado é invalido";
    const senhaAlertMsg = "Falha na requisição"
    const color = theme || 'ColorIP';
    console.log(etapa)
    return(
        <>
            {loading
                ? <Spinner theme={color} height={"50vh"} />
                : <>
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
                            req = {reqs.verificacao}
                            saveCPF = {saveCPF}
                            setSaveCPF = {setSaveCPF}
                            etapa = {etapa}
                            setEtapa = {setEtapa}
                            placeholder = "CPF"
                            showEsqueciSenha = {showEsqueciSenha}
                            setAlterarSenhaArgs = {setAlterarSenhaArgs}
                            alterarSenhaArgs = {alterarSenhaArgs}
                            theme = {color}
                            projeto = {projeto}
                            setLoading={setLoading}
                        />
                    }
                    {
                        etapa == 0.1 &&
                        <InserirInfo
                            titulo = {titulos.verificacao}
                            chamada = {chamadas.verificacao}
                            botaoVoltar = {botaoVoltar}
                            aviso = "Clique em ENVIAR CÓDIGO"
                            botaoProximo = {{label : "ENVIAR CÓDIGO"}}
                            trocar_telefone = { chamadas.trocar_telefone}
                            alert = {mailAlert}
                            setAlert = {setMailAlert}
                            alertMsg = {mailAlertMsg}
                            req = {reqs.mail}
                            saveCPF = {saveCPF}
                            setSaveCPF = {setSaveCPF}
                            etapa = {etapa}
                            setEtapa = {setEtapa}
                            placeholder = "CPF"
                            showEsqueciSenha = {showEsqueciSenha}
                            setAlterarSenhaArgs = {setAlterarSenhaArgs}
                            alterarSenhaArgs = {alterarSenhaArgs}
                            theme = {color}
                            projeto = {projeto}
                            setLoading={setLoading}
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
                            sms = { reqs.mail }
                            seguntaTentativa = { seguntaTentativa }
                            setSegundaTentativa = { setSegundaTentativa }
                            saveCPF = {saveCPF}
                            setSaveCPF = {setSaveCPF}
                            etapa = {etapa}
                            setEtapa = {setEtapa}
                            placeholder = "Código de Verificacão"
                            setAlterarSenhaArgs = {setAlterarSenhaArgs}
                            alterarSenhaArgs = {alterarSenhaArgs}
                            theme = {color}
                            projeto = {projeto}
                            setLoading={setLoading}
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
                            placeholder = "Crie sua senha"
                            setAlterarSenhaArgs = {setAlterarSenhaArgs}
                            alterarSenhaArgs = {alterarSenhaArgs}
                            theme = {color}
                            projeto = {projeto}
                            setLoading={setLoading}
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
                            theme = {color}
                            projeto = {projeto}
                            setLoading={setLoading}
                        />
                    }
                </>
            }
        </>
    )
}

export {RecuperarSenha,InserirInfo}
