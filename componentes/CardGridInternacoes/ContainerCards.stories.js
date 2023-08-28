import { CardInfoStatus, CardIndicadorDescricao, CardPeriodos, ContainerCards } from './index';

export default {
  title: "Componentes/ContainerCards",
  component: ContainerCards,
  argTypes: {
  }
};

const cards = [
  <CardInfoStatus
    antes={{status:false, descricao:'Não foram atendidos na RAPS nos 6 meses anteriores à internação nem até o mês após a alta'}}
    depois={{status:false, descricao:'Não foram atendidos nem no mês da alta, nem no mês seguinte'}}></CardInfoStatus>,
  <CardInfoStatus
    antes={{status:true, descricao:'Foram atendidos na RAPS nos 6 meses anteriores à internação nem até o mês após a alta'}}
    depois={{status:false, descricao:'Não foram atendidos nem no mês da alta, nem no mês seguinte'}}></CardInfoStatus>,
  <CardInfoStatus
    antes={{status:true, descricao:'Foram atendidos na RAPS nos 6 meses anteriores à internação nem até o mês após a alta'}}
    depois={{status:true, descricao:'Foram atendidos nem no mês da alta, nem no mês seguinte'}}></CardInfoStatus>,
  <CardInfoStatus
    antes={{status:false, descricao:'Não foram atendidos na RAPS nos 6 meses anteriores à internação nem até o mês após a alta'}}
    depois={{status:true, descricao:'Foram atendidos nem no mês da alta, nem no mês seguinte'}}></CardInfoStatus>,
  <CardPeriodos
    titulo={ 'Anual'}
    descricao={ 'Internações finalizadas entre agosto de 2021 e julho de 2022.' }></CardPeriodos>,
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
  <CardPeriodos
    titulo={ 'Mensal'}
    descricao={ 'Último mês disponível: Setembro' }></CardPeriodos>,
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

const Template = (args) => <ContainerCards { ...args }/>;
export const Completo = Template.bind({});
Completo.args = {
  cardsArray: cards
};
