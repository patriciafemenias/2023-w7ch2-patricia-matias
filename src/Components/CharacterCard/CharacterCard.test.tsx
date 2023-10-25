import { Character } from "../../types";
import CharacterCard from "./CharacterCard";
import { render, screen } from "@testing-library/react";

describe("Given a CharacterCard component", () => {
  describe("When it receives Chewbacca's data", () => {
    test("Then it should show 'Chewbacca' into a heading", () => {
      const chewbacca: Character = {
        id: 2,
        name: "Chewbacca",
        picture: "https://swapi.dev/api/people/1/",
        height: 200,
        mass: 300,
        birthYear: "19BBY",
      };

      render(<CharacterCard character={chewbacca} />);
      const characterName = screen.getByRole("heading", {
        name: chewbacca.name,
      });

      expect(characterName).toBeInTheDocument();
    });
  });
});
