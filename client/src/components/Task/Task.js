import React, { useState } from "react";
import TaskApi from "../../apis/taskApi";
import "./Task.css";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import Form from "../Form/Form";

const Task = ({ task, state, setState }) => {
  const [openEdit, setOpenEdit] = useState(false);
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

  const handleOpenEdit = () => {
    setOpenEdit(!openEdit);
  };

  return (
    <>
      <div className="task">
        <h1>{task.title}</h1>
        <p>{task.content}</p>
        <div className="delete-icon" onClick={() => handleDelete(task._id)}>
          <DeleteOutlineIcon />
        </div>
        <div className="edit-icon" onClick={handleOpenEdit}>
          <EditIcon />
        </div>
        {openEdit && <Form update={true} task={task} />}
      </div>
    </>
  );
};

export default Task;
