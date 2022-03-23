import React, { useState } from "react";
import { Table } from "react-bootstrap";

import edit from "../src/Edit.svg";
import removal2 from "../src/removal2.svg";

import "react-calendar/dist/Calendar.css";
import "../src/form.css";
function FormComponent() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [image, setImage] = useState();
  const [password, setPassword] = useState();
  const [bdate, setBdate] = useState();
  const [saveImage, setSaveImage] = useState({});
  const [data, setData] = useState([]);
  const [dataIndex, setDataIndex] = useState();
  const [isButton, setIsButton] = useState(true);
  const inputIsEmpty =
    name === "" || email === "" || password === "" || bdate === ""
      ? true
      : false;

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());
    formDataObj.image = saveImage;
    console.log("saveimage", saveImage);
    console.log(formDataObj);
    if (isButton) setData([...data, formDataObj]);
    else {
      let arr = data;
      for (let i = 0; i < arr.length; i++) {
        console.log(i, dataIndex);
        if (i === dataIndex) {
          arr[i] = formDataObj;
          setDataIndex("");
        }
      }

      setData([...arr]);
      setIsButton(true);
    }
    clear();
  }

  const clear = () => {
    setImage("")
    setName("");
    setEmail("");
    setPassword("");
    setBdate("");
  };

  const handleRemove = (index) => {
    var arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  };

  const handleEdit = (editData, index) => {
    setName(editData.name);
    setEmail(editData.email);
    setPassword(editData.password);
    setBdate(editData.dob);
    setIsButton(false);
    setDataIndex(index);
  };

  const handleChange = (event) => {
    setSaveImage(event.target.files[0]);
    setImage(URL.createObjectURL(event.target.files[0]));
  };
  console.log("data", data);
  return (
    <div>
      <div className="Form_Main">
        <form onSubmit={handleSubmit}>
          <div className="mb-3 image_div">
            <input
              type="file"
              accept="image/jpeg,image/png"
              className="form-control image_Upload"
              name="image"
              onChange={(event) => {
                console.log("file", event.target.files[0]);
                handleChange(event);
              }}
            />
            <img className="image_set" src={image} />
          </div>

          <div className="mb-3">
            <label for="exampleInputName1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label for="exampleInputDateOfBirth1" className="form-label">
              Date Of Birth
            </label>
            <input
              type="text"
              className="form-control"
              name="dob"
              value={bdate}
              onChange={(e) => setBdate(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={inputIsEmpty}
          >
            {isButton ? "submit" : "update"}
          </button>
        </form>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>image</th>
            <th>name</th>
            <th>email</th>
            <th>password</th>
            <th>DOB</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => {
            return (
              <tr key={item.id}>
                <td><img className="image_set2" src={URL.createObjectURL(item.image)} alt="demo" /></td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>{item.dob}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      handleEdit(item, index);
                    }}
                  >
                    <img src={edit} alt="edit" className="edit_main" />
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleRemove(index)}
                  >
                    <img src={removal2} alt="removal" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default FormComponent;
