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
  argTypes: {
    item: {
      name:'item',
      description:'Objeto contendo informações dos itens da toggle list *object* \n\n**titulo:** Título do item *string* \n\n**subTiTle:** Subtítulo do item *string* \n\n**description:** Descrição do Item *string* \n\n **source:** Fonte da informação *string*'
    },
  },
};

const Template = (args) => <ToggleListElementBlock {...args}/>

export const Default = Template.bind({});
Default.args={
  item : item
}
