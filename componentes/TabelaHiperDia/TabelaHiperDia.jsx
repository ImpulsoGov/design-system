import React from "react";
import { DataGrid, ptBR } from '@mui/x-data-grid';
import style from "./TabelaHiperDia.module.css";

export const VERIFICADO = "https://media.graphassets.com/wOzzseVhRriXENS9OhcG";
export const ATENCAO = "https://media.graphassets.com/NPk8ggUoQzK18KSyAGL6";
export const AMPULHETA = "https://media.graphassets.com/OEg0Ik1ITqO9yqRT4fnd";


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

const prazoStyle = (value)=>{
  const check = {
    backgroundColor: "#E7FBF3",
    border: "1px solid #1D856C",
    borderRadius: "5px",
    color: "#1D856C",
    padding: "2px",
    fontWeight : 550,
    width : "fit-content",
    display : "flex",
    gap : "5px",
    alignItems: "center",
    justifyContent : "center",
    padding : "3px 10px"
  }

  const atencao = {
    backgroundColor: "#F4CCAB",
    border: "1px solid #E98633",
    borderRadius: "5px",
    color: "#E98633",
    padding: "2px",
    fontWeight : 550,
    width : "fit-content",
    display : "flex",
    gap : "5px",
    alignItems: "center",
    justifyContent : "center",
    padding : "3px 10px"
  }
  const atencaoSymbolStyle = {
    border: "2px solid #E98633",
    borderRadius : "100%",
    width : "18px",
    height : "18px",
    fontSize : "8px",
    fontWeight : "600",
    display : "flex",
    alignItems: "center",
    justifyContent : "center"
  }
  const checkSymbolStyle = {
    border: "2px solid #1D856C",
    borderRadius : "100%",
    width : "18px",
    height : "18px",
    fontSize : "8px",
    fontWeight : "600",
    display : "flex",
    alignItems: "center",
    justifyContent : "center"
  }

  return <div style={value != "Em dia" ? atencao : check}>
      {value != "Em dia" && <span style={atencaoSymbolStyle}>!</span>} 
      {value == "Em dia" && <span style={checkSymbolStyle}>✔</span>} 
      {value}
      </div>

}

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
const selecionar_status_usuario_descricao = (value,status_usuario_descricao)=> {
    const alert = {
      backgroundColor: "#F8BBAE",
      border: "1px solid #EF565D",
      borderRadius: "5px",
      color: "#EF565D",
      padding: "2px",
      fontWeight : 550,
      width : "90%",
      display : "flex",
      gap : "5px",
      alignItems: "center",
      justifyContent : "center",
      padding : "3px 10px"
    }
    const atencao = {
      backgroundColor: "#F4CCAB",
      border: "1px solid #E98633",
      borderRadius: "5px",
      color: "#E98633",
      padding: "2px",
      fontWeight : 550,
      width : "90%",
      display : "flex",
      gap : "5px",
      alignItems: "center",
      justifyContent : "center",
      padding : "3px 10px"
    }
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
        alignItems: "center",
        justifyContent : "center",
        padding : "3px 10px"
      }
  
    const styleStatus = {
      12 : check,  
      13 : alert,
      14 : alert,
      15 : atencao,
      16 : alert
    }
    const alertSymbolStyle = {
      border: "2px solid #EF565D",
      borderRadius : "100%",
      width : "18px",
      height : "18px",
      fontSize : "8px",
      fontWeight : "600",
      display : "flex",
      alignItems: "center",
      justifyContent : "center"
    }
    const atencaoSymbolStyle = {
      border: "2px solid #E98633",
      borderRadius : "100%",
      width : "18px",
      height : "18px",
      fontSize : "8px",
      fontWeight : "600",
      display : "flex",
      alignItems: "center",
      justifyContent : "center"
    }
    const checkSymbolStyle = {
        border: "2px solid #1D856C",
        borderRadius : "100%",
        width : "18px",
        height : "18px",
        fontSize : "8px",
        fontWeight : "600",
        display : "flex",
        alignItems: "center",
        justifyContent : "center"
      }
  
    const descricao = status_usuario_descricao.data.find(item => item?.id_status_usuario == value)?.status_usuario_descricao
    return <div style={styleStatus[value]}> 
      {[13,14,16].includes(value) &&  <span style={alertSymbolStyle}>✖</span>} 
      {[15].includes(value) &&  <span style={atencaoSymbolStyle}>!</span>} 
      {[12].includes(value) &&  <span style={checkSymbolStyle}>✔</span>} 
      <span>{descricao}</span>
      </div>
  }

