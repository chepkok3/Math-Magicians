import './Calculator.css';

function Calculator() {
  const buttons = [
    'AC',
    '+/-',
    '%',
    '/',
    7,
    8,
    9,
    'x',
    4,
    5,
    6,
    '-',
    1,
    2,
    3,
    '+',
    0,
    '.',
    '=',
  ];

  const renderButton = (button) => (
    <button key={button} type="button">
      {button}
    </button>
  );

  return (
    <section className="calculator">
      <input type="text" value="0" disabled id="close" />
      <section className="input">
        <article className="digits">{buttons.map(renderButton)}</article>
      </section>
    </section>
  );
}

export default Calculator;
