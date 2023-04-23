import express from "express";
import { Sequelize, DataTypes }  from "sequelize";
import type { CommonAPIResponseInterface } from "@/types/ajax";
import under_struction from "@/utils/cons";
import { get_dababase_instance } from "@/utils/db";

const todo = express.Router();

const get_all = (req: express.Request, res: express.Response) => {
    const sequelize = get_dababase_instance();
    const Todo = sequelize.define("todo", {
        todo: DataTypes.STRING,
        author: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    });
    const todos = Todo.findAll();
    todos.then((content) => {
        const result: CommonAPIResponseInterface = {
            status: 200,
            message: "ok",
            content: content
        };
        res.json(result);
    }).catch((e) => {
        const result: CommonAPIResponseInterface = {
            status: 400,
            message: "Bad request",
            content: e
        };
        res.statusCode = 400;
        res.json(result);
    });
};
todo.get("/", get_all);
todo.post("/", under_struction);
// Unit
todo.get("/:id", under_struction);
todo.put("/:id", under_struction);
todo.delete("/:id", under_struction);

export default todo;
