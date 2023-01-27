import React from 'react'
import { ModalInicio  } from './index'

export default {
  title: "Componentes/ModalInicio",
  component: ModalInicio ,
  argTypes: { 
    titulo: { 
      name:"titulo",
      description: "titulo do componente *string*"
    },
    chamada: {
      name: "chamada",
      description: "texto da chamada *string*"
    },
    botaoPrincipal: {
        name: "botaoPrincipal",
        description: "**submit** Função executada ao clickar no botão *função*\n\n **label** Rótulo do botão *string*"
    },
    botaoSecundario: {
    name: "botaoSecundario",
    description: "**submit** Função executada ao clickar no botão *função*\n\n **label** Rótulo do botão *string*"
},
    
  },
};
const Template = (args) => <ModalInicio  {...args}/>
export const Default = Template.bind({});
Default.args={
    titulo : "Faça o login para ver os dados restritos.",
    chamada : "Se esse é o seu primeiro acesso e sua senha ainda não foi criada, clique abaixo em ‘primeiro acesso’. Se você já possui uma senha, clique em ‘entrar’.",
    botaoPrincipal : {
        submit: ()=>console.log("entrar"),
        label: "entrar"
    },
    botaoSecundario : {
        submit:()=>console.log("teste"),
        label: "Primeiro Acesso"
    }
}