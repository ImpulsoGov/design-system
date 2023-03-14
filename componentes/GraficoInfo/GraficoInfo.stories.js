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
    linkMaisInfo: {
      name: "linkMaisInfo",
      description: "Link para mais informações *URL*",
    },
  }
}

const Template = (args) => <GraficoInfo {...args}/>

export const Default = Template.bind({});
Default.args={
  titulo: "Taxa de abandono",
  descricao: "Conjunto de usuários com 1º procedimento em Março/2022 e abandono até Agosto/2022",
  fonte: "RAAS/SIASUS - Elaboração Impulso Gov",
  linkMaisInfo: "/",
  tooltip: "Este gráfico diz respeito à taxa de abandono"
}
