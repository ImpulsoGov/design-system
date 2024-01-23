import React, { useEffect, useState } from "react";
import style from "./PainelBuscaAtiva.module.css";
import { Modal } from "../Modal/Modal";
import { ButtonLightSubmit } from "../ButtonLight/ButtonLight";
import { ButtonColorSubmit } from "../ButtonColor/ButtonColor";
import { TabelaHiperDia } from "../TabelaHiperDia";

const stringToDate = (str)=>{
    if(!str) return null
    if(str=="-") return null
    //Essa função considera que str esta no formato aaaa-mm-dd
    const dataFormatoTraco = (str)=>{
        const parts = str.split('-');
        const ano = parseInt(parts[0]);
        const mes = parseInt(parts[1]) -1;
        const dia = parseInt(parts[2]);
        const date = new Date(ano, mes ,dia);
        return date
    }
    //Essa função considera que str esta no formato dd/mm/aaaa
    const dataFormatoBarra = (str)=>{
        const parts = str.split('/');
        const ano = parseInt(parts[2]);
        const mes = parseInt(parts[1]) -1;
        const dia = parseInt(parts[0]);
        const date = new Date(ano, mes ,dia);
        return date
    }
    if(str.includes('/')) return dataFormatoBarra(str) 
    if(str.includes('-')) return dataFormatoTraco(str) 
}
const SortData = ({
    data,
    setData,
    filtro,
    datefiltros,
    IntFiltros,
    setModal,
    setOrdenacaoAplicada,
    IDFiltrosOrdenacao
})=>{
    const sortByDate = (data)=>{
        return [...data].sort((a,b) =>{ 
            const valueA = stringToDate(a[filtro]) 
            const valueB = stringToDate(b[filtro])
            if (valueA === null && valueB === null) {
            return 0;
            } else if (valueA === null) {
            return 1;
            } else if (valueB === null) {
            return -1;
            }
            if(IDFiltrosOrdenacao[filtro] == "asc") return valueA - valueB 
            if(IDFiltrosOrdenacao[filtro] == "desc") return valueB - valueA  
        }
    )}
    const sortInt = (data)=>[...data].sort((a,b) => IDFiltrosOrdenacao[filtro] == "desc" ? Number(b[filtro]) - Number(a[filtro]) : Number(a[filtro]) - Number(b[filtro]))
    const sortByString = (data)=>[...data].sort((a,b) => a[filtro]?.toString().localeCompare(b[filtro]?.toString()) )
    datefiltros.includes(filtro) ? 
    setData(sortByDate(data)) :
    IntFiltros?.includes(filtro) ?
    setData(sortInt(data)) :
    setData(sortByString(data))
    setModal(false)
    setOrdenacaoAplicada(true)
}
const FilterData = (props)=>{
    const filtros = ValuesToChavesFiltros(props.value,props.setChavesFiltros,props.dadosFiltros)
    const agruparChavesIguais =(filtros)=>{
        const chavesUnicas = [...new Set(filtros.flatMap(objeto => Object.keys(objeto)))];
        return chavesUnicas.map(chave => {
            const objetosComChave = filtros.filter(objeto => objeto.hasOwnProperty(chave));
            const valores = objetosComChave.map(objeto => objeto[chave]);
            return { [chave]: valores };
        });
    }
    const filtrosAgrupados = agruparChavesIguais(filtros)
    props.setData(props.data.filter(item => {
        return filtrosAgrupados.every(filter =>{
            return filter["consultas_pre_natal_validas"] ? true : filter[Object.keys(filter)[0]].includes(item[Object.keys(filter)[0]]) 
        });
    }).filter(item=>{
        const filtroConsultas = filtrosAgrupados.filter(item=>item.hasOwnProperty('consultas_pre_natal_validas'))?.length > 0 ? filtrosAgrupados.filter(item=>item.hasOwnProperty('consultas_pre_natal_validas'))[0] : []
        if(filtroConsultas["consultas_pre_natal_validas"]?.length > 0){
            if(filtroConsultas["consultas_pre_natal_validas"]=='Maior ou igual a 6' && Number(item["consultas_pre_natal_validas"]) >= 6) return true
            if(filtroConsultas["consultas_pre_natal_validas"]=='Menor que 6' && Number(item["consultas_pre_natal_validas"]) < 6) return true
            return false
        }
        return true
    }))
    props.setModal(false)
}
const ValuesToChavesFiltros = (value,setChavesFiltros,dadosFiltros)=>{
    const checkboxes = Object.keys(value).map(key=>{
        if(value[key]) return key
    }) 
    const chaves = []
    checkboxes.forEach(checkbox=>{
        let filtro
        dadosFiltros.forEach(dadoFiltro=>{
            if(dadoFiltro.data.includes(checkbox)) filtro = dadoFiltro.filtro
        })
        if(filtro) chaves.push({ [filtro] : Number(checkbox) ? Number(checkbox) : checkbox})
    })
    setChavesFiltros(()=>chaves)
    return chaves
}
const chavesFiltrosToCheckBoxesValues = (chavesFiltros,value,setValue)=>{
    const value_temp = value
    Object.keys(value_temp).forEach(checkbox=>{
        value_temp[checkbox] = false
    })
    chavesFiltros.forEach(valor=>{
        value_temp[Object.values(valor)[0]] = true
    })
    setValue(()=>value_temp)
}
const ToolBar = ({
    showFiltros,
    showOrdenar,
    painel,
    chavesFiltros,
    ordenar,
    setOrdenar,
    data,
    setData,
    tabela,
    ordenacaoAplicada
})=>{
    const [nome,setNome] =useState('')
    const filterbyName = ()=>setData(tabela.filter(item=>item[item?.cidadao_nome ? "cidadao_nome" : "paciente_nome"].toUpperCase().includes(nome.toUpperCase())))
    useEffect(()=>{
        if(nome.length<=0) setData(tabela)
    },[nome])
    return(
        <div className={style.ToolBar}>
            <input 
                className={style.SearchBar} 
                placeholder="PESQUISE UM NOME" 
                value={nome}
                onChange={(e) => {setNome(e.target.value);filterbyName();}}
            />
            <ButtonLightSubmit 
                label="ORDENAR LISTA" 
                submit={showOrdenar} 
                arg={{painel,ordenar,setOrdenar,data,setData}}
                icon={ordenacaoAplicada ?
                     "https://media.graphassets.com/ZWmQGa3TEGVceKxm4nlw" : 
                     "https://media.graphassets.com/7E9qXtNTze5w3ozl6a5I"
                }
            />
            <ButtonLightSubmit label="FILTRAR LISTA NOMINAL" submit={showFiltros} icon={chavesFiltros.length>0 ? "https://media.graphassets.com/1rnUv5WSTKmCHnvqciuW" : "https://media.graphassets.com/1WHJsCigTXyJbq7Tw47m"}/>
        </div>
    )
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
    const filtros_painel = {
        "rotulos" : props.rotulosfiltros,
        "ID" : props.IDFiltros
    }
    const limpar = ()=>{
        props.setOrdenar()
        props.setData(props.tabela)
        props.setModal(false)
        props.setOrdenacaoAplicada(false)
    }
    return(
        <div className={style.containerOrdenar}>
            <div 
                className={style.limparOrdenacao}
                onClick={limpar}
            >Limpar ordenação</div>
            <p className={style.OrdenarPor}>Ordenar por:</p>
            {filtros_painel.rotulos.map((label)=><CardFiltro label={label} setOrdenar={props.setOrdenar} ordenar={props.ordenar} ID={filtros_painel.ID} key={label} />)}
            <ButtonColorSubmit label="ORDENAR LISTA" submit={SortData} arg={{data : props.data, filtro : props.ordenar, setData:props.setData, datefiltros : props.datefiltros,IntFiltros : props.IntFiltros, setModal : props.setModal, setOrdenacaoAplicada : props.setOrdenacaoAplicada, IDFiltrosOrdenacao : props.IDFiltrosOrdenacao}}/>            
        </div>
    )
}
const FiltroBody = ({
    data,
    chavesFiltros,
    setChavesFiltros,
    value,
    handleCheckbox
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
                        {
                            data.data.sort().map((item)=>{
                                return(
                                    <FiltroCard 
                                        label={item} 
                                        filtroID={data.filtro}
                                        chavesFiltros={chavesFiltros}
                                        setChavesFiltros={setChavesFiltros}
                                        labels={data?.labels ? data?.labels[item] : null}
                                        value={value}
                                        handleCheckbox={handleCheckbox}
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
    tabela,
    value,
    handleCheckbox,
    chavesFiltros,
    setChavesFiltros,
    setModal
})=>{
    const LimparFiltros = ()=>{
        setData(tabela)
        setChavesFiltros([])
        setModal(false)
        
    }
    return(
        <div className={style.Filtro}>
            <div className={style.LimparFiltros} onClick={LimparFiltros}>Limpar Filtros</div>
            <div style={{overflowY : 'scroll',height:'70vh',width : '120%'}}>
                {
                    data.map((filtro)=><FiltroBody
                        data={filtro} 
                        key={filtro.rotulo}
                        chavesFiltros={chavesFiltros}
                        setChavesFiltros={setChavesFiltros}
                        value={value}
                        handleCheckbox={handleCheckbox}
                    />)
                }
            </div>
            <div className={style.AplicarFiltros}>
                <ButtonColorSubmit 
                    label="FILTRAR LISTA NOMINAL" 
                    submit={FilterData} 
                    arg={{
                        data : tabela,
                        setData : setData,
                        filtros : chavesFiltros,
                        setModal : setModal,
                        value : value,
                        setChavesFiltros : setChavesFiltros,
                        dadosFiltros : data
                    }}
                />  
            </div>
            <div className={style.AplicarfiltrosCase}></div>          
        </div>
    )
}
const FiltroCard = ({
    label,
    filtroID,
    chavesFiltros,
    value,
    labels,
    handleCheckbox
})=>{
    return(
        <div className={style.FiltroCard}>
            <input 
                className={style.InputFiltroCard} 
                type="checkbox"
                onChange={handleCheckbox}
                name={filtroID}
                checked={value[label]}
                id={label}
            />
            <p>{labels ? labels : label}</p>
        </div>
    )
}
const PainelBuscaAtiva = ({
    tabela,
    dadosFiltros,
    painel,
    data,
    setData,
    datefiltros,
    IntFiltros,
    IDFiltros,
    rotulosfiltros,
    IDFiltrosOrdenacao,
    atualizacao,
    trackObject = null,
    lista = "",
    aba = "",
    sub_aba = "",
    rowHeight
})=>{
    console.log(IntFiltros)
    const [showOrdenarModal,setShowOrdenarModal] = useState(false)
    const [showFiltrosModal,setShowFiltrosModal] = useState(false)
    const [ordenar,setOrdenar] = useState('1')
    const [ordenacaoAplicada,setOrdenacaoAplicada] = useState(false)
    const [modal,setModal] = useState(false)
    const [chavesFiltros,setChavesFiltros] = useState([])
    const showOrdenar = ()=>{
        setModal(true)
        setShowOrdenarModal(true)
        setShowFiltrosModal(false)
    }
    const showFiltros = ()=>{
        setModal(true)
        setShowOrdenarModal(false)
        setShowFiltrosModal(true)
        chavesFiltrosToCheckBoxesValues(chavesFiltros,value,setValue)
    }
    let valores = {}
    dadosFiltros.forEach((item)=>item.data.forEach((valor)=>valores[valor]=false))
    const [value,setValue] = useState(valores)
    const handleCheckbox = (event) => {
        const { name, checked } = event.target;
        const updateState = {...value}
        updateState[event.target.id] = checked
        setValue(updateState)
    };
    useEffect(()=>{
        if(!modal && chavesFiltros.length==0){
            const value_temp = {}
            Object.keys(value).forEach(checkbox=>{
                value_temp[checkbox] = false
            })
            setValue(()=>value_temp)
        }
    },[modal])
    useEffect(() => {
        if (showOrdenarModal) {
            trackObject.track('button_click', {
                'button_action': "abrir_ordenacao",
                'nome_lista_nominal': lista,
                'aba_lista_nominal' : aba,
                'sub_aba_lista_nominal' : sub_aba
            });
        }
    
        if (showFiltrosModal) {
            trackObject.track('button_click', {
                'button_action': "abrir_filtro",
                'nome_lista_nominal': lista,
                'aba_lista_nominal' : aba,
                'sub_aba_lista_nominal' : sub_aba
            });
        }
        
    }, [showOrdenarModal, showFiltrosModal]);
    return(
        <div style={{marginTop : "30px"}}>
            {
                modal && 
                <div className={style.ModalContainer}> 
                    <div 
                        className={style.ModalBlur}
                        onClick={()=>setModal(false)}
                    ></div>
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
                                datefiltros={datefiltros}
                                IntFiltros={IntFiltros}
                                setModal={setModal}
                                setOrdenacaoAplicada={setOrdenacaoAplicada}
                                IDFiltros={IDFiltros}
                                rotulosfiltros={rotulosfiltros}
                                IDFiltrosOrdenacao={IDFiltrosOrdenacao}
                            />
                        }
                        {
                            showFiltrosModal &&
                            <Filtro 
                                data={dadosFiltros}
                                setData={setData} 
                                tabela={tabela.data}
                                value={value}
                                handleCheckbox={handleCheckbox}
                                chavesFiltros={chavesFiltros}
                                setChavesFiltros={setChavesFiltros}
                                setModal={setModal}
                            />
                        }
                    </Modal>
                </div>
            }
            <div className={style.AtualizacaoConteiner}>
                <div className={style.Atualizacao}>PRODUÇÃO MAIS RECENTE RECEBIDA EM: {atualizacao}</div>
            </div>
            <ToolBar 
                showFiltros={showFiltros} 
                showOrdenar={showOrdenar} 
                painel={painel}
                chavesFiltros={chavesFiltros}
                setOrdenar={setOrdenar}
                ordenar={ordenar}
                data={data}
                setData={setData}
                tabela={tabela.data}
                ordenacaoAplicada={ordenacaoAplicada}
            />
            <TabelaHiperDia 
                colunas={tabela.colunas} 
                data={data} 
                rowHeight={rowHeight ? rowHeight : null}
            />
        </div>
    )
}


export {PainelBuscaAtiva}