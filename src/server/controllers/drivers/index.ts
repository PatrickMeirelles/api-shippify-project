import * as getAll from "./GetAllDrivers";
import * as addDriver from "./AddDriver";
import * as addVehicles from "./AddVehicles";
import * as getDriverVehicles from "./GetDriverVehicles";

export const DriversControllers = {
  ...getAll,
  ...addDriver,
  ...addVehicles,
  ...getDriverVehicles,
};
