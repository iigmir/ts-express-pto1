import type { Request, Response } from "express";
import type { CommonAPIResponseInterface } from "@/types/ajax";

const under_struction = (req: Request, res: Response) => {
    const result: CommonAPIResponseInterface = {
        status: 503,
        message: "Service Unavailable",
        content: {}
    };
    res.statusCode = 503;
    res.json(result);
};

export default under_struction;
