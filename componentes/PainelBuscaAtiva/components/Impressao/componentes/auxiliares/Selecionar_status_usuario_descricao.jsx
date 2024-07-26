import { status_usuario_descricao } from "../../../../__data__/stories/citopatologico/status_usuario_descricao"

const atencao_simbolo = "https://media.graphassets.com/FmWKs2qkSOywVyzapKcg"
const alerta_simbolo  = "https://media.graphassets.com/Xc6Ac1QQfqcYdblW18rg"
const check_simbolo  = "https://media.graphassets.com/7u3RZBCRjeP22EvTQxd9"

export const Selecionar_status_usuario_descricao = ({value,status_usuario_descricao})=> {
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
    width : "90%"
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
    width : "90%"
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
      width : "90%"
    }

  const styleStatus = {
    12 : check,  
    13 : alert,
    14 : alert,
    15 : atencao,
    16 : alert
  }

  const descricao = status_usuario_descricao.find(item => item?.id_status_usuario == value)?.status_usuario_descricao
  return <div style={styleStatus[value]}> 
    {[13,14,16].includes(value) &&  <span style={{display : "flex"}}><img src={alerta_simbolo}/></span>} 
    {[15].includes(value) &&  <span style={{display : "flex"}}><img src={atencao_simbolo}/></span>} 
    {[12].includes(value) &&  <span style={{display : "flex"}}><img src={check_simbolo}/></span>} 
    <span>{descricao}</span>
    </div>
}
export const selecionar_status_usuario_descricao = ({value})=> {
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
    width : "90%"
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
    width : "90%"
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
      width : "90%"
    }

  const styleStatus = {
    12 : check,  
    13 : alert,
    14 : alert,
    15 : atencao,
    16 : alert
  }

  const descricao = status_usuario_descricao.find(item => item?.id_status_usuario == value)?.status_usuario_descricao
  return <div style={styleStatus[value]}> 
    {[13,14,16].includes(value) &&  <span style={{display : "flex"}}><img src={alerta_simbolo}/></span>} 
    {[15].includes(value) &&  <span style={{display : "flex"}}><img src={atencao_simbolo}/></span>} 
    {[12].includes(value) &&  <span style={{display : "flex"}}><img src={check_simbolo}/></span>} 
    <span>{descricao}</span>
    </div>
}



  