import { Character } from "../../types";
import CharactersList from "./CharactersList";
import { render, screen } from "@testing-library/react";

describe("Given a CharactersList component", () => {
  describe("When it receives a list of Star Wars characters", () => {
    test("Then it should show 'Luke SkyWalker' in the first position", () => {
      const characters: Character[] = [
        {
          id: 1,
          name: "Luke Skywalker",
          picture:
            "https://starwars-visualguide.com/assets/img/characters/1.jpg",
          height: 172,
          mass: 77,
          birthYear: "19BBY",
        },
      ];
      render(<CharactersList characters={characters} />);
      const characterName = screen.getByRole("heading", {
        name: characters[0].name,
      });
      expect(characterName).toBeInTheDocument();
    });
  });
});
