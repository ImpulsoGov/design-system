import CircularProgress from '@mui/material/CircularProgress';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './Spinner.module.css';

const Spinner = ({ theme }) => {
  return (
    <div className={ cx(
      styles.SpinnerContainer,
      styles[`Theme${theme}`]
    ) }>
      <CircularProgress
        color='inherit'
        size={ 70 }
      />
    </div>
  );
};

Spinner.defaultProps = {
  theme: 'Grey'
};

Spinner.propTypes = {
  theme: PropTypes.string
};

export { Spinner };

