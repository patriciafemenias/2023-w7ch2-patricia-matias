import { Character, StarWarsApiLocal } from "../../types";
import { ChangeStarWarsApiLocaltoFilteredData } from "../dataFunctions";

const starWarsFilteredData: Character[] = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    birthYear: "19BBY",
    id: 1,
    picture: "https://starwars-visualguide.com/assets/img/characters/1.jpg",
  },
];

const starWarsApi: StarWarsApiLocal = [
  {
    name: "Luke Skywalker",
    id: 1,
    height: 172,
    mass: 77,
    birth_year: "19BBY",
  },
];

describe("Given a ChangeStarWarsApiLocaltoFilteredData function", () => {
  describe(`When given ChangeStarWarsApiLocaltoFilteredData information`, () => {
    test("It return StarWarsFilteredData", () => {
      const expectedInformation = starWarsFilteredData;
      const inputInformation = starWarsApi;

      const actualInformation =
        ChangeStarWarsApiLocaltoFilteredData(inputInformation);

      expect(actualInformation).toStrictEqual(expectedInformation);
    });
  });
});
