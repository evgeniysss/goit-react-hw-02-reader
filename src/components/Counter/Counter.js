import React from 'react';
import T from 'prop-types';
import counterStyle from './Counter.module.css';

const Counter = ({ activeIndex, maxIndex }) => {
  return (
    <>
      <p className={counterStyle.counter}>
        {activeIndex}/{maxIndex}
      </p>
    </>
  );
};

export default Counter;

Counter.propTypes = {
  activeIndex: T.number.isRequired,
  maxIndex: T.number.isRequired,
};
