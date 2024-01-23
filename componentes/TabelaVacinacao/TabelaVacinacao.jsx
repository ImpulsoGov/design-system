import React, { useState } from "react";
import { DataGrid, ptBR } from '@mui/x-data-grid';
import style from "./TabelaVacinacao.module.css"

  
const FormatarData = (str)=>{
  if(!str) return null
  const parts = str.split('-');
  const dia = parts[2];
  const mes = parts[1];
  const ano = parts[0];
  const date = `${dia}/${mes}/${ano}`
  return date
}
const esquema_completo = "https://media.graphassets.com/wOzzseVhRriXENS9OhcG"
const dose_aplicada = "https://media.graphassets.com/QrINNoP2RUy0mgQZnLE6"
const dose_nao_aplicada = "https://media.graphassets.com/Xoe3jutQHm7KJbJ9CeD4"
const esquema_em_andamento = "https://media.graphassets.com/Psuwuj7pS1agRqB7Is5H"
const dose_em_atraso = "https://media.graphassets.com/neGWWuEyTF6RLagu7nIU"
const esquema_nao_iniciado = "https://media.graphassets.com/OEg0Ik1ITqO9yqRT4fnd"
const esquema_em_atraso = "https://media.graphassets.com/bEpC7MYaTwmBj5A7V363"
const STYLE_STATUS_POLIO = (value)=>{
  const STYLE_NULL = {
    width : '38px',
    height : '25px',
    padding : '3px',
    color : '#1F1F1F',
    backgroundColor : '#FFF',
    borderRadius: '5px',
    textAlign : 'center',
    fontWeight: 500
  }
  const atraso = {
    backgroundColor: "#FFECEC",
    border: "1px solid #F8BBAE",
    borderRadius: "5px",
    color: "#EF565D",
    padding: "4px",
    fontWeight : 550,
    width : "230px",
    display : "flex",
    alignItems: "center",
    justifyContent : "center",
    flexDirection : "row"
  }
  const nao_iniciado = {
    backgroundColor: "#EFF5F9",
    border: "1px solid #A6B5BE",
    borderRadius: "5px",
    color: "#606E78",
    padding: "4px",
    fontWeight : 550,
    width : "230px",
    display : "flex",
    alignItems: "center",
    justifyContent : "center",
    flexDirection : "row"
  }

  const andamento = {
    backgroundColor: "#FFF0E1",
    border: "1px solid #F4CCAB",
    borderRadius: "5px",
    color: "#E98633",
    fontWeight : 550,
    gap : "5px",
    padding : "4px",
    width : "230px",
    display : "flex",
    alignItems: "center",
    justifyContent : "center",
  }
  const completo = {
    backgroundColor: "#E7FBF3",
    border: "1px solid #9DEECD",
    borderRadius: "5px",
    color: "#1D856C",
    fontWeight : 550,
    padding : "4px",
    width : "230px",
    display : "flex",
    alignItems: "center",
    justifyContent : "center",
  }
  const andamentoSymbolStyle = {
    width : "18px",
    height : "18px",
    fontSize : "8px",
    fontWeight : "600",
    display : "flex",
    alignItems: "center",
    justifyContent : "center",
  }
  const completoSymbolStyle = {
    width : "18px",
    height : "18px",
    fontSize : "8px",
    fontWeight : "600",
    display : "flex",
    alignItems: "center",
    justifyContent : "center",
    paddingTop : "2px",
    marginRight : "4px"
  }
  const atrasoSymbolStyle = {
    width : "18px",
    height : "18px",
    fontSize : "8px",
    fontWeight : "600",
    display : "flex",
    alignItems: "center",
    justifyContent : "center",
    paddingTop : "2px",
    marginRight : "4px"
  }
  const naoIniciadoSymbolStyle = {
    width : "18px",
    height : "18px",
    fontSize : "8px",
    fontWeight : "600",
    display : "flex",
    alignItems: "center",
    justifyContent : "center",
    paddingTop : "2px",
    marginRight : "4px"
  }

  const style = {
    10 : completo,
    20 : andamento,
    30 : atraso,
    40 : nao_iniciado,
  }
  const descricoes = {
    10 : "Completo",
    20 : "Em andamento",
    30 : "Em atraso",
    40 : "Não iniciado"
  }
  
  const descricao = descricoes[value]
  return <div style={style[value]}>
    {(value == 10) && <span style={completoSymbolStyle}><img src={esquema_completo} width={16} height={16}></img></span>} 
    {value == 20 && <span style={andamentoSymbolStyle}><img src={esquema_em_andamento} width={16} height={16}></img></span>} 
    {value == 30 && <span style={atrasoSymbolStyle}><img src={esquema_em_atraso} width={16} height={16}></img></span>} 
    {value == 40 && <span style={naoIniciadoSymbolStyle}><img src={esquema_nao_iniciado} width={16} height={16}></img></span>} 
    <div>{descricao}</div>
    </div>
}
const STYLE_STATUS_PENTA = (value)=>{
  const STYLE_NULL = {
    width : '38px',
    height : '25px',
    padding : '3px',
    color : '#1F1F1F',
    backgroundColor : '#FFF',
    borderRadius: '5px',
    textAlign : 'center',
    fontWeight: 500
  }
  const atraso = {
    backgroundColor: "#FFECEC",
    border: "1px solid #F8BBAE",
    borderRadius: "5px",
    color: "#EF565D",
    padding: "4px",
    fontWeight : 550,
    width : "230px",
    display : "flex",
    alignItems: "center",
    justifyContent : "center",
    flexDirection : "row"
  }
  const nao_iniciado = {
    backgroundColor: "#EFF5F9",
    border: "1px solid #A6B5BE",
    borderRadius: "5px",
    color: "#606E78",
    padding: "4px",
    fontWeight : 550,
    width : "230px",
    display : "flex",
    alignItems: "center",
    justifyContent : "center",
    flexDirection : "row"
  }

  const andamento = {
    backgroundColor: "#FFF0E1",
    border: "1px solid #F4CCAB",
    borderRadius: "5px",
    color: "#E98633",
    fontWeight : 550,
    gap : "5px",
    padding : "4px",
    width : "230px",
    display : "flex",
    alignItems: "center",
    justifyContent : "center",
  }
  const completo = {
    backgroundColor: "#E7FBF3",
    border: "1px solid #9DEECD",
    borderRadius: "5px",
    color: "#1D856C",
    fontWeight : 550,
    padding : "4px",
    width : "230px",
    display : "flex",
    alignItems: "center",
    justifyContent : "center",
  }
  const andamentoSymbolStyle = {
    width : "18px",
    height : "18px",
    fontSize : "8px",
    fontWeight : "600",
    display : "flex",
    alignItems: "center",
    justifyContent : "center",
  }
  const completoSymbolStyle = {
    width : "18px",
    height : "18px",
    fontSize : "8px",
    fontWeight : "600",
    display : "flex",
    alignItems: "center",
    justifyContent : "center",
    paddingTop : "2px",
    marginRight : "4px"
  }
  const atrasoSymbolStyle = {
    width : "18px",
    height : "18px",
    fontSize : "8px",
    fontWeight : "600",
    display : "flex",
    alignItems: "center",
    justifyContent : "center",
    paddingTop : "2px",
    marginRight : "4px"
  }
  const naoIniciadoSymbolStyle = {
    width : "18px",
    height : "18px",
    fontSize : "8px",
    fontWeight : "600",
    display : "flex",
    alignItems: "center",
    justifyContent : "center",
    paddingTop : "2px",
    marginRight : "4px"
  }

  const style = {
    1 : completo,
    2 : andamento,
    3 : atraso,
    4 : nao_iniciado,
  }
  const descricoes = {
    1 : "Completo",
    2 : "Em andamento",
    3 : "Em atraso",
    4 : "Não iniciado"
  }
 
  const descricao = descricoes[value]
  return <div style={style[value]}>
    {(value == 1) && <span style={completoSymbolStyle}><img src={esquema_completo} width={16} height={16}></img></span>} 
    {value == 2 && <span style={andamentoSymbolStyle}><img src={esquema_em_andamento} width={16} height={16}></img></span>} 
    {value == 3 && <span style={atrasoSymbolStyle}><img src={esquema_em_atraso} width={16} height={16}></img></span>} 
    {value == 4 && <span style={naoIniciadoSymbolStyle}><img src={esquema_nao_iniciado} width={16} height={16}></img></span>} 
    <div>{descricao}</div>
    </div>
}
  
