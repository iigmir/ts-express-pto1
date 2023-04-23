import type { CommonAPIResponseInterface } from "../types/ajax";
import type { Request, Response } from "express";

export default (req: Request, res: Response) => {
    const result: CommonAPIResponseInterface = {
        message: "ok",
        status: 200,
        content: "Hello World!"
    };
    res.json(result);
};
