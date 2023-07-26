import express from "express";
import {getTodos} from "../controllers/TodoController.js";

const router = express.Router();

router.get('/todos', getTodos);
// router.get('/todos/:id', getTodoById);

export default router;