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
const FilterData = (props)=>{
    props.setData(props.data.filter(item => {
        return props.filtros.some(filter => filter[Object.keys(filter)[0]] === item[Object.keys(filter)[0]]);
    }))
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
    "DATA DA CONSULTA MAIS RECENTE" : "dt_ultima_consulta",
    "PRAZO PARA PRÓXIMA CONSULTA" : "prazo_proxima_consulta",
    "NOMES DE A-Z": "cidadao_nome",
    "DATA DA AFERIÇÃO DE PA MAIS RECENTE": "dt_afericao_pressao_mais_recente",
}
const IDFiltrosDiabetes = {
    "DATA DA CONSULTA MAIS RECENTE" : "dt_ultima_consulta",
    "PRAZO PARA PRÓXIMA CONSULTA" : "prazo_proxima_consulta",
    "NOMES DE A-Z": "cidadao_nome",
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
const FiltroBody = ({
    data,
    chavesFiltros,
    setChavesFiltros
})=>{
    const [show,setShow] = useState(false)
    return(
        <>
            <div className={style.ConteinerFiltro}>
                <div className={style.tituloFiltro}>
                    <p>{data.rotulo}</p>
                    <button
                        className={style.ShowFiltros}
                        onClick={()=>setShow(!show)}
                    >
                        {show ? "-" : "+"}
                    </button>
            </div>
                {
                    show &&
                    <div className={style.ConteinerFiltros}>
                        <div className={style.MarcarTodas}>Marcar Todas</div>
                        {
                            data.data.map((item)=>{
                                return(
                                    <FiltroCard 
                                        label={item} 
                                        filtroID={data.filtro}
                                        chavesFiltros={chavesFiltros}
                                        setChavesFiltros={setChavesFiltros}
                                        filtro={data.filtro}
                                    />
                                )
                            })
                        }
                    </div>
                }

            </div>
    </>
)
}

const Filtro = ({
    data,
    setData,
    tabela
})=>{
    const [chavesFiltros,setChavesFiltros] = useState([])
    return(
        <div className={style.Filtro}>
            {
                data.map((filtro)=><FiltroBody
                    data={filtro} 
                    key={filtro.rotulo}
                    chavesFiltros={chavesFiltros}
                    setChavesFiltros={setChavesFiltros}
                />)
            }
            <ButtonColorSubmit 
                label="APLICAR FILTROS" 
                submit={FilterData} 
                arg={{
                    data : tabela,
                    setData : setData,
                    filtros : chavesFiltros
                }}
            />            
        </div>
    )
}
const FiltroCard = ({
    label,
    filtroID,
    chavesFiltros,
    setChavesFiltros
})=>{
    const [value,setValue] = useState()
    const handleCheckbox = (event) => {
        const { name, checked } = event.target;
        setValue(checked)
        setChavesFiltros(() => {
            if (checked) return([
                    ...chavesFiltros,
                    {[name]: label}
            ])
            return chavesFiltros.filter(item=>item[name] !==  label)
        });
    };
    return(
        <div className={style.FiltroCard}>
            <input 
                className={style.InputFiltroCard} 
                type="checkbox"
                onChange={handleCheckbox}
                name={filtroID}
                value={value}
            />
            <p>{label}</p>
        </div>
    )
}

const PainelBuscaAtiva = ({
    tabela,
    dadosFiltros,
    painel,
    visualizacao
})=>{
    const [data,setData] = useState(tabela.data)
    const [showOrdenarModal,setShowOrdenarModal] = useState(false)
    const [showFiltrosModal,setShowFiltrosModal] = useState(false)
    const [ordenar,setOrdenar] = useState('1')
    const [modal,setModal] = useState(false)
    const showOrdenar = ()=>{
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
                        {
                            showFiltrosModal &&
                            <Filtro 
                                data={dadosFiltros}
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