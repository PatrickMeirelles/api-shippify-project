import { Knex } from "../../knex";
import { IVehicle } from "../../models/Vehicles";
import { ETableNames } from "../../TableNames";

export const addVehicle = async (
  vehicle: Omit<IVehicle, "id">
): Promise<number | Error> => {
  try {
    console.log(vehicle);

    const validateExistsDriver = await Knex(ETableNames.drivers)
      .select("id")
      .where("id", vehicle.driver_id);
    if (validateExistsDriver.length == 0) {
      return new Error("Driver doesn't exists");
    }

    const [result] = await Knex(ETableNames.vehicles)
      .insert(vehicle)
      .returning("id");
    if (typeof result === "object") {
      return result.id;
    } else if (typeof result === "number") {
      return result;
    }
    return new Error("Error to add a new vehicle");
  } catch (error) {
    console.log(error);
    return new Error("Error to add a new vehicle");
  }
};
