import React from 'react';
import propTypes from 'prop-types';

import './CalculatorDisplay.css';

const CalculatorDisplay = (props) => {
  const { display } = props;
  const { next, total, operation } = display;
  return (
    <div className='display'>
      <h1>
        <span>{total}</span>
        <span>{operation}</span>
        <span>{next}</span>
      </h1>
    </div>
  );
};

export default CalculatorDisplay;

CalculatorDisplay.propTypes = {
  display: propTypes.oneOfType([propTypes.object]).isRequired,
};
