import { Router } from "express";
import { DriversControllers, UsersController } from "./../controllers";
import { ensureAuth } from "../shared/middlewares";

const router = Router();

router.get("/", (_, res) => {
  return res.status(200).send("Shippify API Project");
});

router.get(
  "/drivers",
  ensureAuth,
  DriversControllers.getAllDriversValidation,
  DriversControllers.getAllDrivers
);

router.post(
  "/drivers",
  ensureAuth,
  DriversControllers.driverValidation,
  DriversControllers.addDriver
);

router.post(
  "/vehicles",
  ensureAuth,
  DriversControllers.vehiclesValidation,
  DriversControllers.addVehicles
);

router.get(
  "/drivers/:id/vehicles",
  ensureAuth,
  DriversControllers.getDriversVehiclesValidation,
  DriversControllers.getDriversVehicles
);

router.post(
  "/users/signin",
  ensureAuth,
  UsersController.signInValidation,
  UsersController.signIn
);
router.post(
  "/users/signup",
  ensureAuth,
  UsersController.signUpValidation,
  UsersController.signUp
);

export { router };
