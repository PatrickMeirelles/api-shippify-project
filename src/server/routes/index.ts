import { Router } from "express";
import { DriversControllers } from "./../controllers";

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

export { router };
