import { Knex } from "../../knex";
import { ETableNames } from "../../TableNames";

export const getAllDrivers = async (
  city: number | undefined,
  status: string
): Promise<object | Error> => {
  try {
    let query = Knex(ETableNames.drivers)
      .select(
        "drivers.id",
        "drivers.city",
        "drivers.first_name",
        "drivers.last_name",
        "drivers.email",
        "drivers.phone",
        "drivers.avatar_url",
        "drivers.status",
        "drivers.creation_date",
        "companies.id as company_id",
        "companies.name as company_name",
        "companies.city as company_city",
        "companies.status as company_status",
        "companies.plan_type"
      )
      .join("companies", "drivers.company_id", "companies.id");

    if (city) {
      query = query.where("drivers.city", city);
    }

    if (status) {
      query = query.where("drivers.status", status);
    }
    const result = await query;

    const structuredResult = result.map((driver) => ({
      id: driver.id,
      company: {
        id: driver.company_id,
        name: driver.company_name,
        city: driver.company_city,
        status: driver.company_status,
        plan_type: driver.plan_type,
      },
      city: driver.city,
      first_name: driver.first_name,
      last_name: driver.last_name,
      email: driver.email,
      phone: driver.phone,
      avatar_url: driver.avatar_url,
      status: driver.status,
      creation_date: driver.creation_date,
    }));

    return structuredResult;
  } catch (error) {
    console.log(error);
    return new Error("Error to catch the drivers");
  }
};
