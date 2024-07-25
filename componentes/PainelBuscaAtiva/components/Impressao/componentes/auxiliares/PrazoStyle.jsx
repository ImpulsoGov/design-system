const atencao_simbolo = "https://media.graphassets.com/FmWKs2qkSOywVyzapKcg"
const check_simbolo  = "https://media.graphassets.com/7u3RZBCRjeP22EvTQxd9"

export const PrazoStyle = ({value})=>{
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
