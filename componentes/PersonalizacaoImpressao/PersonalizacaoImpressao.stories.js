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
  labels: {
    titulo: "PERSONALIZAR A IMPRESSÃO",
    personalizacaoPrincipal: {
      titulo: "Deseja fazer uma impressão personalizada por Equipes?",
      descricao: "A impressão personalizada agrupa os pacientes de acordo com as Equipes correspondentes. Qualquer filtrou ou ordenação selecionados anteriormente serão mantidos e aplicados dentro do agrupamento por equipes",
      opcoes: {
        agrupamentoSim: "Sim",
        agrupamentoNao: "Não",
      },
    },
    personalizacaoSecundaria: {
      titulo: "Outras personalizações de impressão:",
      recomendacao: "Recomendadas para distribuição para coordenadoras de equipe",
      opcoes: {
        separacaoGrupoPorFolha: "Imprimir grupos de pacientes por Equipes em folhas separadas",
        ordenacao: "Ordenar pacientes por ACS",
      },
    },
    botao: "IMPRIMIR LISTA",
  },
  handleClick: () => {},
  handleClose: () => console.log("close")
}
