import React, { useState } from 'react';
// import propTypes from 'prop-types';
import calculate from '../logic/calculate';
import CalculatorDisplay from './CalculatorDisplay';

import './Calculator.css';

const symbolArray = [
  { id: 1, type: 'AC' },
  { id: 2, type: '+/-' },
  { id: 3, type: '%' },
  { id: 4, type: '÷' },
  { id: 5, type: '7' },
  { id: 6, type: '8' },
  { id: 7, type: '9' },
  { id: 8, type: 'x' },
  { id: 9, type: '4' },
  { id: 10, type: '5' },
  { id: 11, type: '6' },
  { id: 12, type: '-' },
  { id: 13, type: '1' },
  { id: 14, type: '2' },
  { id: 15, type: '3' },
  { id: 16, type: '+' },
  { id: 17, type: '0' },
  { id: 18, type: '.' },
  { id: 19, type: '=' },
];

const Calculator = () => {
  const [result, setResult] = useState({
    total: null,
    next: 0,
    operation: null,
  });

  const onButtonclickHandler = (symbol) => {
    const buttonName = symbol.type;
    const calculateResult = calculate(result, buttonName);
    setResult(calculateResult);
  };

  return (
    <div className='calculator'>
      <CalculatorDisplay display={result} />
      <div className='calculator-box'>
        {symbolArray.map((symbol, i) => (
          <button
            type='submit'
            className={
              i === 16
                ? 'large-buttons'
                : i === 3 || i === 7 || i === 11 || i === 15 || i === 18
                ? 'last-buttons'
                : 'other-buttons'
            }
            key={symbol.id}
            onClick={onButtonclickHandler.bind('null', symbol)}
          >
            {symbol.type}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;

// Calculator.propTypes = {
//   onButtonClick: propTypes.func.isRequired,
// };
