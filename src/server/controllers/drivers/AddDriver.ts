import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { IDriver } from "./Interfaces/IDriver";
import * as yup from "yup";
import { validation } from "../../shared/middlewares";

export const driverValidation = validation({
  body: yup.object().shape({
    company: yup.string().required(),
    city: yup.string().required(),
    first_name: yup.string().required().min(3).max(100),
    last_name: yup.string().required().min(3).max(100),
    email: yup.string().required().min(3).max(100),
    phone: yup.string().required().min(8).max(20),
    avatar_url: yup.string().required().max(200),
    status: yup.string().required().max(20),
    creation_date: yup.date().default(() => new Date()),
  }),
});

export const addDriver = async (
  req: Request<{}, {}, IDriver>,
  res: Response
) => {
  return res.status(StatusCodes.CREATED).send("Created driver");
};
