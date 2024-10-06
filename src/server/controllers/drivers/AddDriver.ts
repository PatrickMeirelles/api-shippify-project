import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { IDriver } from "../../database/models/Drivers";
import * as yup from "yup";
import { validation } from "../../shared/middlewares";
import { DriversProviders } from "../../database/providers/Drivers";
import { validate } from "../../shared/services/Drivers/validateEnums";

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
  req: Request<{}, {}, Omit<IDriver, "id">>,
  res: Response
) => {
  const validateFields = validate(req.body);

  const result = await DriversProviders.create(validateFields);

  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message,
      },
    });
  }

  return res.status(StatusCodes.CREATED).json(result);
};
