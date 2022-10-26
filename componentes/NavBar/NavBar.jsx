import React, { useState } from "react";
import cx from "classnames";
import style from "./NavBar.module.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { Modal } from "../Modal";
import { ModalLogged } from "../ModalLogged";
import { Login } from "../Login";

const NavBarMenu = (tema, NavBarIconBranco, NavBarIconDark) => {
  let theme = (tema == "ColorIP" || tema == "ColorAGP" || tema == "ColorSM") ? NavBarIconBranco : NavBarIconDark
  return theme
}

const DropdownMenu = (attr) => {
  return (
    <a href={attr.link.url} className={style["theme" + attr.props.theme.cor]}>
      {attr.link.label}
    </a>
  )
}

const DropdownMenuMoblie = (attr) => {
  const [active, setMode] = useState(false)
  const menuVisible = () => {
    setMode(!active)
    return active
  }
  return (
    <a href={attr.link.url}>
      {attr.link.label}
    </a>
  )
}


const NavBar = (props) => {
  const [active, setMode] = useState(true)
  const [modal, setModal] = useState(false)
  const menuVisible = () => {
    setMode(!active)
    return active
  }
  const Logged = <ModalLogged
                  nome = {props.user.nome}
                  label = {props.user.label}
                  cargo = {props.user.cargo}
                  button = {props.user.button}
                  logout = {props.user.logout}

                />
  const login = <Login
                  titulo= "Faça o login para ver o painel de busca ativa"
                  button = {{label:"entrar"}}
                  entrar = {props.user.login}
                />
  const ModalChildren = [Logged,login]
  return (
    <>
    <div>
      <div className={cx(style.container_navbar, style["theme" + props.theme.cor])}>
        <div className={style.logoWrapper_navbar}>
          <div className={style.logo_navbar}>
            <a href="/">
              <img
                className={style.logoWrapper_navbar}
                alt="impulso-previne-logo_navbar"
                src={String(props.theme.logoProjeto)}
              />
            </a>
          </div>
        </div>
        <div className={style.NavBarSearchConteinerMoblie}>
          <SearchBar
            data={props.data}
            theme={props.theme.cor}
            municipio={props.municipio}
            setMunicipio={props.setMunicipio}
          />
        </div>

        <div className={style.links_navbar}>
          {props.menu.map((link, index) => {
            return (
              <div key={index} className={style.link_navbar}>
                {DropdownMenu({ index, link, props })}
                {props.submenu && (
                  <div className={style.NavBarSubMenuContainer}>
                    <a href={props.submenu[index].url} className={style.NavBarSubMenu}>
                      {props.submenu[index].label}
                    </a>
                    {
                      props.submenu[index].sub && (
                        <a href={props.submenu[index].sub.url} className={style.NavBarSecondSubMenu}>
                          {props.submenu[index].sub.label}
                        </a>
                      )
                    }
                  </div>
                )}
              </div>
            );
          })}
          <div className={style.NavBarSearchConteiner}>
            <SearchBar
              data={props.data}
              theme={props.theme.cor}
              municipio={props.municipio}
              setMunicipio={props.setMunicipio}
            />
          </div>
          <div 
            className={cx(
                          style.NavBarLogin,
                          style['NavBarLogin' + props.theme.cor],
                          style[props?.user?.label?.length==1 ? 'NavBarLogged' : 'NavBarLogOut']
                      )}
            onClick={()=>setModal(!modal)}
          >{props.user.label}</div>
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
        {props.menu.map((link, index) => {
          return (
            <div key={index} className={style.link_navbar}>
              {DropdownMenuMoblie({ index, link, props })}
            </div>
          );
        })}

      </div>
    </div>
   {modal &&
    <div className={style.NavBarModalContainer}>
      <Modal
          show = {modal}
          setModal = {setModal}
          child={props.user.nome ? ModalChildren[0] : ModalChildren[1]}
      />
    </div>}
    </>
  )
};

export { NavBar };