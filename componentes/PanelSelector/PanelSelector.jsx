import React, { useState } from "react";
import { IFrame } from "../IFrame/IFrame";
import cx from "classnames";
import style from "./PanelSelector.module.css";

const PanelSelector = (props) => {
  const initialPanel = (typeof(props?.panel)!=undefined) ? props.panel : 0
  const [activeTabIndex, setActiveTabIndex] = useState(initialPanel);
  const [activeTitleTabIndex, setActiveTitleTabIndex] = useState(0);
  return (
    <div style={{zIndex:90,position:'relative',width:'100%'}}>
      <div className={style.PanelSelectorMain}>
        <div className={style.PanelSelectorTitles}>
          {props.titles.map((item, index) => (
            <div
              onClick={() => {
                setActiveTitleTabIndex(index);
              }}
              key={index}
              className={
                activeTitleTabIndex === index
                  ? style.PanelSelectorTitleButtonSelected
                  : style.PanelSelectorTitleButton
              }
            >
              {item.label}
            </div>
          ))}
        </div>

        <div className={cx(style.PanelSelectorContainer,style["PanelSelectorContainerPosition"+activeTitleTabIndex.toString()])}>
          {props.list[activeTitleTabIndex].map((item, index) => (
            
            <div
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
            </div>
          ))}
        </div>
      </div>
      <IFrame link={props.links[activeTitleTabIndex][activeTabIndex]} height="3650"/>
    </div>
  );
};

export { PanelSelector };
