import React from 'react'
import { ScoreCard } from './index'
import { ScoreCardGrid } from './ScoreCard';

export default {
  title: "Componentes/ScoreCard",
  component: ScoreCard,
};

const Template = (args) => <ScoreCardGrid {...args}/>

export const CardGrid = Template.bind({});

CardGrid.args={
    valores : [
        {
            descricao : "Total de pessoas com Hipertensão",
            valor : 102
        },   
        {
            descricao : "Total de pessoas com Hipertensão",
            valor : 102
        },    
        {
            descricao : "Total de pessoas com Hipertensão",
            valor : 102
        },    
        {
            descricao : "Total de pessoas com Hipertensão",
            valor : 102
        },    
    ]
}