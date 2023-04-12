import React, { useState } from "react";
import { IFrame } from "../IFrame/IFrame";
import cx from "classnames";
import style from "./PanelSelector.module.css";

const PanelSelector = (props) => {
  const initialPanel = (typeof(props?.panel)!='undefined') ? props.panel : 0
  const initialTitle = (typeof(props?.initialTitle)!='undefined') ? props.initialTitle : 0
  const [activeTabIndex, setActiveTabIndex] = useState(initialPanel);
  const [activeTitleTabIndex, setActiveTitleTabIndex] = useState(initialTitle);
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

const PanelSelectorSM = (props) => {
  return (
    <div style={{zIndex:90,position:'relative',width:'100%'}}>
      <div className={style.PanelSelectorMain}>
        <div className={style.PanelSelectorTitles}>
          {props.titles.map((title, index) => (
            <div
              onClick={() => {
                props.states.setActiveTitleTabIndex(index);
              }}
              key={index}
              className={
                props.states.activeTitleTabIndex === index
                  ? style.PanelSelectorTitleButtonSelected
                  : style.PanelSelectorTitleButton
              }
            >
              {title.label}
            </div>
          ))}
        </div>

        <div className={cx(style.PanelSelectorContainer,style["PanelSelectorContainerPosition"+props.states.activeTitleTabIndex.toString()])}>
          {props.subtitles[props.states.activeTitleTabIndex].map((subtitle, index) => (
            <div
              onClick={() => {
                props.states.setActiveTabIndex(index);
              }}
              key={index}
              className={
                props.states.activeTabIndex === index
                  ? style.PanelSelectorButtonSelected
                  : style.PanelSelectorButton
              }
            >
              {subtitle.label}
            </div>
          ))}
        </div>
      </div>

      <div className={style.PanelSelectorComponents}>
        {props.components[props.states.activeTitleTabIndex][props.states.activeTabIndex]}
      </div>
    </div>
  );
};

export { PanelSelector, PanelSelectorSM };
