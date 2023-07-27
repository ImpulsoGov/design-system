import React from "react";
import { ParceriasTexto } from "./index";

const parceiros = [
  { 
    alt: "parceiros",
    src: "https://media.graphassets.com/ekDlCVRsRQuxlx6F5KUK"
  },
  { 
    alt: "parceiros",
    src: "https://media.graphassets.com/ekDlCVRsRQuxlx6F5KUK"
  },
  { 
    alt: "parceiros",
    src: "https://media.graphassets.com/ekDlCVRsRQuxlx6F5KUK"
  },
  { 
    alt: "parceiros",
    src: "https://media.graphassets.com/ekDlCVRsRQuxlx6F5KUK"
  },
  
]

export default {
  title: "Componentes/ParceriasTexto",
  component: ParceriasTexto,
  argTypes: {
    text: {
        name:'text',
        description:'Texto descritivo *string*'
      },
    parceiros:{
      name: 'parceiros',
      description: 'Array de objetos contendo informações sobre os parceiros *array/object* \n\n **alt:** nome do parceiro *string* \n\n **src:** link do logo do parceiro *URL*'
    },
    
  },
};
const Template = (args) => <ParceriasTexto {...args}/>

export const Default = Template.bind({});
Default.args={
  text:"“A ImpulsoGov, uma organização sem fins lucrativos que atua fomentando uso de dados e tecnologia na gestão pública, tem apoiado gratuitamente municípios na melhoria de seus processos…“",
  parceiros:parceiros
}


