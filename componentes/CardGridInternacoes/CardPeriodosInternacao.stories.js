import { CardPeriodosInternacao } from './index';

export default {
  title: "Componentes/CardPeriodosInternacao",
  component: CardPeriodosInternacao,
  argTypes: {
    periodo: {
      name: "periodo",
      description: "Periodo do card *string*"
    },
    descricao: {
      name: "descricao",
      description: "Descricao do card *string*"
    },
    filtro: {
      name: "filtro",
      description: "Filtro a ser utilizado pelo card *componente react*"
    },
  }
};

const Template = (args) => <CardPeriodosInternacao { ...args }/>;
export const Completo = Template.bind({});
Completo.args = {
};
