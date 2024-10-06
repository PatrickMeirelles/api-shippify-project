export default class Cities {
  public async findCity(number: number) {
    const cities: { [key: string]: string } = {
      "1001": "Washington",
      "1002": "Quito",
      "1003": "Lima",
      "1004": "Madrid",
      "1005": "Paris",
      "1006": "Sydney",
      "1007": "São Paulo",
    };
    const city = cities[number];

    if (city) {
      return city;
    } else {
      throw new Error("Invalid number, city not found");
    }
  }
}
