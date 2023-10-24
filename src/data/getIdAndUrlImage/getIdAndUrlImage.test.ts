import { getIdAndUrlImage } from "../dataFunctions";

describe("Given a getIdAndUrlImage function", () => {
  const url = "https://swapi.dev/api/people/2/";
  describe(`When given url ${url}`, () => {
    test("It return [2,'https://starwars-visualguide.com/assets/img/characters/2.jpg']", () => {
      const expectedValue = [
        2,
        "https://starwars-visualguide.com/assets/img/characters/2.jpg",
      ];

      const actualValue = getIdAndUrlImage(url);

      expect(actualValue).toStrictEqual(expectedValue);
    });
  });
});
