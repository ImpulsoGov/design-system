import cx from "classnames";
import React from "react";
import "tippy.js/themes/light.css";
import style from "./CardGridInternacoes.module.css";


const CardInfoIndicador = ({ indicador, simbolo, descricao }) => {
    return (
        <>
            <span className={ style.CardInfoIndicador }>
                { `${indicador}${simbolo ? simbolo : ""}` }
            </span>

            { descricao && (
                <span className={ style.CardInfoIndicadorDescricao }>
                    { descricao }
                </span>
            ) }
        </>
    );
};



const CardInfoDescricao = ({ descricao }) => {
    return (
        <p className={ style.CardInfoDescricao }>{ descricao }</p>
    );
};

const CardInfoStatus = ({ descricao, status }) => {
    return (
        <div className={ style.CardInfoStatus }>
            <span className={ cx(
                style.CardInfoStatusSymbol,
                status ? style.TextoVerde : style.TextoVermelho
            ) }>
                { status ? "✓" : "✕" }
            </span>

            <p className={ style.CardInfoDescricao }>{ descricao }</p>
        </div>
    );
};




const CardIndicadorDescricao = ({
    descricao,
    indicador,
    indicadorSimbolo,
    indicadorDescricao
}) => {
    return (
        <div className={ cx(style.CardInfo, style.TipoC) }>
            <div className={ style.CardInfoIndicadorContainer }>
                <CardInfoIndicador
                    indicador={ indicador }
                    descricao={ indicadorDescricao }
                    simbolo={ indicadorSimbolo }
                />
            </div>

            { descricao && <CardInfoDescricao descricao={ descricao } /> }
        </div>
    );
};

const CardInfoAux = ({
    descricao,
    indicador,
    indicadorSimbolo,
    indicadorDescricao,
    statusAntes,
    statusDepois
}) => {
    return (
        <div className={ cx(style.CardInfo, style.TipoC) }>
            <div className={ style.CardInfoIndicadorContainer }>
                <CardInfoIndicador
                    indicador={ indicador }
                    descricao={ indicadorDescricao }
                    simbolo={ indicadorSimbolo }
                />
            </div>

            { descricao && <CardInfoDescricao descricao={ descricao } /> }

            <div className={ style.CardInfoStatusContainer }>
                { statusAntes
                    ? <CardInfoStatus descricao="Antes" status={ statusAntes } />
                    : <CardInfoStatus descricao="Antes" status={ statusAntes } />
                }

                { statusDepois
                    ? <CardInfoStatus descricao="Depois" status={ statusDepois } />
                    : <CardInfoStatus descricao="Depois" status={ statusDepois } />
                }
            </div>
        </div>
    );
};

const ContainerCards = () => {
    return (
        <div className={ style.ContainerCards }>
            <div className={ style.PrimeiraColuna }></div>

            <div className={ cx(style.SegundaColuna, style.TerceiroCard) }>
                <CardInfoAux
                    descricao={'Não foram atendidos na RAPS nos 6 meses anteriores à internação nem até o mês após a alta'}
                    indicador={692}
                    indicadorDescricao={'Usuários'}
                    statusAntes={true}
                    statusDepois={false}
                />
            </div>

            <div className={ cx(style.TerceiraColuna, style.SextoCard) }>
                <CardInfoAux
                    descricao={'Não foram atendidos na RAPS nos 6 meses anteriores à internação nem até o mês após a alta'}
                    indicador={692}
                    indicadorDescricao={'Usuários'}
                    statusAntes={true}
                    statusDepois={false}
                />
            </div>

            <div className={ cx(style.QuartaColuna, style.NonoCard) }>
                <CardInfoAux
                    descricao={'Não foram atendidos na RAPS nos 6 meses anteriores à internação nem até o mês após a alta'}
                    indicador={692}
                    indicadorDescricao={'Usuários'}
                    statusAntes={true}
                    statusDepois={false}
                />
            </div>

            <div className={ cx(style.QuintaColuna, style.DecimoSegundoCard) }>
                <CardInfoAux
                    descricao={'Não foram atendidos na RAPS nos 6 meses anteriores à internação nem até o mês após a alta'}
                    indicador={692}
                    indicadorDescricao={'Usuários'}
                    statusAntes={true}
                    statusDepois={false}
                />
            </div>

            <div className={ cx(style.PrimeiraColuna, style.PrimeiroCard) }>
                <CardIndicadorDescricao
                    // descricao={ 'descricao' }
                    indicador={ 5 }
                    // indicadorSimbolo={ indicadorSimbolo }
                    indicadorDescricao={ 'indicadorDescricao' }
                />
            </div>

            <div className={ style.SegundaColuna }>
                <CardIndicadorDescricao
                    // descricao={ 'descricao' }
                    indicador={ 5 }
                    // indicadorSimbolo={ indicadorSimbolo }
                    indicadorDescricao={ 'indicadorDescricao' }
                />
            </div>

            <div className={ style.TerceiraColuna }>
                <CardIndicadorDescricao
                    // descricao={ 'descricao' }
                    indicador={ 5 }
                    // indicadorSimbolo={ indicadorSimbolo }
                    indicadorDescricao={ 'indicadorDescricao' }
                />
            </div>

            <div className={ style.QuartaColuna }>
                <CardIndicadorDescricao
                    // descricao={ 'descricao' }
                    indicador={ 5 }
                    // indicadorSimbolo={ indicadorSimbolo }
                    indicadorDescricao={ 'indicadorDescricao' }
                />
            </div>

            <div className={ style.QuintaColuna }>
                <CardIndicadorDescricao
                    // descricao={ 'descricao' }
                    indicador={ 5 }
                    // indicadorSimbolo={ indicadorSimbolo }
                    indicadorDescricao={ 'indicadorDescricao' }
                />
            </div>

            <div className={ style.PrimeiraColuna }>
                <CardIndicadorDescricao
                    // descricao={ 'descricao' }
                    indicador={ 5 }
                    // indicadorSimbolo={ indicadorSimbolo }
                    indicadorDescricao={ 'indicadorDescricao' }
                />
            </div>

            <div className={ cx(style.SegundaColuna, style.QuintoCard) }>
                <CardIndicadorDescricao
                    // descricao={ 'descricao' }
                    indicador={ 5 }
                    // indicadorSimbolo={ indicadorSimbolo }
                    indicadorDescricao={ 'indicadorDescricao' }
                />
            </div>

            <div className={ style.TerceiraColuna }>
                <CardIndicadorDescricao
                    // descricao={ 'descricao' }
                    indicador={ 5 }
                    // indicadorSimbolo={ indicadorSimbolo }
                    indicadorDescricao={ 'indicadorDescricao' }
                />
            </div>

            <div className={ style.QuartaColuna }>
                <CardIndicadorDescricao
                    // descricao={ 'descricao' }
                    indicador={ 5 }
                    // indicadorSimbolo={ indicadorSimbolo }
                    indicadorDescricao={ 'indicadorDescricao' }
                />
            </div>

            <div className={ style.QuintaColuna }>
                <CardIndicadorDescricao
                    // descricao={ 'descricao' }
                    indicador={ 5 }
                    // indicadorSimbolo={ indicadorSimbolo }
                    indicadorDescricao={ 'indicadorDescricao' }
                />
            </div>
        </div>
    );
};

export {
    CardIndicadorDescricao,
    CardInfoAux,
    ContainerCards
};

