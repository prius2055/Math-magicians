import React from 'react';

import './CalculatorTable.css';

const CalculatorTable = () => (
  <table>
    <tr className='first-row'>
      <td colSpan='4'>0</td>
    </tr>
    <tr className='other-rows'>
      <td>AC</td>
      <td>+/-</td>
      <td>%</td>
      <td className='last-data'>÷</td>
    </tr>
    <tr className='other-rows'>
      <td>7</td>
      <td>8</td>
      <td>9</td>
      <td className='last-data'>x</td>
    </tr>
    <tr className='other-rows'>
      <td>4</td>
      <td>5</td>
      <td>6</td>
      <td className='last-data'>-</td>
    </tr>
    <tr className='other-rows'>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td className='last-data'>+</td>
    </tr>
    <tr className='other-rows'>
      <td colSpan='2'>0</td>
      <td>.</td>
      <td className='last-data'>=</td>
    </tr>
  </table>
);

export default CalculatorTable;
