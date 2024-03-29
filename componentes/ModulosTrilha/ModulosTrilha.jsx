import Link from "next/link";
import React, { useState } from "react";
import { ButtonColor } from "../ButtonColor/ButtonColor";
import { ButtonLight, ButtonLightSubmit } from "../ButtonLight/ButtonLight";
import style from "./ModulosTrilha.module.css";
import classNames from 'classnames';

const PastaModulo = ({
    id,
    titulo,
    link,
    ativo,
    click,
    liberado,
    concluido
}) => {
    const pastaLogo = (liberado, concluido) => {
        let logo;
        if (liberado) {
            logo = ativo ?
                "https://media.graphassets.com/hdhX6nuoS8esvmyxBHMk" :
                concluido ? "https://media.graphassets.com/2NeDNsVGTpa5AESs9MCB" : "https://media.graphassets.com/W8ChKPCTdCiQFTCGU8sB";

        } else {
            logo = "https://media.graphassets.com/SEwi8ASvT6mAxuwFL6cA";
        }
        return logo;
    };
    const StyleAtivacaoLiberacao = classNames({
        [style.PastaModuloAtual]: ativo && liberado,
        [style.PastaModulo]: !ativo && liberado,
        [style.PastaModuloDesativado]: !liberado,
    });
    return (
        <div
            href={ link }
            className={StyleAtivacaoLiberacao}
            onClick={ () => { if (liberado) click(id); } }
        >
            <img
                src={ pastaLogo(liberado, concluido) }
            ></img>
            <div>
                <div>MÓDULO { id }</div>
                <div>{ titulo }</div>
            </div>
        </div>
    );
};

const PastaModuloSM = ({
    id,
    tipo,
    titulo,
    link,
    ativo,
    click,
    liberado,
    concluido
}) => {
    const pastaLogo = (liberado, concluido) => {
        let logo;
        if (liberado) {
            logo = ativo ?
                "https://media.graphassets.com/hdhX6nuoS8esvmyxBHMk" :
                "https://media.graphassets.com/W8ChKPCTdCiQFTCGU8sB";

        } else {
            logo = "https://media.graphassets.com/SEwi8ASvT6mAxuwFL6cA";
        }
        return logo;
    };
    return (
        <div
            href={ link }
            className={
                ativo ?
                    style.PastaModuloAtualSM :
                    style.PastaModulo
            }
            onClick={ () => { if (liberado) click(id); } }
        >
            <img
                src={ pastaLogo(liberado, concluido) }
            ></img>
            <div>
                <div>{ tipo }</div>
                <div>{ titulo }</div>
            </div>
        </div>
    );
};

const Conteudo = ({
    id,
    formato,
    titulo,
    concluido,
    link
}) => {
    const Icon = {
        "video": "https://media.graphassets.com/CEN9z38RyKNwf3dTrpVd",
        "pdf": "https://media.graphassets.com/FbnwvteSyzLB9mVSSy3w",
        "ppt": "https://media.graphassets.com/FbnwvteSyzLB9mVSSy3w",
        "quizz": "https://media.graphassets.com/qEhLR01jTpGY97RbAOrc"
    };
    return (
        <Link href={ link }>
            <a className={ style.Conteudo }>
                <img
                    src={ Icon[formato] }
                ></img>
                <div>{ id }. { titulo }</div>
                <div style={{marginLeft : "auto"}}>
                    <img src={
                        concluido ?
                            "https://media.graphassets.com/wwr70QThSTGWkqmbR0Mt" :
                            "https://media.graphassets.com/bhs7XtqTQWuEdi2mPWmD"
                    }
                    ></img>
                </div>
            </a>
        </Link>
    );
};

const ConteudoSemCheck = ({
    formato,
    titulo,
    link,
    openInNewTab
}) => {
    const Icon = {
        "video": "https://media.graphassets.com/CEN9z38RyKNwf3dTrpVd",
        "pdf": "https://media.graphassets.com/FbnwvteSyzLB9mVSSy3w",
        "ppt": "https://media.graphassets.com/FbnwvteSyzLB9mVSSy3w",
        "quizz": "https://media.graphassets.com/qEhLR01jTpGY97RbAOrc"
    };
    return (
        <Link href={ link } passHref>
            <a className={ style.Conteudo } target={ openInNewTab && "_blank" }>
                <img
                    src={ Icon[formato] }
                ></img>
                <div>{ titulo }</div>
            </a>
        </Link>
    );
};


