import React from "react";
import styles from "./ToggleList.module.css";
import { ToggleListElementBlock } from "../ToggleListElementBlock/ToggleListElementBlock"

const ToggleList = ({ list }) => {

  return (
    <div className={styles.ToggleListContainer}>
      <div className={styles.ToggleListLeftBlock}>
        <p>Indicadores</p>
      </div>

      <div className={styles.ToggleListRightBlock}>
        {
          list.map((item, index) => {
            return (
              <ToggleListElementBlock 
                key={index} 
                title={item.title} 
                subTitle={item.subTitle} 
                description={item.description} 
                source={item.source} 
                imgLink={"https://media.graphassets.com/WRihknmuQGKEPw9xmMOy"}
              />
            )
          })
        }

      </div>
    </div>
  )
}

export { ToggleList }