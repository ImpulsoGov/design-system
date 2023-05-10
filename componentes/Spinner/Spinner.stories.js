import { Spinner } from "./index";

export default {
  title: "Componentes/Spinner",
  component: Spinner,
  argTypes: {
    theme: {
      name: "theme",
      description: "Tema de cor do componente *string* \n\n Valores aceitos: *Grey*, *SM*, *IP*"
    },
    height: {
      name: "height",
      description: "Altura do container do spinner *string* ou *number*"
    }
  }
};

const Template = (args) => <Spinner { ...args } />;

export const Default = Template.bind({});
Default.args = {};

export const ColorSMComHeight = Template.bind({});
ColorSMComHeight.args = {
  theme: "ColorSM",
  height: 100
};

export const ColorIPComHeight = Template.bind({});
ColorIPComHeight.args = {
  theme: "ColorIP",
  height: "30vh"
};
