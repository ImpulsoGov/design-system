import React from 'react'
import {TituloTexto, TituloSmallTexto} from './index'

export default {
  component: TituloTexto,
  title: "Componentes/TituloTexto",
  argTypes: { 
      titulo : { 
        control : 'text',
        description: 'Titulo do texto',
      },
      texto : { 
        control : 'text',
        description: 'Corpo do texto, aceita HTML e CSS.',
      },
      imagem : {
        posicao : { 
          control : 'text',
      },
        url : { control : 'text' },
        description: 'Insere Imagem no Texto',
      },
      posicao : {
        control : 'select',
        options : [true,false,null],
        description : 'Parametro posição : true, insere imagem antes do titulo; Parametro posição : false insere imagem depois do titulo;  Parametro posição : null para render sem a imagem'
      },
      url : {
        control : 'text',
        description: 'URL com o endereço da imagem'
      }
  }
}

const Default = ({...args}) => <TituloTexto {...args} />;

const Small = ({...args}) => <TituloSmallTexto {...args} />;

export const Standart = Default.bind({});
Standart.args = {
  imagem : {
    posicao: null,
    url: ''
  },
  titulo : "A Impulso Gov",
  texto : "Impulso Gov, uma organização sem fins lucrativos e suprapartidária que apoia profissionais do SUS no aprimoramento das políticas públicas por meio do uso de dados e tecnologia, para que todas as pessoas no Brasil tenham acesso a serviços de saúde de qualidade.<br/><br/><b>Quer saber mais sobre a Impulso Gov Acesse o nosso <a style='text-decoration: none' href='impulsogov.org'>site.</a> </b>"
};


export const TituloPequeno = Small.bind({});
TituloPequeno.args = {
  imagem : {
    posicao: null,
    url: ''
  },
  titulo : "A Impulso Gov",
  texto : "Impulso Gov, uma organização sem fins lucrativos e suprapartidária que apoia profissionais do SUS no aprimoramento das políticas públicas por meio do uso de dados e tecnologia, para que todas as pessoas no Brasil tenham acesso a serviços de saúde de qualidade.<br/><br/><b>Quer saber mais sobre a Impulso Gov Acesse o nosso <a style='text-decoration: none' href='impulsogov.org'>site.</a> </b>",
  botao:{ label: "Inscreva-se para a consultoria", url: "#formulario" },
};
