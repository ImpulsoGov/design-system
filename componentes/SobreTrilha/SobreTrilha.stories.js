import React from 'react'
import { SobreTrilha } from './index'

export default {
  title: "Componentes/SobreTrilha",
  component: SobreTrilha,
}
const Template = (args) => <SobreTrilha {...args}/>

export const ModulosCronicos = Template.bind({});
ModulosCronicos.args={
    tituloTrilha: "Hipertensão e Diabetes",
    botaoVoltar: {label: "VOLTAR",url : "/"},
    botaoIniciar: {label: "INICIAR CAPACITAÇÃO",url : "/capacitacao"},
    botaoWhatsapp: {label: "ENTRAR NO GRUPO DO WHATSAPP",url : "/grupo-whatsapp"},
    sobre: {titulo: "Sobre", texto:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate nunc ut pretium porttitor. Curabitur ac venenatis purus. Curabitur sed varius ligula, congue tempor ligula. Nulla vel erat ut risus imperdiet sodales. Integer justo elit, lacinia vel pretium auctor, consectetur id ex. Phasellus eget tempor nisl. Nulla et eros posuere, vestibulum velit eu, auctor ipsum. Sed vitae lacinia lacus. Cras pharetra interdum ante finibus ullamcorper. Donec non mollis neque, interdum consectetur odio.Sed viverra eu arcu cursus accumsan. Fusce mollis elementum tellus sed vulputate. Duis porta tristique bibendum. Nullam semper maximus velit ut tempus. Cras blandit, est non hendrerit ultrices, nisi massa vulputate erat, ut viverra ligula diam id nisl. Praesent suscipit feugiat lorem a mollis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec consequat diam id euismod egestas."},
    conteudo:{
      titulo: "Agenda",
      texto:[
          {texto: "Metodologias desenvolvida por profissionais especializados"},
          {texto: "Metodologias inovadoras e 100% online"},
          {texto: "Certificado Digital"},
          {texto: "Aprenda a hora que quiser e no seu tempo"},
          {texto: "Mais de 80 cursos para você se especializar"},
          {texto: "Experimente áreas diferentes"}
    ]},
    nossoTime:{
      titulo: "Nosso Time",
      membros:[
        {
          foto:"https://media.graphassets.com/XHc9FnRR5ycU6LmzBRJO",
          nome:"Isabela dos Santos",
          titulo:"Especialista em saúde"
        },
        {
          foto:"https://media.graphassets.com/Qn3jx6jxSiun4A9PjyM1",
          nome:"Juliana Ramalho",
          titulo:"Especialista em saúde"
        },
        {
          foto:"https://media.graphassets.com/1UChvJwVQG83514nI3FI",
          nome:"Camila Coelho",
          titulo:"Especialista em saúde"
        },
        {
          foto:"https://media.graphassets.com/6hUfUhefTXSSwdHkJpBN",
          nome:"Fernanda Soares",
          titulo:"Especialista em saúde"
        },
      ]
    }
}