import React from 'react'
import {PreviewArtigoDestaque} from './index'

export default {
    title: "Componentes/PreviewArtigoDestaque",
    component: PreviewArtigoDestaque,
}

  
export const Default = () =>{
  return <PreviewArtigoDestaque
            tag = "Capitação Ponderada"
            titulo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat velit nec erat aliquam fringilla. Nam vestibulum eu neque non convallis. Pellentesque elementum dignissim ante."
            autor = {{avatar: "", nome: "IMPULSO GOV", data:"MAIO 2022"}}
            imagem = ""
        />
}

