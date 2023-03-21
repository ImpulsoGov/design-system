import { CardInfoTipoB } from './index';

export default {
  title: "Componentes/CardInfoTipoB",
  component: CardInfoTipoB,
  argTypes: {}
}

const Template = (args) => <CardInfoTipoB {...args}/>
export const Completo = Template.bind({});
Completo.args={
  titulo:"Encaminhamentos para CAPS no mês de Junho",
  tooltip: "Dados de usuários ativos",
  indicador:"692",
  indice:"-141",
  indiceDescricao:"últ. mês",
  descricao: "Não foram atendidos na RAPS nos 6 meses anteriores à internação nem até o mês após a alta",
}
