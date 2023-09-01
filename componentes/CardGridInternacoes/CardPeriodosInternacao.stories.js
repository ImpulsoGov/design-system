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
export const Default = Template.bind({});
Default.args = {
  periodo: "Anual",
  descricao: "Internações finalizadas entre agosto de 2021 e julho de 2022.",
};
