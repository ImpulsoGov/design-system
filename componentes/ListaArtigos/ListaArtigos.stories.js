import React from 'react'
import {ListaArtigos} from './index'

export default {
    title: "Componentes/ListaArtigos",
    component: ListaArtigos,
    argTypes: {
        artigos: {
            name: 'artigo',
            description:'Array de objetos contendo os artigos e suas informações *array* **id:** Id do artigo *string* \n\n **tag:** Tags do artigo *string*,\n\n **título:** Yítulo do artigo *string* \n\n **texto:** Texto do artigo *string* \n\n **autor:** Autor do artigo *string* \n\n **avatar:** Avatar do autor do artigo *URL* \n\n **data:** Data de publicação do artigo *string* \n\n **imagem:** Imagem do artigo *URL*'
        },
        ListaResumo: {
            name: 'ListaResumo',
            description: 'Função que retorna uma lista com os artigos resumidos *function ***resumo:** Booleano que retorna a o resumo dos artigos quando recebe o valor "True". Quando recebe o valor "False" retorna a lista completa *boolean* \n\n **artigos:** Lista contendo os artigos *Lista*  \n\n **título:** Título da lista *string*\n\n **btn:** Botão da lista de artigos \n\n **-label:** rótulo do botão *string* \n\n **-link:** link do botão *URL*'
        },
        ListaCompleta: {
            name: 'ListaCompleta',
            description: 'Função que retorna a lista com os artigos completos *function ***resumo:** Booleano que retorna a o resumo dos artigos quando recebe o valor "True". Quando recebe o valor "False" retorna a lista completa  *boolean** \n\n **artigos:** Lista contendo os artigos *Lista* \n\n **título:** Título da lista *string*\n\n **btn:** Botão da lista de artigos \n\n **-label:** rótulo do botão *string* \n\n **-link:** link do botão *URL*'
        },
    },
};

