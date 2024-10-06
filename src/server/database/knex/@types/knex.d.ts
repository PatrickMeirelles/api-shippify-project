import { ICompanies, IDriver, IVehicle, IUsers } from "../../models";
declare module "knex/types/tables" {
  interface Tables {
    company: ICompanies;
    driver: IDriver;
    vehicles: IVehicles;
    users: IUsers;
  }
}
