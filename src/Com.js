import React, { useState } from "react";

import '../src/Com.css'
function ComHeader() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [num3, setNum3] = useState();

  const handleClick = (e) => {
    switch (e) {
      case "+": {
        setNum3(parseFloat(num1) + parseFloat(num2));
        break;
      }
      case "-": {
        setNum3(parseFloat(num1) - parseFloat(num2));
        break;
      }
      case "*": {
        setNum3(parseFloat(num1) * parseFloat(num2));
        break;
      }
      case "/": {
        setNum3(parseFloat(num1) / parseFloat(num2));
        break;
      }
      default: {
        console.log("nothing");
        break;
      }
    }
  
  };
  return (
    <div>
      <div className="App">
        <div>
          <input
          className="input_First"
            type="number"
            onChange={(e) => {
              setNum1(e.target.value);
            }}
          />
          <input
            type="number"
            className="input_First"
            onChange={(e) => {
              setNum2(e.target.value);
            }}
          />
          <p>=</p>
          <div className="result">{num3?num3:0 }</div>
        </div>
        <div>
          <button className="button_Oparator1 mx-3"
            onClick={() => {
              handleClick("+");
            }}
          >
            +
          </button>
          <button className="button_Oparator2 mx-3"
            onClick={() => {
              handleClick("-");
            }}
          >
            -
          </button>
          <button className="button_Oparator3 mx-3"
            onClick={() => {
              handleClick("*");
            }}
          >
            *
          </button>
          <button className="button_Oparator4 mx-3"
            onClick={() => {
              handleClick("/");
            }}
          >
            /
          </button>
        </div>
      </div>
    </div>
    
  );
}

export default ComHeader;
