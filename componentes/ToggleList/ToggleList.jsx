import React from "react";
import styles from "./ToggleList.module.css";
import { ToggleListElementBlock } from "../ToggleListElementBlock/ToggleListElementBlock";
import PropTypes from "prop-types";
import cx from "classnames";

const ToggleList = ({ list, title, direction, icon, theme }) => {

  return (
    <div
      className={cx(
        styles.ToggleListContainerBase,
        styles[`ToggleListContainer${direction}`],
        styles[theme]
      )}
    >
      <div
        className={cx(
          styles.ToggleListLeftBlockBase,
          styles[`ToggleListLeftBlock${direction}`]
        )}
      >
        {icon && (
          <img
            className={styles.ToggleListIcon}
            alt="Ícone toggle list"
            src={icon}
          />
        )}
        <h3 className={styles.ToggleListTitle}>{title}</h3>
      </div>

      <div className={styles.ToggleListRightBlock}>
        {
          list.map((item, index) => {
            return (
              <ToggleListElementBlock 
                key={index} 
                title={item.title}
                blocks={item.blocks} 
                imgLink={"https://media.graphassets.com/WRihknmuQGKEPw9xmMOy"}
              />
            )
          })
        }

      </div>
    </div>
  )
}

ToggleList.defaultProps = {
  direction: "Row",
  theme: "Light"
}

ToggleList.propTypes = {
  direction: PropTypes.string,
  theme: PropTypes.string
}

export { ToggleList }
