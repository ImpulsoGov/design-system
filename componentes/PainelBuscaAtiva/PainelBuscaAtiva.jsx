import React, { useEffect, useState } from "react";
import style from "./PainelBuscaAtiva.module.css";
import { Modal } from "../Modal/Modal";
import { TabelaHiperDia } from "../TabelaHiperDia";
import { Toast } from "../Toast";
import { CardAlert } from "../CardAlert";
import * as Components from "./components";
import * as helpers from "./helpers";
import generatePDF,{ usePDF } from 'react-to-pdf';
import { PersonalizacaoImpressao } from "../PersonalizacaoImpressao/PersonalizacaoImpressao";
import { ModalAlertControlled } from "../ModalAlert/ModalAlert";

const status_usuario_descricao = [
    {
      "id_status_usuario" : 0,
      "status_usuario_descricao" : "Sem dados",
      "atualizacao_data" : "2023-05-02T03:00:00.000Z"
    },
    {
      "id_status_usuario" : 1,
      "status_usuario_descricao" : "Com consulta e aferição de PA em dia",
      "atualizacao_data" : "2023-05-02T03:00:00.000Z"
    },
    {
      "id_status_usuario" : 2,
      "status_usuario_descricao" : "Sem consulta e aferição de PA em dia",
      "atualizacao_data" : "2023-05-02T03:00:00.000Z"
    },
    {
      "id_status_usuario" : 3,
      "status_usuario_descricao" : "Sem consulta em dia",
      "atualizacao_data" : "2023-05-02T03:00:00.000Z"
    },
    {
      "id_status_usuario" : 4,
      "status_usuario_descricao" : "Sem aferição de PA em dia",
      "atualizacao_data" : "2023-05-02T03:00:00.000Z"
    },
    {
      "id_status_usuario" : 5,
      "status_usuario_descricao" : "Com consulta e solicitação de hemoglobina em dia",
      "atualizacao_data" : "2023-05-02T03:00:00.000Z"
    },
    {
      "id_status_usuario" : 6,
      "status_usuario_descricao" : "Sem consulta e solicitação de hemoglobina em dia",
      "atualizacao_data" : "2023-05-02T03:00:00.000Z"
    },
    {
      "id_status_usuario" : 7,
      "status_usuario_descricao" : "Sem solicitação de hemoglobina em dia",
      "atualizacao_data" : "2023-05-02T03:00:00.000Z"
    },
    {
      "id_status_usuario" : 8,
      "status_usuario_descricao" : "Encerradas por DPP + 14 dias",
      "atualizacao_data" : "2023-05-02T03:00:00.000Z"
    },
    {
      "id_status_usuario" : 9,
      "status_usuario_descricao" : "Encerradas por parto ou aborto",
      "atualizacao_data" : "2023-05-15T03:00:00.000Z"
    },
    {
      "id_status_usuario" : 10,
      "status_usuario_descricao" : "Ativas",
      "atualizacao_data" : "2023-05-15T03:00:00.000Z"
    },
    {
      "id_status_usuario" : 11,
      "status_usuario_descricao" : "Gestantes inválidas",
      "atualizacao_data" : "2023-05-15T03:00:00.000Z"
    },
    {
      "id_status_usuario" : 12,
      "status_usuario_descricao" : "Coleta em dia",
      "atualizacao_data" : "2023-07-03T03:00:00.000Z"
    },
    {
      "id_status_usuario" : 13,
      "status_usuario_descricao" : "Nunca realizou coleta",
      "atualizacao_data" : "2023-07-03T03:00:00.000Z"
    },
    {
      "id_status_usuario" : 14,
      "status_usuario_descricao" : "Coleta com menos de 25 anos",
      "atualizacao_data" : "2023-07-03T03:00:00.000Z"
    },
    {
      "id_status_usuario" : 15,
      "status_usuario_descricao" : "Vence neste quadrimestre",
      "atualizacao_data" : "2023-07-03T03:00:00.000Z"
    },
    {
      "id_status_usuario" : 16,
      "status_usuario_descricao" : "Coleta vencida",
      "atualizacao_data" : "2023-07-03T03:00:00.000Z"
    }
]

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
    TabelaImpressao,
    showSnackBar,
    setShowSnackBar,
    propAgrupamentoImpressao = "",
})=>{
    const [tableData, setTableData] = useState(tabela.data)
    const [showOrdenarModal,setShowOrdenarModal] = useState(false)
    const [showFiltrosModal,setShowFiltrosModal] = useState(false)
    const [ordenar,setOrdenar] = useState('1')
    const [ordenacaoAplicada,setOrdenacaoAplicada] = useState(false)
    const [modal,setModal] = useState(false)
    const [chavesFiltros,setChavesFiltros] = useState([])
    const [showImpressao,setShowImpressao] = useState(false)
    const [showModalImpressao, setShowModalImpressao] = useState(false);
    const { toPDF, targetRef } = usePDF({
        filename: 'page.pdf',
        method : 'open',
        page : {
            orientation: 'landscape'
        }
    });

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
    const imprimirPDF = async ()=> toPDF()
    const mostrarImpressao = async ()=> setShowImpressao(true)
    const handlePrintClick = async()=> {
        await mostrarImpressao()
        await imprimirPDF()
        setShowImpressao(false)
    }

    const handleModalImpressaoClick = () => {
        const equipesFiltradas = helpers.buscarFiltroPorPropriedade(chavesFiltros, propAgrupamentoImpressao);

        equipesFiltradas.length === 1
            ? handlePrintClick()
            : setShowModalImpressao(true);
    }

    const fecharModalImpressao = () => setShowModalImpressao(false)

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
                handlePrintClick={handleModalImpressaoClick}
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
                <PersonalizacaoImpressao
                    titulo="PERSONALIZAR A IMPRESSÃO"
                    labelsPersonalizacaoPrincipal={{
                        titulo: "Deseja fazer uma impressão personalizada por Equipes?",
                        descricao: "A impressão personalizada agrupa os pacientes de acordo com as Equipes correspondentes. Qualquer filtrou ou ordenação selecionados anteriormente serão mantidos e aplicados dentro do agrupamento por equipes",
                        agrupamentoSim: "Sim",
                        agrupamentoNao: "Não",
                    }}
                    labelsPersonalizacaoSecundaria={{
                        titulo: "Outras personalizações de impressão:",
                        recomendacao: "Recomendadas para distribuição para coordenadoras de equipe",
                        separacaoGrupoPorFolha: "Imprimir grupos de pacientes por Equipes em folhas separadas",
                        ordenacao: "Ordenar pacientes por ACS",
                    }}
                    botao={{
                        label: "IMPRIMIR LISTA",
                        handleClick: () => {},
                    }}
                    handleClose={fecharModalImpressao}
                />
            </ModalAlertControlled>
            {
                showImpressao &&
                <TabelaImpressao
                    data={tableData}
                    colunas={tabela.colunas}
                    status_usuario_descricao={{ data: status_usuario_descricao }}
                    targetRef={targetRef}
                    fontFamily="sans-serif"
                />
            }
        </div>
    )
}

export {PainelBuscaAtiva}
