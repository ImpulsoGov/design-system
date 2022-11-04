import React from "react";
import cx from "classnames";
import style from "./Footer.module.css";

const Footer = ({
  theme,
  address,
  contactCopyright,
  links,
  socialMediaURLs
}) => {
  return (
    <div className={cx(style["containerFooter"], style["theme"+theme.cor+"Footer"])}>
      <a href="/">
        <img
          className={style.logoWrapperFooter}
          alt="impulso-previne-logo"
          src= {String(theme.logoProjeto)}
        />
      </a>
      <div className={style.infoLinksWrapperFooter}>
        <div className={style.conteinerUpperFooter}>
          <div className={style.listFooter}>
            {links.map((item) => {
              return (
                <div key={item.label} className={style.itemFooter}>
                  <a href={item.url} className={style["theme"+theme.cor+"Footer"]}>
                      {item.label}
                  </a>
                </div>
              );
            })}
          </div>
          <div className={style.realizacaoFooter}>
            <div>Realização:</div>
            <div>
              <a href="https://www.impulsogov.org">
                <img className={style.logoImpulso}
                    alt="impulso-gov-logo"
                    src= {String(theme.logoImpulso)}
                />
              </a>
            </div>
          </div>

        </div>
        
        <div className={style.contactAddressSocialMediasFooter}>
          <div className={style.contactAddressFooter}>
            <div>
                <div>{address.first}</div>
                <div>{address.second}</div>
            </div>
            <div className={style.contactFooter}>
                <div>{contactCopyright.email}</div>
                <div>{contactCopyright.copyright}</div>
            </div>
          </div>
          <div className={style.socialMediasFooter}>
            {socialMediaURLs.map((socialMedia)=>{
              return(
                <a className={style.socialMediaFooter} href={socialMedia.url} key={socialMedia.url}>
                  <img
                    className={style.socialMediaFooter}
                    alt={socialMedia.url}
                    src= {socialMedia.logo}
                  />
                </a>
              )
          })}
          </div>
        </div>
      </div>
    </div>
  );
};

export {Footer};