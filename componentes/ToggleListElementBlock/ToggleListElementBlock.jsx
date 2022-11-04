import React from "react";
import { useState } from "react";
import styles from "./ToggleListElementBlock.module.css";

const ToggleListElementBlock = (props) => {

  const [detailsIsVisible, setDetailIsVisible] = useState(false)

  return (
    <div className={styles.ToggleListElementBlock}>
      <p>{props.title}
        <button
          className={detailsIsVisible ? styles.ToggleListButton : styles.ToggleListButtonRotated}
          onClick={() => setDetailIsVisible(!detailsIsVisible)}
        >
          <img src={props.imgLink} alt="ícone do botão" />
        </button>
      </p>

      {
        detailsIsVisible && (
          <>
            {
              props.blocks.map((block,index)=>{
                return(
                  <div key={index}>
                    <strong>{block.subTitle}</strong>
                    <p>{block.description}</p>
                    <p>{block.source}</p>
                  </div>
                )
              })
            }
          </>
        )

      }

    </div>
  )
}

export { ToggleListElementBlock }