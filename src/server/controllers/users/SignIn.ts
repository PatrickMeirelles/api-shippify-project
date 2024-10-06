import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { UsersProvider } from "../../database/providers/Users";
import { validation } from "../../shared/middlewares";
import { IUsers } from "../../database/models";

interface IBodyProps extends Omit<IUsers, "id" | "nome"> {}

export const signInValidation = validation({
  body: yup.object().shape({
    password: yup.string().required().min(6),
    email: yup.string().required().email().min(5),
  }),
});

export const signIn = async (
  req: Request<{}, {}, IBodyProps>,
  res: Response
) => {
  const { email, password } = req.body;

  const result = await UsersProvider.getByEmail(email);
  if (result instanceof Error) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      errors: {
        default: "Email or password are invalid",
      },
    });
  }

  if (password !== result.password) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      errors: {
        default: "Email or password are invalid",
      },
    });
  } else {
    return res
      .status(StatusCodes.OK)
      .json({ accessToken: "teste.teste.teste" });
  }
};
