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
  }
}
const Template = (args) => <CardImg {...args}/>
export const Completo = Template.bind({});
Completo.args={
    indicador:"Conteúdos e materiais com dicas",
    descricao:"Semanalmente enviamos para o seu e-mail sugestões para melhorar sua rotina de trabalho e mantemos você informado sobre as atualizações da APS.",
    imagemSrc: "url_da_sua_imagem",
}
