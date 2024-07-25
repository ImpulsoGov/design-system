import React, { useRef,useState, useEffect}  from "react";
import { DataGrid, ptBR } from '@mui/x-data-grid';
import style from "./TabelaHiperDia.module.css";

export const VERIFICADO = "https://media.graphassets.com/wOzzseVhRriXENS9OhcG";
export const ATENCAO = "https://media.graphassets.com/NPk8ggUoQzK18KSyAGL6";
export const AMPULHETA = "https://media.graphassets.com/OEg0Ik1ITqO9yqRT4fnd";

const atencao_simbolo = "https://media.graphassets.com/FmWKs2qkSOywVyzapKcg"
const alerta_simbolo  = "https://media.graphassets.com/Xc6Ac1QQfqcYdblW18rg"
const check_simbolo  = "https://media.graphassets.com/7u3RZBCRjeP22EvTQxd9"

const TabelaHiperDia = ({
  data,
  colunas,
  rowHeight
  }) => {
    const styles = {
      padding:"20px 40px 40px 40px",
      height: "80vh",
      width: window.innerWidth < 1024 ? '100%' : '93%',
      marginLeft : window.innerWidth < 1024 ? 0 : '45px'
    }
    const rowsID = data.map((row, index) => ({ ...row, id: index }));
    return (
        <>
            <div style={styles}>
                <DataGrid
                    rows={rowsID}
                    columns={colunas}
                    disableColumnMenu
                    initialState={{
                        ...data.initialState,
                        pagination: { paginationModel: { pageSize: 100 } },
                    }}                                
                    pageSizeOptions={[10, 30, 45, 100]}
                    rowsPerPageOptions={[30]}
                    getRowId={(row) => row.id}
                    rowHeight={ rowHeight ? rowHeight : 35}
                    localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
                    sx={{
                        '& .MuiDataGrid-columnHeaderTitle': {
                            textOverflow: "clip",
                            whiteSpace: "break-spaces",
                            lineHeight: 1.2,
                            textAlign: "center",
                            fontFamily : "Inter !important",
                            fontSize : "12px !important",
                            fontWeight : 400,
                        },
                        '& .MuiDataGrid-columnHeaders': {
                            backgroundColor: "#C9D2D8",
                            marginBottom: "15px",
                            border: "none",
                            borderRadius: "10px",
                        },
                        '& .MuiDataGrid-withBorderColor': {
                            border: "none",
                        },
                        '& .MuiDataGrid-row': {
                            marginBottom: "5px",
                            fontFamily : "Inter !important",
                            fontSize : "14px !important",
                            backgroundColor : "#EFF5F9",
                            borderRadius: "10px",
                            padding: "4px",
                            height: "30px",
                            display: "flex",
                            justifyContent : "center",
                            alignItems: "center",
                            width: "98%"
                        },
                        '& .MuiDataGrid-root': {
                            border: "none",
                            borderWidth: "0px"
                        },
                        '& .MuiDataGrid-iconSeparator': {
                            display: 'none',
                        },
                        border : 0,

                    }}
                />
            </div>
        </>
)}

const PrazoProximaConsultaStyle = (value)=> {
  const emDia = {
    backgroundColor: "#E7FBF3",
    border: "1px solid #9DEECD",
    borderRadius: "5px",
    color: "#1D856C",
    padding: "3px 10px",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "5px",
    width: "fit-content",
  }
  const prazo = {
    backgroundColor: "#FFF0E1",
    border: "1px solid #F4CCAB",
    borderRadius: "5px",
    color: "#E98633",
    padding: "3px 10px",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "5px",
    width: "fit-content",
  }
  const style = (value == "Em dia") ? emDia : prazo
  const icone = (value == "Em dia") ? VERIFICADO : ATENCAO

  return (
    <div style={ style }>
      <img src={ icone } width={ 16 } height={ 16 } />
      <div>{ value }</div>
    </div>
  )
}
  
  const FormatarData = (str)=>{
    if(!str) return null
    const parts = str.split('-');
    const dia = parts[2];
    const mes = parts[1];
    const ano = parts[0];
    const ano2Digitos = ano.slice(-2);
    const date = `${dia}/${mes}/${ano2Digitos}`
    return date
  }
  const FormatarDataNascimento = (str)=>{ 
    let date
    if(str.includes('-')){
        const parts = str.split('-');
        const dia = parts[2];
        const mes = parts[1];
        const ano = parts[0];
        date = `${dia}/${mes}/${ano}`
    }
    return str.includes('-') ?  date : str
  }

