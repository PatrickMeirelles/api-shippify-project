import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("drivers - create", () => {
  it("create a new driver", async () => {
    const answer1 = await testServer.post("/drivers").send({
      company: "City Rush Deliveries",
      city: "São Paulo",
      first_name: "Patrick",
      last_name: "Meirelles",
      email: "meirelles@gmail.com",
      phone: "5555-9268",
      avatar_url: "https://www.flaticon.com/free-icon/avatar_6858504",
      status: "active",
    });

    expect(answer1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof answer1.statusCode).toEqual("number");
  });

  it("driver with a short name", async () => {
    const answer1 = await testServer.post("/drivers").send({
      company: "City Rush Deliveries",
      city: "São Paulo",
      first_name: "Pa",
      last_name: "Meirelles",
      email: "meirelles@gmail.com",
      phone: "5555-9268",
      avatar_url: "https://www.flaticon.com/free-icon/avatar_6858504",
      status: "active",
    });

    expect(answer1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(answer1.body).toHaveProperty("errors.body.first_name");
  });

  it("driver company must be one of these", async () => {
    const allowedCompanies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const answer1 = await testServer.post("/drivers").send({
      company: 12,
      city: "São Paulo",
      first_name: "Patrick",
      last_name: "Meirelles",
      email: "meirelles@gmail.com",
      phone: "5555-9268",
      avatar_url: "https://www.flaticon.com/free-icon/avatar_6858504",
      status: "active",
    });
    expect(allowedCompanies).toContain(answer1.body.company);
  });
});
