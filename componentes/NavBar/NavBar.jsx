import React, { useState } from "react";
import cx from "classnames";
import style from "./NavBar.module.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { themeColorSelector } from "../../utils/themeColorSelector";

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
    <>
      {
        attr.sub ? (
          <button onClick={attr.onClick} className={style.DropDownMenuMobileButton}>
            {attr.link.label}
          </button>
        ) : (
          <a href={attr.link.url} >
            {attr.link.label}
          </a>
        )
      }
    </>

  )
}

const NavBar = (props) => {
  const [subMenuIsVisible, setSubMenuIsVisible] = useState(false);
  const [active, setMode] = useState(true)
  const menuVisible = () => {
    setMode(!active)
    return active
  }
  return (
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
                {link.sub && (
                  <div className={style.NavBarSubMapContainer}>
                    {

                      link.sub.map((subContent, index) => (
                        <div className={style.NavBarSubMenuContainer} key={index}>
                          <a href={subContent.url} className={style.NavBarSubMenuAnchor}>{subContent.label} </a>
                        </div>
                      ))
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
      <div
        className={active
          ? cx(style["linksNavBarMoblie"])
          : cx(
            style["linksNavBarMoblie"],
            style["linksNavBarMoblieVisible"],
            style["linksNavBarMoblie" + props.theme.cor]
          )
        }

        style={{ backgroundColor: themeColorSelector(props.pageTheme) }}>
        {props.menu.map((link, index) => {
          return (
            <div key={index} className={style.link_navbar}>
              {DropdownMenuMoblie({ index, link, props, onClick: () => setSubMenuIsVisible(!subMenuIsVisible), sub: link.sub })}
              {link.sub && subMenuIsVisible && (
                <div className={style.NavBarSubMapMobileContainer}>
                  {
                    link.sub.map((subContent, index) => (
                      <div className={style.NavBarSubMenuMobileContainer} key={index}>
                        <a href={subContent.url} className={style.NavBarSubMenuAnchor}>{subContent.label} </a>
                      </div>
                    ))
                  }
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  )
};


export { NavBar };