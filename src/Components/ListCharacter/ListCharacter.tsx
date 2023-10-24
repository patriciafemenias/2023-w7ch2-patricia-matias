import { Character } from "../../types";
import CharacterCard from "../CharacterCard/CharacterCard";

interface ListCharacterprops {
  characters: Character[];
}

const ListCharacter = ({
  characters,
}: ListCharacterprops): React.ReactElement => {
  return (
    <ul className="character-list">
      {characters.map(
        (character): React.ReactElement => (
          <li key={character.id}>{<CharacterCard character={character} />}</li>
        ),
      )}
    </ul>
  );
};

export default ListCharacter;
