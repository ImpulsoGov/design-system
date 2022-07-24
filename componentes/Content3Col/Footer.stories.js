import React from 'react'
import {Content3Col} from '../index'
import { TextCol } from '../TextCol/index'

export default {
  title: "Componentes/Content3Col",
  component: Content3Col,TextCol
}

export const Default = () => {
  return <Content3Col
  titulo = "Consultoria 100% gratuita e personalizada"
  child1 = {
      <TextCol
          titulo = "O que é?"
          corpo = "Uma consultoria para auxiliar seu município a melhorar o desempenho nos indicadores de desempenho e cadastro do Previne Brasil"
      />
  }
  child2 = {
      <TextCol
          titulo = "Como funciona?"
          corpo = "Três encontros gratuitos com nosso time de especialistas, que preparam diagnóstico, plano de ação e acompanhamento de resultados personalizados para o seu município."
      />
  }
  child3 = {
      <TextCol
          titulo = "Quem pode fazer?"
          corpo = "Municípios de até 40 mil habitantes que desejam ter apoio na gestão do Previne Brasil."
      />
  }        
/>


}


