import React, { useEffect, useState } from "react";
import style from "../../PainelBuscaAtiva.module.css";
import { ButtonLightSubmit } from "../../../ButtonLight/ButtonLight";

export const ToolBar = ({
  showFiltros,
  showOrdenar,
  painel,
  chavesFiltros,
  ordenar,
  setOrdenar,
  data,
  setData,
  tabela,
  ordenacaoAplicada,
  onPrintClick
})=>{
  const [nome,setNome] =useState('')
  const filterbyName = ()=>setData(tabela.filter(item=>item[item?.cidadao_nome ? "cidadao_nome" : "paciente_nome"].toUpperCase().includes(nome.toUpperCase())))
  useEffect(()=>{
    if(nome.length<=0) setData(tabela)
  },[nome])
  return(
    <div className={style.ToolBar} data-testid="ToolBar">
      <input
        className={style.SearchBar}
        placeholder="PESQUISE UM NOME"
        value={nome}
        onChange={(e) => {setNome(e.target.value);filterbyName();}}
      />
      <ButtonLightSubmit
        label="ORDENAR LISTA"
        submit={showOrdenar}
        arg={{painel,ordenar,setOrdenar,data,setData}}
        icon={ordenacaoAplicada ?
          "https://media.graphassets.com/ZWmQGa3TEGVceKxm4nlw" :
          "https://media.graphassets.com/7E9qXtNTze5w3ozl6a5I"
        }
      />
      <ButtonLightSubmit label="FILTRAR LISTA NOMINAL" submit={showFiltros} icon={chavesFiltros.length>0 ? "https://media.graphassets.com/1rnUv5WSTKmCHnvqciuW" : "https://media.graphassets.com/1WHJsCigTXyJbq7Tw47m"}/>
    </div>
  )
}