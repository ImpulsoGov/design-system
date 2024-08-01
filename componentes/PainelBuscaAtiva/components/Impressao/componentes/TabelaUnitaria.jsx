import { formatarCPFOuDataNascimento, formatarDataNascimento } from "../helpers/formatarCPF";
import { formatarRegistroDeParto } from "../helpers/formatarRegistroDeParto";
import { DatasDoses } from "./auxiliares/DatasDoses";
import { PrazoStyle } from "./auxiliares/PrazoStyle";
import { Selecionar_status_usuario_descricao } from "./auxiliares/Selecionar_status_usuario_descricao";
import { StatusAtendimentoOdontologico } from "./auxiliares/StatusAtendimentoOdontologico";
import { StatusDataConsulta } from "./auxiliares/StatusDataConsulta";
import { StatusDDP } from "./auxiliares/StatusDDP";
import { StatusEsquema } from "./auxiliares/StatusEsquema";
import { StatusExameSifilisHIV } from "./auxiliares/StatusExameSifilisHIV";
import { StatusIdadeGestacional } from "./auxiliares/StatusIdadeGestacional";
import { StatusTotalConsultasValidas } from "./auxiliares/StatusTotalConsultasValidas";

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
          pageBreakAfter: "auto",
          marginBottom: "10px"
        }}>
          <thead>
            <tr style={{
                  backgroundColor: "#E7E7E7",
                  width : "1200px"
              }}>
              {colunas.map((coluna,index) => coluna.showOnPrint && (
                <th style={{
                  padding : [...divisorVertical.map(item=>item+1),0].includes(index) ? "5px 5px 5px 12px" : "5px",
                  width: larguraColunas[index],
                  borderTopLeftRadius: index!=0 ? "0" : "8px",
                  borderBottomLeftRadius: index!=0 ? "0" : "8px",
                  borderTopRightRadius: index!=(colunas.length-1) ? "0" : "8px",
                  borderBottomRightRadius: index!=(colunas.length-1) ? "0" : "8px",
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
                {colunas.map((coluna,index) => coluna.showOnPrint && (
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
                      coluna.field === "gestacao_idade_gestacional_atual" && <StatusIdadeGestacional value={item.gestacao_idade_gestacional_primeiro_atendimento} />
                    }
                    {
                      coluna.field === "consultas_pre_natal_validas" && <StatusTotalConsultasValidas values={{
                        gestacao_idade_gestacional_primeiro_atendimento: item.gestacao_idade_gestacional_primeiro_atendimento,
                        consultas_pre_natal_validas: item[coluna.field],
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
                        identificacao_exame_hiv_sifilis={listas_auxiliares.identificacao_exame_sifilis_hiv}
                      />
                    }
                    {
                      coluna.field === "id_atendimento_odontologico" && <StatusAtendimentoOdontologico
                        value={item[coluna.field]}
                        identificacao_atendimento_odontologico={listas_auxiliares.identificacao_atendimento_odontologico}
                      />
                    }
                    {
                      coluna.field === "datas_doses_penta" && <DatasDoses value={item[coluna.field]} />
                    }
                    {
                      coluna.field === "datas_doses_polio" && <DatasDoses value={item[coluna.field]} />
                    }
                    {
                      coluna.field === "id_status_polio" && <StatusEsquema value={item[coluna.field]} />
                    }
                    {
                      coluna.field === "id_status_penta" && <StatusEsquema value={item[coluna.field]} />
                    }
                    {
                      coluna.field === "id_registro_parto" && formatarRegistroDeParto({ value: item[coluna.field] })
                    }
                    {
                      coluna.field === "cidadao_cpf_dt_nascimento" && formatarCPFOuDataNascimento({ value: item[coluna.field] })
                    }
                    {
                      coluna.field === "consulta_prenatal_ultima_data" && formatarDataNascimento(item[coluna.field])
                    }
                    {
                      coluna.field!="id_status_usuario"
                      && coluna.field!="prazo_proxima_coleta"
                      && coluna.field!="prazo_proxima_afericao_pa"
                      && coluna.field!="prazo_proxima_consulta"
                      && coluna.field!="prazo_proxima_solicitacao_hemoglobina"
                      && coluna.field!="gestacao_idade_gestacional_primeiro_atendimento"
                      && coluna.field!="consultas_pre_natal_validas"
                      && coluna.field!="dt_consulta_mais_recente"
                      && coluna.field!="dt_afericao_pressao_mais_recente"
                      && coluna.field!="dt_solicitacao_hemoglobina_glicada_mais_recente"
                      && coluna.field!="gestacao_data_dpp"
                      && coluna.field!="id_exame_hiv_sifilis"
                      && coluna.field!="id_atendimento_odontologico"
                      && coluna.field!="datas_doses_penta"
                      && coluna.field!="datas_doses_polio"
                      && coluna.field!="id_status_polio"
                      && coluna.field!="id_status_penta"
                      && coluna.field!="id_registro_parto"
                      && coluna.field!="gestacao_idade_gestacional_atual"
                      && coluna.field!="cidadao_cpf_dt_nascimento"
                      && coluna.field!="consulta_prenatal_ultima_data"
                      && item[coluna.field]
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