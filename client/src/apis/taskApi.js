import axiosClient from "./axiosClient";

const TaskApi = {
  getAll: (params) => {
    const url = "/";
    return axiosClient.get(url, params);
  },

  postTask: (params) => {
    const url = "/create";
    return axiosClient.post(url, params);
  },

  deleteTask: (params) => {
    const url = `/delete/${params.id}`;
    return axiosClient.get(url);
  },
};

export default TaskApi;
