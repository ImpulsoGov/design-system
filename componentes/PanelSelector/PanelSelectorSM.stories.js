import React from "react";
import { PanelSelectorSM } from "./index";
import { CardInfoTipoA, CardInfoTipoB } from "../CardInfo";
import { Grid12Col } from "../Grid12Col";
import { TituloSmallTexto } from "../TituloTexto";
import { GraficoInfo } from "../GraficoInfo";

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
  <>
    <TituloSmallTexto
      imagem={{
        posicao: null,
        url: ''
      }}
      texto="Impulso Gov, uma organização sem fins lucrativos e suprapartidária que apoia profissionais do SUS no aprimoramento das políticas públicas por meio do uso de dados e tecnologia, para que todas as pessoas no Brasil tenham acesso a serviços de saúde de qualidade.<br/><br/><b>Quer saber mais sobre a Impulso Gov Acesse o nosso <a style='text-decoration: none' href='impulsogov.org'>site.</a> </b>"
      titulo="<strong>A Impulso Gov</strong>"
    />
    <GraficoInfo
      descricao="Conjunto de usuários com 1º procedimento em Março/2022 e abandono até Agosto/2022"
      fonte="Fonte: RAAS/SIASUS - Elaboração Impulso Gov"
      link={{
        label: 'Mais informações',
        url: '/'
      }}
      titulo="Taxa de abandono"
      tooltip="Este gráfico diz respeito à taxa de abandono"
    />
    <Grid12Col
      items={[
        <CardInfoTipoB descricao="de 4823 atendimentos em saúde mental na APS" indicador={18} indicadorTotal={4823} indice={-4} indiceDescricao="últ. mês" titulo="Encaminhamentos para CAPS no mês de Junho" tooltip="Dados sobre encaminhamentos para CAPS no mês de Junho"/>,
        <CardInfoTipoB descricao="de 4823 atendimentos em saúde mental na APS" indicador={18} indicadorTotal={4823} titulo="Encaminhamentos para CAPS no mês de Junho" tooltip="Dados sobre encaminhamentos para CAPS no mês de Junho"/>,
        <CardInfoTipoB descricao="de 4823 atendimentos em saúde mental na APS" indicador={18} indicadorTotal={4823} indice={-4} titulo="Encaminhamentos para CAPS no mês de Junho"/>,
        <CardInfoTipoB indicador={18} indicadorTotal={4823} indice={-4} indiceDescricao="últ. mês" titulo="Encaminhamentos para CAPS no mês de Junho" tooltip="Dados sobre encaminhamentos para CAPS no mês de Junho"/>
      ]}
    />
  </>,
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
