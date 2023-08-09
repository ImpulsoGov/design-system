import React, { useState } from "react";
import { IFrame } from "../IFrame/IFrame";
import cx from "classnames";
import style from "./PanelSelector.module.css";

const PanelSelector = ({
  panel,
  initialTitle,
  titles,
  list,
  conteudo,
  links,
  components,
  states
}) => {
  return (
    <div style={{zIndex:90,width:'100%'}}>
      <div className={style.PanelSelectorMain}>
        <div className={style.PanelSelectorTitles}>
          {titles.map((item, index) => (
            <div
              onClick={() => {
                states.setActiveTitleTabIndex(index);
              }}
              key={index}
              className={
                states.activeTitleTabIndex === index
                  ? style.PanelSelectorTitleButtonSelected
                  : style.PanelSelectorTitleButton
              }
            >
              {item.label}
            </div>
          ))}
        </div>

        <div className={cx(style.PanelSelectorContainerIP,style["PanelSelectorContainerPosition"+states.activeTitleTabIndex.toString()])}>
          {list[states.activeTitleTabIndex].map((item, index) => (
            
            <div
              onClick={() => {
                states.setActiveTabIndex(index);
              }}
              key={index}
              className={
                states.activeTabIndex === index
                  ? style.PanelSelectorButtonSelected
                  : style.PanelSelectorButton
              }
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
      {conteudo == "iframe" && <IFrame link={links[states.activeTitleTabIndex][states.activeTabIndex]} height="3650"/>}
      {
        conteudo == "components" &&
        <div className={style.PanelSelectorComponentsIP}>
          {components[states.activeTitleTabIndex][states.activeTabIndex]}
        </div>
      }

    </div>
  );
};

PanelSelector.defaultProps = {
  conteudo: 'iframe'
}


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
