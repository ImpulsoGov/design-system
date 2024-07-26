import { CabecalhoPagina } from "./CabecalhoPagina"
import { TabelaUnitaria } from "./TabelaUnitaria"

export const SemDivisao =({
    data,
    cabecalho,
    tabelas,
    blocosPorPagina,
})=>{
    return(
        blocosPorPagina(data,23).map((page,index)=>{
            return(
              <div
                style={{
                  marginBottom : "30px"
                }}
                key={index}
              >
                <CabecalhoPagina 
                  filtros_aplicados={cabecalho.filtros_aplicados}
                  data_producao_mais_recente={cabecalho.data_producao_mais_recente}
                  lista={cabecalho.lista}
                />
                <TabelaUnitaria
                  data = {page}
                  colunas = {tabelas.colunas}
                  listas_auxiliares = {tabelas.listas_auxiliares}
                  divisorVertical={tabelas.divisorVertical}
                  fontFamily = "Inter"
                  indexTabela={0}
                  larguraColunas={tabelas.largura_colunas_impressao}
                />
              </div>
            )
          })

    )
} 