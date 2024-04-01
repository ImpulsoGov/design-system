import React, { useEffect, useState } from "react";
import { ButtonColorSubmit } from "../ButtonColor/ButtonColor";
import { ButtonLightSubmit, ButtonColorSubmitIcon } from "../ButtonLight/ButtonLight";
import { Modal } from "../Modal/Modal";
import { TabelaHiperDia } from "../TabelaHiperDia";
import * as helpers from "./helpers";
import * as Components from "./components";

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
    setData(helpers.sortByChoice(data, filtro, IDFiltrosOrdenacao, datefiltros, IntFiltros))
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
            const filtrosEscolhidos = helpers.valuesToChavesFiltros(props.filtros, props.setChavesFiltros, props.dadosFiltros)
            const filtrosAgrupados = helpers.agruparChavesIguais(filtrosEscolhidos)
            dados = helpers.filterByChoices(props.tabela, filtrosAgrupados)
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
                            <Components.Filtro
                                data={dadosFiltros}
                                setData={setData}
                                tabela={tabela.data}
                                value={value}
                                handleCheckbox={handleCheckbox}
                                setChavesFiltros={setChavesFiltros}
                                setModal={setModal}
                                trackObject={trackObject}
                                painel={painel}
                                aba={aba}
                                sub_aba={sub_aba}
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


export {PainelBuscaAtiva}
