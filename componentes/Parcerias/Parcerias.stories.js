import React from "react";
import { Parcerias } from "./index";

const parceiros = [{
  alt: "parceiros",
  src: "https://media.graphassets.com/ekDlCVRsRQuxlx6F5KUK",
  link: "https://www.institutovotorantim.org.br/"
}];

export default {
  title: "Componentes/Parcerias",
  component: Parcerias,
  argTypes: {
    parceiros:{
      name: 'parceiros',
      description: 'Array de objetos contendo informações dos parceiros *array* \n\n **alt**: nome do parceiro *string* \n\n **src:** link da logo do parceiro *URL* \n\n **link:** link do site do parceiro *URL*'
    },
    theme: {
      name:'theme',
      description:'Tema referente ao projeto *string*'
    }
  },
};

const Template = (args) => <Parcerias {...args}/>

export const Default = Template.bind({});
Default.args={
  parceiros:parceiros,
  theme:"ColorIP"
}

export const AGP = Template.bind({});
AGP.args={
  parceiros:parceiros,
  theme:"ColorIP"
}


