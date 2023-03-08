import React from 'react'
import { ModalInicio  } from './index'

export default {
  title: "Componentes/ModalInicio",
  component: ModalInicio ,
  argTypes: { 
    theme : {
      logoProjeto : "https://media.graphassets.com/Kal4aulRmYkqd0L6RBAd",
      cor : "ColorIP",
      logoLink : "/"
      },
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
        description: "**submit** Função executada ao clickar no botão *função*\n\n **label** Rótulo do botão *string* \n\n **theme**: tema de cor aplicado ao botão *string*"
    },
    botaoSecundario: {
    name: "botaoSecundario",
    description: "**submit** Função executada ao clickar no botão *função*\n\n **label** Rótulo do botão *string*"
    },
    botaoAjuda: {
    name: "botaoSecundario",
    description: "**submit** Função executada ao clickar no botão *função*\n\n **label** Rótulo do botão *string*"},
},
};
const Template = (args) => <ModalInicio  {...args}/>
export const Default = Template.bind({});
Default.args={
  theme : {
    logoProjeto : "https://media.graphassets.com/Kal4aulRmYkqd0L6RBAd",
    cor : "ColorIP",
    logoLink : "/",
    },
    titulo : "Faça o login para ver os dados restritos.",
    chamada : "Se esse é o seu primeiro acesso e sua senha ainda não foi criada, clique abaixo em ‘primeiro acesso’. Se você já possui uma senha, clique em ‘entrar’.",
    cardAlert: "<p style='font-size:12px;'>A área logada é de acesso exclusivo para municípios parceiros. Para ver os resultados públicos do seu município, do Q3/22, <a href='analise'>clique aqui.</a></p>",
    botaoPrincipal : {
        submit: ()=>console.log("entrar"),
        label: "entrar",
        theme: "ColorIP"
    },
    botaoSecundario : {
        submit:()=>console.log("teste"),
        label: "Primeiro Acesso"
    },
    botaoAjuda : {
        link:"https://docs.google.com/forms/d/e/1FAIpQLSe1i7zkVOz-T24xfD3F4XCM2J-hYnoTKYCMHG3EVMLUoBNpMg/viewform?usp=sf_link",
        label: "ESTOU COM PROBLEMAS NO LOGIN"
    },
}
