import React from "react";
import { ButtonColorSubmit } from "../../../ButtonColor";
import * as helpers from "../../helpers";
import style from "../../PainelBuscaAtiva.module.css";
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
  setData,
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
    setData(dados)
    setModal(false)
    setOrdenacaoAplicada(false)
  }

  const handleButtonClick = ()=>{
    const dados = hasFiltersApplied ? filter(data) : data

    setData(helpers.sortByChoice(dados, ordenar, IDFiltrosOrdenacao, datefiltros, IntFiltros))

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
      <div
        className={style.limparOrdenacao}
        onClick={limparOrdenacao}
      >
        Limpar ordenação
      </div>

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

      <ButtonColorSubmit
        label="ORDENAR LISTA"
        submit={handleButtonClick}
        arg={{}}/>
    </div>
  )
}