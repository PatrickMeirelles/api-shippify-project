import { Knex } from "knex";
import { ETableNames } from "../TableNames";

export async function seed(knex: Knex): Promise<void> {
  await knex("company").insert([
    {
      id: 1,
      name: "FastTrack Logistics",
      city: 1001,
      status: "active",
      plan_type: "premium",
    },
    {
      id: 2,
      name: "Swift Delivery Co.",
      city: 1002,
      status: "active",
      plan_type: "standard",
    },
    {
      id: 3,
      name: "Express Couriers",
      city: 1003,
      status: "active",
      plan_type: "premium",
    },
    {
      id: 4,
      name: "City Rush Deliveries",
      city: 1004,
      status: "active",
      plan_type: "standard",
    },
    {
      id: 5,
      name: "Speedy Shipments",
      city: 1005,
      status: "inactive",
      plan_type: "basic",
    },
    {
      id: 6,
      name: "Metro Movers",
      city: 1006,
      status: "active",
      plan_type: "premium",
    },
    {
      id: 7,
      name: "Rapid Transit LLC",
      city: 1007,
      status: "active",
      plan_type: "standard",
    },
    {
      id: 8,
      name: "Urban Haulers",
      city: 1008,
      status: "active",
      plan_type: "premium",
    },
    {
      id: 9,
      name: "Quick & Safe Delivery",
      city: 1009,
      status: "inactive",
      plan_type: "basic",
    },
    {
      id: 10,
      name: "City Sprinters",
      city: 1010,
      status: "active",
      plan_type: "standard",
    },
  ]);
}
