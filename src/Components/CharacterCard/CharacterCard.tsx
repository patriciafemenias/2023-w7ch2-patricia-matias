import { Character } from "../../types";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({
  character,
}: CharacterCardProps): React.ReactElement => {
  return (
    <div className="character-card">
      <h2 className="character-card__name">{character.name}</h2>
      <img
        className="character-card__image"
        src={character.picture}
        alt={`${character.name} Star Wars Character`}
      />
      <ul className="caracter-card__data">
        <li>Height:{character.name}</li>
        <li>Mass:{character.mass}</li>
        <li>BirthYear:{character.birthYear}</li>
      </ul>
    </div>
  );
};

export default CharacterCard;
