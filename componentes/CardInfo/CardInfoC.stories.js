import { CardInfoTipoC } from './index';

export default {
  title: "Componentes/CardInfoTipoC",
  component: CardInfoTipoC,
  argTypes: {}
}

const Template = (args) => <CardInfoTipoC {...args}/>
export const Completo = Template.bind({});
Completo.args={
    indicador:"692",
    indicadorDescricao: "Usuários",
    descricao: "Não foram atendidos na RAPS nos 6 meses anteriores à internação nem até o mês após a alta",
    statusAntes: true,
    statusDepois: false,
}
