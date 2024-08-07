import { CabecalhoPagina } from "./CabecalhoPagina"
import { TabelaUnitaria } from "./TabelaUnitaria"
import React from "react";

export const SemDivisao =({
    data,
    cabecalho,
    tabelas,
    fontFamily="sans-serif"
})=>{
    return(
      <div
        style={{
          marginBottom : "30px",
          pageBreakAfter : "always",
          pageBreakInside : "avoid"
        }}
      >
        <CabecalhoPagina 
          filtros_aplicados={cabecalho.filtros_aplicados}
          data_producao_mais_recente={cabecalho.data_producao_mais_recente}
          lista={cabecalho.lista}
          fontFamily = {fontFamily}
        />
        <TabelaUnitaria
          data = {data}
          colunas = {tabelas.colunas}
          listas_auxiliares = {tabelas.listas_auxiliares}
          divisorVertical={tabelas.divisorVertical}
          fontFamily = {fontFamily}
          indexTabela={0}
          larguraColunas={tabelas.largura_colunas_impressao}
          orientacao="paisagem"
        />
        <TabelaUnitaria
          data = {data}
          colunas = {tabelas.colunas}
          listas_auxiliares = {tabelas.listas_auxiliares}
          divisorVertical={tabelas.divisorVertical}
          fontFamily = {fontFamily}
          indexTabela={0}
          larguraColunas={tabelas.largura_colunas_impressao}
          orientacao="retrato"
        />
      </div>
)} 