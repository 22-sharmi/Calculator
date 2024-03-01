import React, { useState } from 'react';
// import './Calculator.css';
import './Calcy.css';

const Calculator = () => {
  const [screen, setScreen] = useState('');
  const [history, setHistory] = useState('');
  const [currentText, setCurrentText] = useState('');

  const handleButtonClick = (value) => {
    if (value === 'C') {
      clearAll();
    } else if (value === 'DEL') {
      deleteLastChar();
    } else if (value === '=') {
      evaluateExpression();
    } else {
      appendToScreen(value);
    }
  };

  const clearAll = () => {
    setScreen('');
    setHistory('');
    setCurrentText('');
  };

  const deleteLastChar = () => {
    setScreen(currentText.slice(0, -1));
    setCurrentText(currentText.slice(0, -1));
  };

  const appendToScreen = (value) => {
    setScreen(screen + value);
    setCurrentText(currentText + value);
  };

  const evaluateExpression = () => {
    try {
      let expression = screen;
      let result = eval(expression);
      result = parseFloat(result.toFixed(5));
      setHistory(expression + '=' + result);
      setScreen(result);
    } catch (error) {
      setScreen('Error');
    }
  };

  return (
    <div className='calculator'>
    <div className="container">
      <div className="screen_wrap">
        <div className="screen_container">
          <div className="history">{history}</div>
          <div className="screen">{screen}</div>
        </div>
      </div>
      <div className="btn_wrap">
        <button className="btn" onClick={() => handleButtonClick('C')}>
          C
        </button>
        <button className="btn" onClick={() => handleButtonClick('DEL')}>
          DEL
        </button>
        <button className="btn" onClick={() => handleButtonClick('%')}>
          %
        </button>
        <button className="btn" onClick={() => handleButtonClick('/')}>
          /
        </button>
        <button className="btn" onClick={() => handleButtonClick('7')}>
          7
        </button>
        <button className="btn" onClick={() => handleButtonClick('8')}>
          8
        </button>
        <button className="btn" onClick={() => handleButtonClick('9')}>
          9
        </button>
        <button className="btn" onClick={() => handleButtonClick('*')}>
          *
        </button>
        <button className="btn" onClick={() => handleButtonClick('4')}>
          4
        </button>
        <button className="btn" onClick={() => handleButtonClick('5')}>
          5
        </button>
        <button className="btn" onClick={() => handleButtonClick('6')}>
          6
        </button>
        <button className="btn" onClick={() => handleButtonClick('-')}>
          -
        </button>
        <button className="btn" onClick={() => handleButtonClick('1')}>
          1
        </button>
        <button className="btn" onClick={() => handleButtonClick('2')}>
          2
        </button>
        <button className="btn" onClick={() => handleButtonClick('3')}>
          3
        </button>
        <button className="btn" onClick={() => handleButtonClick('+')}>
          +
        </button>
        <button className="btn" onClick={() => handleButtonClick('.')}>
          .
        </button>
        <button className="btn" onClick={() => handleButtonClick('0')}>
          0 
          </button>
        <button className="btn" onClick={() => handleButtonClick('=')}>
          =
          </button>
        </div>
        </div>
        </div>
  )
}
export default Calculator;