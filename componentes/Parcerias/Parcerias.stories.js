import React from "react";
import { Parcerias } from "./index";

const parceiros = [{ alt: "parceiros", src: "https://media.graphassets.com/ekDlCVRsRQuxlx6F5KUK" }]
export default {
  title: "Componentes/Parcerias",
  component: Parcerias,
  argTypes: {
    parceiros:{
      name: 'parceiros',
      description: 'Lista contendo os parceiros *lista*'
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
