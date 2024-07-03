import React, { useState } from "react";
import { ButtonColorSubmitIcon } from "../ButtonColor/ButtonColor";
import style from "./PersonalizacaoImpressao.module.css";
import Image from "next/image";

export const PersonalizacaoImpressao = ({
  labels = {
    titulo: "",
    personalizacaoPrincipal: {
      titulo: "",
      descricao: "",
      opcoes: {
        agrupamentoSim: "",
        agrupamentoNao: "",
      },
    },
    personalizacaoSecundaria: {
      titulo: "",
      recomendacao: "",
      opcoes: {
        separacaoGrupoPorFolha: "",
        ordenacao: "",
      },
    },
    botao: "",
  },
  handleClick = () => {},
  handleClose = () => {},
}) => {
  const valoresAgrupamento = { sim: "sim", nao: "não" };

  const [opcoes, setOpcoes] = useState({
    agrupamento: valoresAgrupamento.sim,
    separacaoGrupoPorFolha: false,
    ordenacao: false,
  });

  function handleChange(e) {
    const { name, value, checked, type } = e.target;

    setOpcoes({
      ...opcoes,
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
        <Image
          src="https://media.graphassets.com/tkjDWpANQ9SzsdACBiEI"
          width={30}
          height={30}
          alt="Icone de brilho"
        />
        <h4 className={style.Titulo}>{labels.titulo}</h4>
      </div>

      <h5 className={style.TituloPersonalizacaoPrincipal}>
        {labels.personalizacaoPrincipal.titulo}
      </h5>

      <p className={style.DescricaoPersonalizacaoPrincipal}>
        {labels.personalizacaoPrincipal.descricao}
      </p>

      <div className={style.OpcaoPersonalizacaoPrincipal}>
        <input
          onChange={handleChange}
          className={style.InputPersonalizacaoPrincipal}
          type="radio"
          value={valoresAgrupamento.sim}
          checked={opcoes.agrupamento === valoresAgrupamento.sim}
          name="agrupamento"
          id="agrupamentoSim"
        />
        <label htmlFor="agrupamentoSim">
          {labels.personalizacaoPrincipal.opcoes.agrupamentoSim}
        </label>
      </div>

      <div className={style.OpcaoPersonalizacaoPrincipal}>
        <input
          onChange={handleChange}
          className={style.InputPersonalizacaoPrincipal}
          type="radio"
          value={valoresAgrupamento.nao}
          checked={opcoes.agrupamento === valoresAgrupamento.nao}
          name="agrupamento"
          id="agrupamentoNao"
        />
        <label htmlFor="agrupamentoNao">
          {labels.personalizacaoPrincipal.opcoes.agrupamentoNao}
        </label>
      </div>

      {
        opcoes.agrupamento === valoresAgrupamento.sim && (
          <>
            <hr className={style.Linha}/>

            <h5 className={style.TituloPersonalizacoesSecundarias}>
              {labels.personalizacaoSecundaria.titulo}
            </h5>

            <div className={style.ContainerPersonalizacoesSecundarias}>
              <div className={style.Recomendacao}>
                <Image
                  src="https://media.graphassets.com/WMvmmV6JTKZ1OhELfymQ"
                  width={14}
                  height={14}
                  alt="Ícone de estrela"
                />
                <span className={style.TextoRecomendacao}>
                  {labels.personalizacaoSecundaria.recomendacao}
                </span>
              </div>

              <div className={style.OpcaoPersonalizacaoSecundaria}>
                <input
                  onChange={handleChange}
                  type="checkbox"
                  checked={opcoes.separacaoGrupoPorFolha}
                  name="separacaoGrupoPorFolha"
                  id="separacaoGrupoPorFolha"
                />
                <label htmlFor="separacaoGrupoPorFolha">
                  {labels.personalizacaoSecundaria.opcoes.separacaoGrupoPorFolha}
                </label>
              </div>

              <div className={style.OpcaoPersonalizacaoSecundaria}>
                <input
                  onChange={handleChange}
                  type="checkbox"
                  checked={opcoes.ordenacao}
                  name="ordenacao"
                  id="ordenacao"
                />
                <label htmlFor="ordenacao">
                  {labels.personalizacaoSecundaria.opcoes.ordenacao}
                </label>
              </div>
            </div>
          </>
        )
      }

      <div className={style.ContainerBotao}>
        <ButtonColorSubmitIcon
          label={labels.botao}
          submit={handleClick}
        />
      </div>
    </div>
  )
}
