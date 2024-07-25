import { Selecionar_status_usuario_descricao } from "./auxiliares/Selecionar_status_usuario_descricao";
import { PrazoStyle } from "./auxiliares/PrazoStyle";
export const TabelaUnitaria = ({ data, colunas, status_usuario_descricao, fontFamily = "Inter", indexTabela}) => {
    const larguraColunas = {
      0 : "250px",
      1 : "80px",
      2 : "280px",
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
                      coluna.field=="id_status_usuario" && <Selecionar_status_usuario_descricao value={item[coluna.field]} status_usuario_descricao={status_usuario_descricao} />
                    }
                    { 
                      coluna.field=="prazo_proxima_coleta"  && <PrazoStyle value={item[coluna.field]} />
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