import React from "react";
import style from "./CardAlert.module.css";
import { sanitize } from "../sanitize";

const CardAlert = ({ msg, destaque, backgroundColor }) => {
  const cardStyle = {
    backgroundColor: backgroundColor || "#1F1F1F", 
  };

  return (
    <div className={style.CardAlert} style={cardStyle}>
      <b>{destaque}</b>
      {msg}
    </div>
  );
};

const CardAlertChild = ({ msg, backgroundColor }) => {
  const cardChildStyle = {
    backgroundColor: backgroundColor || "#1F1F1F", 
  };

  return (
    <div
      className={style.CardAlertChild}
      style={cardChildStyle}
      dangerouslySetInnerHTML={{
        __html: sanitize(msg),
      }}
    ></div>
  );
};

export { CardAlert, CardAlertChild };
