import { CardInfoTipoB } from './index';

export default {
  title: "Componentes/CardInfoTipoB",
  component: CardInfoTipoB,
  argTypes: {
    titulo: {
      name: "titulo",
      description: "Titulo do card *string*"
    },
    tooltip: {
      name: "tooltip",
      description: "Mensagem do tooltip do card *string*"
    },
    indicador: {
      name: "indicador",
      description: "Valor do indicador do card *number*"
    },
    indicadorDescricao: {
      name: "indicadorDescricao",
      description: "Descrição do indicador do card *string*"
    },
    indicadorSimbolo: {
      name: "indicadorSimbolo",
      description: "Símbolo associado ao indicador *string* \n\n Exemplo: %"
    },
    indicadorTotal: {
      name: "indicadorTotal",
      description: "Valor total do indicador exibido no card para calcular porcentagem exibida no gráfico *number*"
    },
    indice: {
      name: "indice",
      description: "Índice do indicador do card *number*"
    },
    indiceDescricao: {
      name: "indiceDescricao",
      description: "Descrição do índice do card *string*"
    },
    indiceSimbolo: {
      name: "indiceSimbolo",
      description: "Símbolo associado ao índice *string* \n\n Exemplo: %"
    },
    descricao: {
      name: "descricao",
      description: "Descrição do card *string*"
    },
  }
}

const Template = (args) => <CardInfoTipoB {...args}/>
export const Completo = Template.bind({});
Completo.args={
  titulo: "Encaminhamentos para CAPS no mês de Junho",
  tooltip: "Dados sobre encaminhamentos para CAPS no mês de Junho",
  indicador: 18,
  indicadorTotal: 4823,
  indice: -4,
  indiceDescricao: "últ. mês",
  descricao: "de 4823 atendimentos em saúde mental na APS",
}
