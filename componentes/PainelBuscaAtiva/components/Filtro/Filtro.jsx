import React, { useState } from "react";
import { ButtonColorSubmit } from "../../../ButtonColor";
import { ButtonLightSubmit } from "../../../ButtonLight";
import style from "./Filtro.module.css";
import * as helpers from "../../helpers";
import { FiltroBody } from "../FiltroBody";

export const Filtro = ({
  data,
  tabela,
  value,
  handleCheckbox = () => {},
  setChavesFiltros,
  setModal,
  trackObject = { track: () => {} },
  painel,
  aba = "",
  sub_aba = "",
  ordenar,
  datefiltros,
  IntFiltros,
  IDFiltrosOrdenacao,
  ordenacaoAplicada,
  updateData,
  setShowSnackBar,
}) => {
  const [unfoldedFilter, setUnfoldedFilter] = useState('');

  function updateUnfoldedFilter(filterName) {
    setUnfoldedFilter(filterName);
  }

  function limparFiltros() {
    const dados = ordenacaoAplicada
      ? helpers.sortByChoice(tabela, ordenar, IDFiltrosOrdenacao, datefiltros, IntFiltros)
      : tabela;

    updateData(dados);
    setChavesFiltros([]);
    setModal(false);
  };

  function mapClickEvent(filterChoices) {
    trackObject.track("button_click", {
      "button_action": "aplicar_filtro",
      "nome_lista_nominal": painel,
      "aba_lista_nominal": aba,
      "sub_aba_lista_nominal": sub_aba,
      "button_choices": filterChoices
    });
  }

  function handleFilterClick(){
    const filtrosSelecionados = helpers.valuesToChavesFiltros(value, setChavesFiltros, data);
    const filtrosAgrupados = helpers.agruparChavesIguais(filtrosSelecionados);
    const dadosFiltrados = helpers.filterByChoices(tabela, filtrosAgrupados);

    updateData(
      ordenacaoAplicada
        ? helpers.sortByChoice(dadosFiltrados, ordenar, IDFiltrosOrdenacao, datefiltros, IntFiltros)
        : dadosFiltrados
    );
    setShowSnackBar({
      open: true,
      message: "Filtros aplicados com sucesso!",
      background: "#2EB280",
      color: "white",
    });
    setModal(false);
    mapClickEvent(filtrosAgrupados);
  }

  return (
    <div className={ style.Filtro } data-testid="Filtro">
      <div className={style.FiltrosContainer}>
        {data.map((filtro) => (
          <FiltroBody
            data={ filtro }
            value={ value }
            key={ filtro.rotulo }
            handleCheckbox={ handleCheckbox }
            isUnfolded={unfoldedFilter === filtro.rotulo}
            onClick={updateUnfoldedFilter}
          />
        ))}
      </div>

      <div className={ style.AplicarFiltros }>
        <ButtonLightSubmit
          label="LIMPAR FILTROS"
          submit={limparFiltros}
        />

        <ButtonColorSubmit
          label="FILTRAR LISTA"
          submit={ handleFilterClick }
          arg={ {} }
        />
      </div>

      <div className={ style.AplicarfiltrosCase }></div>
    </div>
  );
};