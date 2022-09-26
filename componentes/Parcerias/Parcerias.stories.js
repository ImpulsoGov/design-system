import React from "react";
import { Parcerias } from "./index";

const parceiros = [{ alt: "parceiros", src: "https://media.graphassets.com/ekDlCVRsRQuxlx6F5KUK" }]
export default {
  title: "Componentes/Parcerias",
  component: Parcerias,
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