const artigos = [
    {
        id: "cl6v73chm2xbn0blwom0s8o1l",
        tag : "Capitação Ponderada",
        titulo : "1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        texto :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat velit nec erat aliquam fringilla. Nam vestibulum eu neque non convallis. Pellentesque elementum dignissim ante. Nulla lacinia enim lacinia erat cursus scelerisque erata nam vestibulum eu neque non convallis.",
        autor : "IMPULSO GOV",
        avatar: "https://media.graphassets.com/53A911TkTVeKdKeLllnS?_gl=1*kapmz3*_ga*MzY0MzkwNjMwLjE2NTg1OTU1NjU.*_ga_G6FYGSYGZ4*MTY2MTEyNDA2NC4zOS4xLjE2NjExMjQxNzcuNjAuMC4w",  
        data:  "2022-01-24T00:42:00+00:00",
        imagem : "https://media.graphassets.com/W10ybMgASFuK4fdT84GM?_gl=1*140dhjr*_ga*MzY0MzkwNjMwLjE2NTg1OTU1NjU.*_ga_G6FYGSYGZ4*MTY2MTEyNDA2NC4zOS4xLjE2NjExMjUzODIuNDcuMC4w"
    },
    {
        id: "cl6v73chm2xbn0blwom0s8o1",
        tag : "Capitação Ponderada",
        titulo : "2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        texto :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat velit nec erat aliquam fringilla. Nam vestibulum eu neque non convallis. Pellentesque elementum dignissim ante. Nulla lacinia enim lacinia erat cursus scelerisque erata nam vestibulum eu neque non convallis.",
        autor : "IMPULSO GOV",
        avatar: "https://media.graphassets.com/53A911TkTVeKdKeLllnS?_gl=1*kapmz3*_ga*MzY0MzkwNjMwLjE2NTg1OTU1NjU.*_ga_G6FYGSYGZ4*MTY2MTEyNDA2NC4zOS4xLjE2NjExMjQxNzcuNjAuMC4w",  
        data:  "2022-02-24T00:42:00+00:00",
        imagem : "https://media.graphassets.com/W10ybMgASFuK4fdT84GM?_gl=1*140dhjr*_ga*MzY0MzkwNjMwLjE2NTg1OTU1NjU.*_ga_G6FYGSYGZ4*MTY2MTEyNDA2NC4zOS4xLjE2NjExMjUzODIuNDcuMC4w"
    },
    {
        id: "cl6v73chm2xbn0blwom0s8o",
        tag : "Capitação Ponderada",
        titulo : "3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        texto :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat velit nec erat aliquam fringilla. Nam vestibulum eu neque non convallis. Pellentesque elementum dignissim ante. Nulla lacinia enim lacinia erat cursus scelerisque erata nam vestibulum eu neque non convallis.",
        autor : "IMPULSO GOV",
        avatar: "https://media.graphassets.com/53A911TkTVeKdKeLllnS?_gl=1*kapmz3*_ga*MzY0MzkwNjMwLjE2NTg1OTU1NjU.*_ga_G6FYGSYGZ4*MTY2MTEyNDA2NC4zOS4xLjE2NjExMjQxNzcuNjAuMC4w",  
        data:  "2022-03-24T00:42:00+00:00",
        imagem : "https://media.graphassets.com/W10ybMgASFuK4fdT84GM?_gl=1*140dhjr*_ga*MzY0MzkwNjMwLjE2NTg1OTU1NjU.*_ga_G6FYGSYGZ4*MTY2MTEyNDA2NC4zOS4xLjE2NjExMjUzODIuNDcuMC4w"
    },
    {
        id: "cl6v73chm2xbn0blwom0s8",
        tag : "Capitação Ponderada",
        titulo : "4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        texto :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat velit nec erat aliquam fringilla. Nam vestibulum eu neque non convallis. Pellentesque elementum dignissim ante. Nulla lacinia enim lacinia erat cursus scelerisque erata nam vestibulum eu neque non convallis.",
        autor : "IMPULSO GOV",
        avatar: "https://media.graphassets.com/53A911TkTVeKdKeLllnS?_gl=1*kapmz3*_ga*MzY0MzkwNjMwLjE2NTg1OTU1NjU.*_ga_G6FYGSYGZ4*MTY2MTEyNDA2NC4zOS4xLjE2NjExMjQxNzcuNjAuMC4w",  
        data:  "2022-04-24T00:42:00+00:00",
        imagem : "https://media.graphassets.com/W10ybMgASFuK4fdT84GM?_gl=1*140dhjr*_ga*MzY0MzkwNjMwLjE2NTg1OTU1NjU.*_ga_G6FYGSYGZ4*MTY2MTEyNDA2NC4zOS4xLjE2NjExMjUzODIuNDcuMC4w"
    },
    {
        id: "cl6v73chm2xbn0blwom0s",
        tag : "Capitação Ponderada",
        titulo : "5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        texto :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat velit nec erat aliquam fringilla. Nam vestibulum eu neque non convallis. Pellentesque elementum dignissim ante. Nulla lacinia enim lacinia erat cursus scelerisque erata nam vestibulum eu neque non convallis.",
        autor : "IMPULSO GOV",
        avatar: "https://media.graphassets.com/53A911TkTVeKdKeLllnS?_gl=1*kapmz3*_ga*MzY0MzkwNjMwLjE2NTg1OTU1NjU.*_ga_G6FYGSYGZ4*MTY2MTEyNDA2NC4zOS4xLjE2NjExMjQxNzcuNjAuMC4w",  
        data:  "2022-05-24T00:42:00+00:00",
        imagem : "https://media.graphassets.com/W10ybMgASFuK4fdT84GM?_gl=1*140dhjr*_ga*MzY0MzkwNjMwLjE2NTg1OTU1NjU.*_ga_G6FYGSYGZ4*MTY2MTEyNDA2NC4zOS4xLjE2NjExMjUzODIuNDcuMC4w"
    },
    {
        id: "cl6v73chm2xbn0blwom0",
        tag : "Capitação Ponderada",
        titulo : "6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        texto :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat velit nec erat aliquam fringilla. Nam vestibulum eu neque non convallis. Pellentesque elementum dignissim ante. Nulla lacinia enim lacinia erat cursus scelerisque erata nam vestibulum eu neque non convallis.",
        autor : "IMPULSO GOV",
        avatar: "https://media.graphassets.com/53A911TkTVeKdKeLllnS?_gl=1*kapmz3*_ga*MzY0MzkwNjMwLjE2NTg1OTU1NjU.*_ga_G6FYGSYGZ4*MTY2MTEyNDA2NC4zOS4xLjE2NjExMjQxNzcuNjAuMC4w",  
        data:  "2022-06-24T00:42:00+00:00",
        imagem : "https://media.graphassets.com/W10ybMgASFuK4fdT84GM?_gl=1*140dhjr*_ga*MzY0MzkwNjMwLjE2NTg1OTU1NjU.*_ga_G6FYGSYGZ4*MTY2MTEyNDA2NC4zOS4xLjE2NjExMjUzODIuNDcuMC4w"
    },
    {
        id: "cl6v73chm2xbn0blwom",
        tag : "Capitação Ponderada",
        titulo : "7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        texto :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat velit nec erat aliquam fringilla. Nam vestibulum eu neque non convallis. Pellentesque elementum dignissim ante. Nulla lacinia enim lacinia erat cursus scelerisque erata nam vestibulum eu neque non convallis.",
        autor : "IMPULSO GOV",
        avatar: "https://media.graphassets.com/53A911TkTVeKdKeLllnS?_gl=1*kapmz3*_ga*MzY0MzkwNjMwLjE2NTg1OTU1NjU.*_ga_G6FYGSYGZ4*MTY2MTEyNDA2NC4zOS4xLjE2NjExMjQxNzcuNjAuMC4w",  
        data:  "2022-07-24T00:42:00+00:00",
        imagem : "https://media.graphassets.com/W10ybMgASFuK4fdT84GM?_gl=1*140dhjr*_ga*MzY0MzkwNjMwLjE2NTg1OTU1NjU.*_ga_G6FYGSYGZ4*MTY2MTEyNDA2NC4zOS4xLjE2NjExMjUzODIuNDcuMC4w"
    },
    {
        id: "cl6v73chm2xbn0blwo",
        tag : "Capitação Ponderada",
        titulo : "8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        texto :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat velit nec erat aliquam fringilla. Nam vestibulum eu neque non convallis. Pellentesque elementum dignissim ante. Nulla lacinia enim lacinia erat cursus scelerisque erata nam vestibulum eu neque non convallis.",
        autor : "IMPULSO GOV",
        avatar: "https://media.graphassets.com/53A911TkTVeKdKeLllnS?_gl=1*kapmz3*_ga*MzY0MzkwNjMwLjE2NTg1OTU1NjU.*_ga_G6FYGSYGZ4*MTY2MTEyNDA2NC4zOS4xLjE2NjExMjQxNzcuNjAuMC4w",  
        data:  "2022-09-24T00:42:00+00:00",
        imagem : "https://media.graphassets.com/W10ybMgASFuK4fdT84GM?_gl=1*140dhjr*_ga*MzY0MzkwNjMwLjE2NTg1OTU1NjU.*_ga_G6FYGSYGZ4*MTY2MTEyNDA2NC4zOS4xLjE2NjExMjUzODIuNDcuMC4w"
    },
    {
        id: "cl6v73chm2xbn0blw",
        tag : "Capitação Ponderada",
        titulo : "9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        texto :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat velit nec erat aliquam fringilla. Nam vestibulum eu neque non convallis. Pellentesque elementum dignissim ante. Nulla lacinia enim lacinia erat cursus scelerisque erata nam vestibulum eu neque non convallis.",
        autor : "IMPULSO GOV",
        avatar: "https://media.graphassets.com/53A911TkTVeKdKeLllnS?_gl=1*kapmz3*_ga*MzY0MzkwNjMwLjE2NTg1OTU1NjU.*_ga_G6FYGSYGZ4*MTY2MTEyNDA2NC4zOS4xLjE2NjExMjQxNzcuNjAuMC4w",  
        data:  "2022-08-24T00:42:00+00:00",
        imagem : "https://media.graphassets.com/W10ybMgASFuK4fdT84GM?_gl=1*140dhjr*_ga*MzY0MzkwNjMwLjE2NTg1OTU1NjU.*_ga_G6FYGSYGZ4*MTY2MTEyNDA2NC4zOS4xLjE2NjExMjUzODIuNDcuMC4w"
    },
]
  
export const ListaResumo = () => <ListaArtigos
                                    resumo = {true}
                                    artigos = {artigos}
                                    titulo = "Outros artigos"
                                    btn = {{label : "ver todos" , link: "artigos"}}
                                />


export const ListaCompleta = () =>  <ListaArtigos
                                    resumo = {false}
                                    artigos = {artigos}
                                    titulo = "Outros artigo"
                                    btn = {{label : "ver todos" , link: "artigos"}}
                                    />
  
  