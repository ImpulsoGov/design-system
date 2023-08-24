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

const CardInfoStatus = ({ antes, depois }) => {
    return (
        <>
        <div className={ style.CardInfoStatus }>
            <span className={ cx(
                style.CardInfoStatusSymbol,
                antes.status ? style.TextoVerde : style.TextoVermelho
            ) }>
                { antes.status ? "✓" : "✕" }
            </span>

            <p className={ style.AntesDepois }>Antes</p>
            <CardInfoDescricao descricao = {antes.descricao}
            />
        </div>
        <div className={ style.CardInfoStatus }>
        <span className={ cx(
            style.CardInfoStatusSymbol,
            depois.status ? style.TextoVerde : style.TextoVermelho
        ) }>
            { depois.status ? "✓" : "✕" }
        </span>

        <p className={ style.AntesDepois }>Depois</p>
        <CardInfoDescricao descricao = {depois.descricao}
        />
    </div> 
        </>
        
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
        <div className={ cx(style.CardInfo) }>
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

const ContainerCards = ({
    cardsArray   
}) => {
    return (
        <div className={ style.ContainerCards }>
            <div className={ cx(style.PrimeiraColuna, style.AuxClassBorder) }></div>

            <div className={ cx(style.SegundaColuna, style.TerceiroCard) }>
                {/* <CardInfoStatus
                    antes={{status:false, descricao:'Não foram atendidos na RAPS nos 6 meses anteriores à internação nem até o mês após a alta'}}
                    depois={{status:false, descricao:'Não foram atendidos nem no mês da alta, nem no mês seguinte'}}  
                /> */}
                {cardsArray[0]}
            </div>

            <div className={ cx(style.TerceiraColuna, style.SextoCard) }>
                {/* <CardInfoStatus
                        antes={{status:true, descricao:'Foram atendidos na RAPS nos 6 meses anteriores à internação nem até o mês após a alta'}}
                        depois={{status:false, descricao:'Não foram atendidos nem no mês da alta, nem no mês seguinte'}}  
                    /> */}
                {cardsArray[1]}    
            </div>

            <div className={ cx(style.QuartaColuna, style.NonoCard) }>
                {/* <CardInfoStatus
                    antes={{status:true, descricao:'Foram atendidos na RAPS nos 6 meses anteriores à internação nem até o mês após a alta'}}
                    depois={{status:true, descricao:'Foram atendidos nem no mês da alta, nem no mês seguinte'}}  
                /> */}
                {cardsArray[2]}
            </div>

            <div className={ cx(style.QuintaColuna, style.DecimoSegundoCard) }>
                {/* <CardInfoStatus
                        antes={{status:false, descricao:'Não foram atendidos na RAPS nos 6 meses anteriores à internação nem até o mês após a alta'}}
                        depois={{status:true, descricao:'Foram atendidos nem no mês da alta, nem no mês seguinte'}}  
                    /> */}
                {cardsArray[3]}    
            </div>
            
            <div className={ cx(style.PrimeiraColuna, style.PrimeiroCard) }>
                {/* <CardPeriodos
                    // descricao={ 'descricao' }
                    titulo={ 'Anual'}
                    // indicadorSimbolo={ indicadorSimbolo }
                    descricao={ 'Internações finalizadas entre agosto de 2021 e julho de 2022.' }
                /> */}
                {cardsArray[4]}
            </div>

            <div className={ cx(style.SegundaColuna, style.QuartoCard) }>
                {/* <CardIndicadorDescricao
                    // descricao={ 'descricao' }
                    indicador={ 5117 }
                    // indicadorSimbolo={ indicadorSimbolo }
                    indicadorDescricao={ 'Usuários' }
                /> */}
                {cardsArray[5]}
            </div>

            <div className={ cx(style.TerceiraColuna, style.SetimoCard) }>
                {/* <CardIndicadorDescricao
                    // descricao={ 'descricao' }
                    indicador={ 3350 }
                    // indicadorSimbolo={ indicadorSimbolo }
                    indicadorDescricao={ 'Usuários' }
                /> */}
                {cardsArray[6]}
            </div>

            <div className={ style.QuartaColuna }>
                {/* <CardIndicadorDescricao
                    // descricao={ 'descricao' }
                    indicador={ 1818 }
                    // indicadorSimbolo={ indicadorSimbolo }
                    indicadorDescricao={ 'Usuários' }
                /> */}
                {cardsArray[7]}
            </div>

            <div className={ style.QuintaColuna }>
                {/* <CardIndicadorDescricao
                    // descricao={ 'descricao' }
                    indicador={ 1074 }
                    // indicadorSimbolo={ indicadorSimbolo }
                    indicadorDescricao={ 'Usuários' }
                /> */}
                {cardsArray[8]}
            </div>

            <div className={ style.PrimeiraColuna }>
                {/* <CardPeriodos
                    filtro={filtro}
                    // descricao={ 'descricao' }
                    titulo={ 'Mensal'}
                    // indicadorSimbolo={ indicadorSimbolo }
                    descricao={ 'Último mês disponível: Setembro' }
                /> */}
                {cardsArray[9]}
            </div>

            <div className={ cx(style.SegundaColuna, style.QuintoCard) }>
                {/* <CardIndicadorDescricao
                    // descricao={ 'descricao' }
                    indicador={ 5 }
                    // indicadorSimbolo={ indicadorSimbolo }
                    indicadorDescricao={ 'indicadorDescricao' }
                /> */}
                {cardsArray[10]}
            </div>

            <div className={ style.TerceiraColuna }>
                {/* <CardIndicadorDescricao
                    // descricao={ 'descricao' }
                    indicador={ 5 }
                    // indicadorSimbolo={ indicadorSimbolo }
                    indicadorDescricao={ 'indicadorDescricao' }
                /> */}
                {cardsArray[11]}
            </div>

            <div className={ style.QuartaColuna }>
                {/* <CardIndicadorDescricao
                    // descricao={ 'descricao' }
                    indicador={ 5 }
                    // indicadorSimbolo={ indicadorSimbolo }
                    indicadorDescricao={ 'indicadorDescricao' }
                /> */}
                {cardsArray[12]}
            </div>

            <div className={ cx(style.QuintaColuna, style.DecimoQuartoCard) }>
                {/* <CardIndicadorDescricao
                    // descricao={ 'descricao' }
                    indicador={ 5 }
                    // indicadorSimbolo={ indicadorSimbolo }
                    indicadorDescricao={ 'indicadorDescricao' }
                /> */}
                {cardsArray[13]}
            </div>
        </div>
    );
};

const CardPeriodos = ({
    titulo,
    descricao,
    filtro
}) =>{
    return ( <div className = {style.CardPeriodos}> 
        <h3>{titulo}</h3>
        <p className = {style.CardPeriodosDescricao}>{descricao}</p>
        {filtro && <>{filtro}</>}
    </div>

    );



}


export {
    CardIndicadorDescricao,
    CardInfoStatus,
    ContainerCards,
    CardPeriodos
};

