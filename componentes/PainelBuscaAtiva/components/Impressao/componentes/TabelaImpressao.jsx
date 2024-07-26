import { divisaoPorEquipes } from "../helpers/divisaoPorEquipes";
import { dividirDadosPorPaginaComMultiplasEquipes } from "../helpers/DivisaoPorEquipeMesmaPagina/dividirDadosPorPaginaComMultiplasEquipes";
import { dividirEquipes } from "../helpers/DivisaoPorEquipePorPagina/dividirEquipesPorPagina"
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
    divisao_paginas=true, 
    data_producao_mais_recente,
    listas_auxiliares,
    largura_colunas_impressao,
    divisorVertical
  }) => {
    //const filtros_aplicados = ["status da coleta coleta em dia", "status da coleta Vence no final do quadrimestre"]
    const divisao_por_equipes = divisaoPorEquipes(data)
    //varias equipes por pagina
    const { dadosDivididosPorEquipeComQuebraDePagina,quebrasDePaginas } = dividirDadosPorPaginaComMultiplasEquipes(divisao_por_equipes)
    //uma equipe por pagina
    const { EquipesPorPagina, quebrasDePaginasEquipe } = dividirEquipes(divisao_por_equipes)
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
          divisao_dados && !divisao_paginas && dadosDivididosPorEquipeComQuebraDePagina &&
          <MultiplasEquipesPorPagina
            dadosDivididosPorEquipeComQuebraDePagina={dadosDivididosPorEquipeComQuebraDePagina}
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
            quebrasDePaginas={quebrasDePaginas}
          />
        }
        {
          divisao_paginas && divisao_dados &&
          <UnicaEquipePorPagina
            EquipesPorPagina={EquipesPorPagina}
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
            quebrasDePaginasEquipe={quebrasDePaginasEquipe}
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
          />
        }
      </div>
    );
  };

