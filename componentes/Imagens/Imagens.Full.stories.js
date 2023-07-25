import React from 'react'
import {ImagensFull, ImagensFull2, ImagensFull3} from './index' 

export default {
  title: "Componentes/Imagens",
  component: ImagensFull, ImagensFull2, ImagensFull3,
  argTypes: { 
    imagem: { 
      name: 'imagem' ,
      description: 'Link da imagem *URL*'
    },
  },
};

const Template = (args) => <ImagensFull {...args}/>
export const Default = Template.bind({});
Default.args={
  imagem : 'https://media.graphassets.com/wOdRiF1HQ2azIVk9iCxI'
}

const Template2 = (args) => <ImagensFull2 {...args}/>
export const Default2 = Template2.bind({});
Default2.args={
  imagem : 'https://media.graphassets.com/wOdRiF1HQ2azIVk9iCxI'
}

const Template3 = (args) => <ImagensFull3 {...args}/>
export const Default3 = Template3.bind({});
Default3.args={
  imagem : 'https://media.graphassets.com/wOdRiF1HQ2azIVk9iCxI'
}

//teste

