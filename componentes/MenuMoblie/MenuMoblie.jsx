import React, { useState} from "react";
import style from './MenuMoblie.module.css'
import { UserAvatar } from "../ModalLogged";
import { ButtonColorSubmitMobile } from "../ButtonColor";
import Link from "next/link";
import cx from "classnames";

const Menus = ({menus})=>{
    return(
        <div className={style.MenuMoblieMenus}>
        { menus.map((menu)=>{
                return (
                        <Link href={menu.url} key={menu.label}>
                            <a>{menu.label}</a> 
                        </Link>
                    )
            })}
        </div>
    )
}

const Logout = ({
    menus,
    setEtapa,
    login
})=>{
    return(
        <div className={style.MenuMoblieContainer}>
            <Menus
                menus={menus}
            />
            {   
                login &&
                <div className={style.MenuMoblieMenus}>
                    <button 
                        className={style.LoginButton}
                        onClick={() => setEtapa(1)}
                    >ENTRAR</button>
                </div>
            }
        </div>
)
}

const MenuMoblie = ({
    menus,
    logout,
    logged,
    user,
    children,
    showModalInicio,
    theme
})=>{
    const [etapa, setEtapa] = useState(0)
    return(
        <>
            {
                logged &&
                <>
                    <div className={style.MenuMoblieUser}>
                        <UserAvatar
                            label = {user?.label}
                            nome = {user?.nome}
                            cargo = {user?.cargo}
                        />
                    </div>
                    <Menus
                        menus={menus}
                    />
                    <button 
                        className={cx(style.MenuMoblieLoginOut, style[`${theme}`])}
                        onClick={() => logout()}
                    >SAIR</button>

                </>
            }
            {!logged &&
            <>  
                {showModalInicio && <Menus menus={menus}/>}
                {children}
            </>}
        </>
    )
}

export {MenuMoblie}
