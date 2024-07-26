import { PrazoStyle } from "./auxiliares/PrazoStyle";
import { Selecionar_status_usuario_descricao } from "./auxiliares/Selecionar_status_usuario_descricao";
import { StatusDataConsulta } from "./auxiliares/StatusDataConsulta";
import { StatusIdadeGestacional } from "./auxiliares/StatusIdadeGestacional";
import { StatusExameSifilisHIV } from "./auxiliares/StatusExameSifilisHIV";
import { StatusTotalConsultasValidas } from "./auxiliares/StatusTotalConsultasValidas";
import { StatusAtendimentoOdontologico } from "./auxiliares/StatusAtendimentoOdontologico";
import { StatusDDP } from "./auxiliares/StatusDDP";

export const TabelaUnitaria = ({ data, colunas, listas_auxiliares, fontFamily = "Inter", divisorVertical , larguraColunas}) => {
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
                      coluna.field=="id_status_usuario" && <Selecionar_status_usuario_descricao value={item[coluna.field]} status_usuario_descricao={listas_auxiliares.status_usuario_descricao} />
                    }
                    {
                      coluna.field=="prazo_proxima_coleta"  && <PrazoStyle value={item[coluna.field]} />
                    }
                    {
                      coluna.field=="prazo_proxima_afericao_pa"  && <PrazoStyle value={item[coluna.field]} />
                    }
                    {
                      coluna.field=="prazo_proxima_consulta"  && <PrazoStyle value={item[coluna.field]} />
                    }
                    {
                      coluna.field=="prazo_proxima_solicitacao_hemoglobina"  && <PrazoStyle value={item[coluna.field]} />
                    }
                    {
                      coluna.field === "gestacao_idade_gestacional_primeiro_atendimento" && <StatusIdadeGestacional value={item[coluna.field]} />
                    }
                    {
                      coluna.field === "consultas_pre_natal_validas" && <StatusTotalConsultasValidas values={{
                        gestacao_idade_gestacional_primeiro_atendimento,
                        consultas_pre_natal_validas,
                      }} />
                    }
                    {
                      coluna.field === "dt_consulta_mais_recente" && <StatusDataConsulta value={item[coluna.field]} />
                    }
                    {
                      coluna.field === "dt_afericao_pressao_mais_recente" && <StatusDataConsulta value={item[coluna.field]} />
                    }
                    {
                      coluna.field === "dt_solicitacao_hemoglobina_glicada_mais_recente" && <StatusDataConsulta value={item[coluna.field]} />
                    }
                    {
                      coluna.field === "gestacao_data_dpp" && <StatusDDP value={item[coluna.field]} />
                    }
                    {
                      coluna.field === "id_exame_hiv_sifilis" && <StatusExameSifilisHIV
                        value={item[coluna.field]}
                        identificacao_exame_hiv_sifilis={listas_auxiliares.identificacao_exame_hiv_sifilis}
                      />
                    }
                    {
                      coluna.field === "id_atendimento_odontologico" && <StatusAtendimentoOdontologico
                        value={item[coluna.field]}
                        identificacao_atendimento_odontologico={listas_auxiliares.identificacao_atendimento_odontologico}
                      />
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