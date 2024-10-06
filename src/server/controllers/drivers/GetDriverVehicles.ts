import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { IDriver, IFilter } from "./Interfaces/IDriver";
import * as yup from "yup";
import { validation } from "../../shared/middlewares";

export const getDriversVehiclesValidation = validation({
  query: yup.object().shape({
    id: yup.number(),
  }),
});

export const getDriversVehicles = async (
  req: Request<{}, {}, IDriver>,
  res: Response
) => {
  console.log(req.params);

  return res.status(StatusCodes.ACCEPTED).send("Driver Vehicles:");
};
