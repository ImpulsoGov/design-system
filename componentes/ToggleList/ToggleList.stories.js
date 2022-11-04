import React from "react";

import { ToggleList } from "./index";

const list = [
  {
    title: "Serviços do CAPS",
    blocks:[
      {
        subTitle: "Número de usuários ativos",
        description: "Definição: que tiveram pelo menos um registro em ficha de ações psicossociais no mês de referência ou em um dos dois meses anteriores.",
        source: "Fonte: RAAS/SIASUS"
      },
      {
        subTitle: "Número de usuários ativos",
        description: "Definição: que tiveram pelo menos um registro em ficha de ações psicossociais no mês de referência ou em um dos dois meses anteriores.",
        source: "Fonte: RAAS/SIASUS"
      },
      {
        subTitle: "Número de usuários ativos",
        description: "Definição: que tiveram pelo menos um registro em ficha de ações psicossociais no mês de referência ou em um dos dois meses anteriores.",
        source: "Fonte: RAAS/SIASUS"
      },
    ]
  },
  {
    title: "Serviços do CAPS",
    blocks:[
      {
        subTitle: "Número de usuários ativos",
        description: "Definição: que tiveram pelo menos um registro em ficha de ações psicossociais no mês de referência ou em um dos dois meses anteriores.",
        source: "Fonte: RAAS/SIASUS"
      },
      {
        subTitle: "Número de usuários ativos",
        description: "Definição: que tiveram pelo menos um registro em ficha de ações psicossociais no mês de referência ou em um dos dois meses anteriores.",
        source: "Fonte: RAAS/SIASUS"
      },
      {
        subTitle: "Número de usuários ativos",
        description: "Definição: que tiveram pelo menos um registro em ficha de ações psicossociais no mês de referência ou em um dos dois meses anteriores.",
        source: "Fonte: RAAS/SIASUS"
      },
    ]
  },
  {
    title: "Serviços do CAPS",
    blocks:[
      {
        subTitle: "Número de usuários ativos",
        description: "Definição: que tiveram pelo menos um registro em ficha de ações psicossociais no mês de referência ou em um dos dois meses anteriores.",
        source: "Fonte: RAAS/SIASUS"
      },
      {
        subTitle: "Número de usuários ativos",
        description: "Definição: que tiveram pelo menos um registro em ficha de ações psicossociais no mês de referência ou em um dos dois meses anteriores.",
        source: "Fonte: RAAS/SIASUS"
      },
      {
        subTitle: "Número de usuários ativos",
        description: "Definição: que tiveram pelo menos um registro em ficha de ações psicossociais no mês de referência ou em um dos dois meses anteriores.",
        source: "Fonte: RAAS/SIASUS"
      },
    ]
  },
]


export default {
  title: "Componentes/ToggleList",
  component: ToggleList,
};

export const Default = () => {
  return (
    <ToggleList list={list} />
  )
}