const ModulosTrilha = ({
    tituloTrilha,
    botaoVoltar,
    botaoWhatsapp,
    modulos,
    modulo,
    ultimoModulo,
    mobile,
    checkSobre,
    trilhaID
}) => {
    const [moduloAtivo, setModuloAtivo] = useState(mobile ? -1 : ultimoModulo);
    const showModulos = () => {
        if (!mobile) return true;
        if (moduloAtivo < 0) return true;
        return false;
    };
    return (
        <div className={ style.ModulosTrilha }>
            <div className={ style.Botoes }>
                {
                    showModulos() &&
                    <ButtonLight
                        icone={ {
                            posicao: 'right',
                            url: 'https://media.graphassets.com/8NbkQQkyRSiouNfFpLOG'
                        } }
                        label={ botaoVoltar.label }
                        link={ botaoVoltar.url }
                    />
                }
                {
                    moduloAtivo >= 0 && mobile &&
                    <ButtonLightSubmit
                        label=""
                        submit={ () => setModuloAtivo(-1) }
                        icon="https://media.graphassets.com/8NbkQQkyRSiouNfFpLOG"
                    />
                }
                <ButtonColor
                    icone={ {
                        posicao: 'right',
                        url: 'https://media.graphassets.com/JFNSZopRIORoy8FnmQlw'
                    } }
                    label={ botaoWhatsapp.label }
                    link={ botaoWhatsapp.url }
                />
            </div>
            <div className={ style.tituloTexto }>{ tituloTrilha }</div>
            <div>
                {
                    showModulos() &&
                    <div className={ style.divModulos }>
                        { modulos.map((modulo, index) => {
                            return (
                                <PastaModulo key={ index }
                                    id={ modulo.id }
                                    titulo={ modulo.titulo }
                                    ativo={ moduloAtivo == modulo.id }
                                    link={ modulo.link }
                                    click={ setModuloAtivo }
                                    liberado={ modulo.liberado }
                                    concluido={ modulo.concluido }
                                />
                            );
                        }) }
                    </div>
                }
                {
                    moduloAtivo >= 0 &&
                    <div className={ style.divConteudo }>
                        <div className={ style.idModulo }>Módulo { moduloAtivo }</div>
                        {
                            modulos.map((modulo, index) => {
                                if (modulo.id == moduloAtivo) return <div className={ style.tituloModulo } key={ index }>{ modulo.titulo }</div>;
                            })
                        }
                        {
                            moduloAtivo == 0 &&
                            <>
                                <Conteudo key=""
                                    id="0"
                                    formato="PDF"
                                    titulo="Sobre esse curso | Agenda"
                                    concluido={ checkSobre }
                                    link={`/conteudo-programatico?trilha=${trilhaID}`}
                                />
                            </>
                        }
                        { modulo.map((conteudo, index) => {
                            return (
                                conteudo.moduloID == moduloAtivo &&
                                <>
                                    <Conteudo key={ index }
                                        id={ conteudo.id }
                                        formato={ conteudo.formato }
                                        titulo={ conteudo.titulo }
                                        concluido={ conteudo.concluido }
                                        link={ conteudo.link }
                                    />
                                </>
                            );
                        }) }
                    </div>
                }
            </div>
        </div>
    );
};

const MateriaisComplementares = ({
    modulos,
    modulo,
    ultimoModulo,
    mobile,
}) => {
    const [moduloAtivo, setModuloAtivo] = useState(mobile ? -1 : ultimoModulo);
    const showModulos = () => {
        if (!mobile) return true;
        if (moduloAtivo < 0) return true;
        return false;
    };
    return (
        <div className={ style.ModulosTrilha }>
            <div>
                {
                    showModulos() &&
                    <div className={ style.divModulos }>
                        { modulos.map((modulo, index) => {
                            return (
                                <PastaModuloSM key={ index }
                                    id={ modulo.id }
                                    tipo={ modulo.tipo }
                                    titulo={ modulo.titulo }
                                    ativo={ moduloAtivo == modulo.id }
                                    link={ modulo.link }
                                    click={ setModuloAtivo }
                                    liberado={ modulo.liberado }
                                    concluido={ modulo.concluido }
                                />
                            );
                        }) }
                    </div>
                }
                {
                    moduloAtivo >= 0 &&
                    <div className={ style.divConteudo }>
                        <div className={ style.idModulo }>MATERIAIS</div>
                        {
                            modulos.map((modulo, index) => {
                                if (modulo.id == moduloAtivo) return <div className={ style.tituloModulo } key={ index }>{ modulo.titulo }</div>;
                            })
                        }
                        { modulo.map((conteudo, index) => {
                            return (
                                conteudo.moduloID == moduloAtivo &&
                                <>
                                    <ConteudoSemCheck key={ index }
                                        formato={ conteudo.formato }
                                        titulo={ conteudo.titulo }
                                        link={ conteudo.link }
                                        openInNewTab={ conteudo.openInNewTab ? conteudo.openInNewTab : false }
                                    />
                                </>
                            );
                        }) }
                    </div>
                }
            </div>
        </div>
    );
};

export { ModulosTrilha, MateriaisComplementares };
