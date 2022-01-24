import express from "express";
import {
  deleteTask,
  getTasks,
  postTask,
} from "../controllers/taskController.js";

const router = express.Router();

router.get("/", getTasks);
router.post("/create", postTask);
router.get("/delete/:id", deleteTask);

export default router;
