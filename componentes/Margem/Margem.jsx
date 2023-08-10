import React from 'react';
import styles from './Margem.module.css';

const Margem = ({ componente }) => {
  return (
    <div className={ styles.Margem }>
      {componente}
    </div>
  )
}

export { Margem };
