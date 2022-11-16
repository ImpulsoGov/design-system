import React from "react";

import { ToggleList } from "./index";

export default {
  title: "Componentes/ToggleList",
  component: ToggleList,
  argTypes: {
    title: {
      name: 'title',
      description:'Título da lista *string*'
    },
    blocks: {
      name:'blocks',
      description: 'Bloco de conteúdos do item da lista \n\n **subTitle:** subtítulo do item da lista *string* \n\n **description:** Descrição do item *string* \n\n **source:** Fonde dos dados *string* \n\n **concept:** subitem contendo conceitos *string* \n\n **-título:** Título do bloco de conceitos *string* \n\n **-elements:** Lista de elementos referentes aos conceitos *lista/string*'
    }
  }
};

const list = [
  {
    title: "Serviços do CAPS",
    blocks:[
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
]



export const Default = () => {
  return (
    <ToggleList list={list} />
  )
}