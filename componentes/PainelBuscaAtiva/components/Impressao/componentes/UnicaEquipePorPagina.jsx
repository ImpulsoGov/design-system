import { CabecalhoPagina } from "./CabecalhoPagina"
import { TabelaUnitaria } from "./TabelaUnitaria"

export const UnicaEquipePorPagina = ({
    EquipesPorPagina,
    cabecalho,
    tabelas,
    quebrasDePaginasEquipe,
})=>{
    return(
        Object.keys(EquipesPorPagina).sort().map((registro,index)=>{
            return( 
            <>
              <div 
                key={registro+index} 
                style={{
                  marginBottom : `${quebrasDePaginasEquipe[registro]}px`,
                }}
              >
                <CabecalhoPagina 
                  filtros_aplicados={cabecalho.filtros_aplicados}
                  data_producao_mais_recente={cabecalho.data_producao_mais_recente}
                  lista={cabecalho.lista}
                />
                <p style={{
                  fontSize : "11px",
                }}><b>{registro}</b></p>
                <TabelaUnitaria
                  data = {EquipesPorPagina[registro]}
                  colunas = {tabelas.colunas}
                  status_usuario_descricao = {tabelas.listas_auxiliares.status_usuario_descricao}
                  divisorVertical={tabelas.divisorVertical}
                  fontFamily = "Inter"
                  indexTabela={index}
                  larguraColunas={tabelas.largura_colunas_impressao}
                />
              </div>
            </>
          )})

    )
}