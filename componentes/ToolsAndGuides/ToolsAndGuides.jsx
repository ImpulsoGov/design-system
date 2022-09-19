import React from "react";
import styles from "./ToolsAndGuides.module.css";

const ToolsAndGuides = (props) => {
  return (
    <div className={styles.ToolsAndGuidesContainer}>
      <p className={styles.ToolsAndGuidesTitle}>{props.leftTitle}</p>

      <div className={styles.ToolsAndGuidesBlock}>
        <p className={styles.ToolsAndGuidesTitle}>{props.rightTitle}</p>
        <p className={styles.ToolsAndGuidesContent}>{props.rightContent}</p>
        <p className={styles.ToolsAndGuidesContent}>
          <button onClick={props.onClick}>➔</button> {props.buttonTitle}
        </p>
      </div>
    </div>
  );
};

export { ToolsAndGuides };
