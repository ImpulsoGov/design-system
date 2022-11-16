import React from 'react'
import { SearchBar } from './index'

export default {
    title: "Componentes/SearchBar",
    component: SearchBar,
    argTypes: {
      Default: {
        name:'Default',
        description:'Barra de pesquisa da página \n\n **data:** lista contendo o nome dos países e seu continente *lista* \n\n **municipio:** Municípios do país selecionado *string*'
    },
  }
};
const data = [
    { name: "Belgium", continent: "Europe" },
    { name: "India", continent: "Asia" },
    { name: "Bolivia", continent: "South America" },
    { name: "Ghana", continent: "Africa" },
    { name: "Japan", continent: "Asia" },
    { name: "Canada", continent: "North America" },
    { name: "New Zealand", continent: "Australasia" },
    { name: "Italy", continent: "Europe" },
    { name: "South Africa", continent: "Africa" },
    { name: "China", continent: "Asia" },
    { name: "Paraguay", continent: "South America" },
    { name: "Usa", continent: "North America" },
    { name: "France", continent: "Europe" },
    { name: "Botswana", continent: "Africa" },
    { name: "Spain", continent: "Europe" },
    { name: "Senegal", continent: "Africa" },
    { name: "Brazil", continent: "South America" },
    { name: "Denmark", continent: "Europe" },
    { name: "Mexico", continent: "South America" },
    { name: "Australia", continent: "Australasia" },
    { name: "Tanzania", continent: "Africa" },
    { name: "Bangladesh", continent: "Asia" },
    { name: "Portugal", continent: "Europe" },
    { name: "Pakistan", continent:"Asia" },
];

  
export const Default = () =>{
  return(
    <SearchBar
        data={data}
        municipio = "Brazil"
    />
  )
}

