import React, { useEffect, useState } from "react";
import style from "./ToolBar.module.css";
import { ButtonLightSubmit } from "../../../ButtonLight/ButtonLight";
import { ButtonColorSubmitIcon } from "../../../ButtonColor/ButtonColor";
import Tippy from "@tippyjs/react";
import "./tippy_theme.css";
import 'tippy.js/dist/svg-arrow.css';

export const ToolBar = ({
  showFiltros,
  showOrdenar,
  chavesFiltros,
  tabela,
  ordenacaoAplicada,
  handlePrintClick,
  updateData,
})=>{
  const [nome,setNome] =useState('')

  const filterbyName = ()=>{
    const filteredData = tabela.filter(item=>{
      const property = item?.cidadao_nome ? "cidadao_nome" : "paciente_nome";
      return item[property].toUpperCase().includes(nome.toUpperCase())
    });

    updateData(filteredData);
  }

  useEffect(()=>{
    if(nome.length<=0) updateData(tabela)
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
        icon={ordenacaoAplicada ?
          "https://media.graphassets.com/ZWmQGa3TEGVceKxm4nlw" :
          "https://media.graphassets.com/7E9qXtNTze5w3ozl6a5I"
        }
      />

      <ButtonLightSubmit
        label="FILTRAR A LISTA"
        submit={showFiltros}
        icon={chavesFiltros.length>0 ? "https://media.graphassets.com/1rnUv5WSTKmCHnvqciuW" : "https://media.graphassets.com/1WHJsCigTXyJbq7Tw47m"}
      />

      <Tippy
        content={ "O número de pacientes na lista é muito grande, aplique algum filtro para que o carregamento da impressão seja mais rápido" }
        placement="bottom"
        theme="alert"
        arrow={true}
      >
        <div>
          <ButtonColorSubmitIcon
            label="IMPRIMIR LISTA"
            icon="https://media.graphassets.com/3vsKrZXYT9CdxSSyhjhk"
            submit={handlePrintClick}
          />
        </div>
      </Tippy>
    </div>
  )
}