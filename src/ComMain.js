import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";

import "../src/ComMain.css";

function ComMain() {
  const [select, setSelect] = useState();
  const [forLoop, setForLoop] = useState();
  const [doWhile, setDoWhile] = useState();
  const [whileLoop, setWhileLoop] = useState();

  var result = parseFloat(select);

  const handleFor = () => {
    var arr = [];
    for (let index = 0; index <= result; index++) {
      arr.push(index);
      console.log(arr);
    }
    setForLoop(arr);
  };

  const handleDoWhile = () => {
    var index = 0;
    var arr = [];
    do {
      arr.push(index);
      index++;
    } while (index <= result);
    setDoWhile(arr);
  };

  const handleWhile = () => {
    var index = 0;
    var arr = [];
    while (index <= result) {
      arr.push(index);
      index++;
    }
    setWhileLoop(arr);
  };

  const handleLoop = () => {
    handleFor();
    handleWhile();
    handleDoWhile();
  };
  console.log("////", forLoop);

  var looping = forLoop?.map((item) => <div className="forloop">{item}</div>);
  var whileloop = whileLoop?.map((item) => (
    <div className="forloop">{item}</div>
  ));
  var doWhileloop = doWhile?.map((item) => (
    <div className="forloop">{item}</div>
  ));
  return (
    <div>
      <div>
        <input
          type="number"
          onChange={(e) => {
            setSelect(e.target.value);
          }}
        />
        <Button
          onClick={() => {
            handleLoop();
          }}
        >
          Loop
        </Button>
      </div>

      <div className="table_main">
        <Table >
          <thead>
            <tr>
              <th>For Loop</th>
              <th>While Loop</th>
              <th>DoWhile Loop</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td >{looping}</td>
              <td>{whileloop}</td>
              <td>{doWhileloop}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default ComMain;
