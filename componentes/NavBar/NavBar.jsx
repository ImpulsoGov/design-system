import React, { useState,useEffect,useRef } from "react";
import cx from "classnames";
import Link from "next/link"
import style from "./NavBar.module.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { Modal } from "../Modal";
import { ModalLogged } from "../ModalLogged";
import { Login } from "../Login";
import { MenuMoblie } from "../MenuMoblie";
import { RecuperarSenha } from "../RecuperarSenha/RecuperarSenha";
import { ModalInicio } from "../ModalInicio";

const NavBarMenu = (tema, NavBarIconBranco, NavBarIconDark) => {
  let theme = (tema == "ColorIP" || tema == "ColorAGP" || tema == "ColorSM") ? NavBarIconBranco : NavBarIconDark
  return theme
}

const Menu = ({
  link,
  tema
}) => {
  return (
    <Link href={link.url}>
      <a className={style["theme" + tema]}>
        {link.label}
      </a>
    </Link>
  )
}

const SeletorMunicipios = ({parentProps})=>{
  const [display, setDisplay] = useState(false)
  const refList = useRef();
  const refSeletor = useRef();
  const hideList = ()=> setDisplay(false)
  const [itemSelecionado, setItemSelecionado] = useState(parentProps.municipio)
  useEffect(() => {
    const handleClick = (e) => {
      if (display && refList.current && !refList.current.contains(e.target) ) {
        if (!refSeletor.current.contains(e.target)){
          hideList()
        }
      }
    };
  
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  },[display]);
  if(parentProps?.SeletorTipo==1){
    return(
      <div className={style.NavBarSeletorMunicipiosContainer}>
        <div 
          className={
            (parentProps.theme.cor!="WhiteSM") ?
            style.NavBarSeletorMunicipios :
            style.NavBarSeletorMunicipiosWhite
          }
          onClick={()=>setDisplay(!display)}
          ref={refSeletor}
        >
          {parentProps.municipio}<span style={{float:'right',marginRight:'15px'}}>▾</span>
        </div>
        { 
          display && (
            <div className={style.NavBarSeletorMunicipiosLista} ref={refList}>
              {parentProps.data.map((municipio)=>{
                const municipio_uf = municipio.nome + " - " + municipio.uf
                return(
                  <div
                    className={style.NavBarSeletorMunicipiosItem}
                    key={municipio_uf}
                    onClick={()=>{setItemSelecionado(municipio_uf);parentProps.setMunicipio(municipio_uf);setDisplay(false)}}
                  >{municipio_uf}</div>
                )
              })}
            </div>
          )
        }
      </div>  
    )}else{
      return(
        <SearchBar
          data={parentProps.data}
          theme={parentProps.theme.cor}
          municipio={parentProps.municipio}
          setMunicipio={parentProps.setMunicipio}
        />
      )
    }
  
}
const DropdownMenuMoblie = (attr) => {
  const [active, setMode] = useState(false)
  const menuVisible = () => {
    setMode(!active)
    return active
  }
  return (
    <Link href={attr.link.url}>
      <a>
        {attr.link.label}
      </a>
    </Link>
  )
}


