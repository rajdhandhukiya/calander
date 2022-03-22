import React from "react";
import { useState } from "react";
import { Button, Modal } from "antd";
import { toast } from "react-toastify";
import Calendar from "react-awesome-calendar";

import "../node_modules/antd/dist/antd.css";
import '../node_modules/react-color-picker/index.css'
import "../node_modules/react-toastify/dist/ReactToastify.css";

function Calander() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [to, setTo] = useState();
  const [from, setFrom] = useState();
  const [title, setTitle] = useState();
  const [events, setEvents] = useState(
    JSON.parse(localStorage.getItem("events"))
      ? JSON.parse(localStorage.getItem("events"))
      : []
  );

  const showModal = () => {
  setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    var obj = {
      id: events?.length + 1,
      color: "#3694DF",
      from: `${from}T18:00:00+00:00`,
      to: `${to}T18:00:00+00:00`,
      title: title,
    };
    setEvents([...events, obj]);
    let eventList = JSON.parse(localStorage.getItem("events"));
    if (!eventList) {
      eventList = [];
    }
    eventList.push(obj);
    localStorage.setItem("events", JSON.stringify(eventList));
    toast.success("select event successfully");
    clear();
  };
  console.log("-=-=-=-=-=<>", events);

  const clear = () => {
    setTo("");
    setFrom("");
    setTitle("");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    clear();
    toast.error("event is not added");
  };

  function MyVerticallyCenteredModal() {
    console.log("123");

    showModal();
  }
 
  return (
    <>
      <div className="App">
        <Button
          onClick={() => {
            MyVerticallyCenteredModal();
          }}
        >
          Add
        </Button>
        <Calendar
          events={events}
        />
      </div>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>From</p>
        <input
          type="date"
          value={from}
          onChange={(e) => {
            setFrom(e.target.value);
          }}
        />
        <p>To</p>
        <input
          type="date"
          value={to}
          onChange={(e) => {
            setTo(e.target.value);
          }}
        />
        <p>Title</p>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      
      </Modal>
    </>
  );
}

export default Calander;
