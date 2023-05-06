import { ConteudoVideo } from './index';

export default {
  title: "Componentes/ConteudoVideo",
  component: ConteudoVideo,
  argTypes: {
    url: {
      name: "url",
      description: "URL do conteúdo a ser exibido *string*"
    }
  }
};

const Template = (args) => <ConteudoVideo { ...args } />;

export const Default = Template.bind({});
Default.args = {
  url: 'https://www.youtube.com/embed/X4mVkaS-C5Q?cc_load_policy=1'
};
