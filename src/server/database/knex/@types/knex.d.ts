import { ICompanies } from "../../models";

declare module "knex/types/tables" {
  interface Tables {
    company: ICompanies;
    // driver: IDriver
    // vehicles: IVehicles
    // users: IUsers
  }
}
