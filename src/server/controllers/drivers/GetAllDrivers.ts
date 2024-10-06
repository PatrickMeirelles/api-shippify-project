import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { IDriver, IFilter } from "./Interfaces/IDriver";
import * as yup from "yup";
import { validation } from "../../shared/middlewares";

export const getAllDriversValidation = validation({
  query: yup.object().shape({
    city: yup.string(),
    status: yup.string().oneOf(["active", "inactive"]),
  }),
});

export const getAllDrivers = async (
  req: Request<{}, {}, IDriver>,
  res: Response
) => {
  console.log(req.query);

  return res.status(StatusCodes.ACCEPTED).send("Driver");
};
