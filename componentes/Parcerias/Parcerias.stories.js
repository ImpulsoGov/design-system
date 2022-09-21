import React from "react";
import { Parcerias } from "./index";

export default {
  title: "Componentes/Parcerias",
  component: Parcerias,
};

const parceiros = [{ alt: "parceiros",
src: "https://media.graphassets.com/ekDlCVRsRQuxlx6F5KUK"}]

export const Default = () => {
  return (
    <Parcerias
     parceiros={parceiros}
  />
  );
};