import React from "react";

import { ToggleListElementBlock } from "./index";

const item = {
  title: "Serviços do CAPS",
  subTitle: "Número de usuários ativos",
  description: "Definição: que tiveram pelo menos um registro em ficha de ações psicossociais no mês de referência ou em um dos dois meses anteriores.",
  source: "Fonte: RAAS/SIASUS"
}

export default {
  title: "Componentes/ToggleListElementBlock",
  component: ToggleListElementBlock,
};

export const Default = () => {
  return (
    <ToggleListElementBlock title={item.title} subTitle={item.subTitle} description={item.description} />
  )
}