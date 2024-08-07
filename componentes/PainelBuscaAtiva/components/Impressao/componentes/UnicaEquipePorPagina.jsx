import { ordenarEquipes } from "../helpers/ordenarEquipes";
import { CabecalhoPagina } from "./CabecalhoPagina";
import { TabelaUnitaria } from "./TabelaUnitaria";
import React from "react";

export const UnicaEquipePorPagina = ({
  divisao_por_equipes,
  cabecalho,
  tabelas,
  fontFamily="sans-serif",
  complementoCabecalho
})=>{
    return(
        Object.keys(divisao_por_equipes).sort(ordenarEquipes).map((registro,index)=>{
            return( 
            <>
              <div 
                key={registro+index} 
                style={{
                  pageBreakAfter : "always"
                }}
              >
                <CabecalhoPagina 
                  filtros_aplicados={cabecalho.filtros_aplicados}
                  data_producao_mais_recente={cabecalho.data_producao_mais_recente}
                  lista={cabecalho.lista}
                  fontFamily = {fontFamily}
                />
                <p style={{
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
                  orientacao="retrato"
                  complementoCabecalho = {complementoCabecalho}
                  />
                <TabelaUnitaria
                  data = {divisao_por_equipes[registro]}
                  colunas = {tabelas.colunas}
                  listas_auxiliares = {tabelas.listas_auxiliares}
                  divisorVertical={tabelas.divisorVertical}
                  fontFamily = {fontFamily}
                  indexTabela={index}
                  larguraColunas={tabelas.largura_colunas_impressao}
                  orientacao="paisagem"
                  complementoCabecalho = {complementoCabecalho}
                />
              </div>
            </>
          )})
    )
}