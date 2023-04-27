import React from 'react';
import propTypes from 'prop-types';

import './Display.css';

const Display = (props) => {
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

export default Display;

Display.propTypes = {
  display: propTypes.func.isRequired,
};
