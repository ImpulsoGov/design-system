import React from "react";
import cx from "classnames";
import style from "./Footer.module.css";
import Link from "next/link";

const Footer = ({
  theme,
  address,
  contactCopyright,
  links,
  socialMediaURLs,
  logoLink
}) => {
  return (
    <div className={cx(style["containerFooter"], style["theme"+theme.cor+"Footer"])}>
      <Link href={logoLink}>
        <a>
          <img
            className={style.logoWrapperFooter}
            alt="impulso-previne-logo"
            src= {String(theme.logoProjeto)}
          />
        </a>
      </Link>
      <div className={style.infoLinksWrapperFooter}>
        <div className={style.conteinerUpperFooter}>
          <div className={style.listFooter}>
            {links.map((item) => {
              return (
                <div key={item.label} className={style.itemFooter}>
                  <Link href={item.url}>
                    <a className={style["theme"+theme.cor+"Footer"]}>
                        {item.label}
                    </a>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className={style.realizacaoFooter}>
            <div>Realização:</div>
            <div>
              <Link href="https://www.impulsogov.org">
                <a>
                  <img className={style.logoImpulso}
                      alt="impulso-gov-logo"
                      src= {String(theme.logoImpulso)}
                  />
                </a>
              </Link>
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
                <Link href={socialMedia.url} key={socialMedia.url}>
                  <a className={style.socialMediaFooter}  >
                    <img
                      className={style.socialMediaFooter}
                      alt={socialMedia.url}
                      src= {socialMedia.logo}
                    />
                  </a>
                </Link>
              )
          })}
          </div>
        </div>
      </div>
    </div>
  );
};

export {Footer};