import express from "express";
import { getHome, postHome, deleteTodo, checkTodo } from "../controllers/todoController"


const rootRouter = express.Router();
rootRouter.route("/").get(getHome).post(postHome);
rootRouter.route("/:id([0-9a-f]{24})/delete").get(deleteTodo);
rootRouter.route("/:id([0-9a-f]{24})/check").get(checkTodo);
export default rootRouter;
