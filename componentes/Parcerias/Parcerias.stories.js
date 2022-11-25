import React from "react";
import { Parcerias } from "./index";

const parceiros = [{ alt: "parceiros", src: "https://media.graphassets.com/ekDlCVRsRQuxlx6F5KUK" }]
export default {
  title: "Componentes/Parcerias",
  component: Parcerias,
  argTypes: {
    parceiros:{
      name: 'parceiros',
      description: 'Array de objetos contendo informações dos parceiros *array* \n\n **alt**: nome do parceiro *string* \n\n **src:** link da logo do parceiro *URL*'
    },
    theme: {
      name:'theme',
      description:'Tema referente ao projeto *string*'
    }
  },
};

export const Default = () => {
  return (
    <Parcerias
      parceiros={parceiros}
      theme="ColorIP"
    />
  );
};

export const AGP = () => {
  return (
    <Parcerias
      parceiros={parceiros}
      theme="ColorAGP"
    />
  );
};
