import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="caclContainer">
        <div className="theCalculator">
          <input className="editable" value={0} />
          <div className="inputValues">
            <div className="row1">
              <button type="button" className="AC"> AC</button>
              <button type="button" className="plusNminus">+/-</button>
              <button type="button" className="percentage">%</button>
              <button type="button" className="division  arithmetic">/</button>
            </div>
            <div className="row2">
              <button type="button" className="seven">7</button>
              <button type="button" className="eight">8</button>
              <button type="button" className="nine">9</button>
              <button type="button" className="multiply  arithmetic">X</button>
            </div>
            <div className="row3">
              <button type="button" className="four">4</button>
              <button type="button" className="five">5</button>
              <button type="button" className="six">6</button>
              <button type="button" className="minus  arithmetic">-</button>
            </div>
            <div className="row4">
              <button type="button" className="one">1</button>
              <button type="button" className="two">2</button>
              <button type="button" className="three">3</button>
              <button type="button" className="plus  arithmetic">+</button>
            </div>
            <div className="row5">
              <button type="button" className="zero">0</button>
              <button type="button" className="dot">.</button>
              <button type="button" className="equals  arithmetic">=</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Calculator;
