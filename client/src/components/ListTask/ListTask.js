import React, { useEffect, useState } from "react";
import TaskApi from "../../apis/taskApi";
import Task from "../Task/Task";
import "./ListTask.css";

const ListTask = ({ state, setState }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTaskList = async () => {
      try {
        let params = {};
        const response = await TaskApi.getAll(params);
        setTasks(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTaskList();
  }, [state]);

  return (
    <>
      <ul className="list-task">
        {tasks.map((task, index) => {
          return (
            <li key={index}>
              <Task task={task} state={state} setState={setState} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ListTask;
