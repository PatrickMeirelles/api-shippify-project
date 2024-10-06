import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";


export const get = (req: Request, res: Response) => {


    return res.status(StatusCodes.ACCEPTED).send()
}