const NavBar = (props) => {
  const [active, setMode] = useState(true)
  const [modal, setModal] = useState(false)
  const [showEsqueciSenha, setShowEsqueciSenha] = useState(false)
  const [showPrimeiroAcesso, setShowPrimeiroAcesso] = useState(false)
  const [showModalInicio, setShowModalInicio] = useState(true)
  const menuVisible = () => {
    setMode(!active)
    return active
  }
  const Logged = <ModalLogged
                  nome = {props?.user?.nome}
                  label = {props?.user?.label}
                  cargo = {props?.user?.cargo}
                  button = {props?.user?.button}
                  logout = {props?.user?.logout}
                  equipe = {props?.user?.equipe}
                />
  const login = <Login
                  titulo = {props.login.titulo}
                  botaoPrincipal = {{
                    label:"entrar",
                    submit:()=>setShowModalInicio(false),
                    theme: props.theme.cor
                  }}
                  botaoSecundario = {{
                    label:"voltar",
                    submit:()=> setShowModalInicio(true)
                  }}
                  entrar = {props?.user?.login}
                  validarCredencial = {props?.user?.validarCredencial}
                  validacao = {props?.user?.validacao}
                  showEsqueciSenha = {setShowEsqueciSenha}
                />
  
  const EsqueciMinhaSenha = <RecuperarSenha
                              titulos = { {
                                mail : "Recuperação de senha",
                                senha : "Recuperação de senha",
                                codigo : "Recuperação de senha",
                                sucesso : "Nova senha criada com sucesso!"
                              }}
                              chamadas={{
                              mail : "Digite o e-mail cadastrado para receber um código de autorização de recuperação da senha.",
                              aviso : "Caso não lembre o e-mail cadastrado, entre em contato conosco pelo grupo de mensagens do seu município com a Impulso Gov.",
                              codigo : "Digite abaixo o código recebido no e-mail cadastrado",
                              senha : "Escolha uma nova senha",
                              sucesso : props.esqueciMinhaSenha.chamadas.sucesso,
                              }}
                              botaoVoltar = {{label:"voltar",function : ""}}
                              botaoProximo = {{label:"próximo",function : ""}}
                              botaoSucesso = "Entrar"
                              showEsqueciSenha = {setShowEsqueciSenha}
                              reqs = {props.esqueciMinhaSenha.reqs}
                              theme = {props.theme.cor}
                            />   
  const PrimeiroAcesso = <RecuperarSenha
                                titulos = { {
                                  mail : "Bem vindo(a)! Precisamos que você crie uma senha para acessar os dados.",
                                  codigo : "Validação do e-mail",
                                  senha: "Crie sua senha de acesso",
                                  sucesso : "Senha criada com sucesso!"
                                }}
                                chamadas={{
                                mail : "Digite o e-mail cadastrado para receber um código de autorização de criação da senha.",
                                aviso : "Caso não lembre o e-mail cadastrado, entre em contato conosco pelo grupo de mensagens do seu município com a Impulso Gov.",
                                codigo : "Digite abaixo o código recebido no e-mail cadastrado",
                                senha : "Crie sua senha de acesso",
                                sucesso : props.primeiroAcesso.chamadas.sucesso,
                                }}
                                botaoVoltar = {{label:"voltar",function : ""}}
                                botaoProximo = {{label:"próximo",function : ""}}
                                botaoSucesso = "Inicio"
                                showEsqueciSenha = {(arg)=>{
                                  setShowModalInicio(!arg)
                                  setShowPrimeiroAcesso(arg)
                                }}
                                reqs = {props.primeiroAcesso.reqs}
                                theme = {props.theme.cor}
                              />   
                              
  const ModalInicioChild = <ModalInicio
                              titulo = {props.ModalInicio.titulo}
                              chamada = {props.ModalInicio.chamada}
                              botaoPrincipal = {{
                                label : props.ModalInicio.botaoPrincipal.label,
                                submit : ()=>setShowModalInicio(false),
                                theme: props.theme.cor
                              }}
                              botaoSecundario = {{
                                label : props.ModalInicio.botaoSecundario.label,
                                submit : ()=>{
                                  setShowModalInicio(false)
                                  setShowPrimeiroAcesso(true)
                                }
                              }}
                            />

  const ModalChildren = ()=>{
    if(props?.user.nome){
      return Logged
    }else if (showModalInicio){
      return ModalInicioChild
    }else if(showPrimeiroAcesso){
      return PrimeiroAcesso
    }else if (showEsqueciSenha){
      return EsqueciMinhaSenha
    }else{
      return props?.user.nome ? Logged : login
    }
  }
  
  return (
    <>
    <div>
      <div className={cx(style.container_navbar, style["theme" + props.theme.cor])}>
        <div className={style.logoWrapper_navbar}>
          <div className={style.logo_navbar}>
            <Link href={props.theme.logoLink}>
              <a>
                <img
                  className={style.logoWrapper_navbar}
                  alt="impulso-previne-logo_navbar"
                  src={String(props.theme.logoProjeto)}
                />
              </a>
            </Link>
          </div>
        </div>
        <div className={style.NavBarSearchConteinerMoblie}>
          {props.seletorMunicipios && <SeletorMunicipios parentProps={props}/>}
        </div>
        
        <div className={style.links_navbar}>
          { props.menu && 
            props.menu.map((link, index) => {
              return (
                <div 
                  key={link.label} 
                  className={style.link_navbar}
                >
                  <Menu
                    link={link}
                    tema={props.theme.cor}
                  />
                  {link.sub && (
                    <div className={style.NavBarSubMapContainer} key={index}>
                      {   link.sub &&
                          link.sub.map((subContent, index) => {
                            const NavBarSubMenuContainerPosition = {
                              top : (index * 30).toString()+'px',
                            }
                            return(
                              <>
                                <div className={style.NavBarSubMenuContainer} key={subContent.label} >
                                  <Link href={subContent.url}>
                                    <a className={style.NavBarSubMenuAnchor}>
                                      {subContent.label} 
                                    </a>
                                  </Link>
                                </div>
                                {   subContent.item &&
                                    <div className={style.NavBarSubMenuItemContainer} style={NavBarSubMenuContainerPosition} key={subContent.item}>
                                      {
                                        subContent.item.map((subcontent, index) => {
                                          return(
                                            <div  className={style.NavBarSubMenuItem} key={subcontent.label}>
                                              <Link href={subcontent.url}>
                                                <a className={style.NavBarSubMenuItemAnchor}>
                                                  {subcontent.label} 
                                                </a>
                                              </Link>
                                            </div>
                                          )
                                        })
                                    }
                                    </div>
                                }
                              </>
                            )
                          })
                      }
                    </div>
                  )}
                </div>
              );
            })}

          <div className={style.NavBarSearchConteiner}>
            {props.seletorMunicipios && <SeletorMunicipios parentProps={props}/>}
          </div>
          {
            props?.user != null &&
            <div 
              className={cx(
                            style.NavBarLogin,
                            style['NavBarLogin' + props.theme.cor],
                            style[props?.user?.label?.length==1 ? 'NavBarLogged' : 'NavBarLogOut']
                        )}
              onClick={()=>setModal(!modal)}
            >{props.user.label}
            </div>
          }

        </div>

        <div className={style["buttonMoblie" + props.theme.cor]}
          onClick={menuVisible}
        >
          <img
            id="navBarIcon"
            alt="NavBarIcon"
            src={NavBarMenu(props.theme.cor, props.NavBarIconBranco, props.NavBarIconDark)}
          />
        </div>
      </div>
      <div className={active ? cx(style["linksNavBarMoblie"]) : cx(style["linksNavBarMoblie"], style["linksNavBarMoblieVisible"], style["linksNavBarMoblie" + props.theme.cor])}>
        <MenuMoblie
          menus={props.menu}
          logged={props?.user?.nome ? true : false}
          user={props?.user}
          logout={props?.user?.logout}
          children = {ModalChildren()}
          showModalInicio = {showModalInicio}
        />
      </div>
    </div>
   {modal &&
    <div className={style.NavBarModalContainer}>
      <Modal
          show = {modal}
          setModal = {setModal}
          child={ModalChildren()}
      />
    </div>}
    </>
  )
};

export { NavBar };
