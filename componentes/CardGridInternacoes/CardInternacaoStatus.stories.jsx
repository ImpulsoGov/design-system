import { CardInternacaoStatus } from './index';

export default {
  title: "Componentes/CardInternacaoStatus",
  component: CardInternacaoStatus,
  argTypes: {
    antes: {
      name: "antes",
      description: "Objeto contento as seguintes propriedades: \n\n **status**: status do atendimento antes da internação *boolean* \n\n **descricao**: descricao do status de atendimento antes da internação *string*"
    },
    depois: {
      name: "depois",
      description: "Objeto contento as seguintes propriedades: \n\n **status**: status do atendimento depois da internação *boolean* \n\n **descricao**: descricao do status de atendimento depois da internação *string*"
    },
    icones: {
        name: "icones",
        description: "Objeto contento as seguintes propriedades: \n\n **sim**: ícone exibido caso o status de atendimento seja verdadeiro *string* \n\n **nao**: ícone exibido caso o status de atendimento seja falso *string*"
      },
  }
};

const iconeSim = "https://media.graphassets.com/TrHUmoqQ12gaauujhEoS";

const iconeNao = "https://media.graphassets.com/avvXauyoTCKA3NnBWP9g";

const Template = (args) => <CardInternacaoStatus { ...args }/>;
export const Default = Template.bind({});
Default.args = {
    icones: { sim: iconeSim, nao: iconeNao },
    antes: {status:false, descricao:'Não atendidos'},
    depois: {status:false, descricao:'e nem'},
};
