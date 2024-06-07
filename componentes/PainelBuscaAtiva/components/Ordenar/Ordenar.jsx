import React from "react";
import { ButtonColorSubmit } from "../../../ButtonColor";
import { ButtonLightSubmit } from "../../../ButtonLight";
import * as helpers from "../../helpers";
import style from "./Ordenar.module.css";
import { CardFiltro } from "../CardFiltro";

export const Ordenar = ({
  rotulosfiltros,
  IDFiltros,
  filtros,
  setChavesFiltros,
  dadosFiltros,
  tabela,
  setOrdenar,
  data,
  ordenar,
  datefiltros,
  IntFiltros,
  setModal,
  setOrdenacaoAplicada,
  IDFiltrosOrdenacao,
  trackObject,
  painel,
  aba,
  sub_aba,
  setShowSnackBar,
  updateData,
})=>{
  const filtros_painel = {
    "rotulos" : rotulosfiltros,
    "ID" : IDFiltros
  }
  const hasFiltersApplied = Object.values(filtros).some((value) => value);

  function filter(data) {
    const chosenFilters = helpers.valuesToChavesFiltros(filtros, setChavesFiltros, dadosFiltros);
    const groupedFilters = helpers.agruparChavesIguais(chosenFilters);

    return helpers.filterByChoices(data, groupedFilters);
  }

  const limparOrdenacao = ()=>{
    const dados = hasFiltersApplied ? filter(tabela) : tabela

    setOrdenar()
    updateData(dados)
    setModal(false)
    setOrdenacaoAplicada(false)
  }

  const handleSortClick = ()=>{
    const dados = hasFiltersApplied ? filter(data) : data

    updateData(helpers.sortByChoice(dados, ordenar, IDFiltrosOrdenacao, datefiltros, IntFiltros))

    setShowSnackBar({
      open: true,
      message: "Lista ordenada com sucesso!",
      background: "#2EB280",
      color: "white",
    })

    trackObject.track('button_click', {
      'button_action': 'aplicar_ordenacao',
      'nome_lista_nominal': painel,
      'aba_lista_nominal' : aba,
      'sub_aba_lista_nominal' : sub_aba,
      'button_choices' : ordenar
    })
    setModal(false)
    setOrdenacaoAplicada(true)
  }

  return(
    <div className={style.containerOrdenar} data-testid="Ordenar">
      <p className={style.OrdenarPor}>Ordenar por:</p>

      {filtros_painel.rotulos.map((label)=> (
        <CardFiltro
          label={label}
          isSelected={ordenar === filtros_painel.ID[label]}
          sortProperty={filtros_painel.ID[label]}
          setOrdenar={setOrdenar}
          key={label}
        />
      ))}

      <div className={style.AplicarOrdenacao}>
        <ButtonLightSubmit
          label="Limpar ordenação"
          submit={limparOrdenacao}
        />

        <ButtonColorSubmit
          label="ORDENAR LISTA"
          submit={handleSortClick}
          arg={{}}
        />
      </div>
    </div>
  )
}