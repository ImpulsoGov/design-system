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

const CHAMADA_AVISO_PADRAO = "Caso não lembre o e-mail cadastrado, entre em contato conosco pelo grupo de mensagens do seu município com a Impulso Gov.";
const CHAMADA_MAIL_PADRAO_PRIMEIRO_ACESSO = "Digite o e-mail cadastrado para receber um código de autorização de criação da senha.";
const TITULO_MAIL_PADRAO_PRIMEIRO_ACESSO = "Bem vindo(a)! Precisamos que você crie uma senha para acessar os dados.";
const CHAMADA_MAIL_PADRAO_ESQUECI_SENHA = "Digite o e-mail cadastrado para receber um código de autorização de recuperação da senha."

const NavBarMenu = (tema, NavBarIconBranco, NavBarIconDark) => {
  let theme = (tema == "ColorIP" || tema == "ColorAGP" || tema == "ColorSM") ? NavBarIconBranco : NavBarIconDark
  return theme
}

const Menu = ({
  link,
  tema
}) => {
  return (
    <Link 
      href={link.url}
      className={style["theme" + tema]}
    >
        {link.label}
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
        {attr.link.label}
    </Link>
  )
}


const NavBar = (props) => {
  const [modal, setModal] = useState(false)
  const [showEsqueciSenha, setShowEsqueciSenha] = useState(false)
  const [showPrimeiroAcesso, setShowPrimeiroAcesso] = useState(false)
  const [showModalInicio, setShowModalInicio] = useState(true)
  const menuVisible = () => {
    props.showMenuMobile.states.setMode(!props.showMenuMobile.states.active)
    return props.showMenuMobile.states.active
  }
  const Logged = <ModalLogged
                  nome = {props?.user?.nome}
                  label = {props?.user?.label}
                  cargo = {props?.user?.cargo}
                  button = {props?.user?.button}
                  logout = {props?.user?.logout}
                  equipe = {props?.user?.equipe}
                  botaoAuxiliar = {props?.user?.botaoAuxiliar}
                  setModal = {setModal}
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
                  projeto = {props?.projeto}
                  trackObject = {props?.trackObject ? props.trackObject : null}
                />
  
  const EsqueciMinhaSenha = <RecuperarSenha
                              titulos = { props?.esqueciMinhaSenha?.titulos }
                              chamadas={props?.esqueciMinhaSenha?.chamadas}
                              botaoVoltar = {{label:"voltar",function : ""}}
                              botaoProximo = {{label:"próximo",function : ""}}
                              botaoSucesso = "Fazer Login"
                              showEsqueciSenha = {setShowEsqueciSenha}
                              reqs = {props.esqueciMinhaSenha.reqs}
                              theme = {props.theme.cor}
                              projeto = {props?.projeto}
                            />   
  const PrimeiroAcesso = <RecuperarSenha
                                titulos = {props?.primeiroAcesso?.titulos}
                                chamadas={props?.primeiroAcesso?.chamadas}
                                botaoVoltar = {{label:"voltar",function : ""}}
                                botaoProximo = {{label:"próximo",function : ""}}
                                botaoSucesso = "Fazer Login"
                                showEsqueciSenha = {(arg,arg2)=>{
                                  setShowPrimeiroAcesso(arg)
                                  if(arg2) setShowModalInicio(arg2)
                                }}
                                reqs = {props.primeiroAcesso.reqs}
                                theme = {props.theme.cor}
                                projeto = {props?.projeto}
                              />   
                              
  const ModalInicioChild = <ModalInicio
                              titulo = {props?.ModalInicio.titulo}
                              chamada = {props?.ModalInicio.chamada}
                              cardAlert = {props?.ModalInicio.cardAlert}
                              botaoPrincipal = {{
                                label : props.ModalInicio.botaoPrincipal.label,
                                submit : ()=>{
                                  props?.trackObject?.track('button_click', {
                                    'button_action': 'entrar_area_restitra',
                                  });
                                  setShowModalInicio(false)
                                },
                                theme: props.theme.cor
                              }}
                              botaoSecundario = {{
                                label : props?.ModalInicio.botaoSecundario.label,
                                submit : ()=>{
                                  setShowModalInicio(false)
                                  setShowPrimeiroAcesso(true)
                                  props?.trackObject?.track('button_click', {
                                    'button_action': 'inicio_primeiro_acesso',
                                    'login_flow': 'primeiro_acesso'
                                  });
                                }
                              }}
                              botaoAjuda={{
                                label: props?.ModalInicio.botaoAjuda?.label,
                                link: props?.ModalInicio.botaoAjuda?.link,
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
                <img
                  className={style.logoWrapper_navbar}
                  alt="impulso-previne-logo_navbar"
                  src={String(props.theme.logoProjeto)}
                />
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
                              top : (index * 64).toString()+'px',
                            }
                            return(
                              <>
                                <div className={cx(style.NavBarSubMenuContainer, style[`NavBarSubMenuContainer${props.theme.cor}`])} key={subContent.label} >
                                  <Link 
                                    href={subContent.url}
                                    className={style.NavBarSubMenuAnchor}
                                  >
                                      {subContent.label} 
                                  </Link>
                                </div>
                                {   subContent.item &&
                                    <div className={style.NavBarSubMenuItemContainer} style={NavBarSubMenuContainerPosition} key={subContent.item}>
                                      {
                                        subContent.item.map((subcontent, index) => {
                                          return(
                                            <div  className={cx(style.NavBarSubMenuItem, style[`NavBarSubMenuItem${props.theme.cor}`])} key={subcontent.label}>
                                              <Link 
                                                href={subcontent.url}
                                                className={style.NavBarSubMenuItemAnchor}
                                              >
                                                  {subcontent.label} 
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
      <div className={props.showMenuMobile.states.active ? cx(style["linksNavBarMoblie"]) : cx(style["linksNavBarMoblie"], style["linksNavBarMoblieVisible"], style["linksNavBarMoblie" + props.theme.cor])}>
        <MenuMoblie
          menus={props.menu}
          logged={props?.user?.nome ? true : false}
          user={props?.user}
          logout={props?.user?.logout}
          children = {ModalChildren()}
          showModalInicio = {showModalInicio}
          theme = {props.theme.cor}
        />
      </div>
    </div>
   {modal &&
    <div className={style.NavBarModalContainer}>
      <div 
        className={style.NavBarModalBlur}
        onClick={()=>setModal(false)}
      ></div>
      <Modal
          show = {modal}
          setModal = {setModal}
          children={ModalChildren()}
      />
    </div>}
    </>
  )
};
export { NavBar };
