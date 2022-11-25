import React from 'react'
import {PreviewArtigoDestaque} from './index'

export default {
    title: "Componentes/PreviewArtigoDestaque",
    component: PreviewArtigoDestaque,
    argTypes: {
        tag: {
            name:'tag',
            description:'Tag do artigo: *string*'
        },
        titulo: {
            name:'titulo',
            description: 'Título do artigo *string*'
        },
        texto: {
            name:'texto',
            description:'Texto do artigo *string*'
        },
        autor:{
            name: 'autor',
            description: 'Objeto contendo informações do autor do artigo *object*\n\n **avatar:** Avatar do autor do artigo *URL* \n\n **nome:** Nome do autor do artigo *string* \n\n **data:** Data da publicação do artigo *string*'
        },
        imagem: {
            name:'imagem',
            description: 'Imagem do artigo *URL*'
        },
    }
}

  
export const Default = () =>{
  return <PreviewArtigoDestaque
            tag = "Capitação Ponderada"
            titulo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat velit nec erat aliquam fringilla. Nam vestibulum eu neque non convallis. Pellentesque elementum dignissim ante."
            autor = {{avatar: "https://media.graphassets.com/53A911TkTVeKdKeLllnS?_gl=1*kapmz3*_ga*MzY0MzkwNjMwLjE2NTg1OTU1NjU.*_ga_G6FYGSYGZ4*MTY2MTEyNDA2NC4zOS4xLjE2NjExMjQxNzcuNjAuMC4w", nome: "IMPULSO GOV", data:"  ·  Maio 2022"}}
            imagem = "https://media.graphassets.com/W10ybMgASFuK4fdT84GM?_gl=1*140dhjr*_ga*MzY0MzkwNjMwLjE2NTg1OTU1NjU.*_ga_G6FYGSYGZ4*MTY2MTEyNDA2NC4zOS4xLjE2NjExMjUzODIuNDcuMC4w"
        />
}

