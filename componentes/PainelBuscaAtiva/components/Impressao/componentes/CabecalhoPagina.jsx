import React from "react";

export const CabecalhoPagina = ({
    filtros_aplicados,
    data_producao_mais_recente,
    lista,
    fontFamily="sans-serif",
    legendaImpressao=""
})=>{
    return(
      <div>
        <div 
          className="largura"
          style={{
            fontFamily: `${fontFamily}, sans-serif`,
            fontSize : "16px",
            display : "flex",
            flexDirection : "row"
          }}
        >
          <div>
            <p style={{marginTop : 0}}><b>LISTA NOMINAL {lista}</b></p>
            <p><i>PRODUÇÃO MAIS RECENTE RECEBIDA EM : {data_producao_mais_recente}</i></p>
          </div>
          <div style={{
              width : "fit-content",
              height : "fit-content",
              marginLeft: "auto",
            }}>
              <img 
                src="https://media.graphassets.com/3HLHjLzQQDmQIxkp7Ifq" 
                alt="logo"
                width="150px"
                height="45px"
              />
          </div>
        </div>
        <div style={{
          display : "flex",
          flexDirection : "row",
          alignItems: "center",
          gap : "10px",
          fontSize : "16px",
          marginBottom : "10px",
          fontFamily: `${fontFamily}, sans-serif`,
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
        </div>
        {legendaImpressao &&
          <div style={{
            fontSize : "16px",
            fontFamily: `${fontFamily}, sans-serif`,
            lineHeight: "15px",
            marginBottom: "15px"
          }}>
            <span style={{ fontWeight: "bold" }}>Legenda: </span>
            {legendaImpressao}
          </div>
        }
      </div>
    )
  }
