import React from "react";
import { PanelSelector } from "./index";

const tabs = [
  "RESUMO",
  "APS E CAPS",
  "APS E AMBULATÓRIO",
  "RAPS E ATENÇÃO HOSPITALAR",
];

export default {
  title: "Componentes/PanelSelector",
  component: PanelSelector,
}


export const Default = () =>{
  return(
   <PanelSelector list={tabs}/>
  )
}