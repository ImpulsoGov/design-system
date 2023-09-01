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
  }
};

const Template = (args) => <CardIndicadorDescricao { ...args }/>;
export const Default = Template.bind({});
Default.args = {
  indicador: 692,
  descricao: "Usuários",
};
