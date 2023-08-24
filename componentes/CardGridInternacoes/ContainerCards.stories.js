import { ContainerCards, CardInfoStatus, CardIndicadorDescricao, CardPeriodos } from './index';

export default {
  title: "Componentes/ContainerCards",
  component: ContainerCards,
  argTypes: {
  }
};

const Template = (args) => <ContainerCards { ...args }/>;
export const Completo = Template.bind({});
Completo.args = {
  cardsArray:[
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
      // descricao={ 'descricao' }
      titulo={ 'Anual'}
      // indicadorSimbolo={ indicadorSimbolo }
      descricao={ 'Internações finalizadas entre agosto de 2021 e julho de 2022.' }></CardPeriodos>,
    <CardIndicadorDescricao
      // descricao={ 'descricao' }
      indicador={ 5117 }
      // indicadorSimbolo={ indicadorSimbolo }
      indicadorDescricao={ 'Usuários' }></CardIndicadorDescricao>,
    <CardIndicadorDescricao
      // descricao={ 'descricao' }
      indicador={ 3350 }
      // indicadorSimbolo={ indicadorSimbolo }
      indicadorDescricao={ 'Usuários' }></CardIndicadorDescricao>,
    <CardIndicadorDescricao
      // descricao={ 'descricao' }
      indicador={ 1818 }
      // indicadorSimbolo={ indicadorSimbolo }
      indicadorDescricao={ 'Usuários' }></CardIndicadorDescricao>,
    <CardIndicadorDescricao
      // descricao={ 'descricao' }
      indicador={ 1074 }
      // indicadorSimbolo={ indicadorSimbolo }
      indicadorDescricao={ 'Usuários' }></CardIndicadorDescricao>,
    <CardPeriodos
      filtro={filtro}
      // descricao={ 'descricao' }
      titulo={ 'Mensal'}
      // indicadorSimbolo={ indicadorSimbolo }
      descricao={ 'Último mês disponível: Setembro' }></CardPeriodos>,
    <CardIndicadorDescricao
      // descricao={ 'descricao' }
      indicador={ 5 }
      // indicadorSimbolo={ indicadorSimbolo }
      indicadorDescricao={ 'indicadorDescricao' }></CardIndicadorDescricao>,
    <CardIndicadorDescricao
      // descricao={ 'descricao' }
      indicador={ 5 }
      // indicadorSimbolo={ indicadorSimbolo }
      indicadorDescricao={ 'indicadorDescricao' }></CardIndicadorDescricao>,
    <CardIndicadorDescricao
      // descricao={ 'descricao' }
      indicador={ 5 }
      // indicadorSimbolo={ indicadorSimbolo }
      indicadorDescricao={ 'indicadorDescricao' }></CardIndicadorDescricao>,
    <CardIndicadorDescricao
      // descricao={ 'descricao' }
      indicador={ 5 }
      // indicadorSimbolo={ indicadorSimbolo }
      indicadorDescricao={ 'indicadorDescricao' }></CardIndicadorDescricao>  
  ]
};
