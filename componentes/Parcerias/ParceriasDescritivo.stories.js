import { ParceriasDescritivo } from "./index";

export default {
  title: "Componentes/ParceriasDescritivo",
  component: ParceriasDescritivo,
  argTypes: {
    parceiros: {
      name: 'parceiros',
      description: 'Array de objetos contendo informações dos parceiros *array* \n\n **alt**: nome do parceiro *string* \n\n **src:** link da logo do parceiro *URL* \n\n **titulo**: título exibido para o parceiro *string*'
    },
    theme: {
      name: 'theme',
      description: 'Tema referente ao projeto *string*'
    },
    titulo: {
      name: 'titulo',
      description: 'Título da seção *string*'
    },
  },
};

const Template = (args) => <ParceriasDescritivo { ...args } />;

export const ColorSM = Template.bind({});
ColorSM.args = {
  parceiros: [
    {
      src: "https://media.graphassets.com/GHfdxB6QqSAjDRAaEOtw",
      alt: "ImpulsoGov",
      titulo: "Realização",
      descricao: "Organização sem fins lucrativos e suprapartidária que apoia profissionais do SUS no aprimoramento das políticas públicas de saúde desenvolvendo soluções gratuitas por meio do uso inteligente de dados e tecnologia."
    },
    {
      src: "https://media.graphassets.com/ZMxaGH6zR86IjUgdLio5",
      alt: "Instituto Cactus",
      titulo: "Apoio técnico e financeiro",
      descricao: "Organização filantrópica que atua de forma independente para ampliar o debate, os cuidados em prevenção de doenças e a promoção de saúde mental no Brasil, apoiando iniciativas que proporcionem melhora na qualidade de vida de todas as pessoas."
    },
    {
      src: "https://media.graphassets.com/L3pDd52rQSMTxBA0iZCE",
      alt: "Raia Drogasil",
      titulo: "Apoio financeiro",
      descricao: "A RD – Gente, Saúde e Bem-Estar, presente em todos os estados do Brasil e formada pela fusão entre a Droga Raia e a Drogasil, tem o propósito de cuidar de perto da saúde e do bem-estar das pessoas em todos os momentos da vida."
    },
  ],
  theme: "ColorSM",
};
