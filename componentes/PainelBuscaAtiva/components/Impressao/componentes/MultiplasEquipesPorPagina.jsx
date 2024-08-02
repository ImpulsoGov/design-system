import { ordenarEquipes } from "../helpers/ordenarEquipes";
import { CabecalhoPagina } from "./CabecalhoPagina";
import { TabelaUnitaria } from "./TabelaUnitaria";
export const MultiplasEquipesPorPagina = ({
    divisao_por_equipes,
    cabecalho,
    tabelas,
    fontFamily="sans-serif",
    propAgrupamentoImpressao
})=>{
  console.log(divisao_por_equipes)
    return(
      <div>
        <CabecalhoPagina 
          filtros_aplicados={cabecalho.filtros_aplicados}
          data_producao_mais_recente={cabecalho.data_producao_mais_recente}
          lista={cabecalho.lista}
          fontFamily = {fontFamily}
        />
        {
          Object.keys(divisao_por_equipes).sort(ordenarEquipes).map((registro,index)=>{
            return( 
              <>
              <div key={registro+index}>
                <div 
                  key={index}
                  style={{
                    display : "table-header-group",
                  }}
                >
                  <p 
                  style={{
                    fontSize : "11px",
                    fontFamily: `${fontFamily}, sans-serif`,
                  }}><b>{registro}</b></p>
                  <TabelaUnitaria
                    data = {divisao_por_equipes[registro]}
                    colunas = {tabelas.colunas}
                    listas_auxiliares = {tabelas.listas_auxiliares}
                    divisorVertical={tabelas.divisorVertical}
                    fontFamily = {fontFamily}
                    indexTabela={index}
                    larguraColunas={tabelas.largura_colunas_impressao}
                  />
                </div>
              </div>
              </>
          )})
        }     
      </div>

    )
}