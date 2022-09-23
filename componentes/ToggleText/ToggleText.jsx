import React from "react"
import styles from "./ToggleText.module.css"

const ToggleText = ({text})=> {
  return(
    <div className={styles.ToggleTextContainer}>
      <p>
        {text}
      </p>
    </div>
  )
};

export {ToggleText}