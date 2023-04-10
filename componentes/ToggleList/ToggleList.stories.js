import React from "react";

import { ToggleList } from "./index";

export default {
  title: "Componentes/ToggleList",
  component: ToggleList,
  argTypes: {
    list: {
      name:'list',
      description:'Array de objetos com os conteúdos da toggle list *array* \n\n **Título:** Título do item da lista *string* \n\n **blocks:** Array de objetos contendo informações do item da lista *array*\n\n **-subTitle:** Subtítulo do item da lista *string* \n\n **-description:** Descrição do item *string* \n\n **-source:** Fonte dos dados *string* \n\n **concept:** Array de objetos contendo informações dos conceitos do subitem da lista *string* \n\n **-título:** Título do bloco de conceitos *string* \n\n **elements:** Array de elementos referentes aos conceitos *array*'
    },
    title: {
      name: 'title',
      description: 'Título da seção *string*'
    },
    direction: {
      name: "direction",
      description: "Direção em que os elementos do componente são exibidos *string* \n\n Valores aceitos: *Row* ou *Column*"
    },
    icon: {
      name: "icon",
      description: "Ícone exibido no componente *string*"
    },
    theme: {
      name: "theme",
      description: "Tema de cor aplicado ao componente *string* \n\n Valores aceitos: *Light*, *LightGrey*"
    }
  },
};

