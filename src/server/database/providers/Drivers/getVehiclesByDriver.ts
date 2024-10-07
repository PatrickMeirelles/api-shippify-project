import { Knex } from "../../knex";
import { ETableNames } from "../../TableNames";

export const getVehiclesByDriver = async (
  id: number
): Promise<object | Error> => {
  try {
    let query = Knex(ETableNames.vehicles)
      .select(
        "driver.id",
        "driver.company_id",
        "company.name as company_name",
        "company.city as company_city",
        "company.status as company_status",
        "company.plan_type as company_plan_type",
        "company.creation_date as company_creation_date",
        "driver.city",
        "driver.first_name",
        "driver.last_name",
        "driver.email",
        "driver.avatar_url",
        "driver.status",
        "driver.creation_date",
        "vehicle.id as vehicle_id",
        "vehicle.driver_id as driver_id",
        "vehicle.plate as plate",
        "vehicle.model as model",
        "vehicle.type as type",
        "vehicle.capacity as capacity",
        "vehicle.creation_date as vehicle_creation_date"
      )
      .leftJoin("driver", "vehicle.driver_id", "driver.id")
      .leftJoin("company", "driver.company_id", "company.id")
      .where("driver.id", id);

    const response = await query;
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
