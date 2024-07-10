import React, { useState } from 'react';
import { PersonalizacaoImpressao } from './PersonalizacaoImpressao';

export default {
  title: "Componentes/PersonalizacaoImpressao",
  component: PersonalizacaoImpressao,
  argTypes: {
  },
};

const VALORES_AGRUPAMENTO_IMPRESSAO = { sim: "sim", nao: "não" };

const Template = (args) => {
  const [personalizacao, setPersonalizacao] = useState({
    agrupamento: VALORES_AGRUPAMENTO_IMPRESSAO.sim,
    separacaoGrupoPorFolha: false,
    ordenacao: false,
  });

  args["personalizacao"] = personalizacao;
  args["valoresAgrupamento"] = VALORES_AGRUPAMENTO_IMPRESSAO;
  args["handleChange"] = (e) => {
    const { name, value, checked, type } = e.target;

    setPersonalizacao({
      ...personalizacao,
      [name]: type === "checkbox" ? checked : value
    });
  }
  return <PersonalizacaoImpressao {...args}/>
}

export const Default = Template.bind({});

Default.args = {
  labels: {
    titulo: "PERSONALIZAR A IMPRESSÃO",
    personalizacaoPrincipal: {
      titulo: "Deseja fazer uma impressão personalizada por Equipes?",
      descricao: "A impressão personalizada agrupa os pacientes de acordo com as Equipes correspondentes. Qualquer filtrou ou ordenação selecionados anteriormente serão mantidos e aplicados dentro do agrupamento por equipes",
      agrupamentoSim: "Sim",
      agrupamentoNao: "Não",
    },
    personalizacaoSecundaria: {
      titulo: "Outras personalizações de impressão:",
      recomendacao: "Recomendadas para distribuição para coordenadoras de equipe",
      separacaoGrupoPorFolha: "Imprimir grupos de pacientes por Equipes em folhas separadas",
      ordenacao: "Ordenar pacientes por ACS",
    },
    botao: "IMPRIMIR LISTA",
  },
  handleButtonClick: () => {},
  handleClose: () => console.log("close")
}
