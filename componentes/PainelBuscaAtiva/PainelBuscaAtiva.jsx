import React, { useEffect, useState } from "react";
import style from "./PainelBuscaAtiva.module.css";
import { Modal } from "../Modal/Modal";
import { TabelaHiperDia } from "../TabelaHiperDia";
import { Toast } from "../Toast";
import { CardAlert } from "../CardAlert";
import * as Components from "./components";
import * as helpers from "./helpers";
import { ModalAlertControlled } from "../ModalAlert/ModalAlert";
import { filtrosAplicadosImpressao } from "./components/Impressao/helpers/filtrosAplicadosImpressao";
import { TabelaImpressao } from "./components/Impressao/componentes/TabelaImpressao";
import { Imprimir } from "./components/Impressao/helpers/Imprimir";

const VALORES_AGRUPAMENTO_IMPRESSAO = { sim: "sim", nao: "não" };
const NUMERO_DE_FILTROS_PARA_IMPRESSAO_SEM_PERSONALIZACAO = 1;

const PainelBuscaAtiva = ({
    tabela,
    dadosFiltros,
    painel,
    lista,
    divisorVertical,
    largura_colunas_impressao,
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
    listas_auxiliares,
    propAgrupamentoImpressao = "",
    propOrdenacaoImpressao = "",
    labelsModalImpressao = {
        titulo: "",
        personalizacaoPrincipal: {},
        personalizacaoSecundaria: {},
        botao: "",
    },
    colunasImpressao = [],
    liberarPesquisa = () => {},
})=>{
    const [tableData, setTableData] = useState(tabela.data)
    const [showOrdenarModal,setShowOrdenarModal] = useState(false)
    const [showFiltrosModal,setShowFiltrosModal] = useState(false)
    const [ordenar,setOrdenar] = useState('1')
    const [ordenacaoAplicada,setOrdenacaoAplicada] = useState(false)
    const [modal,setModal] = useState(false)
    const [chavesFiltros,setChavesFiltros] = useState([])
    const [showModalImpressao, setShowModalImpressao] = useState(false);
    const [filtros_aplicados_impressao,set_filtros_aplicados_impressao] = useState()
    useEffect(()=>{
        set_filtros_aplicados_impressao(filtrosAplicadosImpressao(chavesFiltros))
    },[chavesFiltros])

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

    const fecharModalImpressao = () => setShowModalImpressao(false)

    const handlePrint = (dados, personalizacao) => {
        const TabelaImpressaoMounted = <TabelaImpressao
            data={dados}
            colunas={colunasImpressao}
            lista={lista}
            listas_auxiliares={listas_auxiliares}
            targetRef={null}
            data_producao_mais_recente = {atualizacao}
            fontFamily="Arial"
            divisao_dados={personalizacao.agrupamento === VALORES_AGRUPAMENTO_IMPRESSAO.sim}
            divisao_paginas={personalizacao.separacaoGrupoPorFolha}
            filtros_aplicados={filtros_aplicados_impressao}
            largura_colunas_impressao={largura_colunas_impressao}
            divisorVertical={divisorVertical}
            propAgrupamentoImpressao={propAgrupamentoImpressao}
        />

        Imprimir(1,TabelaImpressaoMounted,painel,aba,sub_aba,trackObject)
    }

    const processarPedidoDeImpressao = () => {
        const filtros = helpers.buscarFiltroPorPropriedade(chavesFiltros, propAgrupamentoImpressao);

        filtros.length === NUMERO_DE_FILTROS_PARA_IMPRESSAO_SEM_PERSONALIZACAO
            ? handlePrint(tableData, {
                agrupamento: VALORES_AGRUPAMENTO_IMPRESSAO.nao,
                separacaoGrupoPorFolha: false,
                ordenacao: false,
            })
            : setShowModalImpressao(true);

        liberarPesquisa();
    }

    const personalizarImpressao = (opcoes) => {
        if (opcoes.agrupamento === VALORES_AGRUPAMENTO_IMPRESSAO.nao) {
            handlePrint(tableData, {
                agrupamento: opcoes.agrupamento,
                separacaoGrupoPorFolha: false,
                ordenacao: false,
            });
        } else {
            const dadosImpressao = opcoes.ordenacao
                ? helpers.sortByString(tableData, propOrdenacaoImpressao)
                : tableData;

            handlePrint(dadosImpressao, opcoes);
        }

        fecharModalImpressao();
    }

    const imprimirVersaoLegada = () => {
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
                handlePrintClick={painel === "aps" ? processarPedidoDeImpressao : imprimirVersaoLegada}
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
            <ModalAlertControlled
                display={showModalImpressao}
                close={fecharModalImpressao}
            >
                <Components.PersonalizacaoImpressao
                    labels={labelsModalImpressao}
                    handleButtonClick={personalizarImpressao}
                    handleClose={fecharModalImpressao}
                    valoresAgrupamento={VALORES_AGRUPAMENTO_IMPRESSAO}
                />
            </ModalAlertControlled>
        </div>
    )
}

export {PainelBuscaAtiva}
