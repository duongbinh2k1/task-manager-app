import { taskModel } from "../models/taskModel.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await taskModel.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(401).json(err);
  }
};

export const postTask = async (req, res) => {
  try {
    const newTask = req.body;
    const task = new taskModel(newTask);
    await task.save();
    res.status(200).json(task);
  } catch (err) {
    res.status(401).json(err);
  }
};

export const deleteTask = async (req, res) => {
  try {
    const IDDelete = req.params;
    const task = await taskModel.findByIdAndDelete(IDDelete.id, { new: true });
    res.status(200).json(task);
  } catch (err) {
    res.status(401).json(err);
  }
};
