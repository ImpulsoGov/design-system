import { ordenarEquipes } from "../helpers/ordenarEquipes";
import { CabecalhoPagina } from "./CabecalhoPagina";
import { TabelaUnitaria } from "./TabelaUnitaria";
export const MultiplasEquipesPorPagina = ({
    divisao_por_equipes,
    cabecalho,
    tabelas,
    fontFamily="sans-serif",
})=>{
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
              <div 
                key={registro+index}
              >
                <div key={index}>
                  <p 
                  style={{
                    fontSize : "11px",
                    fontFamily: `${fontFamily}, sans-serif`,
                    marginTop : "17px",
                    marginBottom : "17px"
                  }}><b>{registro}</b></p>
                  <TabelaUnitaria
                    data = {divisao_por_equipes[registro]}
                    colunas = {tabelas.colunas}
                    listas_auxiliares = {tabelas.listas_auxiliares}
                    divisorVertical={tabelas.divisorVertical}
                    fontFamily = {fontFamily}
                    indexTabela={index}
                    larguraColunas={tabelas.largura_colunas_impressao.retrato}
                    orientacao="retrato"
                  />
                  <TabelaUnitaria
                    data = {divisao_por_equipes[registro]}
                    colunas = {tabelas.colunas}
                    listas_auxiliares = {tabelas.listas_auxiliares}
                    divisorVertical={tabelas.divisorVertical}
                    fontFamily = {fontFamily}
                    indexTabela={index}
                    larguraColunas={tabelas.largura_colunas_impressao.paisagem}
                    orientacao="paisagem"
                  />
                </div>
              </div>
              </>
          )})
        }   
        </div>  
    )
}