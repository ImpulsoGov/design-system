import React, { useEffect, useState } from "react";
import { ButtonColorSubmit } from "../ButtonColor/ButtonColor";
import { ButtonLightSubmit, ButtonColorSubmitIcon } from "../ButtonLight/ButtonLight";
import { Modal } from "../Modal/Modal";
import { TabelaHiperDia } from "../TabelaHiperDia";
import { FiltroCard } from "./components/FiltroCard";
import { Toast } from "../Toast";
import { CardAlert } from "../CardAlert";
import style from "./PainelBuscaAtiva.module.css";
import Tippy from "@tippyjs/react";
import "./tippy_theme.css";
import 'tippy.js/dist/svg-arrow.css';

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
const sortByDate = (data, filtro, IDFiltrosOrdenacao)=>{
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
const sortInt = (data, filtro, IDFiltrosOrdenacao)=>[...data].sort((a,b) => IDFiltrosOrdenacao[filtro] == "desc" ? Number(b[filtro]) - Number(a[filtro]) : Number(a[filtro]) - Number(b[filtro]))

const sortByString = (data, filtro)=>[...data].sort((a,b) => a[filtro]?.toString().localeCompare(b[filtro]?.toString()) )

const sortByChoice = (data, filtro, IDFiltrosOrdenacao, datefiltros, IntFiltros) => {
    if (datefiltros.includes(filtro)) {
        return sortByDate(data, filtro, IDFiltrosOrdenacao);
    }

    if (IntFiltros?.includes(filtro)) {
        return sortInt(data, filtro, IDFiltrosOrdenacao);
    }

    return sortByString(data, filtro);
}

const SortData = ({
    data,
    setData,
    filtro,
    datefiltros,
    IntFiltros,
    setModal,
    setOrdenacaoAplicada,
    IDFiltrosOrdenacao,
    trackObject,
    painel,
    aba,
    sub_aba,
    setShowSnackBar,
})=>{
    setData(sortByChoice(data, filtro, IDFiltrosOrdenacao, datefiltros, IntFiltros))
    setShowSnackBar({
        open: true,
        message: "Lista ordenada com sucesso!",
        background: "#2EB280",
        color: "white",
    })

    trackObject.track('button_click', {
        'button_action': 'aplicar_ordenacao',
        'nome_lista_nominal': painel,
        'aba_lista_nominal' : aba,
        'sub_aba_lista_nominal' : sub_aba,
        'button_choices' : filtro
    }) 
    setModal(false)
    setOrdenacaoAplicada(true)
}

const agruparChavesIguais =(filtros)=>{
    const chavesUnicas = [...new Set(filtros.flatMap(objeto => Object.keys(objeto)))];
    return chavesUnicas.map(chave => {
        const objetosComChave = filtros.filter(objeto => objeto.hasOwnProperty(chave));
        const valores = objetosComChave.map(objeto => objeto[chave]);
        return { [chave]: valores };
    });
}

const filterByChoices = (data, filterChoices) => {
    return data.filter(item => {
        return filterChoices.every(filter =>{
            if (!item[Object.keys(filter)[0]]) return false
            return filter["consultas_pre_natal_validas"] ? true : filter[Object.keys(filter)[0]].includes(item[Object.keys(filter)[0]].toString())
        });
    }).filter(item=>{
        const filtroConsultas = filterChoices.filter(item=>item.hasOwnProperty('consultas_pre_natal_validas'))?.length > 0 ? filterChoices.filter(item=>item.hasOwnProperty('consultas_pre_natal_validas'))[0] : []
        if(filtroConsultas["consultas_pre_natal_validas"]?.length > 0){
            if(filtroConsultas["consultas_pre_natal_validas"]=='Maior ou igual a 6' && Number(item["consultas_pre_natal_validas"]) >= 6) return true
            if(filtroConsultas["consultas_pre_natal_validas"]=='Menor que 6' && Number(item["consultas_pre_natal_validas"]) < 6) return true
            return false
        }
        return true
    })
}

const FilterData = (props)=>{
    const filtros = ValuesToChavesFiltros(props.value,props.setChavesFiltros,props.dadosFiltros)
    const filtrosAgrupados = agruparChavesIguais(filtros)
    const dadosFiltrados = filterByChoices(props.data, filtrosAgrupados)
    const dadosOrdenados = sortByChoice(dadosFiltrados, props.ordenar, props.IDFiltrosOrdenacao, props.datefiltros, props.IntFiltros)
    console.log(props)
    props.setData(dadosOrdenados)
    props.setShowSnackBar({
        open: true,
        message: "Filtros aplicados com sucesso!",
        background: "#2EB280",
        color: "white",
    })

    props.trackObject.track('button_click', {
        'button_action': 'aplicar_filtro',
        'nome_lista_nominal': props.painel,
        'aba_lista_nominal' : props.aba,
        'sub_aba_lista_nominal' : props.sub_aba,
        'button_choices' : filtrosAgrupados
    });

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
        if(filtro) chaves.push({ [filtro] : checkbox})
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
    ordenacaoAplicada,
    onPrintClick,
})=>{
    const [nome,setNome] =useState('')
    const filterbyName = ()=>setData(tabela.filter(item=>item[item?.cidadao_nome ? "cidadao_nome" : "paciente_nome"].toUpperCase().includes(nome.toUpperCase())))
    useEffect(()=>{
        if(nome.length<=0) setData(tabela)
    },[nome])

    function handlePrintClick() {
        onPrintClick(data);
    }

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
            <ButtonLightSubmit label="FILTRAR A LISTA" submit={showFiltros} icon={chavesFiltros.length>0 ? "https://media.graphassets.com/1rnUv5WSTKmCHnvqciuW" : "https://media.graphassets.com/1WHJsCigTXyJbq7Tw47m"}/>
            <Tippy
                content={ "O número de pacientes na lista é muito grande, aplique algum filtro para que o carregamento da impressão seja mais rápido" }
                placement="bottom"
                theme="alert"
                arrow={true}
            >
                <div>
                <ButtonColorSubmitIcon
                    label="IMPRIMIR LISTA"
                    icon="https://media.graphassets.com/3vsKrZXYT9CdxSSyhjhk"
                    submit={handlePrintClick}
                />
                </div>
            </Tippy>
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
        let dados = props.tabela
        const temFiltrosAplicados = Object.values(props.filtros).some((filtro) => filtro);

        if (temFiltrosAplicados) {
            const filtrosEscolhidos = ValuesToChavesFiltros(props.filtros, props.setChavesFiltros, props.dadosFiltros)
            const filtrosAgrupados = agruparChavesIguais(filtrosEscolhidos)
            dados = filterByChoices(props.tabela, filtrosAgrupados)
        }

        props.setOrdenar()
        props.setData(dados)
        props.setModal(false)
        props.setOrdenacaoAplicada(false)
    }
    return(
        <div className={style.containerOrdenar}>
            <p className={style.OrdenarPor}>Ordenar por:</p>
            {filtros_painel.rotulos.map((label)=><CardFiltro label={label} setOrdenar={props.setOrdenar} ordenar={props.ordenar} ID={filtros_painel.ID} key={label} />)}
            <div className={style.AplicarFiltros}>
                <ButtonLightSubmit
                        label="Limpar ordenação" 
                        submit={limpar} 
                    />

                <ButtonColorSubmit 
                    label="ORDENAR LISTA" 
                    submit={SortData} 
                    arg={{
                        data : props.data,
                        filtro : props.ordenar,
                        setData:props.setData, 
                        datefiltros : props.datefiltros,
                        IntFiltros : props.IntFiltros, 
                        setModal : props.setModal, 
                        setOrdenacaoAplicada : props.setOrdenacaoAplicada, 
                        IDFiltrosOrdenacao : props.IDFiltrosOrdenacao,
                        trackObject : props.trackObject,
                        painel : props.painel,
                        aba : props.aba,
                        sub_aba : props.sub_aba,
                        setShowSnackBar: props.setShowSnackBar,
                }}/>       
            </div>
        </div>
    )
}
// TODO remover props não utilizadas
const FiltroBody = ({
    data,
    chavesFiltros,
    setChavesFiltros,
    value,
    handleCheckbox,
    trackObject,
    painel,
    aba,
    sub_aba,
    isUnfolded = false,
    onClick = () => {},
})=>{
    const [show,setShow] = useState(false)

    useEffect(() => {
        setShow(isUnfolded);
    }, [isUnfolded])

    function handleClick() {
        setShow((prevState) => !prevState);
        onClick(data.rotulo);
    }

    return(
        <>
            <div className={style.ConteinerFiltro}>
                <div className={style.tituloFiltro}>
                    <p>{data.rotulo}</p>
                    <button
                        className={style.ShowFiltros}
                        onClick={handleClick}
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
                                        label={data?.labels ? data?.labels[item] : item}
                                        filtroID={data.filtro}
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
    setModal,
    trackObject,
    painel,
    aba,
    sub_aba,
    setOrdenar,
    setOrdenacaoAplicada,
    ordenar,
    datefiltros,
    IntFiltros,
    IDFiltrosOrdenacao,
    setShowSnackBar,
})=>{
    const [unfoldedFilter, setUnfoldedFilter] = useState('')

    function updateUnfoldedFilter(filterName) {
        setUnfoldedFilter(filterName);
    }

    const LimparFiltros = ()=>{
        setData(sortByChoice(tabela, ordenar, IDFiltrosOrdenacao, datefiltros, IntFiltros))
        setChavesFiltros([])
        setModal(false)
    }
    return(
        <div className={style.Filtro}>
            <div style={{overflowY : 'scroll',height:'70vh',width : '120%'}}>
                {
                    data.map((filtro)=><FiltroBody
                        data={filtro} 
                        key={filtro.rotulo}
                        chavesFiltros={chavesFiltros}
                        setChavesFiltros={setChavesFiltros}
                        value={value}
                        handleCheckbox={handleCheckbox}
                        trackObject={trackObject}
                        painel={painel}
                        aba={aba}
                        sub_aba={sub_aba}
                        isUnfolded={unfoldedFilter === filtro.rotulo}
                        onClick={updateUnfoldedFilter}
                    />)
                }
            </div>
            <div className={style.AplicarFiltros}>
                <ButtonLightSubmit
                    label="LIMPAR FILTROS" 
                    submit={LimparFiltros} 
                />
                <ButtonColorSubmit 
                    label="FILTRAR LISTA" 
                    submit={FilterData} 
                    arg={{
                        data : tabela,
                        setData : setData,
                        filtros : chavesFiltros,
                        setModal : setModal,
                        value : value,
                        setChavesFiltros : setChavesFiltros,
                        dadosFiltros : data,
                        trackObject : trackObject,
                        painel : painel,
                        aba : aba,
                        sub_aba : sub_aba,
                        setOrdenar,
                        setOrdenacaoAplicada,
                        ordenar,
                        datefiltros,
                        IntFiltros,
                        IDFiltrosOrdenacao,
                        setShowSnackBar,
                    }}
                />  
            </div>
            <div className={style.AplicarfiltrosCase}></div>          
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
    setFiltros_aplicados,
    trackObject = null,
    aba = "",
    sub_aba = "",
    rowHeight,
    onPrintClick = () => {},
    showSnackBar,
    setShowSnackBar,
})=>{
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
    const handleCheckbox = (property, checked) => {
        setValue({
            ...value,
            [property]: checked,
        })
    };
    useEffect(()=>{
        setFiltros_aplicados(Object.values(value).some(value=> value==true))
    },[value])
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
                'nome_lista_nominal': painel,
                'aba_lista_nominal' : aba,
                'sub_aba_lista_nominal' : sub_aba
            });
        }
    
        if (showFiltrosModal) {
            trackObject.track('button_click', {
                'button_action': "abrir_filtro",
                'nome_lista_nominal': painel,
                'aba_lista_nominal' : aba,
                'sub_aba_lista_nominal' : sub_aba
            });
        }
        
    }, [showOrdenarModal, showFiltrosModal]);

    const closeToast = () => {
        setShowSnackBar((prevState) => ({
            ...prevState,
            open: false,
        }))
    }

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
                                trackObject={trackObject}
                                aba={aba}
                                sub_aba={sub_aba}
                                filtros={value}
                                setChavesFiltros={setChavesFiltros}
                                dadosFiltros={dadosFiltros}
                                setShowSnackBar={setShowSnackBar}
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
                                trackObject={trackObject}
                                painel={painel}
                                aba={aba}
                                sub_aba={sub_aba}
                                setOrdenar={setOrdenar} 
                                setOrdenacaoAplicada={setOrdenacaoAplicada}
                                ordenar={ordenar} 
                                datefiltros={datefiltros}
                                IntFiltros={IntFiltros}
                                IDFiltrosOrdenacao={IDFiltrosOrdenacao}
                                setShowSnackBar={setShowSnackBar}
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
                onPrintClick={onPrintClick}
            />
            <TabelaHiperDia 
                colunas={tabela.colunas} 
                data={data} 
                rowHeight={rowHeight ? rowHeight : null}
            />
            <Toast
                open={showSnackBar.open}
                autoHideDuration={4000}
                onClose={closeToast}
            >
                <CardAlert
                    msg={showSnackBar.message}
                    color={showSnackBar.color}
                    background={showSnackBar.background}
                    margin="0px"
                />
            </Toast>
        </div>
    )
}


export { Filtro, FiltroBody, PainelBuscaAtiva };

