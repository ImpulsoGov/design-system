import React, { useState} from "react";
import style from './MenuMoblie.module.css'
import { Login } from "../Login";
import { UserAvatar } from "../ModalLogged";
import Link from "next/link";

const Menus = ({menus})=>{
    return(
        <div className={style.MenuMoblieMenus}>
        { menus.map((menu)=>{
                return <Link href={menu.url}> <a key={menu.label}>{menu.label}</a> </Link>
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
    login,
    logout,
    logged,
    user
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
                        className={style.MenuMoblieLoginOut}
                        onClick={() => logout()}
                    >SAIR</button>

                </>
            }
            {!logged &&
            <>
                {etapa == 0 &&
                    <Logout 
                        menus={menus}
                        setEtapa={setEtapa}
                        login={login}
                    />
                }
                {etapa == 1 &&
                    <div className={style.MenuMoblieContainer}>
                        <Login
                            titulo= "Faça o login para ver o painel de busca ativa"
                            button = {{label:"entrar"}}
                            entrar = {login}
                        />
                        <div 
                            className={style.MenuMoblieBack}
                            onClick={() => setEtapa(0)}
                        >Voltar</div>
                    </div>
                }
            </>}
        </>
    )
}

export {MenuMoblie}