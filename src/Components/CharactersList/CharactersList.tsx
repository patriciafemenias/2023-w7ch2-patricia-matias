import { Character } from "../../types";
import CharacterCard from "../CharacterCard/CharacterCard";
import "./CharactersList.css";

interface ListCharacterprops {
  characters: Character[];
  increaseMass: (character: Character) => void;
  decreaseMass: (character: Character) => void;
}

const CharactersList = ({
  characters,
  increaseMass,
  decreaseMass,
}: ListCharacterprops): React.ReactElement => {
  return (
    <ul className="characters-list">
      {characters.map(
        (character): React.ReactElement => (
          <li key={character.id}>
            {
              <CharacterCard
                character={character}
                decreaseMass={decreaseMass}
                increaseMass={increaseMass}
              />
            }
          </li>
        ),
      )}
    </ul>
  );
};

export default CharactersList;
