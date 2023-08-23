import { CardInfoAux } from './index';

export default {
  title: "Componentes/CardInfoAux",
  component: CardInfoAux,
  argTypes: {
    descricao: {
      name: "descricao",
      description: "Descrição do card *string*"
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
    statusAntes: {
      name: "statusAntes",
      description: "Status do indicador antes *boolean*"
    },
    statusDepois: {
      name: "statusDepois",
      description: "Status do indicador depois *boolean*"
    },
  }
}

const Template = (args) => <CardInfoAux {...args}/>
export const Completo = Template.bind({});
Completo.args={
  indicador:692,
  indicadorDescricao: "Usuários",
  descricao: "Não foram atendidos na RAPS nos 6 meses anteriores à internação nem até o mês após a alta",
  statusAntes: true,
  statusDepois: false,
}
