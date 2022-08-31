import React, { useState } from "react";
import style from "./PanelSelector.module.css";

const PanelSelector = ({ list }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className={style.PanelSelectorContainer}>
      {list.map((item, index) => (
        <buton
          onClick={() => setActiveTabIndex(index)}
          key={index}
          className={
            activeTabIndex === index
              ? style.PanelSelectorButtonSelected
              : style.PanelSelectorButton
          }
        >
          {item}
        </buton>
      ))}
    </div>
  );
};

export { PanelSelector };
