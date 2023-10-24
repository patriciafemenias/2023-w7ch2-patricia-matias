import { StarWarsApi, StarWarsFilteredData } from "../../types";
import { starWarsApiToData } from "../functions";

const starWarsApi: StarWarsApi = {
  next: "https://swapi.dev/api/people/?page=2",
  previous: "",
  results: [
    {
      name: "Luke Skywalker",
      height: "172",
      mass: "77",
      birth_year: "19BBY",
      url: "https://swapi.dev/api/people/1/",
    },
  ],
};

const starWarsFilteredData: StarWarsFilteredData = {
  nextUrl: "https://swapi.dev/api/people/?page=2",
  previousUrl: "",
  characters: [
    {
      name: "Luke Skywalker",
      height: 172,
      mass: 77,
      birthYear: "19BBY",
      id: 1,
      picture: "https://starwars-visualguide.com/assets/img/characters/1.jpg",
    },
  ],
};
describe("Given a starWarsApiToData function", () => {
  describe(`When given starWarsApi information`, () => {
    test("It return StarWarsFilteredData", () => {
      const expectedInformation = starWarsFilteredData;
      const inputInformation = starWarsApi;

      const actualInformation = starWarsApiToData(inputInformation);

      expect(actualInformation).toStrictEqual(expectedInformation);
    });
  });
});
