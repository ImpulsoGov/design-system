import { CabecalhoPagina } from "./CabecalhoPagina"
import { TabelaUnitaria } from "./TabelaUnitaria"

export const SemDivisao =({
    data,
    cabecalho,
    tabelas,
    blocosPorPagina,
    fontFamily="sans-serif"
})=>{
    return(
        blocosPorPagina(data,23).map((page,index)=>{
            return(
              <div
                style={{
                  marginBottom : "30px",
                  pageBreakAfter : "always",
                  pageBreakInside : "avoid"
                }}
                key={index}
              >
                <CabecalhoPagina 
                  filtros_aplicados={cabecalho.filtros_aplicados}
                  data_producao_mais_recente={cabecalho.data_producao_mais_recente}
                  lista={cabecalho.lista}
                  fontFamily = {fontFamily}
                />
                <TabelaUnitaria
                  data = {page}
                  colunas = {tabelas.colunas}
                  listas_auxiliares = {tabelas.listas_auxiliares}
                  divisorVertical={tabelas.divisorVertical}
                  fontFamily = {fontFamily}
                  indexTabela={0}
                  larguraColunas={tabelas.largura_colunas_impressao}
                />
              </div>
            )
          })

    )
} 