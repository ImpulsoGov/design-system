import React, { useEffect, useState } from "react";
import style from "./PainelBuscaAtiva.module.css";
import { Modal } from "../Modal/Modal";
import { TabelaHiperDia } from "../TabelaHiperDia";
import { Toast } from "../Toast";
import { CardAlert } from "../CardAlert";
import * as Components from "./components";
import * as helpers from "./helpers";

const PainelBuscaAtiva = ({
    tabela,
    dadosFiltros,
    painel,
    setData,
    datefiltros,
    IntFiltros,
    IDFiltros,
    rotulosfiltros,
    IDFiltrosOrdenacao,
    atualizacao,
    setFiltros_aplicados,
    trackObject = { track: () => {} },
    aba = "",
    sub_aba = "",
    rowHeight = null,
    onPrintClick = () => {},
    showSnackBar,
    setShowSnackBar,
})=>{
    const [tableData, setTableData] = useState(tabela.data)
    const [showOrdenarModal,setShowOrdenarModal] = useState(false)
    const [showFiltrosModal,setShowFiltrosModal] = useState(false)
    const [ordenar,setOrdenar] = useState('1')
    const [ordenacaoAplicada,setOrdenacaoAplicada] = useState(false)
    const [modal,setModal] = useState(false)
    const [chavesFiltros,setChavesFiltros] = useState([])

    function updateData(newData){
        setData(newData);
        setTableData(newData);
    }

    const showOrdenar = ()=>{
        setModal(true)
        setShowOrdenarModal(true)
        setShowFiltrosModal(false)
    }
    const showFiltros = ()=>{
        setModal(true)
        setShowOrdenarModal(false)
        setShowFiltrosModal(true)
        helpers.chavesFiltrosToCheckBoxesValues(chavesFiltros,value,setValue)
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

    function handlePrintClick() {
        onPrintClick(tableData);
    }

    return(
        <div style={{marginTop : "30px"}} data-testid="PainelBuscaAtiva">
            {
                modal &&
                <div className={style.ModalContainer}>
                    <div
                        className={style.ModalBlur}
                        onClick={()=>setModal(false)}
                        data-testid="BlurArea"
                    ></div>
                    <Modal
                        show={modal}
                        setModal={setModal}
                    >
                        {
                            showOrdenarModal &&
                            <Components.Ordenar
                                painel={painel}
                                ordenar={ordenar}
                                setOrdenar={setOrdenar}
                                data={tableData}
                                updateData={updateData}
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
                                updateData={updateData}
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
                                ordenacaoAplicada={ordenacaoAplicada}
                            />
                        }
                    </Modal>
                </div>
            } 
            <div className={style.AtualizacaoConteiner}>
                <div className={style.Atualizacao}>PRODUÇÃO MAIS RECENTE RECEBIDA EM: {atualizacao}</div>
            </div>
            <Components.ToolBar
                showFiltros={showFiltros}
                showOrdenar={showOrdenar}
                chavesFiltros={chavesFiltros}
                updateData={updateData}
                tabela={tabela.data}
                ordenacaoAplicada={ordenacaoAplicada}
                handlePrintClick={handlePrintClick}
            />
            <TabelaHiperDia
                colunas={tabela.colunas}
                data={tableData}
                rowHeight={rowHeight}
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
