import { Companies } from "../../../enums/CompaniesEnum";
import { Cities } from "../../../enums/CitiesEnum";

export const validate = (data: any) => {
  const company_id = Companies[data.company as keyof typeof Companies] ?? 0;
  const city = Cities[data.city as keyof typeof Cities] ?? 0;

  const driverData = {
    company_id,
    ...data,
    city,
  };

  const { company, ...rest } = driverData;
  return rest;
};
