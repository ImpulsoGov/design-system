import React from "react";
import PropTypes from "prop-types";
import styles from "./Grid12Col.module.css";

const PROPORCOES_ACEITAS = ["6-6", "5-7", "7-5", "4-8", "3-9", "4-4-4", "2-5-5", "3-3-3-3", "2-2-4-4"];

const Grid12Col = ({ items, proporcao }) => {
  return (
    <div className={styles.GridContainer}>
      {items.map((item) => (
        <div className={styles[`GridItem${
          PROPORCOES_ACEITAS.includes(proporcao)
            ? proporcao
            : "6-6"
        }`]}>
          {item}
        </div>
      ))}
    </div>
  )
}

Grid12Col.defaultProps = {
  proporcao: "6-6"
}

Grid12Col.propTypes = {
  proporcao: PropTypes.string
}

export { Grid12Col }
