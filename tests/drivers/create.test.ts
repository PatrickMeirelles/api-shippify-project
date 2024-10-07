import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";
import { Companies } from "../../src/server/enums/CompaniesEnum";

describe("drivers - create", () => {
  let accessToken = "";
  beforeAll(async () => {
    const email = "testjest@gmail.com";
    await testServer
      .post("/users/signup")
      .send({ name: "Teste", email, password: "123456" });
    const signInRes = await testServer
      .post("/users/signin")
      .send({ email, password: "123456" });

    accessToken = signInRes.body.accessToken;
  });

  it("create a new driver", async () => {
    const answer1 = await testServer
      .post("/drivers")
      .set({ Authorization: `Bearer ${accessToken}` })
      .send({
        company: "City Rush Deliveries",
        city: "Sao Paulo",
        first_name: "Patrick",
        last_name: "Meirelles",
        email: "testsd@gmail.commmmmmmmmmmmmm",
        phone: "5555-9268",
        avatar_url: "https://www.flaticon.com/free-icon/avatar_6858504",
        status: "active",
      });

    expect(answer1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof answer1.statusCode).toEqual("number");
  });

  it("driver with a short name", async () => {
    const answer1 = await testServer
      .post("/drivers")
      .set({ Authorization: `Bearer ${accessToken}` })
      .send({
        company: "City Rush Deliveries",
        city: "Sao Paulo",
        first_name: "Pa",
        last_name: "Meirelles",
        email: "testsd@gmail.commmmmmmmmmmmmm",
        phone: "5555-9268",
        avatar_url: "https://www.flaticon.com/free-icon/avatar_6858504",
        status: "active",
      });

    expect(answer1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(answer1.body).toHaveProperty("errors.body.first_name");
  });
});
