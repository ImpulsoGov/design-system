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

const cards = [
  <CardInternacaoStatus
    antes={{status:false, descricao:'Não foram atendidos na RAPS nos 6 meses anteriores à internação nem até o mês após a alta'}}
    depois={{status:false, descricao:'Não foram atendidos nem no mês da alta, nem no mês seguinte'}}></CardInternacaoStatus>,
  <CardInternacaoStatus
    antes={{status:true, descricao:'Foram atendidos na RAPS nos 6 meses anteriores à internação nem até o mês após a alta'}}
    depois={{status:false, descricao:'Não foram atendidos nem no mês da alta, nem no mês seguinte'}}></CardInternacaoStatus>,
  <CardInternacaoStatus
    antes={{status:true, descricao:'Foram atendidos na RAPS nos 6 meses anteriores à internação nem até o mês após a alta'}}
    depois={{status:true, descricao:'Foram atendidos nem no mês da alta, nem no mês seguinte'}}></CardInternacaoStatus>,
  <CardInternacaoStatus
    antes={{status:false, descricao:'Não foram atendidos na RAPS nos 6 meses anteriores à internação nem até o mês após a alta'}}
    depois={{status:true, descricao:'Foram atendidos nem no mês da alta, nem no mês seguinte'}}></CardInternacaoStatus>,
  <CardPeriodosInternacao
    periodo={ 'Anual'}
    descricao={ 'Internações finalizadas entre agosto de 2021 e julho de 2022.' }></CardPeriodosInternacao>,
  <CardIndicadorDescricao
    indicador={ 5117 }
    indicadorDescricao={ 'Usuários' }></CardIndicadorDescricao>,
  <CardIndicadorDescricao
    indicador={ 3350 }
    indicadorDescricao={ 'Usuários' }></CardIndicadorDescricao>,
  <CardIndicadorDescricao
    indicador={ 1818 }
    indicadorDescricao={ 'Usuários' }></CardIndicadorDescricao>,
  <CardIndicadorDescricao
    indicador={ 1074 }
    indicadorDescricao={ 'Usuários' }></CardIndicadorDescricao>,
  <CardPeriodosInternacao
    periodo={ 'Mensal'}
    descricao={ 'Último mês disponível: Setembro' }></CardPeriodosInternacao>,
  <CardIndicadorDescricao
    indicador={ 5 }
    indicadorDescricao={ 'indicadorDescricao' }></CardIndicadorDescricao>,
  <CardIndicadorDescricao
    indicador={ 5 }
    indicadorDescricao={ 'indicadorDescricao' }></CardIndicadorDescricao>,
  <CardIndicadorDescricao
    indicador={ 5 }
    indicadorDescricao={ 'indicadorDescricao' }></CardIndicadorDescricao>,
  <CardIndicadorDescricao
    indicador={ 5 }
    indicadorDescricao={ 'indicadorDescricao' }></CardIndicadorDescricao>
];

const Template = (args) => <CardsGridInternacao { ...args }/>;
export const Completo = Template.bind({});
Completo.args = {
  cardsArray: cards
};
