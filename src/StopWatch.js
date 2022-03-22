import { Button } from "antd";
import React, { useEffect, useState } from "react";

import "../src/stopWatch.css";
function StopWatch() {
  const [stop, setStop] = useState(false);
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (timer > 0 && !stop) {
        setTimer(timer - 1);
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  const stopTimer = () => {
    setStop(!stop);
    if (timer === 0) {
      setTimer(60);
    }
  };
  return (
    <div className="main_stopWatch">
      <div className="p_stopWatch">
        <b>stopWatch</b>
      </div>
      <input
        className="input_text"
        onChange={(e) => {
          setTimer(e.target.value !== "" ? e.target.value : 60);
        }}
      />
      <div>
        <Button
          className="btn_stopTimer"
          onClick={() => {
            stopTimer();
          }}
        >
          stop
        </Button>
        <div className="timerText">{timer}</div>
      </div>
    </div>
  );
}

export default StopWatch;
