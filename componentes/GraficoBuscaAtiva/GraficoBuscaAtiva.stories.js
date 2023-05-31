import React from 'react'
import { GraficoBuscaAtiva } from './index'

export default {
  title: "Componentes/GraficoBuscaAtiva",
  component: GraficoBuscaAtiva,
};

const dataBarra = {
    legend: {
      data: ['Apenas consulta em dia', 'consulta e aferição de PA em dia', 'Apenas aferição de PA em dia','Nada em dia'],
      top: 'top'
    },
    grid: {
        top: '20%',
        containLabel: true
      },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      data: ['equipe 1', 'equipe 2', 'equipe 3', 'equipe 4', 'equipe 5', 'equipe 6']
    },
    yAxis: {
      type: 'value'
    },
    color : ['#1D856C','#2EB280','#55D499','#9DEECD'],
    series: [
      {
        name: 'Apenas consulta em dia',
        type: 'bar',
        stack: 'stack',
        data: [11, 21, 31,11, 21, 31]
      },
      {
        name: 'consulta e aferição de PA em dia',
        type: 'bar',
        stack: 'stack',
        data: [12, 22, 40,12, 22, 40]
      },
      {
        name: 'Apenas aferição de PA em dia',
        type: 'bar',
        stack: 'stack',
        data: [13, 23, 50,13, 23, 50]
      },
      {
        name: 'Nada em dia',
        type: 'bar',
        stack: 'stack',
        data: [13, 23, 50,13, 23, 50]
      }
    ]
  };
const dataRosca = {
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {d}%'
    },
    color : ['#1D856C','#2EB280','#55D499','#9DEECD'],
    series: [
      {
        name: 'Gráfico de rosca',
        type: 'pie',
        radius: ['35%', '70%'],
        avoidLabelOverlap: false,
        label: {
            show: true,
            position: 'inside',
            formatter: '{c}%',
            textStyle: {
                color: 'white',
                fontSize: 12 
              }
          },
        emphasis: {
          label: {
            show: true,
            fontSize: '20',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 30, name: 'Apenas consulta em dia' },
          { value: 31, name: 'Consulta e Aferição em dia' },
          { value: 15, name: 'Apenas Aferição de PA em dia' },
          { value: 24, name: 'Nada em dia' },
        ]
      }
    ]
  };
  
const Template = (args) => <GraficoBuscaAtiva {...args}/>

export const Default = Template.bind({});

Default.args={
  dataBarra : dataBarra,
  dataRosca : dataRosca
}