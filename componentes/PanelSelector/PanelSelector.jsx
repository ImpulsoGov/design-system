import React, { useEffect, useState, useRef } from "react";
import { IFrame } from "../IFrame/IFrame";
import cx from "classnames";
import style from "./PanelSelector.module.css";

const PanelSelector = ({
  titles,
  list,
  conteudo,
  links,
  components,
  states,
  breakLines = false,
}) => {
  const [distanciaSubAba,setDistanciaSubAba] = useState(0)
  const titleRefs = titles.map(() => useRef(null));
  useEffect(()=>{
    states.setActiveTabIndex(0)
  },[states.activeTitleTabIndex])
  const PanelSelectorContainerPosition = {
    position : "relative",
    left : `${distanciaSubAba}px`
  }
  useEffect(() => {
    const getDistanceFromLeft = (index) => {
      const divElement = titleRefs[index].current;
      if (divElement && index==states.activeTitleTabIndex) {
        const rect = divElement.getBoundingClientRect();
        setDistanciaSubAba(rect.left + window.scrollX)
      }
    };
    titleRefs.forEach((ref, index) => {
      const currentRef = ref.current;
      if (currentRef) {
        getDistanceFromLeft(index);
        window.addEventListener("resize", () => getDistanceFromLeft(index));
      }
    });
    return () => {
      titleRefs.forEach((ref, index) => {
        if (ref.current) window.removeEventListener("resize", () => getDistanceFromLeft(index));
      });
    };
  }, [titleRefs, states.activeTitleTabIndex]);
  return (
    <div style={{zIndex:90,width:'100%'}}>
      <div className={cx(style.PanelSelectorMain, breakLines && style.PanelSelectorMainLineBreak)}>
        <div className={style.PanelSelectorTitles}>
          {titles.map((item, index) => (
            <div
              onClick={() => {
                states.setActiveTitleTabIndex(index);
              }}
              key={index}
              ref={titleRefs[index]}
              className={cx(
                states.activeTitleTabIndex === index
                  ? style.PanelSelectorTitleButtonSelected
                  : style.PanelSelectorTitleButton,
                breakLines && style.PanelSelectorTitleButtonLineBreak
              )}
            >
              {item.label}
            </div>
          ))}
        </div>

        <div
          className={cx(
            style.PanelSelectorContainerIP,
            breakLines && style.PanelSelectorContainerIPLineBreak
          )}
          style={PanelSelectorContainerPosition}
        >
          {list[states.activeTitleTabIndex].map((item, index) => (
            <div
              onClick={() => {
                states.setActiveTabIndex(index);
              }}
              key={index}
              className={cx(
                states.activeTabIndex === index
                  ? style.PanelSelectorButtonSelected
                  : style.PanelSelectorButton,
                breakLines && style.PanelSelectorButtonLineBreak
            )}
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
