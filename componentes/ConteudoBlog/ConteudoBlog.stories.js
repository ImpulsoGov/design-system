import React from 'react'
import { ConteudoBlog } from './ConteudoBlog'


export default {
  title: "Componentes/ConteudoBlog",
  component: ConteudoBlog,
  argTypes: { 
    titulo: {
      name: "titulo",
      description: "Título da página *string*"
     },
     texto: {
      name: "texto",
      description: "Parágrafo de texto *string*"
     },
     capa: {
      name: "capa",
      description: "Link da imagem de capa *URL*",
     },
     autor: {
      name: "autor",
      description: "Array de objetos contendo informações sobre o autor do texto *array* \n\n **avatar:** URL da imagem do autor da postagem *URL*, \n\n **nome:** nome do autor da postagem *string*, \n\n **data:** data da postagem do conteúdo *string*."
     },    
  },
};
const Template = (args) => <ConteudoBlog {...args}/>
export const Default = Template.bind({});
Default.args={
  titulo : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  texto : "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat velit nec erat aliquam fringilla. Nam vestibulum eu neque non convallis. Pellentesque elementum dignissim ante.</p><img src=\"https://media.graphassets.com/W10ybMgASFuK4fdT84GM\" alt=\"banner-20.png\" title=\"banner-20.png\" width=\"1400\" height=\"817\" /><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat velit nec erat aliquam fringilla. Nam vestibulum eu neque non convallis. Pellentesque elementum dignissim ante.</p><iframe\n          width=\"560\"\n          height=\"315\"\n          frameBorder=\"0\"\n          allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n          allowFullScreen\n          title=\"https://www.youtube.com/embed/vGN5pBDaAaQ\"\n          src=\"https://www.youtube.com/embed/vGN5pBDaAaQ\"\n        ></iframe><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat velit nec erat aliquam fringilla. Nam vestibulum eu neque non convallis. Pellentesque elementum dignissim ante.</p><p></p><iframe\n          width=\"600\"\n          height=\"800\"\n          frameBorder=\"0\"\n          allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n          allowFullScreen\n          title=\"https://datastudio.google.com/embed/reporting/12fb288f-4955-4930-b091-63da3f846c51/page/p_wbmkd7yvuc\"\n          src=\"https://datastudio.google.com/embed/reporting/12fb288f-4955-4930-b091-63da3f846c51/page/p_wbmkd7yvuc\"\n        ></iframe><p></p>",
  capa : "https://raw.githubusercontent.com/ImpulsoGov/design-system/6f4e11d8ebf849a76c2c3d641105449aba699a00/componentes/estatico/imagem-fundo.png",
  autor : {avatar: "https://media.graphassets.com/53A911TkTVeKdKeLllnS", nome: "IMPULSO GOV", data:"  ·  Maio 2022"},
}
