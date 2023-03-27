import React from "react";
import { PanelSelectorSM } from "./index";
import { CardInfoTipoA, CardInfoTipoB } from "../CardInfo";
import { Grid12Col } from "../Grid12Col"

export default {
  title: "Componentes/PanelSelectorSM",
  component: PanelSelectorSM,
  argTypes: {
    components: {
      name: "components",
      description: "Array de arrays contendo os componentes exibidos em cada subaba do painel *array*"
    },
    subtitles: {
      name: "subtitles",
      description: "Array de arrays contendo objetos com os rótulos de cada subaba do painel *array* \n\n Cada objeto tem as propriedade: \n\n **label:** Texto exibido na subaba do painel *string*"
    },
    titles: {
      name: "titles",
      description: "Array de objetos contento os rótulos das abas do painel *array* \n\n Cada objeto tem as propriedade: \n\n **label:** Texto exibido na aba do painel *string*"
    },
    panel: {
      name: "panel",
      description: "Número da subaba que deve ser exibida assim que o componente for caregado *number*"
    },
    initialTitle: {
      name: "initialTitle",
      description: "Número da aba que deve ser exibida assim que o componente for caregado *number*"
    }
  },
};

const components = [
  <CardInfoTipoA
    fonte="Fonte: BPA-i e RAAS/SIASUS - Elaboração Impulso Gov"
    indicador={692}
    indice={-141}
    indiceDescricao="últ. mês"
    link={{
      label: 'Mais Informações',
      url: '/'
    }}
    titulo="Usuários que frequentaram"
    tooltip="Dados de usuários ativos"
  />,
  <Grid12Col
    items={[
      <CardInfoTipoB descricao="de 4823 atendimentos em saúde mental na APS" indicador={18} indicadorTotal={4823} indice={-4} indiceDescricao="últ. mês" titulo="Encaminhamentos para CAPS no mês de Junho" tooltip="Dados sobre encaminhamentos para CAPS no mês de Junho"/>,
      <CardInfoTipoB descricao="de 4823 atendimentos em saúde mental na APS" indicador={18} indicadorTotal={4823} titulo="Encaminhamentos para CAPS no mês de Junho" tooltip="Dados sobre encaminhamentos para CAPS no mês de Junho"/>,
      <CardInfoTipoB descricao="de 4823 atendimentos em saúde mental na APS" indicador={18} indicadorTotal={4823} indice={-4} titulo="Encaminhamentos para CAPS no mês de Junho"/>,
      <CardInfoTipoB indicador={18} indicadorTotal={4823} indice={-4} indiceDescricao="últ. mês" titulo="Encaminhamentos para CAPS no mês de Junho" tooltip="Dados sobre encaminhamentos para CAPS no mês de Junho"/>
    ]}
 />
];

const Template = (args) => <PanelSelectorSM {...args}/>

export const Default = Template.bind({});
Default.args = {
  components: [components],
  subtitles: [[
    { label: "RESUMO" },
    { label: "APS E CAPS" },
  ]],
  titles: [
    { label: "Cuidado compartilhado de Saúde Mental entre as redes de saúde" }
  ],
}
