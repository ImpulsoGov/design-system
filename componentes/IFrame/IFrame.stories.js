import React from 'react'
import {IFrame} from './index'

export default {
  title: "Componentes/IFrame",
  component: IFrame,
  argTypes: { 
    height: { 
      name: 'height' ,
      description: 'Valor da altura do iframe *string*'
       },
    link : {
      name:'link',
      description:'Link da página *URL*'
    },
  },
};

const Template = (args) => <IFrame {...args}/>

export const Default = Template.bind({});

Default.args ={
    height: "100",
    link: "https://www.impulsoprevine.org/"
};

