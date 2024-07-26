import { Selecionar_status_usuario_descricao } from "./auxiliares/Selecionar_status_usuario_descricao";
import { PrazoStyle } from "./auxiliares/PrazoStyle";
export const TabelaUnitaria = ({ data, colunas, listas_auxiliares, fontFamily = "Inter", divisorVertical , larguraColunas}) => {
  console.log(data,colunas)
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
                  padding : [...divisorVertical.map(item=>item+1),0].includes(index) ? "5px 5px 5px 12px" : "5px",
                  width: larguraColunas[index],
                  borderTopLeftRadius: index!=0 ? "0" : "8px",
                  borderBottomLeftRadius: index!=0 ? "0" : "8px",
                  borderTopRightRadius: index!=6 ? "0" : "8px",
                  borderBottomRightRadius: index!=6 ? "0" : "8px",
                  borderRight : divisorVertical.includes(index) ? "solid 1px black" : "",
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
                          padding : [...divisorVertical.map(item=>item+1),0].includes(index) ? "4px 4px 4px 12px" : "4px",
                          borderRight: divisorVertical.includes(index) ? "solid 1px black" : "",
                          boxSizing : "border-box"
                      }}
                  >
                    {
                      coluna.field=="id_status_usuario" && <Selecionar_status_usuario_descricao value={item[coluna.field]} status_usuario_descricao={listas_auxiliares.status_usuario_descricao} />
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