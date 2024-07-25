import { divisaoPorEquipes } from "../helpers/divisaoPorEquipes";
import { dividirDadosPorPaginaComMultiplasEquipes } from "../helpers/DivisaoPorEquipeMesmaPagina/dividirDadosPorPaginaComMultiplasEquipes";
import { dividirEquipes } from "../helpers/DivisaoPorEquipePorPagina/dividirEquipesPorPagina"
import { CabecalhoPagina } from "./CabecalhoPagina";
import { TabelaUnitaria } from "./TabelaUnitaria";

export const TabelaImpressao = ({ 
    data, 
    colunas, 
    targetRef, 
    filtros_aplicados_tabela, //Vem do componente PainelBuscaAtiva
    divisao_dados=false, //vem do front-end via componente PainelBuscaAtiva
    divisao_paginas=true, //vem do front-end via componente PainelBuscaAtiva
    fontFamily,
    data_producao_mais_recente,
    listas_auxiliares
  }) => {
    const filtros_aplicados = ["status da coleta coleta em dia", "status da coleta Vence no final do quadrimestre"]
    const divisao_por_equipes = divisaoPorEquipes(data)
    //varias equipes por pagina
    const { dadosDivididosPorEquipeComQuebraDePagina,quebrasDePaginas } = dividirDadosPorPaginaComMultiplasEquipes(divisao_por_equipes)
    //uma equipe por pagina
    const { EquipesPorPagina, quebrasDePaginasEquipe } = dividirEquipes(divisao_por_equipes)
    const blocosPorPagina = (array, chunkSize)=> 
      array.reduce((result, item, index) => {
          const chunkIndex = Math.floor(index / chunkSize);
          if (!result[chunkIndex]) result[chunkIndex] = []; // Start a new chunk
          result[chunkIndex].push(item);
          return result;
      }, []);
    return (
      <div 
        ref={targetRef}
        style={{
          paddingLeft : "45px",
          fontFamily : "Inter",
          width : "1080px",
        }}
      >
        {
          divisao_dados && dadosDivididosPorEquipeComQuebraDePagina &&
          Object.keys(dadosDivididosPorEquipeComQuebraDePagina).map((registro,index)=>{
            return( 
            <>
              { 
                index ==0 && 
                <CabecalhoPagina 
                  filtros_aplicados={filtros_aplicados}
                  data_producao_mais_recente={data_producao_mais_recente}
                />}
              <div key={index}>
                <p style={{
                  fontSize : "11px",
                }}><b>{registro}</b></p>
                <TabelaUnitaria
                  data = {dadosDivididosPorEquipeComQuebraDePagina[registro]}
                  colunas = {colunas}
                  status_usuario_descricao = {listas_auxiliares.status_usuario_descricao}
                  fontFamily = "Inter"
                  indexTabela={index}
                />
                {
                  quebrasDePaginas.includes(index) &&
                  <CabecalhoPagina 
                    filtros_aplicados={filtros_aplicados}
                    data_producao_mais_recente={data_producao_mais_recente}
                  />
                }
              </div>
            </>
          )})
        }
        {
          divisao_paginas &&
          Object.keys(EquipesPorPagina).sort().map((registro,index)=>{
            return( 
            <>
              <div 
                key={index} 
                style={{
                  marginBottom : `${quebrasDePaginasEquipe[registro]}px`
                }}
              >
                <CabecalhoPagina 
                  filtros_aplicados={filtros_aplicados}
                  data_producao_mais_recente={data_producao_mais_recente}
                />
                <p style={{
                  fontSize : "11px",
                }}><b>{registro}</b></p>
                <TabelaUnitaria
                  data = {EquipesPorPagina[registro]}
                  colunas = {colunas}
                  status_usuario_descricao = {listas_auxiliares.status_usuario_descricao}
                  fontFamily = "Inter"
                  indexTabela={index}
                />
              </div>
            </>
          )})
        }
        {
          !divisao_dados && !divisao_paginas &&
          blocosPorPagina(data,23).map((page,index)=>{
            return(
              <div
                style={{
                  marginBottom : "30px"
                }}
                key={index}
              >
                <CabecalhoPagina 
                  filtros_aplicados={filtros_aplicados}
                  data_producao_mais_recente={data_producao_mais_recente}
                />
                <TabelaUnitaria
                  data = {page}
                  colunas = {colunas}
                  status_usuario_descricao = {listas_auxiliares.status_usuario_descricao}
                  fontFamily = "Inter"
                  indexTabela={0}
                />
              </div>
            )
          })
        }
      </div>
    );
  };

