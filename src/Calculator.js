import React, { useState } from "react";
import "./App.css";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "=") {
      if (!input) {
        setResult("Error");
        return;
      }

      try {
        // eslint-disable-next-line no-eval
        const evalResult = eval(input);
        setResult(String(evalResult));
      } catch (err) {
        setResult("Error");
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    "7", "8", "9", "+" ,
    "4", "5", "6", "-",
    "1", "2", "3","*",
    "C", "0", "=","/"
  ];

  return (
    <div className="calculator">
        <h1>React Calculator</h1>
      <input type="text" className="input" value={input} readOnly />
      <div className="result">{result}</div>
      <div className="buttons">
        {buttons.map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
    
      </div>
      
    </div>
  );
}

export default Calculator;
