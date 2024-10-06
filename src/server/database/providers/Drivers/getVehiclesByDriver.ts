import { Knex } from "../../knex";
import { ETableNames } from "../../TableNames";

export const getVehiclesByDriver = async (
  id: number
): Promise<object | Error> => {
  try {
    console.log(id);

    let query = Knex(ETableNames.vehicles)
      .select(
        "drivers.id",
        "drivers.company_id",
        "companies.name as company_name",
        "companies.city as company_city",
        "companies.status as company_status",
        "companies.plan_type as company_plan_type",
        "companies.creation_date as company_creation_date",
        "drivers.city",
        "drivers.first_name",
        "drivers.last_name",
        "drivers.email",
        "drivers.avatar_url",
        "drivers.status",
        "drivers.creation_date",
        "vehicles.id as vehicle_id",
        "vehicles.driver_id as driver_id",
        "vehicles.plate as plate",
        "vehicles.model as model",
        "vehicles.type as type",
        "vehicles.capacity as capacity",
        "vehicles.creation_date as vehicle_creation_date"
      )
      .leftJoin("drivers", "vehicles.driver_id", "drivers.id")
      .leftJoin("companies", "drivers.company_id", "companies.id")
      .where("drivers.id", id);

    const response = await query;
    console.log(response);

    const driverData = {
      id: response[0]?.id,
      company: {
        id: response[0]?.company_id,
        name: response[0]?.company_name,
        city: response[0]?.company_city,
        status: response[0]?.company_status,
        plan_type: response[0]?.company_plan_type,
        creation_date: response[0]?.company_creation_date,
      },
      city: response[0]?.city,
      first_name: response[0]?.first_name,
      last_name: response[0]?.last_name,
      email: response[0]?.email,
      phone: response[0]?.phone,
      avatar_url: response[0]?.avatar_url,
      status: response[0]?.status,
      creation_date: response[0]?.creation_date,
    };

    const vehiclesData = response.map((item) => ({
      id: item.vehicle_id,
      driver_id: item.driver_id,
      plate: item.plate,
      model: item.model,
      type: item.type,
      capacity: item.capacity,
      creation_date: item.vehicle_creation_date,
    }));

    return {
      driver: driverData,
      vehicles: vehiclesData,
    };
  } catch (error) {
    console.log(error);
    return new Error("Error to catch the vehicles about this driver");
  }
};
