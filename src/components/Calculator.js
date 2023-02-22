import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';

function Calculator() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (event) => {
    setState(calculate(state, event.target.textContent));
  };
  return (
    <section className="calculator">
      <div className="container">
        <input
          className="input"
          type="text"
          value={state.next || state.total || '0'}
        />
        <button type="button" className="button" onClick={handleClick}>
          AC
        </button>
        <button type="button" className="button" onClick={handleClick}>
          +/-
        </button>
        <button type="button" className="button" onClick={handleClick}>
          %
        </button>
        <button type="button" className="button operator" onClick={handleClick}>
          ÷
        </button>
        <button type="button" className="button number" onClick={handleClick}>
          7
        </button>
        <button type="button" className="button number" onClick={handleClick}>
          8
        </button>
        <button type="button" className="button number" onClick={handleClick}>
          9
        </button>
        <button type="button" className="button operator" onClick={handleClick}>
          x
        </button>
        <button type="button" className="button number" onClick={handleClick}>
          4
        </button>
        <button type="button" className="button number" onClick={handleClick}>
          5
        </button>
        <button type="button" className="button number" onClick={handleClick}>
          6
        </button>
        <button type="button" className="button operator" onClick={handleClick}>
          -
        </button>
        <button type="button" className="button number" onClick={handleClick}>
          1
        </button>
        <button type="button" className="button number" onClick={handleClick}>
          2
        </button>
        <button type="button" className="button number" onClick={handleClick}>
          3
        </button>
        <button type="button" className="button operator" onClick={handleClick}>
          +
        </button>
        <button type="button" className="button zero" onClick={handleClick}>
          0
        </button>
        <button type="button" className="button number" onClick={handleClick}>
          .
        </button>
        <button type="button" className="button operator" onClick={handleClick}>
          =
        </button>
      </div>
    </section>
  );
}

export default Calculator;
