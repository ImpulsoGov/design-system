import React, { useState } from "react";
import styles from "./ToggleText.module.css";

const ToggleText = ({ title, list, leftSubtitle, rightSubtitle, imgLink }) => {
  const [detailsIsVisible, setDetailIsVisible] = useState(true);

  return (
    <div className={styles.ToggleTextContainer}>
      <p>
        {title}
      </p>
      <div className={styles.ToggleTextListContainer}>
        <p>{leftSubtitle}</p>
        <div className={styles.ToggleTextRightBlock}>
          <p>
            {rightSubtitle}
            <button
              className={detailsIsVisible ? styles.ToggleTextButton : styles.ToggleTextButtonRotated}
              onClick={() => setDetailIsVisible(!detailsIsVisible)}
            >
              <img src={imgLink} alt="ícone do botão" />
            </button>
          </p>
          {
            detailsIsVisible && (
              <div className={styles.ToggleTextListBlock}>
                {
                  list.map((elemnt, index) => (
                    <div className={styles.ToggleTextElement} key={index}>
                      <span>{elemnt.initials}</span>
                      <span>{elemnt.label}</span>
                    </div>
                  ))
                }
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
};

export { ToggleText }