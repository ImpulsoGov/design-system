import React from "react";
import { useState } from "react";
import styles from "./ToggleList.module.css";

const ToggleList = ({ list }) => {
  const [detailsIsVisible, setDetailIsVisible] = useState(true)

  return (
    <div className={styles.ToggleListContainer}>
      <div className={styles.ToggleListLeftBlock}>
        <p>Indicadores</p>
      </div>

      <div className={styles.ToggleListRightBlock}>
        {
          list.map((item, index) => (
            <div className={styles.ToggleListElementBlock} key={index}>
              <p>{item.title} <button className={detailsIsVisible ? styles.ToggleListButton : styles.ToggleListButtonRotated} onClick={() => setDetailIsVisible(!detailsIsVisible)}>^</button></p>

              {
                detailsIsVisible && (
                  <>
                    <strong>{item.subTitle}</strong>
                    <p>{item.description}</p>
                    <p>{item.source}</p>
                  </>
                )

              }

            </div>
          ))
        }

      </div>
    </div>

  )
}

export { ToggleList }