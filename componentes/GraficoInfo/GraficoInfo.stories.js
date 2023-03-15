import { GraficoInfo } from "./index";

export default {
  title: "Componentes/GraficoInfo",
  component: GraficoInfo,
  argTypes: {
    fonte: {
      name: "fonte",
      description: "Fonte de dados do gráfico *string*",
    },
    titulo: {
      name: "titulo",
      description: "Titulo do gráfico *string*",
    },
    tooltip: {
      name: "tooltip",
      description: "Mensagem do tooltip do gráfico *string*"
    },
    descricao: {
      name: "descricao",
      description: "Descrição do gráfico *string*",
    },
    link: {
      name: "link",
      description: "Link exibido no gráfico *object*\n\n url: URL do link *string*\n\n label: label do link *string*",
    },
  }
}

const Template = (args) => <GraficoInfo {...args}/>

export const Default = Template.bind({});
Default.args={
  titulo: "Taxa de abandono",
  descricao: "Conjunto de usuários com 1º procedimento em Março/2022 e abandono até Agosto/2022",
  fonte: "Fonte: RAAS/SIASUS - Elaboração Impulso Gov",
  link: {
    url: "/",
    label: "Mais informações"
  },
  tooltip: "Este gráfico diz respeito à taxa de abandono"
}
