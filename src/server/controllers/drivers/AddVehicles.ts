import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../shared/middlewares";
import { DriversProviders } from "../../database/providers/Drivers";
import { IVehicle } from "../../database/models/Vehicles";

export const vehiclesValidation = validation({
  body: yup.object().shape({
    driver_id: yup.number().required(),
    plate: yup.string().required().min(3).max(100),
    model: yup.string().required().min(3).max(100),
    type: yup.string().required().max(20),
    capacity: yup.string().required().max(20),
    creation_date: yup.date().default(() => new Date()),
  }),
});

export const addVehicles = async (
  req: Request<{}, {}, Omit<IVehicle, "id">>,
  res: Response
) => {
  const result = await DriversProviders.addVehicle(req.body);

  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message,
      },
    });
  }

  return res.status(StatusCodes.CREATED).json(result);
};
