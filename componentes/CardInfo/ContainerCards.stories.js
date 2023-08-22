import { ContainerCards } from './index';

export default {
  title: "Componentes/ContainerCards",
  component: ContainerCards,
  argTypes: {
  }
};

const Template = (args) => <ContainerCards { ...args } />;
export const Completo = Template.bind({});
// Completo.args = {
// };
