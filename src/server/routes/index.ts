import { Router } from "express";
import { DriversControllers, UsersController } from "./../controllers";

const router = Router();

router.get("/", (_, res) => {
  return res.status(200).send("Shippify API Project");
});

router.get(
  "/drivers",
  DriversControllers.getAllDriversValidation,
  DriversControllers.getAllDrivers
);

router.post(
  "/drivers",
  DriversControllers.driverValidation,
  DriversControllers.addDriver
);

router.post(
  "/vehicles",
  DriversControllers.vehiclesValidation,
  DriversControllers.addVehicles
);

router.get(
  "/drivers/:id/vehicles",
  DriversControllers.getDriversVehiclesValidation,
  DriversControllers.getDriversVehicles
);

router.post(
  "/users/signin",
  UsersController.signInValidation,
  UsersController.signIn
);
router.post(
  "/users/signup",
  UsersController.signUpValidation,
  UsersController.signUp
);

export { router };
