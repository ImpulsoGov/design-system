import React from "react";
import { ParceriasTexto } from "./index";

const parceiros = [{ alt: "parceiros", src: "https://media.graphassets.com/ekDlCVRsRQuxlx6F5KUK" }]

export default {
  title: "Componentes/ParceriasTexto",
  component: ParceriasTexto,
  argTypes: {
    text: {
        name:'text',
        description:'Texto descritivo *string*'
      },
    label: {
        name:'label',
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
  text:"O Impulso Previne é uma realização da ImpulsoGov, uma organização brasileira de saúde pública, sem fins lucrativos, que trabalha ao lado de gestores municipais e estaduais para impulsionar o uso de dados e tecnologia no setor público",
  label:"Junto à Impulso Gov, o projeto conta com uma rede de apoio institucional e financiadores:",
  parceiros:parceiros
}


