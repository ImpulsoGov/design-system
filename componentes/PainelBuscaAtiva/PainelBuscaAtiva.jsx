import React, { useEffect, useState } from "react";
import style from "./PainelBuscaAtiva.module.css";
import { Modal } from "../Modal/Modal";
import { TabelaHiperDia } from "../TabelaHiperDia";
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
    trackObject = { track: () => {} },
    aba = "",
    sub_aba = "",
    rowHeight = null
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
            />
            <TabelaHiperDia
                colunas={tabela.colunas}
                data={tableData}
                rowHeight={rowHeight}
            />
        </div>
    )
}

export {PainelBuscaAtiva}
