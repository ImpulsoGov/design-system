import { divisaoPorEquipes } from "../helpers/divisaoPorEquipes";
import { MultiplasEquipesPorPagina } from "./MultiplasEquipesPorPagina";
import { UnicaEquipePorPagina } from "./UnicaEquipePorPagina";
import { SemDivisao } from "./SemDivisao";
import { blocosPorPagina } from "../helpers/SemDivisao/blocosPorPagina";

export const TabelaImpressao = ({ 
    data, 
    colunas, 
    lista,
    targetRef, 
    filtros_aplicados,
    divisao_dados=true, 
    divisao_paginas=false, 
    data_producao_mais_recente,
    listas_auxiliares,
    largura_colunas_impressao,
    divisorVertical,
    fontFamily="sans-serif"
  }) => {
    const divisao_por_equipes = divisao_dados ? divisaoPorEquipes(data) : []
    return (
      <div 
        ref={targetRef}
        style={{
          paddingLeft : "45px",
          fontFamily: `${fontFamily}, sans-serif`,
          width : "1080px",
        }}
      >
        {
          divisao_dados && !divisao_paginas && divisao_por_equipes &&
          <MultiplasEquipesPorPagina
            divisao_por_equipes={divisao_por_equipes}
            cabecalho={{
              filtros_aplicados : filtros_aplicados,
              data_producao_mais_recente : data_producao_mais_recente,
              lista : lista
            }}
            tabelas={{
              colunas : colunas,
              listas_auxiliares : listas_auxiliares,
              largura_colunas_impressao : largura_colunas_impressao,
              divisorVertical : divisorVertical
            }}
            fontFamily={fontFamily}
          />
        }
        {
          divisao_paginas && divisao_dados &&
          <UnicaEquipePorPagina
            divisao_por_equipes={divisao_por_equipes}
            cabecalho={{
              filtros_aplicados : filtros_aplicados,
              data_producao_mais_recente : data_producao_mais_recente,
              lista : lista
            }}
            tabelas={{
              colunas : colunas,
              listas_auxiliares : listas_auxiliares,
              largura_colunas_impressao : largura_colunas_impressao,
              divisorVertical : divisorVertical
            }}
            fontFamily={fontFamily}
          />
        }
        {
          (!divisao_dados && !divisao_paginas) &&
          <SemDivisao
            data={data}
            cabecalho={{
              filtros_aplicados : filtros_aplicados,
              data_producao_mais_recente : data_producao_mais_recente,
              lista : lista
            }}
            tabelas={{
              colunas : colunas,
              listas_auxiliares : listas_auxiliares,
              largura_colunas_impressao : largura_colunas_impressao,
              divisorVertical : divisorVertical
            }}
            blocosPorPagina={blocosPorPagina}
            fontFamily={fontFamily}
          />
        }
      </div>
    );
  };