const TabelaCitoImpressao = ({ data, colunas, status_usuario_descricao,targetRef, fontFamily = "Inter"}) => {
  const filtros_aplicados = ["status da coleta coleta em dia", "status da coleta Vence no final do quadrimestre"]
  const divisao_por_equipes = data.reduce((acumulador, objetoAtual) => {
    const { equipe_nome } = objetoAtual;
    if (!acumulador[equipe_nome]) {
      acumulador[equipe_nome] = [];
    }
    acumulador[equipe_nome].push(objetoAtual);
    return acumulador;
  }, {});
  return (
    <div ref={targetRef}>
      <div style={{
        display : "flex",
        flexDirection : "row"
      }}>
        <p>LISTA NOMINAL CITOPATOLOGICO - PRODUÇÃO MAIS RECENTE RECEBIDA EM : XX/XX/XX</p>
        <div style={{
          width : "200px",
          height : "30px",
          backgroundColor: "green",
          marginLeft: "auto"
        }}>LOGO</div>
      </div>
      <div style={{
        display : "flex",
        flexDirection : "row",
        alignItems: "center",
        gap : "10px"
      }}>
        <p>Filtros aplicados: </p>
        {
          filtros_aplicados.map((filtro,index)=>{
            return(
              <div style={{
                border : "solid 1px grey",
                borderRadius : "5px",
                padding : "5px"
              }}>
                {filtro}
              </div>
            )
          })
        }
      </div>
      {
        Object.keys(divisao_por_equipes).map((registro,index)=>{
            return <div style={{breakBefore: index > 0 ? "page" : ""}}>
              <p>{registro}</p>
              <TabelaUnitaria
                data = {divisao_por_equipes[registro]}
                colunas = {colunas}
                status_usuario_descricao = {status_usuario_descricao}
                fontFamily = "Inter"
                indexTabela={index}
              />
            </div>
        })
      }
    </div>
  );
};
const TabelaUnitaria = ({ data, colunas, status_usuario_descricao, fontFamily = "Inter", indexTabela}) => {
  return (
    <>
      <table style={{
        borderCollapse: "collapse",
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
                borderRadius: "10px",
            }}>
            {colunas.map((coluna,index) => (
              <th style={{
                padding : "18px",
                width: "150px",
                borderTopLeftRadius: index!=0 ? "0" : "15px",
                borderBottomLeftRadius: index!=0 ? "0" : "15px",
                borderTopRightRadius: index!=6 ? "0" : "15px",
                borderBottomRightRadius: index!=6 ? "0" : "15px",
                marginRight : index==1 ? "5px" : "",
                borderRight : index==1 ? "solid 1px black" : "",
                textAlign: "left"
              }} key={coluna.headerName}>{coluna.headerName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item,index) => (
            <tr 
                key={item.id}
                style={{
                    borderBottom: "solid 1px black",
                }}
            >
              {colunas.map((coluna,index) => (
                <td 
                    key={`${item.id}-${coluna}-${index}`}
                    style={{
                        display : index==4 || index==6 ? "flex" : "table cell",
                        justifyContent : "center",
                        alignItems : "center",
                        textAlign: "left",
                        width: "150px",
                        padding : "14px",
                        borderRight: index==1 ? "solid 1px black" : ""
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
                  {index}
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
