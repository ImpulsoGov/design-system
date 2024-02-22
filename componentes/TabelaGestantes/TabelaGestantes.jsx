import React from "react";
import style from "./TabelaGestantes.module.css"

  
const FormatarData = (str)=>{
  if(!str) return null
  const parts = str.split('-');
  const dia = parts[2];
  const mes = parts[1];
  const ano = parts[0];
  const date = `${dia}/${mes}/${ano}`
  return date
}
const RegistroParto = (str)=>{
  if(str == 1) return "Sim"
  if(str == 2) return "Não"
}
const identificacao_exame_hiv_sifilis =  [
    {
      "id_exame_hiv_sifilis" : 0,
      "exame_hiv_sifilis_descricao" : null,
      "atualizacao_data" : "2023-10-18T12:43:21.419Z",
      "criacao_data" : "2023-10-18T12:43:21.419Z"
    },
    {
      "id_exame_hiv_sifilis" : 1,
      "exame_hiv_sifilis_descricao" : "Ex. de Sífilis não identificado",
      "atualizacao_data" : "2023-10-18T12:43:21.419Z",
      "criacao_data" : "2023-10-18T12:43:21.419Z"
    },
    {
      "id_exame_hiv_sifilis" : 2,
      "exame_hiv_sifilis_descricao" : "Ex. de HIV não identificado",
      "atualizacao_data" : "2023-10-18T12:43:21.419Z",
      "criacao_data" : "2023-10-18T12:43:21.419Z"
    },
    {
      "id_exame_hiv_sifilis" : 3,
      "exame_hiv_sifilis_descricao" : "Nenhum exame identificado",
      "atualizacao_data" : "2023-10-18T12:43:21.419Z",
      "criacao_data" : "2023-10-18T12:43:21.419Z"
    },
    {
      "id_exame_hiv_sifilis" : 4,
      "exame_hiv_sifilis_descricao" : "Os dois exames identificados",
      "atualizacao_data" : "2023-10-18T12:43:21.419Z",
      "criacao_data" : "2023-10-18T12:43:21.419Z"
    },
    {
      "id_exame_hiv_sifilis" : 5,
      "exame_hiv_sifilis_descricao" : "-",
      "atualizacao_data" : "2023-10-18T12:43:21.419Z",
      "criacao_data" : "2023-10-18T12:43:21.419Z"
    }
  ]
const exame_hiv_sifilis = (str)=>identificacao_exame_hiv_sifilis.find(item=>item.id_exame_hiv_sifilis==str).exame_hiv_sifilis_descricao

const identificacao_atendimento_odontologico = [
	{
		"id_atendimento_odontologico" : 1,
		"atendimento_odontologico_descricao" : "Sim",
		"atualizacao_data" : "2023-10-18T12:46:20.431Z",
		"criacao_data" : "2023-10-18T12:46:20.431Z"
	},
	{
		"id_atendimento_odontologico" : 2,
		"atendimento_odontologico_descricao" : "Não",
		"atualizacao_data" : "2023-10-18T12:46:20.431Z",
		"criacao_data" : "2023-10-18T12:46:20.431Z"
	},
	{
		"id_atendimento_odontologico" : 3,
		"atendimento_odontologico_descricao" : "-",
		"atualizacao_data" : "2023-10-18T12:46:20.431Z",
		"criacao_data" : "2023-10-18T12:46:20.431Z"
	},
	{
		"id_atendimento_odontologico" : 0,
		"atendimento_odontologico_descricao" : null,
		"atualizacao_data" : "2023-10-18T12:46:20.431Z",
		"criacao_data" : "2023-10-18T12:46:20.431Z"
	}
]
const atendimento_odontologico = (str)=>identificacao_atendimento_odontologico.find(item=>item.id_atendimento_odontologico==str).atendimento_odontologico_descricao

const TabelaGestantesImpressao = ({ data, colunas, fontFamily = "Inter"}) => {
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
                  key={`${item.id}-${coluna}-${index}`}
                  style={{
                      borderTopLeftRadius: index!=0 ? "0" : "15px",
                      borderBottomLeftRadius: index!=0 ? "0" : "15px",
                      borderTopRightRadius: index!=7 ? "0" : "15px",
                      borderBottomRightRadius: index!=7 ? "0" : "15px",
                      display : "table cell",
                      justifyContent : "center",
                      alignItems : "center",
                      marginTop : "4px"
                  }}
              >
                {
                  coluna.field=="id_registro_parto" && RegistroParto(item[coluna.field])
                }
                { 
                  coluna.field=="gestacao_data_dpp"  &&
                  FormatarData(item[coluna.field])
                }
                { 
                  coluna.field=="consulta_prenatal_ultima_data"  &&
                  FormatarData(item[coluna.field])
                }
                { 
                  coluna.field=="id_exame_hiv_sifilis"  &&
                  exame_hiv_sifilis(item[coluna.field])
                }
                { 
                  coluna.field=="id_atendimento_odontologico"  &&
                  atendimento_odontologico(item[coluna.field])
                }
                {
                  coluna.field!="id_registro_parto" && 
                  coluna.field!="gestacao_data_dpp" && 
                  coluna.field!="consulta_prenatal_ultima_data" && 
                  coluna.field!="id_exame_hiv_sifilis" && 
                  coluna.field!="id_atendimento_odontologico" && 
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

export {TabelaGestantesImpressao};