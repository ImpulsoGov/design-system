import { Spinner } from "./index";

export default {
  title: "Componentes/Spinner",
  component: Spinner,
  argTypes: {
    theme: {
      name: "theme",
      description: "Tema de cor do componente *string* \n\n Valores aceitos: *Grey*, *SM*, *IP*"
    }
  }
};

const Template = (args) => <Spinner { ...args } />;

export const Default = Template.bind({});
Default.args = {};

export const SM = Template.bind({});
SM.args = {
  theme: "SM"
};

export const IP = Template.bind({});
IP.args = {
  theme: "IP"
};
