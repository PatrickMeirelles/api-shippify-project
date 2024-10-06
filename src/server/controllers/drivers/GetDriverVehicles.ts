import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { IVehicle } from "../../database/models/Vehicles";
import * as yup from "yup";
import { validation } from "../../shared/middlewares";
import { DriversProviders } from "../../database/providers/Drivers";

export const getDriversVehiclesValidation = validation({
  query: yup.object().shape({
    id: yup.number(),
  }),
});

interface Params {
  id: string;
}

export const getDriversVehicles = async (
  req: Request<Params, {}, Omit<IVehicle, "id">>,
  res: Response
) => {
  const id = req.params.id;
  const result = await DriversProviders.getVehiclesByDriver(id);

  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message,
      },
    });
  }

  return res.status(StatusCodes.ACCEPTED).json(result);
};
