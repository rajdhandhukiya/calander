import React, { useState } from "react";
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
    // var arr = num3;
    //     for (let index = 0; index <= arr; index++) {
    //         document.write(index+"<br>")
    //       }

    // var index = 0
    //   while(index<= num3){
    //     document.write(index + "<br>")
    //     index++
    //   }

    // do{
    //   document.write(index + "<br>")
    //   index++
    // }while(index<= num3)
    // return  0
  };
  return (
    <div>
      <div className="App">
        <div>
          <input
            type="number"
            onChange={(e) => {
              setNum1(e.target.value);
            }}
          />
          <input
            type="number"
            onChange={(e) => {
              setNum2(e.target.value);
            }}
          />
          <p>=</p>
          <div className="result">{num3}</div>
        </div>
        <div>
          <button className="btn btn-primary mx-3"
            onClick={() => {
              handleClick("+");
            }}
          >
            +
          </button>
          <button className="btn btn-primary mx-3"
            onClick={() => {
              handleClick("-");
            }}
          >
            -
          </button>
          <button className="btn btn-primary mx-3"
            onClick={() => {
              handleClick("*");
            }}
          >
            *
          </button>
          <button className="btn btn-primary mx-3"
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
