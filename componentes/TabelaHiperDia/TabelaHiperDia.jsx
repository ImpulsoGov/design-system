import React, { useState } from "react";
import { DataGrid, ptBR } from '@mui/x-data-grid';
import style from "./TabelaHiperDia.module.css"

const TabelaHiperDia = ({
  data,
  colunas,
  }) => {
    const styles = {
        padding:40,
        height: "fitContent",
        width: '93%',
        marginLeft : '45px'
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
                    rowHeight={35}
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

// const TabelaHiperDiaImpressao = forwardRef(({
//     data,
//     colunas,
//     ref
// })=>{
//     const styles = {
//         padding:20,
//         height: "fitContent",
//         width: 'calc(100vw - 40px)',
//     }
//     const rowsID = data.map((row, index) => ({ ...row, id: index }));
//     return (
//         <>
//             <div 
//                 style={styles} 
//                 ref={ref}
//             >
//                 <DataGrid
//                     rows={rowsID}
//                     columns={colunas}
//                     pageSize={100000}
//                     disableColumnMenu
//                     getRowId={(row) => row.id}
//                     rowHeight={35}
//                     localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
//                     sx={{
//                         '& .MuiDataGrid-columnHeaderTitle': {
//                             textOverflow: "clip",
//                             whiteSpace: "break-spaces",
//                             lineHeight: 1.2,
//                             textAlign: "center",
//                             fontFamily : "Inter !important",
//                             fontSize : "12px !important",
//                             fontWeight : 400,
//                         },
//                         '& .MuiDataGrid-columnHeaders': {
//                             backgroundColor: "#C9D2D8",
//                             marginBottom: "15px",
//                             border: "none",
//                             borderRadius: "10px",
//                         },
//                         '& .MuiDataGrid-withBorderColor': {
//                             border: "none",
//                         },
//                         '& .MuiDataGrid-row': {
//                             marginBottom: "5px",
//                             fontFamily : "Inter !important",
//                             fontSize : "14px !important",
//                             backgroundColor : "#EFF5F9",
//                             borderRadius: "10px",
//                             padding: "4px",
//                             height: "30px",
//                             display: "flex",
//                             justifyContent : "center",
//                             alignItems: "center",
//                             width: "98%"
//                         },
//                         '& .MuiDataGrid-root': {
//                             border: "none",
//                             borderWidth: "0px"
//                         },
//                         '& .MuiDataGrid-iconSeparator': {
//                             display: 'none',
//                         },
//                         '& .MuiToolbar-root': {
//                             display: 'none',
//                         },
//                         border : 0,
//                     }}
//                 />
//             </div>
//         </>
// )})
const PrazoProximaConsultaStyle = ({value})=> {
    const emDia = {
        backgroundColor: "#E7FBF3",
        border: "1px solid #9DEECD",
        borderRadius: "5px",
        color: "#1D856C",
        padding: "2px",
        fontWeight : 550,
    }
    const prazo = {
        backgroundColor: "#FFF0E1",
        border: "1px solid #F4CCAB",
        borderRadius: "5px",
        color: "#E98633",
        padding: "2px",
        fontWeight : 550,
    }
    const style = (value=="Em dia") ? emDia : prazo
    return <div style={style}>{value}</div>
  }
  
  const FormatarData = (str)=>{
    if(!str) return null
    const parts = str.split('-');
    const dia = parts[2];
    const mes = parts[1];
    const ano = parts[0];
    const date = `${dia}/${mes}/${ano}`
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

const FormatarConteudo = (item,coluna)=>{
    if(coluna.field=="cidadao_cpf_dt_nascimento") return FormatarDataNascimento(item[coluna.field])
    if(coluna.field=="dt_ultima_consulta" || coluna.field=="dt_afericao_pressao_mais_recente" || coluna.field=="dt_solicitacao_hemoglobina_glicada_mais_recente") return FormatarData (item[coluna.field])
    return item[coluna.field]
}
const TabelaHiperDiaImpressao = ({ data,colunas }) => {
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
              <th className={style.colunaTitulo}key={coluna.headerName}>{coluna.headerName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              {colunas.map((coluna) => (
                <td key={`${item.id}-${coluna}`}>{FormatarConteudo(item,coluna)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
export {TabelaHiperDia, TabelaHiperDiaImpressao};