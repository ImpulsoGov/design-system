import { CardPeriodosInternacao } from './index';

export default {
  title: "Componentes/CardPeriodosInternacao",
  component: CardPeriodosInternacao,
  argTypes: {
  }
};

const Template = (args) => <CardPeriodosInternacao { ...args }/>;
export const Completo = Template.bind({});
Completo.args = {
};
