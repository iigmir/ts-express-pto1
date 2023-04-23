import express from "express";
import hw from "./utils/hw";
import MainTodo from "./routes/todo";
import { get_dababase_instance } from "@/utils/db";

const app: express.Application = express();
const port = 9487;
app.get("/", hw);
app.use("/todo", MainTodo );
app.listen(port, () => {
    console.log(`Example app listening: http://127.0.0.1:${port}`);
});

