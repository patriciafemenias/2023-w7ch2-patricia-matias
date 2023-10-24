import { Character } from "../../types";
import CharacterCard from "../CharacterCard/CharacterCard";
import "./CharactersList.css";

interface ListCharacterprops {
  characters: Character[];
}

const CharactersList = ({
  characters,
}: ListCharacterprops): React.ReactElement => {
  return (
    <ul className="characters-list">
      {characters.map(
        (character): React.ReactElement => (
          <li key={character.id}>{<CharacterCard character={character} />}</li>
        ),
      )}
    </ul>
  );
};

export default CharactersList;
