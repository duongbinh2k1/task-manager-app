import React from "react";
import TaskApi from "../../apis/taskApi";
import "./Task.css";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const Task = ({ task, state, setState }) => {
  const handleDelete = async (id) => {
    try {
      let params = { id };
      const response = await TaskApi.deleteTask(params);
      if (response.title !== null) {
        setState(!state);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="task">
        <h1>{task.title}</h1>
        <p>{task.content}</p>
        <div className="delete-icon" onClick={() => handleDelete(task._id)}>
          <DeleteOutlineIcon />
        </div>
      </div>
    </>
  );
};

export default Task;
