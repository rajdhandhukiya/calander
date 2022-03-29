import { toast } from "react-toastify";
import React, { useState } from "react";
import { Table } from "react-bootstrap";

import edit from "../src/Edit.svg";
import removal2 from "../src/removal2.svg";

import "../src/form.css";
import "react-calendar/dist/Calendar.css";
function FormComponent() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [image, setImage] = useState();
  const [arrObj, setArrObj] = useState([]);
  const [password, setPassword] = useState();
  const [bdate, setBdate] = useState(); 
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
    formDataObj.image = image;
    formDataObj.arrObj = arrObj;
    if (formDataObj.name !== "" || formDataObj.email !== "" || formDataObj.password !== "" || formDataObj.dob !== "") {
      toast.success("form sent successfully");
      if (isButton) setData([...data, formDataObj]);
      else {
        let arr = data;
        for (let i = 0; i < arr.length; i++) {
          if (i === dataIndex) {
            arr[i] = formDataObj;
            setDataIndex("");
          }
        }

        setData([...arr]);
        setIsButton(true);
      }
      clear();
    } else {
      toast.error("Please Fillup From!")
    }
  }

  const clear = () => {
    setArrObj(null);
    setImage(null);
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

  const handleEdit = (editData, index, event) => {
    // let arr2 = []
    // var result = event.target.files;
    // for (let i = 0; i < result.length; i++) {
    //   var log = URL.createObjectURL(result[i]);
    //   arr2.push(log);
    // }
    setArrObj(editData.arrObj);
    setImage(editData.image);
    setName(editData.name);
    setEmail(editData.email);
    setPassword(editData.password);
    setBdate(editData.dob);
    setIsButton(false);
    setDataIndex(index);
  };

  const handleChange = (event) => {
    var arr = [];
    var result = event.target.files;
    for (let i = 0; i < result.length; i++) {
      var log = URL.createObjectURL(result[i]);
      arr.push(log);
    }
    setArrObj([...arrObj, ...arr]);
  };

  const handleImage = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleDeleteImage = (index) => {
    var arr = arrObj;
    arr.splice(index, 1);
    console.log("arr", arr, index);
    toast.error("Image Deleted");
    setArrObj([...arr]);
  };
  return (
    <div>
      <div className="Form_Main">
        <form onSubmit={handleSubmit}>
          <div className="profile_div">
            <input
              type="file"
              name="imageSet"
              className="profile_image_upload"
              onChange={(event) => {
                handleImage(event);
              }}
            />
            {image && (
              <img src={image} alt="imageSet" className="ProfileImage" />
            )}
          </div>

          <div className="mb-3 image_div">
            <input
              type="file"
              multiple
              accept="image/jpeg,image/png"
              className="form-control image_Upload"
              name="images"
              onChange={(event) => {
                handleChange(event);
              }}
            />
            =<div className="counter_div">{arrObj && arrObj.length}</div>
          </div>
          <div className="selectedImage">
            <div className="multiple_div">
              {arrObj?.map((item, index) => {
                return (
                  <>
                    <div className="multiple_image_div">
                      <img src={item} alt="iamge" className="multiple_image" />
                      <button
                        type="button"
                        className="closest_button"
                        onClick={() => {
                          handleDeleteImage(index);
                        }}
                      >
                        X
                      </button>
                    </div>
                  </>
                );
              })}
            </div>
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
                <td>
                  <img className="image_set2" src={item.image} alt="demo" />
                </td>
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
