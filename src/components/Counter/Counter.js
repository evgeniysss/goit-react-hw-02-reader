import React from 'react';
import PropTypes from 'prop-types';
import styles from './Counter.module.css';

const Counter = ({ activeIndex, maxIndex }) => {
  return (
    <>
      <p className={styles.counter}>
        {activeIndex}/{maxIndex}
      </p>
    </>
  );
};

export default Counter;

Counter.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  maxIndex: PropTypes.number.isRequired,
};
