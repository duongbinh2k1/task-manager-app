import React, { useState } from "react";
import TaskApi from "../../apis/taskApi";
import "./Form.css";

const Form = ({ state, setState }) => {
  const [value, setValue] = useState({
    title: "",
    content: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let params = { ...value };
      const response = await TaskApi.postTask(params);
      if (response.title !== null) {
        setState(!state);
        // console.log(state);
      }
    } catch (error) {
      throw error;
    }
  };

  const handleOnChange = (e) => {
    const newValue = { ...value };
    newValue[e.target.name] = e.target.value;
    setValue(newValue);
  };

  return (
    <>
      <div className="form">
        <h1>Task Manager</h1>
        <p>ReactJs + Nodejs + Mogodb</p>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            onChange={handleOnChange}
            value={value.title}
            name="title"
          />
          <input
            type="text"
            onChange={handleOnChange}
            value={value.content}
            name="content"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Form;
