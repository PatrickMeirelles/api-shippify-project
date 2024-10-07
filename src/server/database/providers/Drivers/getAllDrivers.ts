import { Knex } from "../../knex";
import { ETableNames } from "../../TableNames";

export const getAllDrivers = async (
  city: number | undefined,
  status: string
): Promise<object | Error> => {
  try {
    let query = Knex(ETableNames.drivers)
      .select(
        "driver.id",
        "driver.city",
        "driver.first_name",
        "driver.last_name",
        "driver.email",
        "driver.phone",
        "driver.avatar_url",
        "driver.status",
        "driver.creation_date",
        "company.id as company_id",
        "company.name as company_name",
        "company.city as company_city",
        "company.status as company_status",
        "company.plan_type"
      )
      .join("company", "driver.company_id", "company.id");

    if (city) {
      query = query.where("driver.city", city);
    }

    if (status) {
      query = query.where("driver.status", status);
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
    return new Error("Error to catch the driver");
  }
};
