import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { IVehicle } from "./Interfaces/IVehicles";
import * as yup from "yup";
import { validation } from "../../shared/middlewares";

export const vehiclesValidation = validation({
  body: yup.object().shape({
    driverId: yup.number().required(),
    plate: yup.string().required().min(3).max(100),
    model: yup.string().required().min(3).max(100),
    type: yup.string().required().max(20),
    capacity: yup.string().required().max(20),
    creation_date: yup.date().default(() => new Date()),
  }),
});

export const addVehicles = async (
  req: Request<{}, {}, IVehicle>,
  res: Response
) => {
  return res.status(StatusCodes.CREATED).send("Added new vehicle");
};
