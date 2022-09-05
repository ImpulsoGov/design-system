import React, { useState } from "react";
import { IFrame } from "../IFrame/IFrame";
import style from "./PanelSelector.module.css";

const PanelSelector = (props) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  return (
    <>
      <div className={style.PanelSelectorMain}>
        <p>{props.title}</p>
        <div className={style.PanelSelectorContainer}>
          {props.list.map((item, index) => (
            <buton
              onClick={() => {
                setActiveTabIndex(index);
              }}
              key={index}
              className={
                activeTabIndex === index
                  ? style.PanelSelectorButtonSelected
                  : style.PanelSelectorButton
              }
            >
              {item.label}
            </buton>
          ))}
        </div>
      </div>
      <IFrame link={props.links[activeTabIndex]} height="3650"/>
    </>
  );
};

export { PanelSelector };
