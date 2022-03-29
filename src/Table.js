import React, { useState } from "react";
import { Button, Card, Form, Modal, Table } from "react-bootstrap";
import { toast } from "react-toastify";

import "../src/TableCom.css";
function TableCom() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [fsStundent, setFsStudent] = useState([]);
  const [validated, setValidated] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setValidated(false);
    setShow(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target),
      Obj = Object.fromEntries(formData.entries());
    setValidated(true);
    if (
      Obj.studentName !== "" &&
      Obj.gujarati !== "" &&
      Obj.english !== "" &&
      Obj.hindi !== "" &&
      Obj.maths !== "" &&
      Obj.account !== "" &&
      Obj.science !== "" &&
      Obj.gujarati >= 1 &&
      Obj.gujarati <= 100 &&
      Obj.english >= 1 &&
      Obj.english <= 100 &&
      Obj.hindi >= 1 &&
      Obj.hindi <= 100 &&
      Obj.maths >= 1 &&
      Obj.maths <= 100 &&
      Obj.account >= 1 &&
      Obj.account <= 100 &&
      Obj.science >= 1 &&
      Obj.science <= 100
    ) {
      setShow(false);

      let result =
        parseInt(Obj.gujarati) +
        parseInt(Obj.english) +
        parseInt(Obj.hindi) +
        parseInt(Obj.maths) +
        parseInt(Obj.account) +
        parseInt(Obj.science);
      Obj.total = result;
      Obj.number = data.length + 1;
      let percentage = (result / 600) * 100;
      Obj.percentage = percentage.toFixed(2);

      setValidated(true);
      var arr = data;
      if (arr.length === 0) {
        setData([...data, Obj]);
      } else {
        for (let i = 0; i <= arr.length; i++) {
          if (arr[i]?.studentName === Obj?.studentName) {
            toast.error("user already exisiting");
            setShow(true);
            return arr;
          } else {
            setData([...data, Obj]);
          }
        }
      }
    } else {
      setShow(true);
      toast.error("please check value between 1 to 100");
    }

    setValidated(true);
  };

  let array = data;
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i].percentage > max.percentage) {
      max = array[i];
      console.log("maxmaxmax", max);
    }
  }
  console.log("max", max);
  return (
    <div className="Table_main">
      <Button className="add_button" onClick={handleShow}>
        +Add
      </Button>
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Student Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="studentName"
                  placeholder="Student Name"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Gujarati</Form.Label>
                <Form.Control
                  required
                  // min={1}
                  // max={100}
                  type="number"
                  name="gujarati"
                  placeholder="Obtain Mark"
                  autoFocus
                  // length={3}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>English</Form.Label>
                <Form.Control
                  required
                  type="number"
                  name="english"
                  placeholder="Obtain Mark"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Hindi</Form.Label>
                <Form.Control
                  required
                  type="number"
                  name="hindi"
                  placeholder="Obtain Mark"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Maths</Form.Label>
                <Form.Control
                  required
                  type="number"
                  name="maths"
                  placeholder="Obtain Mark"
                  autoFocus
                />
                <Form.Control.Feedback type="invalid" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Account</Form.Label>
                <Form.Control
                  required
                  type="number"
                  name="account"
                  placeholder="Obtain Mark"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Science</Form.Label>
                <Form.Control
                  required
                  type="number"
                  name="science"
                  placeholder="Obtain Mark"
                  autoFocus
                />
              </Form.Group>
              <Button variant="primary" type="sumbit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
      <Table responsive>
        <thead>
          <tr>
            <th>no.</th>
            <th>Student Name</th>
            <th>Gujarati</th>
            <th>English</th>
            <th>Hindi</th>
            <th>Math</th>
            <th>Account </th>
            <th>Science </th>
            <th>Total </th>
            <th>Percentage </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => {
            console.log(
              "con",
              item.english < 32,
              item.english >= 33 && item.english <= 35
            );
            return (
              <tr key={index}>
                <th>{item.number}</th>
                <th>{item.studentName}</th>
                <th
                  className={
                    item.gujarati < 33
                      ? "Red_Alert"
                      : item.gujarati >= 33 && item.gujarati <= 35
                      ? "Yellow_Color"
                      : ""
                  }
                >
                  {item.gujarati}
                </th>
                <th
                  className={
                    item.english < 33
                      ? "Red_Alert"
                      : item.english >= 33 && item.english <= 35
                      ? "Yellow_Color"
                      : ""
                  }
                >
                  {item.english}
                </th>
                <th
                  className={
                    item.hindi < 33
                      ? "Red_Alert"
                      : item.hindi >= 33 && item.hindi <= 35
                      ? "Yellow_Color"
                      : ""
                  }
                >
                  {item.hindi}
                </th>
                <th
                  className={
                    item.maths < 33
                      ? "Red_Alert"
                      : item.maths >= 33 && item.maths <= 35
                      ? "Yellow_Color"
                      : ""
                  }
                >
                  {item.maths}
                </th>
                <th
                  className={
                    item.account < 33
                      ? "Red_Alert"
                      : item.account >= 33 && item.account <= 35
                      ? "Yellow_Color"
                      : ""
                  }
                >
                  {item.account}
                </th>
                <th
                  className={
                    item.science < 33
                      ? "Red_Alert"
                      : item.science >= 33 && item.science <= 35
                      ? "Yellow_Color"
                      : ""
                  }
                >
                  {item.science}
                </th>
                <th
                  className={
                    item.total < 198
                      ? "Red_Alert"
                      : item.total >= 199 && item.total <= 210
                      ? "Yellow_Color"
                      : ""
                  }
                >
                  {item.total}/600
                </th>
                <th
                  className={
                    item.percentage < 33
                      ? "Red_Alert"
                      : item.percentage >= 33 && item.percentage <= 35
                      ? "Yellow_Color"
                      : ""
                  }
                >
                  {item.percentage}
                </th>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{max?.percentage}</Card.Title>
          {/* <Card.Text>First Number Is : {max?.studentName}</Card.Text> */}
        </Card.Body>
      </Card>
    </div>
  );
}

export default TableCom;
