import { CardLargeGridToggleList } from "./index";

export default {
  title: "Componentes/CardLargeGridToggleList",
  component: CardLargeGridToggleList,
  // argTypes: {
  // }
}

const Template = (args) => <CardLargeGridToggleList {...args}/>

const toggleListCards = [
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
];

const cards =[
  {
      icon : "https://media.graphassets.com/6cOfkxeyT7245Fn19kgU",
      titulo: "Sobre os indicadores",
      link: ""
  },
  {
      icon : "https://media.graphassets.com/6cOfkxeyT7245Fn19kgU",
      titulo: "Solicitar ajuda",
      link: ""
  },
  {
      icon : "https://media.graphassets.com/6cOfkxeyT7245Fn19kgU",
      titulo: "Contato",
      link: "",
      infos: [
        {
          icon: "https://media.graphassets.com/6cOfkxeyT7245Fn19kgU",
          content: "email@email.com"
        },
        {
          icon: "https://media.graphassets.com/X8qAQFkrTLapqBDlfkMO",
          content: "(11) 91234-5678"
        }
      ]
  }
];

export const ColorSM = Template.bind({});
ColorSM.args ={
  togglelist: {
    cards: toggleListCards,
    title: "Perguntas frequentes",
    icon: "https://media.graphassets.com/Eu5DAy5SnCFbpRetwKSl",
  },
  cards,
  theme: "ColorSM"
}
