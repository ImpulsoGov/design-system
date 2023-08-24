import { CardPeriodos } from './index';

export default {
  title: "Componentes/CardPeriodos",
  component: CardPeriodos,
  argTypes: {
  }
};

const Template = (args) => <CardPeriodos { ...args }/>;
export const Completo = Template.bind({});
Completo.args = {
};