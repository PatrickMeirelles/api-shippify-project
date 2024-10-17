import { formatDate } from "../../../shared/services/formatDate";
import { Knex } from "../../knex";
import { IVehicle } from "../../models/Vehicles";
import { ETableNames } from "../../TableNames";

export const addVehicle = async (
  vehicle: Omit<IVehicle, "id">
): Promise<number | Error> => {
  try {
    const validateExistsDriver = await Knex(ETableNames.drivers)
      .select("id")
      .where("id", vehicle.driver_id);
    if (validateExistsDriver.length == 0) {
      return new Error("Driver doesn't exists");
    }

    const verify = await Knex(ETableNames.vehicles).select("*").where("driver_id", vehicle.driver_id)
    const date = new Date(); // Function applied: 2024-10-17
    const formatDateNow = formatDate(date); // Function applied: 2024-10-17

    if (verify.length >= 3) {
      const newVehicle = verify[verify.length - 1]
      const [resultNewVehicle] = await Knex(ETableNames.vehicles).where('id', newVehicle.id).update({
        plate: vehicle.plate,
        model: vehicle.model,
        type: vehicle.type,
        capacity: vehicle.capacity,
        creation_date: formatDateNow // Function applied: 2024-10-17
      })
        .returning("id");

      if (typeof resultNewVehicle === "object") {
        return resultNewVehicle.id;
      } else if (typeof resultNewVehicle === "number") {
        return resultNewVehicle;
      }
    } else {
      const [result] = await Knex(ETableNames.vehicles)
        .insert(vehicle)
        .returning("id");
      if (typeof result === "object") {
        return result.id;
      } else if (typeof result === "number") {
        return result;
      }
    }

    return new Error("Error to add a new vehicle");
  } catch (error) {
    console.log(error);
    return new Error("Error to add a new vehicle");
  }
};
