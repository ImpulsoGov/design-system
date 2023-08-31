import {
  CardIndicadorDescricao,
  CardInternacaoStatus,
  CardPeriodosInternacao,
  CardsGridInternacao
} from './index';

export default {
  title: "Componentes/CardsGridInternacao",
  component: CardsGridInternacao,
  argTypes: {
    cardsArray: {
      name: "cardsArray",
      description: "Array de cards que compõem o grid *componente react*"
    },
  }
};

const iconeSim = "https://media.graphassets.com/TrHUmoqQ12gaauujhEoS";

const iconeNao = "https://media.graphassets.com/avvXauyoTCKA3NnBWP9g";

const cards = [
  <CardInternacaoStatus
    icones={{ sim: iconeSim, nao: iconeNao }}
    antes={{status:false, descricao:'Não atendidos'}}
    depois={{status:false, descricao:'e nem'}}></CardInternacaoStatus>,
  <CardInternacaoStatus
    icones={{ sim: iconeSim, nao: iconeNao }}
    antes={{status:true, descricao:'Atendidos'}}
    depois={{status:false, descricao:'mas não'}}></CardInternacaoStatus>,
  <CardInternacaoStatus
    icones={{ sim: iconeSim, nao: iconeNao }}
    antes={{status:true, descricao:'Atendidos'}}
    depois={{status:true, descricao:'e também'}}></CardInternacaoStatus>,
  <CardInternacaoStatus
    icones={{ sim: iconeSim, nao: iconeNao }}
    antes={{status:false, descricao:'Não atendidos'}}
    depois={{status:true, descricao:'mas atendidos'}}></CardInternacaoStatus>,
  <CardPeriodosInternacao
    periodo={ 'Ano'}
    descricao={ 'Internações finalizadas entre agosto de 2021 e julho de 2022.' }></CardPeriodosInternacao>,
  <CardIndicadorDescricao
    indicador={ 5117 }
    descricao={ 'Usuários' }></CardIndicadorDescricao>,
  <CardIndicadorDescricao
    indicador={ 3350 }
    descricao={ 'Usuários' }></CardIndicadorDescricao>,
  <CardIndicadorDescricao
    indicador={ 1818 }
    descricao={ 'Usuários' }></CardIndicadorDescricao>,
  <CardIndicadorDescricao
    indicador={ 1074 }
    descricao={ 'Usuários' }></CardIndicadorDescricao>,
  <CardPeriodosInternacao
    periodo={ 'Mês'}
    descricao={ 'Último mês disponível: Setembro' }></CardPeriodosInternacao>,
  <CardIndicadorDescricao
    indicador={ 5524 }
    descricao={ 'Usuários' }></CardIndicadorDescricao>,
  <CardIndicadorDescricao
    indicador={ 5853 }
    descricao={ 'Usuários' }></CardIndicadorDescricao>,
  <CardIndicadorDescricao
    indicador={ 5223 }
    descricao={ 'Usuários' }></CardIndicadorDescricao>,
  <CardIndicadorDescricao
    indicador={ 5578}
    descricao={ 'Usuários' }></CardIndicadorDescricao>
];

const Template = (args) => <CardsGridInternacao { ...args }/>;
export const Default = Template.bind({});
Default.args = {
  cardsArray: cards
};
