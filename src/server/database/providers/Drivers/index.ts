import * as create from "./create";
import * as getAll from "./getAllDrivers";
import * as addVehicle from "./addVehicle";
import * as getVehicles from "./getVehiclesByDriver";

export const DriversProviders = {
  ...create,
  ...getAll,
  ...addVehicle,
  ...getVehicles,
};
