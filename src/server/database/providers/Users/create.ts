import { Knex } from "../../knex";
import { IUsers } from "../../models/Users";
import { ETableNames } from "../../TableNames";

export const create = async (
  user: Omit<IUsers, "id">
): Promise<number | Error> => {
  try {
    const [result] = await Knex(ETableNames.users).insert(user).returning("id");
    if (typeof result === "object") {
      return result.id;
    } else if (typeof result === "number") {
      return result;
    }
    return new Error("Error to create a new user");
  } catch (error) {
    console.log(error);
    return new Error("Error to create a new user");
  }
};
