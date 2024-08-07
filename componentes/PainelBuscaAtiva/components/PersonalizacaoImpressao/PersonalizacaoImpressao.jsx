import React, { useState } from "react";
import { ButtonColorSubmitIcon } from "../../../ButtonColor/ButtonColor";
import style from "./PersonalizacaoImpressao.module.css";
import Image from "next/image";
import cx from "classnames";

const DEFAULT_LABELS = {
  titulo: "",
  personalizacaoPrincipal: {
    titulo: "",
    descricao: "",
    agrupamentoSim: "",
    agrupamentoNao: "",
  },
  personalizacaoSecundaria: {
    titulo: "",
    recomendacao: "",
    separacaoGrupoPorFolha: "",
    ordenacao: "",
  },
  botao: "",
};

export const PersonalizacaoImpressao = ({
  labels = DEFAULT_LABELS,
  handleClose = () => {},
  handleButtonClick = () => {},
  valoresAgrupamento,
}) => {
  const [personalizacao, setPersonalizacao] = useState({
    agrupamento: valoresAgrupamento.sim,
    separacaoGrupoPorFolha: false,
    ordenacao: false,
  });

  function handleChange(e) {
    const { name, value, checked, type } = e.target;

    setPersonalizacao({
      ...personalizacao,
      [name]: type === "checkbox" ? checked : value
    });
  }

  return (
    <div className={style.Container}>
      <div className={style.Close}>
        <a
          className={style.ModalExit}
          onClick={handleClose}
        />
      </div>

      <div className={style.TituloContainer}>
        <img
          src="https://media.graphassets.com/tkjDWpANQ9SzsdACBiEI"
          width="28px"
          height="28px"
          alt="Icone de brilho"
          className={style.IconeTitulo}
        />
        <h4 className={cx(style.Titulo, style.ResetEspacamento)}>
          {labels.titulo}
        </h4>
      </div>

      <h5 className={cx(style.TituloPersonalizacaoPrincipal, style.ResetEspacamento)}>
        {labels.personalizacaoPrincipal.titulo}
      </h5>

      <p className={cx(style.DescricaoPersonalizacaoPrincipal, style.ResetEspacamento)}>
        {labels.personalizacaoPrincipal.descricao}
      </p>

      <div className={style.OpcaoPersonalizacaoPrincipal}>
        <input
          onChange={handleChange}
          className={style.InputPersonalizacaoPrincipal}
          type="radio"
          value={valoresAgrupamento.sim}
          checked={personalizacao.agrupamento === valoresAgrupamento.sim}
          name="agrupamento"
          id="agrupamentoSim"
        />
        <label htmlFor="agrupamentoSim">
          {labels.personalizacaoPrincipal.agrupamentoSim}
        </label>
      </div>

      <div className={style.OpcaoPersonalizacaoPrincipal}>
        <input
          onChange={handleChange}
          className={style.InputPersonalizacaoPrincipal}
          type="radio"
          value={valoresAgrupamento.nao}
          checked={personalizacao.agrupamento === valoresAgrupamento.nao}
          name="agrupamento"
          id="agrupamentoNao"
        />
        <label htmlFor="agrupamentoNao">
          {labels.personalizacaoPrincipal.agrupamentoNao}
        </label>
      </div>

      {
        personalizacao.agrupamento === valoresAgrupamento.sim && (
          <>
            <hr className={style.Linha}/>

            <h5 className={cx(style.TituloPersonalizacoesSecundarias, style.ResetEspacamento)}>
              {labels.personalizacaoSecundaria.titulo}
            </h5>

            <div className={style.ContainerPersonalizacoesSecundarias}>
              <div className={style.Recomendacao}>
                <img
                  src="https://media.graphassets.com/WMvmmV6JTKZ1OhELfymQ"
                  width="14px"
                  height="14px"
                  alt="Ícone de estrela"
                  className={style.IconeRecomendacao}
                />
                <span className={style.TextoRecomendacao}>
                  {labels.personalizacaoSecundaria.recomendacao}
                </span>
              </div>

              <div className={style.OpcaoPersonalizacaoSecundaria}>
                <input
                  onChange={handleChange}
                  type="checkbox"
                  checked={personalizacao.separacaoGrupoPorFolha}
                  name="separacaoGrupoPorFolha"
                  id="separacaoGrupoPorFolha"
                />
                <label htmlFor="separacaoGrupoPorFolha">
                  {labels.personalizacaoSecundaria.separacaoGrupoPorFolha}
                </label>
              </div>

              <div className={style.OpcaoPersonalizacaoSecundaria}>
                <input
                  onChange={handleChange}
                  type="checkbox"
                  checked={personalizacao.ordenacao}
                  name="ordenacao"
                  id="ordenacao"
                />
                <label htmlFor="ordenacao">
                  {labels.personalizacaoSecundaria.ordenacao}
                </label>
              </div>
            </div>
          </>
        )
      }

      <div className={style.ContainerBotao}>
        <ButtonColorSubmitIcon
          label={labels.botao}
          submit={() => handleButtonClick(personalizacao)}
        />
      </div>
    </div>
  )
}
