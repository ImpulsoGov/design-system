import { formatarDataNascimento } from "../../helpers/formatarCPF"
import React from "react";

export const DatasDoses = ({value})=> {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      fontSize: "8px",
      fontWeight: "500",
      lineHeight: "10.5px",
    }}>
      {value.map((item,index) =>{
        const splitValue = item.split(": ")
        const dose = splitValue[0]
        const data = splitValue[1]
        const dataFormatada = formatarDataNascimento(data)
        return <span key={index}>{`${dose}: ${dataFormatada}`}</span>
      })}
    </div>
  )
}
