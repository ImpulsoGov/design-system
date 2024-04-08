import React from "react";
import { ButtonColorSubmit } from "../../../ButtonColor";
import * as helpers from "../../helpers";
import style from "../../PainelBuscaAtiva.module.css";
import { CardFiltro } from "../CardFiltro";

export const Ordenar = (props)=>{
  const filtros_painel = {
    "rotulos" : props.rotulosfiltros,
    "ID" : props.IDFiltros
  }
  const limpar = ()=>{
    let dados = props.tabela
    const temFiltrosAplicados = Object.values(props.filtros).some((filtro) => filtro);

    if (temFiltrosAplicados) {
      const filtrosEscolhidos = helpers.valuesToChavesFiltros(props.filtros, props.setChavesFiltros, props.dadosFiltros)
      const filtrosAgrupados = helpers.agruparChavesIguais(filtrosEscolhidos)
      dados = helpers.filterByChoices(props.tabela, filtrosAgrupados)
    }

    props.setOrdenar()
    props.setData(dados)
    props.setModal(false)
    props.setOrdenacaoAplicada(false)
  }

  const SortData = ({
    data,
    setData,
    filtro,
    datefiltros,
    IntFiltros,
    setModal,
    setOrdenacaoAplicada,
    IDFiltrosOrdenacao,
    trackObject,
    painel,
    aba,
    sub_aba
  })=>{
    setData(helpers.sortByChoice(data, filtro, IDFiltrosOrdenacao, datefiltros, IntFiltros))

    trackObject.track('button_click', {
      'button_action': 'aplicar_ordenacao',
      'nome_lista_nominal': painel,
      'aba_lista_nominal' : aba,
      'sub_aba_lista_nominal' : sub_aba,
      'button_choices' : filtro
    })
    setModal(false)
    setOrdenacaoAplicada(true)
  }

  return(
    <div className={style.containerOrdenar} data-testid="Ordenar">
      <div
        className={style.limparOrdenacao}
        onClick={limpar}
      >Limpar ordenação</div>
      <p className={style.OrdenarPor}>Ordenar por:</p>
      {filtros_painel.rotulos.map((label)=><CardFiltro label={label} setOrdenar={props.setOrdenar} ordenar={props.ordenar} ID={filtros_painel.ID} key={label} />)}
      <ButtonColorSubmit
        label="ORDENAR LISTA"
        submit={SortData}
        arg={{
          data : props.data,
          filtro : props.ordenar,
          setData:props.setData,
          datefiltros : props.datefiltros,
          IntFiltros : props.IntFiltros,
          setModal : props.setModal,
          setOrdenacaoAplicada : props.setOrdenacaoAplicada, 
          IDFiltrosOrdenacao : props.IDFiltrosOrdenacao,
          trackObject : props.trackObject,
          painel : props.painel,
          aba : props.aba,
          sub_aba : props.sub_aba
      }}/>
    </div>
  )
}