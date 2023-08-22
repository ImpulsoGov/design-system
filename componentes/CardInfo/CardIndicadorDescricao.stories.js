import { CardIndicadorDescricao } from './index';

export default {
  title: "Componentes/CardIndicadorDescricao",
  component: CardIndicadorDescricao,
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
  }
};

const Template = (args) => <CardIndicadorDescricao { ...args } />;
export const Completo = Template.bind({});
Completo.args = {
  indicador: 692,
  indicadorDescricao: "Usuários",
  // descricao: "Usuários",
};
