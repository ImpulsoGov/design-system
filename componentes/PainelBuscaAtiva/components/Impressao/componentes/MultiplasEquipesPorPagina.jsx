import { CabecalhoPagina } from "./CabecalhoPagina"
import { TabelaUnitaria } from "./TabelaUnitaria"
export const MultiplasEquipesPorPagina = ({
    dadosDivididosPorEquipeComQuebraDePagina,
    cabecalho,
    tabelas,
    quebrasDePaginas,
})=>{
    return(
        Object.keys(dadosDivididosPorEquipeComQuebraDePagina).map((registro,index)=>{
            return( 
            <div key={registro+index}>
              { 
                index ==0 && 
                <CabecalhoPagina 
                  filtros_aplicados={cabecalho.filtros_aplicados}
                  data_producao_mais_recente={cabecalho.data_producao_mais_recente}
                  lista={cabecalho.lista}
                />
              }
              <div key={index}>
                <p style={{
                  fontSize : "11px",
                }}><b>{registro}</b></p>
                <TabelaUnitaria
                  data = {dadosDivididosPorEquipeComQuebraDePagina[registro]}
                  colunas = {tabelas.colunas}
                  status_usuario_descricao = {tabelas.listas_auxiliares.status_usuario_descricao}
                  divisorVertical={tabelas.divisorVertical}
                  fontFamily = "Inter"
                  indexTabela={index}
                  larguraColunas={tabelas.largura_colunas_impressao}
                />
                {
                  quebrasDePaginas.includes(index) &&
                  <CabecalhoPagina 
                    filtros_aplicados={cabecalho.filtros_aplicados}
                    data_producao_mais_recente={cabecalho.data_producao_mais_recente}
                    lista={cabecalho.lista}
                  />
                }
              </div>
            </div>
          )})

    )
}