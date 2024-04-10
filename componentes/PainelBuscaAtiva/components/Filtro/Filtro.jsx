import React from "react";
import { ButtonColorSubmit } from "../../../ButtonColor";
import style from "../../PainelBuscaAtiva.module.css";
import * as helpers from "../../helpers";
import { FiltroBody } from "../FiltroBody";

export const Filtro = ({
  data,
  setData,
  tabela,
  value,
  handleCheckbox,
  setChavesFiltros,
  setModal,
  trackObject,
  painel,
  aba,
  sub_aba,
  ordenar,
  datefiltros,
  IntFiltros,
  IDFiltrosOrdenacao,
  ordenacaoAplicada,
}) => {
  function limparFiltros() {
    const dados = ordenacaoAplicada
      ? helpers.sortByChoice(tabela, ordenar, IDFiltrosOrdenacao, datefiltros, IntFiltros)
      : tabela;

    setData(dados);
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

  function handleButtonClick(){
    const filtrosSelecionados = helpers.valuesToChavesFiltros(value, setChavesFiltros, data);
    const filtrosAgrupados = helpers.agruparChavesIguais(filtrosSelecionados);
    const dadosFiltrados = helpers.filterByChoices(tabela, filtrosAgrupados);

    setData(
      ordenacaoAplicada
        ? helpers.sortByChoice(dadosFiltrados, ordenar, IDFiltrosOrdenacao, datefiltros, IntFiltros)
        : dadosFiltrados
    );
    setModal(false);
    mapClickEvent(filtrosAgrupados);
  }

  return (
    <div className={ style.Filtro } data-testid="Filtro">
      <div
        className={ style.LimparFiltros }
        onClick={ limparFiltros }
      >
        Limpar Filtros
      </div>

      <div style={ { overflowY: "scroll", height: "70vh", width: "120%" } }>
        {data.map((filtro) => (
          <FiltroBody
            data={ filtro }
            value={ value }
            key={ filtro.rotulo }
            handleCheckbox={ handleCheckbox }
          />
        ))}
      </div>

      <div className={ style.AplicarFiltros }>
        <ButtonColorSubmit
          label="FILTRAR LISTA NOMINAL"
          submit={ handleButtonClick }
          arg={ {} }
        />
      </div>

      <div className={ style.AplicarfiltrosCase }></div>
    </div>
  );
};