const exibirTagDataAusente = (texto) => {
  const estiloTag = {
    borderRadius: "5px",
    border: "1px solid #A6B5BE",
    color: "#606E78",
    fontWeight: "600",
    display: "flex",
    padding: "3px 10px",
    alignItems: "center",
    justifyContent: "center",
    gap: "5px",
    width: "fit-content",
  };

  return (
    <div style={ estiloTag }>
      <img src={ AMPULHETA } width={ 16 } height={ 16 } />
      <div>{ texto }</div>
    </div>
  );
};

const tratarData = (data) => data ? FormatarData(data) : exibirTagDataAusente("Não realizada");



const TabelaHiperDiaImpressao = ({ data, colunas, fontFamily = "Inter" }) => {
    return (
      <table style={{
        borderCollapse: "collapse",
        margin: "15px",
        color:  "#1F1F1F",
        textAlign: "center",
        fontSize: "12px",
        fontFamily,
        letterSpacing: "-0.12px",
        textTransform: "uppercase",
      }}>
        <thead>
          <tr style={{
                backgroundColor: "#C9D2D8",
                borderRadius: "10px"
            }}>
            {colunas.map((coluna) => (
              <th className={style.colunaTitulo} key={coluna.headerName}>{coluna.headerName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr 
                key={item.id}
                style={{
                    backgroundColor : "#EFF5F9",
                    border : "solid 4px white",
                }}
            >
              {colunas.map((coluna,index) => (
                <td 
                    key={`${item.id}-${coluna}`}
                    style={{
                        borderTopLeftRadius: index!=0 ? "0" : "15px",
                        borderBottomLeftRadius: index!=0 ? "0" : "15px",
                        borderTopRightRadius: index!=7 ? "0" : "15px",
                        borderBottomRightRadius: index!=7 ? "0" : "15px",
                        display : index==4 || index==6 ? "flex" : "table cell",
                        justifyContent : "center",
                        alignItems : "center",
                        marginTop : "4px"
                    }}
                >
                  {
                    coluna.field=="dt_consulta_mais_recente"  &&
                    tratarData(item[coluna.field])
                  }
                  {
                    coluna.field=="dt_ultima_consulta"  &&
                    tratarData(item[coluna.field])
                  }
                  {
                    coluna.field=="dt_afericao_pressao_mais_recente"  &&
                    tratarData(item[coluna.field])
                  }
                  {
                    coluna.field=="dt_solicitacao_hemoglobina_glicada_mais_recente"  &&
                    tratarData(item[coluna.field])
                  }
                  {
                    coluna.field=="cidadao_cpf_dt_nascimento" && FormatarDataNascimento(item[coluna.field])
                  }
                  {
                    coluna.field=="prazo_proxima_consulta"  &&
                    PrazoProximaConsultaStyle(item[coluna.field])
                  }
                  {
                    coluna.field=="prazo_proxima_afericao_pa"  &&
                    PrazoProximaConsultaStyle(item[coluna.field])
                  }
                  {
                    coluna.field=="prazo_proxima_solicitacao_hemoglobina"  &&
                    PrazoProximaConsultaStyle(item[coluna.field])
                  }
                  {
                    coluna.field!="dt_consulta_mais_recente" &&
                    coluna.field!="dt_ultima_consulta" &&
                    coluna.field!="dt_afericao_pressao_mais_recente" &&
                    coluna.field!="dt_solicitacao_hemoglobina_glicada_mais_recente" &&
                    coluna.field!="cidadao_cpf_dt_nascimento" &&
                    coluna.field!="prazo_proxima_consulta" &&
                    coluna.field!="prazo_proxima_afericao_pa" &&
                    coluna.field!="prazo_proxima_solicitacao_hemoglobina" &&
                    item[coluna.field]
                  }
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
const prazoStyle = (value)=>{
  const check = {
    backgroundColor: "#E7FBF3",
    border: "1px solid #1D856C",
    borderRadius: "5px",
    color: "#1D856C",
    padding: "2px",
    fontWeight : 550,
    width : "90%",
    display : "flex",
    gap : "5px",
    justifyContent : "center",
    padding : "3px"
  }

  const atencao = {
    backgroundColor: "#FFF0E1",
    border: "1px solid #DD6500",
    borderRadius: "5px",
    color: "#DD6500",
    fontWeight : 550,
    width : "90%",
    display : "flex",
    gap : "5px",
    justifyContent : "center",
    padding : "3px",
  }
  return <div style={value != "Em dia" ? atencao : check}>
      {value != "Em dia" && <span style={{display : "flex"}}><img src={atencao_simbolo}/></span>} 
      {value == "Em dia" && <span><img src={check_simbolo}/></span>} 
      {value}
      </div>

}
const selecionar_status_usuario_descricao = (value,status_usuario_descricao)=> {
    const alert = {
      backgroundColor: "#FFECEC",
      border: "1px solid #EF565D",
      borderRadius: "5px",
      color: "#EF565D",
      fontWeight : 550,
      display : "flex",
      gap : "5px",
      alignItems: "center",
      justifyContent : "center",
      padding : "3px",
      width : "78%"
    }
    const atencao = {
      backgroundColor: "#FFF0E1",
      border: "1px solid #DD6500",
      borderRadius: "4px",
      color: "#DD6500",
      fontWeight : 550,
      display : "flex",
      gap : "5px",
      alignItems: "center",
      justifyContent : "center",
      padding : "3px",
      width : "78%"
    }
    const check = {
        backgroundColor: "#E7FBF3",
        border: "1px solid #1D856C",
        borderRadius: "5px",
        color: "#1D856C",
        padding: "2px",
        fontWeight : 550,
        display : "flex",
        gap : "5px",
        alignItems: "center",
        justifyContent : "center",
        padding : "3px",
        width : "78%"
      }
  
    const styleStatus = {
      12 : check,  
      13 : alert,
      14 : alert,
      15 : atencao,
      16 : alert
    }
  
    const descricao = status_usuario_descricao.data.find(item => item?.id_status_usuario == value)?.status_usuario_descricao
    return <div style={styleStatus[value]}> 
      {[13,14,16].includes(value) &&  <span style={{display : "flex"}}><img src={alerta_simbolo}/></span>} 
      {[15].includes(value) &&  <span style={{display : "flex"}}><img src={atencao_simbolo}/></span>} 
      {[12].includes(value) &&  <span style={{display : "flex"}}><img src={check_simbolo}/></span>} 
      <span>{descricao}</span>
      </div>
  }

const TabelaCitoImpressao = ({ 
  data, 
  colunas, 
  status_usuario_descricao,
  targetRef, 
  filtros_aplicados_tabela, //Vem do componente PainelBuscaAtiva
  divisao_dados=false, //vem do front-end via componente PainelBuscaAtiva
  divisao_paginas=true, //vem do front-end via componente PainelBuscaAtiva
  fontFamily,
  data_producao_mais_recente,
}) => {
  const filtros_aplicados = ["status da coleta coleta em dia", "status da coleta Vence no final do quadrimestre"]
  const divisao_por_equipes = data.reduce((acumulador, objetoAtual) => {
    const { equipe_nome } = objetoAtual;
    if (!acumulador[equipe_nome]) {
      acumulador[equipe_nome] = [];
    }
    acumulador[equipe_nome].push(objetoAtual);
    return acumulador;
  }, {});
  //varias equipes por pagina
  const obterLimitesPaginas = (dados,equipe_inicio)=>{
    const ALTURA_FOLHA_A4_PAISAGEM_PX = 960
    const ALTURA_CABECALHO_PAGINA = 82
    const ALTURA_TITULO_TABELA = 36
    const ALTURA_CABECALHO_TABELA = 34
    const ALTURA_LINHA_CITOPATOLOGICO = 38
    let limiteDaPaginaUltrapassado = false
    let alturaPaginaUtilizada = ALTURA_CABECALHO_PAGINA
    let ultimaEquipe
    const equipes = Object.keys(dados).sort()
    for(let equipe = equipe_inicio;equipe < equipes.length;equipe++){
      alturaPaginaUtilizada = alturaPaginaUtilizada + ALTURA_TITULO_TABELA + ALTURA_CABECALHO_TABELA + ALTURA_LINHA_CITOPATOLOGICO*dados[equipes[equipe]].length
      if(alturaPaginaUtilizada >= ALTURA_FOLHA_A4_PAISAGEM_PX){
        ultimaEquipe = equipe
        limiteDaPaginaUltrapassado = true
        break
      }
    }
    return {ultimaEquipe,limiteDaPaginaUltrapassado,alturaPaginaUtilizada}
  };
  const dividirTabela = (ultimaEquipe,alturaPaginaUtilizada,dados)=>{
    const ALTURA_FOLHA_A4_PAISAGEM_PX = 960
    const ALTURA_LINHA_CITOPATOLOGICO = 38
    let excessoAlturaUtilizado = alturaPaginaUtilizada - ALTURA_FOLHA_A4_PAISAGEM_PX
    let excessoLinhas = Math.floor(excessoAlturaUtilizado / ALTURA_LINHA_CITOPATOLOGICO)
    const equipes = Object.keys(dados).sort()
    let pontoDivisao = dados[equipes[ultimaEquipe]].length - excessoLinhas
    let parteUm = dados[equipes[ultimaEquipe]].slice(0,pontoDivisao)
    let parteDois = dados[equipes[ultimaEquipe]].slice(pontoDivisao,dados[equipes[ultimaEquipe]].length)
    return {parteUm,parteDois}
  };
  const substituirQuebras = (dados,parteUm,parteDois,ultimaEquipe)=>{
    const ultimaEquipeNome = Object.keys(dados).sort()[ultimaEquipe]
    dados[ultimaEquipeNome] = parteUm
    dados[`${ultimaEquipeNome} continuação`] = parteDois
    return dados
  };
  const ordenarObjetoPorChave = (obj) => {
    const chavesOrdenadas = Object.keys(obj).sort();
    const objetoOrdenado = {};
  
    chavesOrdenadas.forEach((chave) => {
      objetoOrdenado[chave] = obj[chave];
    });
  
    return objetoOrdenado;
  };
  const dividirDadosPorPaginaComMultiplasEquipes = (dados)=>{
    let equipe_atual = 0
    let deepCopy = JSON.parse(JSON.stringify(dados));
    const equipeParada = Object.keys(deepCopy).length
    let quebrasDePaginas = []
    while(equipe_atual<equipeParada){
      let limites = obterLimitesPaginas(deepCopy,equipe_atual)
      let { 
            ultimaEquipe,
            limiteDaPaginaUltrapassado,
            alturaPaginaUtilizada
          } = limites
      if(limiteDaPaginaUltrapassado){
        const tabelaDividida = dividirTabela(ultimaEquipe,alturaPaginaUtilizada,deepCopy)
        deepCopy = substituirQuebras(deepCopy,tabelaDividida.parteUm,tabelaDividida.parteDois,ultimaEquipe)
      }
      quebrasDePaginas.push(ultimaEquipe)
      equipe_atual = ultimaEquipe + 1
    }

    return {
      quebrasDePaginas : quebrasDePaginas,
      dadosDivididosPorEquipeComQuebraDePagina : ordenarObjetoPorChave(deepCopy)
    }
  }
  const {dadosDivididosPorEquipeComQuebraDePagina,quebrasDePaginas } = dividirDadosPorPaginaComMultiplasEquipes(divisao_por_equipes)
  //uma equipe por pagina
  const dividirEquipes = (data)=>{
    let dados = JSON.parse(JSON.stringify(data));
    const equipes = Object.keys(dados).sort()
    const numeroDeLinhasMaximoPorPagina = 23
    const quebrasDePaginas = {}
    equipes.forEach(equipe => {
      const registrosPorEquipe = dados[equipe].length
      if(registrosPorEquipe>= numeroDeLinhasMaximoPorPagina){
        const segmentos = Math.floor(dados[equipe].length / numeroDeLinhasMaximoPorPagina)
        const ultimoSegmento = registrosPorEquipe - segmentos * numeroDeLinhasMaximoPorPagina
        const dadoEquipe = dados[equipe]
        dados[equipe] = dados[equipe].slice(0,numeroDeLinhasMaximoPorPagina)
        quebrasDePaginas[dados[equipe][0].equipe_nome] = completarMargens(dados[equipe])
        for(let i = 1;i < segmentos;i++){
          const inicio_segmento = (i * numeroDeLinhasMaximoPorPagina)
          const final_segmento = inicio_segmento + numeroDeLinhasMaximoPorPagina
          dados[`${equipe} continuação ${i}`] = dadoEquipe.slice(inicio_segmento,final_segmento)
          quebrasDePaginas[`${equipe} continuação ${i}`] = completarMargens(dados[`${equipe} continuação ${i}`])
        }
        if(ultimoSegmento > 0){ 
          dados[`${equipe} continuação ${segmentos}`] = dadoEquipe.slice(dadoEquipe.length - ultimoSegmento,dadoEquipe.length)
          quebrasDePaginas[`${equipe} continuação ${segmentos}`] = completarMargens(dados[`${equipe} continuação ${segmentos}`])
        }
      }else{
        quebrasDePaginas[dados[equipe][0].equipe_nome] = completarMargens(dados[equipe])
      } 
    });
    return { EquipesPorPagina : dados,quebrasDePaginasEquipe : quebrasDePaginas}
  };
  const completarMargens = (data)=>{
    const ALTURA_FOLHA_A4_PAISAGEM_PX = 970
    const ALTURA_CABECALHO_PAGINA = 82
    const ALTURA_TITULO_TABELA = 36
    const ALTURA_CABECALHO_TABELA = 34
    const ALTURA_LINHA_CITOPATOLOGICO = 38
    const HEADER_GERAL_FIXO = ALTURA_CABECALHO_PAGINA + ALTURA_TITULO_TABELA + ALTURA_CABECALHO_TABELA
    const MARGEM = ALTURA_FOLHA_A4_PAISAGEM_PX - (HEADER_GERAL_FIXO + (data.length * ALTURA_LINHA_CITOPATOLOGICO) )
    return MARGEM < 0 ? 0 : MARGEM
  }
  const { EquipesPorPagina, quebrasDePaginasEquipe } = dividirEquipes(divisao_por_equipes)


  const splitChunks = (array, chunkSize)=> 
    array.reduce((result, item, index) => {
        const chunkIndex = Math.floor(index / chunkSize);
        if (!result[chunkIndex]) result[chunkIndex] = []; // Start a new chunk
        result[chunkIndex].push(item);
        return result;
    }, []);
  const CabecalhoPagina = ()=>{
    return(
      <>
        <div style={{
          display : "flex",
          flexDirection : "row",
          fontFamily : "Inter",
          fontSize : "11px",
          marginTop : "25px"
        }}>
          <p><b>LISTA NOMINAL CITOPATOLOGICO</b><i> - PRODUÇÃO MAIS RECENTE RECEBIDA EM : {data_producao_mais_recente}</i></p>
        </div>
        <div style={{
          display : "flex",
          flexDirection : "row",
          alignItems: "center",
          gap : "10px",
          fontSize : "11px",
          marginBottom : "10px"
        }}>
          <p><b>Filtros aplicados: </b></p>
          {
            filtros_aplicados.map((filtro,index)=>{
              return(
                <div 
                  key={index}
                  style={{
                    border : "solid 1px #757574",
                    borderRadius : "5px",
                    padding : "6px",
                    fontSize : "11px",
                    backgroundColor : "#F5F5F5"
                  }}
                >
                  {filtro}
                </div>
              )
            })
          }
          <div style={{
            width : "fit-content",
            height : "fit-content",
            marginLeft: "auto",
            marginTop : "-45px"
          }}>
            <img 
              src="https://media.graphassets.com/VTP6e8dLSrC2j2zNABfV" 
              alt="logo"
              width="160px"
              height="65px"
            />
          </div>

        </div>
      </>
    )
  }
  return (
    <div 
      ref={targetRef}
      style={{
        paddingLeft : "45px",
        fontFamily : "Inter",
        width : "1080px",
      }}
    >
      {
        divisao_dados && dadosDivididosPorEquipeComQuebraDePagina &&
        Object.keys(dadosDivididosPorEquipeComQuebraDePagina).map((registro,index)=>{
          return( 
          <>
            { index ==0 && <CabecalhoPagina />}
            <div key={index}>
              <p style={{
                fontSize : "11px",
              }}><b>{registro}</b></p>
              <TabelaUnitaria
                data = {dadosDivididosPorEquipeComQuebraDePagina[registro]}
                colunas = {colunas}
                status_usuario_descricao = {status_usuario_descricao}
                fontFamily = "Inter"
                indexTabela={index}
              />
              {
                quebrasDePaginas.includes(index) &&
                <CabecalhoPagina />
              }
            </div>
          </>
        )})
      }
      {
        divisao_paginas &&
        Object.keys(EquipesPorPagina).sort().map((registro,index)=>{
          return( 
          <>
            <div 
              key={index} 
              style={{
                marginBottom : `${quebrasDePaginasEquipe[registro]}px`
              }}
            >
              <CabecalhoPagina />
              <p style={{
                fontSize : "11px",
              }}><b>{registro}</b></p>
              <TabelaUnitaria
                data = {EquipesPorPagina[registro]}
                colunas = {colunas}
                status_usuario_descricao = {status_usuario_descricao}
                fontFamily = "Inter"
                indexTabela={index}
              />
            </div>
          </>
        )})
      }
      {
        !divisao_dados && !divisao_paginas &&
        splitChunks(data,23).map((page,index)=>{
          return(
            <div
              style={{
                marginBottom : "30px"
              }}
              key={index}
            >
              <CabecalhoPagina />
              <TabelaUnitaria
                data = {page}
                colunas = {colunas}
                status_usuario_descricao = {status_usuario_descricao}
                fontFamily = "Inter"
                indexTabela={0}
              />
            </div>
          )
        })
      }
    </div>
  );
};
const TabelaUnitaria = ({ data, colunas, status_usuario_descricao, fontFamily = "Inter", indexTabela}) => {
  const larguraColunas = {
    0 : "250px",
    1 : "80px",
    2 : "220px",
    3 : "50px",
    4 : "100px",
    5 : "20px",
    6 : "280px",
  }
  return (
    <>
      <table style={{
        borderCollapse: "collapse",
        color:  "#1F1F1F",
        textAlign: "center",
        fontSize: "9px",
        fontFamily,
        letterSpacing: "-0.12px",
        textTransform: "uppercase",
        width : "fit-content",
      }}>
        <thead>
          <tr style={{
                backgroundColor: "#E7E7E7",
            }}>
            {colunas.map((coluna,index) => (
              <th style={{
                padding : (index == 0 || index ==2) ? "5px 5px 5px 13px" : "5px",
                width: larguraColunas[index],
                borderTopLeftRadius: index!=0 ? "0" : "8px",
                borderBottomLeftRadius: index!=0 ? "0" : "8px",
                borderTopRightRadius: index!=6 ? "0" : "8px",
                borderBottomRightRadius: index!=6 ? "0" : "8px",
                borderRight : index== 1 || index== 4 ? "solid 1px black" : "",
                textAlign: "left",
                boxSizing : "border-box"
              }} key={coluna.headerName+index}>{coluna.headerName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item,index) => (
            <tr 
                key={index}
                style={{
                    borderBottom: "solid 1px black",
                }}
            >
              {colunas.map((coluna,index) => (
                <td 
                    key={`${item.id}-${coluna}-${index}`}
                    style={{
                        justifyContent : "center",
                        alignItems : "center",
                        textAlign: "left",
                        width: larguraColunas[index],
                        padding : index == 2 || index==0 || index==5 ? "4px 4px 4px 12px" : "4px",
                        borderRight: (index== 1 || index== 4) ? "solid 1px black" : "",
                        boxSizing : "border-box"
                    }}
                >
                  {
                    coluna.field=="id_status_usuario" && selecionar_status_usuario_descricao(item[coluna.field],status_usuario_descricao)
                  }
                  { 
                    coluna.field=="prazo_proxima_coleta"  && prazoStyle(item[coluna.field])
                  }
                  {
                    coluna.field!="id_status_usuario" && coluna.field!="prazo_proxima_coleta" && item[coluna.field]
                  }
                  </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
  
export {TabelaHiperDia, TabelaHiperDiaImpressao , TabelaCitoImpressao};
