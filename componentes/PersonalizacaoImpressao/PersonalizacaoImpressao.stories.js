import React from 'react';
import { PersonalizacaoImpressao } from './PersonalizacaoImpressao';

export default {
  title: "Componentes/PersonalizacaoImpressao",
  component: PersonalizacaoImpressao,
  argTypes: {
  },
};

const Template = (args) => <PersonalizacaoImpressao {...args}/>

export const Default = Template.bind({});

Default.args = {
  titulo: "PERSONALIZAR A IMPRESSÃO",
  labelsPersonalizacaoPrincipal: {
    titulo: "Deseja fazer uma impressão personalizada por Equipes?",
    descricao: "A impressão personalizada agrupa os pacientes de acordo com as Equipes correspondentes. Qualquer filtrou ou ordenação selecionados anteriormente serão mantidos e aplicados dentro do agrupamento por equipes",
    agrupamentoSim: "Sim",
    agrupamentoNao: "Não",
  },
  labelsPersonalizacaoSecundaria: {
    titulo: "Outras personalizações de impressão:",
    recomendacao: "Recomendadas para distribuição para coordenadoras de equipe",
    separacaoGrupoPorFolha: "Imprimir grupos de pacientes por Equipes em folhas separadas",
    ordenacao: "Ordenar pacientes por ACS",
  },
  botao: {
    label: "IMPRIMIR LISTA",
    handleClick: () => {},
  },
  handleClose: () => console.log("close")
}
