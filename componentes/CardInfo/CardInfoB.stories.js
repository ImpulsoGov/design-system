import { CardInfoTipoB } from './index';

export default {
  title: "Componentes/CardInfoTipoB",
  component: CardInfoTipoB,
  argTypes: {}
}

const Template = (args) => <CardInfoTipoB {...args}/>
export const Completo = Template.bind({});
Completo.args={
  titulo: "Encaminhamentos para CAPS no mês de Junho",
  tooltip: "Dados sobre encaminhamentos para CAPS no mês de Junho",
  indicador: 18,
  indicadorTotal: 4823,
  indice: -4,
  indiceDescricao: "últ. mês",
  descricao: "de 4823 atendimentos em saúde mental na APS",
}
