import React from "react";
import { useState } from "react";
import styles from "./ToggleListElementBlock.module.css";

const ToggleListElementBlock = (props) => {

  const [detailsIsVisible, setDetailIsVisible] = useState(true)

  return (
    <div className={styles.ToggleListElementBlock}>
      <p>{props.title} 
        <button 
          className={detailsIsVisible ? styles.ToggleListButton : styles.ToggleListButtonRotated} 
          onClick={() => setDetailIsVisible(!detailsIsVisible)}
        >
          <img src={props.imgLink} alt="ícone do botão" />
        </button></p>

      {
        detailsIsVisible && (
          <>
            <strong>{props.subTitle}</strong>
            <p>{props.description}</p>
            <p>{props.source}</p>
          </>
        )

      }

    </div>
  )
}

export { ToggleListElementBlock }