const FormatarIdade = (str)=> <div>{str + " meses"}</div>

const TabelaVacinacaoImpressao = ({ data,colunas,status_usuario_descricao}) => {
  return (
    <table style={{
      borderCollapse: "collapse",
      margin: "15px",
      color:  "#1F1F1F",
      textAlign: "center",
      fontSize: "12px",
      fontFamily: "Inter",
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
                  key={`${item.id}-${coluna}-${index}`}
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
                  coluna.field=="cidadao_idade_meses" && FormatarIdade(item[coluna.field])
                }
                { 
                  coluna.field=="data_ou_prazo_1dose_polio"  &&
                  FormatarData(item[coluna.field])
                }
                { 
                  coluna.field=="data_ou_prazo_2dose_polio"  &&
                  FormatarData(item[coluna.field])
                }
                { 
                  coluna.field=="data_ou_prazo_3dose_polio"  &&
                  FormatarData(item[coluna.field])
                }
                { 
                  coluna.field=="data_ou_prazo_1dose_penta"  &&
                  FormatarData(item[coluna.field])
                }
                { 
                  coluna.field=="data_ou_prazo_2dose_penta"  &&
                  FormatarData(item[coluna.field])
                }
                { 
                  coluna.field=="data_ou_prazo_3dose_penta"  &&
                  FormatarData(item[coluna.field])
                }
                {
                  coluna.field=="id_status_polio"  &&
                  STYLE_STATUS_POLIO(item[coluna.field])
                }
                {
                  coluna.field=="id_status_penta"  &&
                  STYLE_STATUS_PENTA(item[coluna.field])
                }
                {
                  coluna.field!="cidadao_idade_meses" && 
                  coluna.field!="data_ou_prazo_1dose_polio" && 
                  coluna.field!="data_ou_prazo_2dose_polio" && 
                  coluna.field!="data_ou_prazo_3dose_polio" && 
                  coluna.field!="data_ou_prazo_1dose_penta" && 
                  coluna.field!="data_ou_prazo_2dose_penta" && 
                  coluna.field!="data_ou_prazo_3dose_penta" && 
                  coluna.field!="id_status_polio" && 
                  coluna.field!="id_status_penta" && 
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

export {TabelaVacinacaoImpressao};