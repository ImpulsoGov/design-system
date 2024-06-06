import React from 'react';
import { CardImg } from './index';

export default {
  title: "Componentes/CardImg",
  component: CardImg,
  argTypes: {
    imagemSrc: {
      name: "imagemSrc",
      description: "URL da imagem para o card *string*"
    },
    descricao: {
      name: "descricao",
      description: "Descrição do card *string*"
    },
    indicador: {
      name: "indicador",
      description: "Valor do indicador do card *number*"
    },
    height: {
      name: "height",
      description: "Altura atribuída ao card *string* ou *number*"
    },
    imagemStyle: {
      name: "imagemStyle",
      description: "Estilo aplicado à imagem *object*"
    },
  }
}
const Template = (args) => <CardImg {...args}/>
export const Completo = Template.bind({});
Completo.args={
    indicador:"Conteúdos e materiais com dicas",
    descricao:"Semanalmente enviamos para o seu e-mail sugestões para melhorar sua rotina de trabalho e mantemos você informado sobre as atualizações da APS.",
    imagemSrc: "https://media.graphassets.com/7KgUfR5QK24Tgxw79bIQ",
    imagemStyle: {
      height: "40vh"
    }
}
