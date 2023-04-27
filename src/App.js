import { useState } from 'react';
import Display from './components/Display';
import Calculator from './components/Calculator';

import './App.css';

function App() {
  const [calculatorDisplay, setCalculatorDisplay] = useState({
    next: 0,
    total: null,
    operation: null,
  });

  const displayHandler = (symbol) => {
    setCalculatorDisplay(symbol);
    // console.log(symbol);
  };

  return (
    <div className='App'>
      <Display display={calculatorDisplay} />
      <Calculator onButtonClick={displayHandler} />
    </div>
  );
}

export default App;