const list = [
  {
    title: "Serviços do CAPS",
    blocks:[
      {
        subTitle: "Número de usuários ativos",
        description: "<b>Definição</b>: que tiveram pelo menos um registro em ficha de ações psicossociais no mês de referência ou em um dos dois meses anteriores.",
        source: "Fonte: RAAS/SIASUS",
        concept: {
          title:"Conceitos:",
          elements:[
            "Internação relacionada à saúde mental é definida como qualquer evento que tenha gerado uma Autorização de Internação Hospitalar (AIH) em estabelecimento hospitalar vinculado ao SUS, desde que cumpra pelo menos uma dentre as seguintes condições: a. A especialidade do leito indicada da AIH é “Psiquiatria”, “Leito dia/saúde mental”, “Acolhimento Noturno” ou “Saúde Mental (clínico)”; ou b. O procedimento principal indicado na AIH são diárias de saúde mental; ou c. Ao menos um dos campos “Diagnóstico principal”, “Diagnóstico secundário”, “CID de notificação” ou “CID causa [associada]” da AIH contém um código da Classificação Internacional de Doenças (CID-10) relacionado à saúde mental (ver adiante); ou d. O tipo de desfecho registrado na AIH é “Alta de paciente agudo em psiquiatria",
            "Passagem pelos serviços de atenção psicossocial ou especializados em saúde mental é definida pela existência de um ou mais procedimentos registrados em RAAS ou BPA individualizado (BPA-i) com as informações de município de residência, data de nascimento e sexo do usuário idênticos aos de uma Autorização de Internação Hospitalar (AIH) com entrada no período de referência. Para registros em BPA-i, são considerados apenas procedimentos realizados em CAPS, ou realizados por profissionais de saúde mental (ver adiante)",
            "São considerados diagnósticos/condições de saúde relacionados à saúde mental aqueles descritos por códigos CID-10 pertencentes ao Capítulo V (“Transtornos mentais e comportamentais”, códigos F00-F99); ao grupo “Lesões autoprovocadas” (X60-X84); ou iguais a “T40” (“Intoxicação por narcóticos”) ou “R78” (“Drogas no sangue”)",
            "São considerados profissionais de saúde mental aqueles cuja ocupação registrada no Cadastro Nacional de Estabelecimentos de Saúde (CNES) corresponda à família “Psicólogos e psicanalistas” da Classificação Brasileira de Ocupações (CBO); ou às ocupações “Terapeuta ocupacional”, “Psicomotricista”, ou “Médico psiquiatra”."
          ]
        }
      },
      {
        subTitle: "Número de usuários ativos",
        description: "Definição: que tiveram pelo menos um registro em ficha de ações psicossociais no mês de referência ou em um dos dois meses anteriores.",
        source: "Fonte: RAAS/SIASUS",
        concept: {
          title:"Conceitos:",
          elements:[
            "Internação relacionada à saúde mental é definida como qualquer evento que tenha gerado uma Autorização de Internação Hospitalar (AIH) em estabelecimento hospitalar vinculado ao SUS, desde que cumpra pelo menos uma dentre as seguintes condições: a. A especialidade do leito indicada da AIH é “Psiquiatria”, “Leito dia/saúde mental”, “Acolhimento Noturno” ou “Saúde Mental (clínico)”; ou b. O procedimento principal indicado na AIH são diárias de saúde mental; ou c. Ao menos um dos campos “Diagnóstico principal”, “Diagnóstico secundário”, “CID de notificação” ou “CID causa [associada]” da AIH contém um código da Classificação Internacional de Doenças (CID-10) relacionado à saúde mental (ver adiante); ou d. O tipo de desfecho registrado na AIH é “Alta de paciente agudo em psiquiatria",
            "Passagem pelos serviços de atenção psicossocial ou especializados em saúde mental é definida pela existência de um ou mais procedimentos registrados em RAAS ou BPA individualizado (BPA-i) com as informações de município de residência, data de nascimento e sexo do usuário idênticos aos de uma Autorização de Internação Hospitalar (AIH) com entrada no período de referência. Para registros em BPA-i, são considerados apenas procedimentos realizados em CAPS, ou realizados por profissionais de saúde mental (ver adiante)",
            "São considerados diagnósticos/condições de saúde relacionados à saúde mental aqueles descritos por códigos CID-10 pertencentes ao Capítulo V (“Transtornos mentais e comportamentais”, códigos F00-F99); ao grupo “Lesões autoprovocadas” (X60-X84); ou iguais a “T40” (“Intoxicação por narcóticos”) ou “R78” (“Drogas no sangue”)",
            "São considerados profissionais de saúde mental aqueles cuja ocupação registrada no Cadastro Nacional de Estabelecimentos de Saúde (CNES) corresponda à família “Psicólogos e psicanalistas” da Classificação Brasileira de Ocupações (CBO); ou às ocupações “Terapeuta ocupacional”, “Psicomotricista”, ou “Médico psiquiatra”."
          ]
        }
      },
      {
        subTitle: "Número de usuários ativos",
        description: "Definição: que tiveram pelo menos um registro em ficha de ações psicossociais no mês de referência ou em um dos dois meses anteriores.",
        source: "Fonte: RAAS/SIASUS"
      },
    ]
  },
  {
    title: "Serviços do CAPS",
    blocks:[
      {
        subTitle: "Número de usuários ativos",
        description: "Definição: que tiveram pelo menos um registro em ficha de ações psicossociais no mês de referência ou em um dos dois meses anteriores.",
        source: "Fonte: RAAS/SIASUS"
      },
      {
        subTitle: "Número de usuários ativos",
        description: "Definição: que tiveram pelo menos um registro em ficha de ações psicossociais no mês de referência ou em um dos dois meses anteriores.",
        source: "Fonte: RAAS/SIASUS"
      },
      {
        subTitle: "Número de usuários ativos",
        description: "Definição: que tiveram pelo menos um registro em ficha de ações psicossociais no mês de referência ou em um dos dois meses anteriores.",
        source: "Fonte: RAAS/SIASUS"
      },
    ]
  },
  {
    title: "Serviços do CAPS",
    blocks:[
      {
        subTitle: "Número de usuários ativos",
        description: "Definição: que tiveram pelo menos um <br>registro</br> em ficha de ações psicossociais no mês de referência ou em um dos dois meses anteriores.",
        source: "Fonte: RAAS/SIASUS"
      },
      {
        subTitle: "Número de usuários ativos",
        description: "Definição: que tiveram pelo menos um registro em ficha de ações psicossociais no mês de referência ou em um dos dois meses anteriores.",
        source: "Fonte: RAAS/SIASUS"
      },
      {
        subTitle: "Número de usuários ativos",
        description: "Definição: que tiveram pelo menos um registro em ficha de ações psicossociais no mês de referência ou em um dos dois meses anteriores.",
        source: "Fonte: RAAS/SIASUS"
      },
    ]
  },
]



const Template = (args) => <ToggleList {...args}/>

export const RowLight = Template.bind({});
RowLight.args={
  list :  list,
  title: "Indicadores"
}

export const ColumnLightGrey = Template.bind({});
ColumnLightGrey.args={
  list :  list,
  title: "Perguntas frequentes",
  direction: "Column",
  icon: "https://media.graphassets.com/Eu5DAy5SnCFbpRetwKSl",
  theme: "LightGrey"
}
