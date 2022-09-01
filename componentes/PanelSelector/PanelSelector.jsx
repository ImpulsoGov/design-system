import React, { useState } from "react";
import { IFrame } from "../IFrame/IFrame";
import style from "./PanelSelector.module.css";

const PanelSelector = (props) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [iframeLink, setInframeLink] = useState(props.list[0].link);

  console.log(iframeLink);

  return (
    <>
      <div className={style.PanelSelectorMain}>
        <p>{props.title}</p>
        <div className={style.PanelSelectorContainer}>
          {props.list.map((item, index) => (
            <buton
              onClick={() => {
                setActiveTabIndex(index);
                setInframeLink(item.link);
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
      <IFrame link={iframeLink} />
    </>
  );
};

export { PanelSelector };
