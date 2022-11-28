import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  const increment = () => {
    validateInput();
    let counter = count + parseInt(inputValue);
    setCount(counter);
  };

  const decrement = () => {
    validateInput();
    let counter = count - parseInt(inputValue);
    setCount(counter);
  };

  const reset = () => {
    setCount(0);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // to check
  function validateInput() {
    const regExp = new RegExp('^\\d+$');
    let isValid = regExp.test(inputValue);
    if (!isValid) {
      setInputValue(1);
    }
  }

  return (
    <div className="container">
      <h1>Counter</h1>

      <div className="counterValue"> {count} </div>
      <div>
        <button onClick={decrement} id="decrement" className="btn btn-primary">
          -
        </button>
        {'  '}
        <button onClick={increment} id="increment" className="btn btn-primary">
          +
        </button>
      </div>

      <div className="change">
        <label> Increment/Decrement by:</label>{' '}
        <input
          className="input"
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          min="1"
          max="100"
        />
      </div>

      <div className="reset">
        <button onClick={reset} className="btn btn-primary">
          Reset
        </button>
      </div>
    </div>
  );
}
