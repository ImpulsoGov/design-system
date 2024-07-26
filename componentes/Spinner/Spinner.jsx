import CircularProgress from '@mui/material/CircularProgress';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './Spinner.module.css';

const Spinner = ({ theme = 'ColorIP', height = 'fit-content' }) => {
  return (
    <div
      className={ cx(styles.SpinnerContainer, styles[`Theme${theme}`]) }
      style={ { height } }
    >
      <CircularProgress
        color='inherit'
        size={ 70 }
      />
    </div>
  );
};

Spinner.propTypes = {
  theme: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export { Spinner };
