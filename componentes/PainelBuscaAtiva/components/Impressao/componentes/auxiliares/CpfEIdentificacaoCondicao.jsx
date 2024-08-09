import React from "react";
import { formatarCPFOuDataNascimento } from "../../helpers/formatarCPF"

export const CpfEIdentificacaoCondicao = ({value})=> {
  const { cpf, identificacao_condicao: identificacaoCondicao } = value;
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "2px",
      fontWeight: "500",
      lineHeight: "10.5px",
    }}>
      <span>{formatarCPFOuDataNascimento({ value: cpf})}</span>
      <span>{identificacaoCondicao}</span>
    </div>
  );
}
