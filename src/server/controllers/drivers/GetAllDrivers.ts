import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { IDriver } from "./Interfaces/IDriver";
import * as yup from "yup";
import { validation } from "../../shared/middlewares";
import { DriversProviders } from "../../database/providers/Drivers";

export const getAllDriversValidation = validation({
  query: yup.object().shape({
    city: yup.string(),
    status: yup.string(),
  }),
});

export const getAllDrivers = async (
  req: Request<{}, {}, IDriver>,
  res: Response
) => {
  const { city, status } = req.query;
  const result = await DriversProviders.getAllDrivers(
    Number(city),
    String(status)
  );

  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message,
      },
    });
  }

  return res.status(StatusCodes.ACCEPTED).json(result);
};
