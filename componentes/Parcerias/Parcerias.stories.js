import React from "react";
import { Parcerias } from "./index";

const parceiros = [{ alt: "parceiros", src: "https://media.graphassets.com/ekDlCVRsRQuxlx6F5KUK" }];
export default {
  title: "Componentes/Parcerias",
  component: Parcerias,
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

const Template = (args) => <Parcerias { ...args } />;

export const Default = Template.bind({});
Default.args = {
  parceiros: parceiros,
  theme: "ColorIP",
  titulo: "Parceiros"
};

export const ColorSM = Template.bind({});
ColorSM.args = {
  parceiros: [
    {
      src: "https://media.graphassets.com/ZMxaGH6zR86IjUgdLio5",
      alt: "Instituto Cactus",
      titulo: "Técnico e financeiro",
    },
    {
      src: "https://media.graphassets.com/L3pDd52rQSMTxBA0iZCE",
      alt: "Raia Drogasil",
      titulo: "Financeiro",
    }
  ],
  theme: "ColorSM",
  titulo: "Apoio",
};
