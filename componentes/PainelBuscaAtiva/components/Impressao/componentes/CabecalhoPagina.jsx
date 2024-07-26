export const CabecalhoPagina = ({
    filtros_aplicados,
    data_producao_mais_recente,
    lista,
})=>{
    return(
      <>
        <div style={{
          display : "flex",
          flexDirection : "row",
          fontFamily : "Inter",
          fontSize : "11px",
          marginTop : "25px"
        }}>
          <p><b>LISTA NOMINAL {lista}</b><i> - PRODUÇÃO MAIS RECENTE RECEBIDA EM : {data_producao_mais_recente}</i></p>
        </div>
        <div style={{
          display : "flex",
          flexDirection : "row",
          alignItems: "center",
          gap : "10px",
          fontSize : "11px",
          marginBottom : "10px"
        }}>
          <p><b>Filtros aplicados: </b></p>
          {
            filtros_aplicados && filtros_aplicados.length>0 ?
            filtros_aplicados.map((filtro,index)=>{
              return(
                <div 
                  key={index}
                  style={{
                    border : "solid 1px #757574",
                    borderRadius : "5px",
                    padding : "6px",
                    fontSize : "11px",
                    backgroundColor : "#F5F5F5"
                  }}
                >
                  {filtro}
                </div>
              )
            }) :
            ["Sem filtros aplicados"]
          }
          <div style={{
            width : "fit-content",
            height : "fit-content",
            marginLeft: "auto",
            marginTop : "-45px"
          }}>
            <img 
              src="https://media.graphassets.com/VTP6e8dLSrC2j2zNABfV" 
              alt="logo"
              width="160px"
              height="65px"
            />
          </div>

        </div>
      </>
    )
  }
