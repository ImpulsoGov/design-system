import React, { useEffect, useState } from "react";
import style from "./PainelBuscaAtiva.module.css";
import { Modal } from "../Modal/Modal";
import { ButtonLightSubmit } from "../ButtonLight/ButtonLight";
import { ButtonColorSubmit } from "../ButtonColor/ButtonColor";
import { TabelaHiperDia } from "../TabelaHiperDia";

//Essa função considera que str esta no formato dd/mm/aa
const stringToDate = (str)=>{
    const parts = str.split('/');
    const dia = parseInt(parts[0]);
    const mes = parseInt(parts[1]) -1;
    const ano = 2000 + parseInt(parts[2]);
    const date = new Date(ano, mes ,dia);
    return date
}

const SortData = ({
    data,
    setData,
    filtro
})=>{
    const sortByDate = (data)=>{
        return [...data].sort((a,b) => stringToDate(a[filtro]) - stringToDate(b[filtro])
    )}
    const sortByString = (data)=>[...data].sort((a,b) => a[filtro].localeCompare(b[filtro]) )
    const datefiltros = [
        "dt_afericao_pressao_mais_recente",
        "dt_consulta_mais_recente",
        "dt_afericao_hemoglobina_glicada_mais_recente",
    ]
    if(datefiltros.includes(filtro)){ 
        setData(sortByDate(data))
    }else{
        setData(sortByString(data))
    }
}

const ToolBar = ({
    showFiltros,
    showOrdenar,
    painel,
    ordenar,
    setOrdenar,
    data,
    setData,
    tabela
})=>{
    const [nome,setNome] =useState('')
    const filterbyName = ()=>setData(tabela.filter(item=>item.nome.toUpperCase().includes(nome.toUpperCase())))
    
    return(
        <div className={style.ToolBar}>
            <input 
                className={style.SearchBar} 
                placeholder="PESQUISE UM NOME" 
                value={nome}
                onChange={(e) => {setNome(e.target.value);filterbyName();}}
            />
            <ButtonLightSubmit label="ORDENAÇÃO" submit={showOrdenar} arg={{painel,ordenar,setOrdenar,data,setData}}/>
            <ButtonLightSubmit label="FILTROS" submit={showFiltros}/>
        </div>
    )
}
const rotulosfiltrosHipertensao = [
    "DATA DA CONSULTA MAIS RECENTE",
    "PRAZO PARA PRÓXIMA CONSULTA",
    "NOMES DE A-Z",
    "DATA DA AFERIÇÃO DE PA MAIS RECENTE",
]
const rotulosfiltrosDiabetes = [
    "DATA DA CONSULTA MAIS RECENTE",
    "PRAZO PARA PRÓXIMA CONSULTA",
    "NOMES DE A-Z",
    "DATA DA AFERIÇÃO DE HEMOGLOBINA GLICADA MAIS RECENTE",
]
const IDFiltrosHipertensao = {
    "DATA DA CONSULTA MAIS RECENTE" : "dt_consulta_mais_recente",
    "PRAZO PARA PRÓXIMA CONSULTA" : "prazo_proxima_consulta",
    "NOMES DE A-Z": "nome",
    "DATA DA AFERIÇÃO DE PA MAIS RECENTE": "dt_afericao_pressao_mais_recente",
}
const IDFiltrosDiabetes = {
    "DATA DA CONSULTA MAIS RECENTE" : "dt_consulta_mais_recente",
    "PRAZO PARA PRÓXIMA CONSULTA" : "prazo_proxima_consulta",
    "NOMES DE A-Z": "nome",
    "DATA DA AFERIÇÃO DE HEMOGLOBINA GLICADA MAIS RECENTE" : "dt_afericao_pressao_mais_recente",
}

const CardFiltro = (props)=>{
    const OrdenarPor = ()=>{
        props.setOrdenar(props.ID[props.label])
    }
    return <div 
                onClick={OrdenarPor} 
                className={
                    props.ID[props.label] !== props.ordenar ?
                    style.cardFiltro :
                    style.cardFiltroSelected
                }
            >
                {props.label.toUpperCase()}
            </div>
}

const Ordenar = (props)=>{
    let filtros_painel
    if (props.painel == "hipertensao") filtros_painel = {
        "rotulos" : rotulosfiltrosHipertensao,
        "ID" : IDFiltrosHipertensao
    }
    if (props.painel == "diabetes") filtros_painel = {
        "rotulos" : rotulosfiltrosDiabetes,
        "ID" : IDFiltrosDiabetes
    }
    const limpar = ()=>{
        props.setOrdenar()
        props.setData(props.tabela)
    }
    return(
        <div className={style.containerOrdenar}>
            <p 
                className={style.limparOrdenacao}
                onClick={limpar}
            >Limpar ordenação</p>
            <p className={style.OrdenarPor}>Ordenar por:</p>
            {filtros_painel.rotulos.map((label)=><CardFiltro label={label} setOrdenar={props.setOrdenar} ordenar={props.ordenar} ID={filtros_painel.ID} key={label} />)}
            <ButtonColorSubmit label="APLICAR FILTROS" submit={SortData} arg={{data : props.data, filtro : props.ordenar, setData:props.setData}}/>            
        </div>
    )
}

const rotulosFiltrosPorEquipe = [
    "Filtrar por nome da equipe",
    "Filtrar por INE da equipe",
    "Filtrar por nome do ACS",
    "Filtrar por tipo de diagnóstico",
    "Filtrar por faixa etária"
]
const Filtro = ({
    filtro
})=>{
    const [show,setShow] = useState(false)
    return(
        <>
            <div>
                <p>{filtro}</p>
                <p>{show ? "+" : "-"}</p>
            </div>
            <p>Marcar Todas</p>
        </>
    )
}
const FiltroCard = ({
    label
})=>{
    return(
        <span>
            <input type="checkbox"/>
            <p>{label}</p>
        </span>
    )
}

const PainelBuscaAtiva = ({
    cards,
    tabela,
    graficos,
    painel,
    visualizacao
})=>{
    const [data,setData] = useState(tabela.data)
    const [showOrdenarModal,setShowOrdenarModal] = useState(false)
    const [showFiltrosModal,setShowFiltrosModal] = useState(false)
    const [ordenar,setOrdenar] = useState('1')
    const [modal,setModal] = useState(false)
    const [child,setChild] = useState()

    const showOrdenar = (ordenar)=>{
        setModal(true)
        setShowOrdenarModal(true)
        setShowFiltrosModal(false)
    }
    const showFiltros = ()=>{
        setModal(true)
        setShowOrdenarModal(false)
        setShowFiltrosModal(true)
    }
    return(
        <div>
            {
                modal && 
                <div className={style.ModalContainer}> 
                    <Modal 
                        show={modal} 
                        setModal={setModal} 
                    > 
                        {
                            showOrdenarModal && 
                            <Ordenar 
                                painel={painel} 
                                ordenar={ordenar} 
                                setOrdenar={setOrdenar} 
                                data={data} 
                                setData={setData} 
                                tabela={tabela.data}
                            />
                        }
                    </Modal>
                </div>
            }

            <ToolBar 
                showFiltros={showFiltros} 
                showOrdenar={showOrdenar} 
                painel={painel}
                setOrdenar={setOrdenar}
                ordenar={ordenar}
                data={data}
                setData={setData}
                tabela={tabela.data}
            />
            {
                visualizacao == "equipe" &&
                <TabelaHiperDia 
                    colunas={tabela.colunas} 
                    data={data} 
                />
            }
        </div>
    )
}


export {PainelBuscaAtiva}