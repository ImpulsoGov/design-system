import React from "react";
import { useState } from "react";
import styles from "./ToggleListElementBlock.module.css";

const ToggleListElementBlock = (props) => {

  const [detailsIsVisible, setDetailIsVisible] = useState(true)

  return (
    <div className={styles.ToggleListElementBlock} key={index}>
      <p>{props.title} <button className={detailsIsVisible ? styles.ToggleListButton : styles.ToggleListButtonRotated} onClick={() => setDetailIsVisible(!detailsIsVisible)}>^</button></p>

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