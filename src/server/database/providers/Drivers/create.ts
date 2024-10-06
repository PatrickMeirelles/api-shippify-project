import { Knex } from "../../knex";
import { IDriver } from "../../models/Drivers";
import { ETableNames } from "../../TableNames";

export const create = async (
  driver: Omit<IDriver, "id">
): Promise<number | Error> => {
  try {
    const validateEmailDriver = await Knex(ETableNames.drivers)
      .select("*")
      .where("email", driver.email);

    if (validateEmailDriver.length > 0) {
      return new Error("Email already in use");
    }

    if (driver.company_id == "0") {
      return new Error("Company doesn't exists");
    }

    const [result] = await Knex(ETableNames.drivers)
      .insert(driver)
      .returning("id");
    if (typeof result === "object") {
      return result.id;
    } else if (typeof result === "number") {
      return result;
    }
    return new Error("Error to create a new driver");
  } catch (error) {
    console.log(error);
    return new Error("Error to create a new driver");
  }
};
