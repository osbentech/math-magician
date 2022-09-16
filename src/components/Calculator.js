import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const initialData = {};
  const [calculatorData, calcMethod] = useState(initialData);
  const clickHandler = (e) => {
    console.log(e.target.innerText);
    calcMethod((calculatorData) => calculate(calculatorData, e.target.innerText));
  };
  const { next, total } = calculatorData;
  return (
    <div className="caclContainer">
      <div className="theCalculator">
        <input className="editable" value={next || total || 0} />
        <div className="inputValues">
          <div className="row1">
            <button type="button" onClick={clickHandler} className="AC"> AC</button>
            <button type="button" onClick={clickHandler} className="plusNminus">+/-</button>
            <button type="button" onClick={clickHandler} className="percentage">%</button>
            <button type="button" onClick={clickHandler} className="division  arithmetic">÷</button>
          </div>
          <div className="row2">
            <button type="button" onClick={clickHandler} className="seven">7</button>
            <button type="button" onClick={clickHandler} className="eight">8</button>
            <button type="button" onClick={clickHandler} className="nine">9</button>
            <button type="button" onClick={clickHandler} className="multiply  arithmetic">x</button>
          </div>
          <div className="row3">
            <button type="button" onClick={clickHandler} className="four">4</button>
            <button type="button" onClick={clickHandler} className="five">5</button>
            <button type="button" onClick={clickHandler} className="six">6</button>
            <button type="button" onClick={clickHandler} className="minus  arithmetic">-</button>
          </div>
          <div className="row4">
            <button type="button" onClick={clickHandler} className="one">1</button>
            <button type="button" onClick={clickHandler} className="two">2</button>
            <button type="button" onClick={clickHandler} className="three">3</button>
            <button type="button" onClick={clickHandler} className="plus  arithmetic">+</button>
          </div>
          <div className="row5">
            <button type="button" onClick={clickHandler} className="zero">0</button>
            <button type="button" onClick={clickHandler} className="dot">.</button>
            <button type="button" onClick={clickHandler} className="equals  arithmetic">=</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Calculator;
