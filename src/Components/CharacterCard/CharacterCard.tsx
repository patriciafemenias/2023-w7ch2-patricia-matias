import { Character } from "../../types";
import "./CharacterCard.css";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({
  character,
}: CharacterCardProps): React.ReactElement => {
  return (
    <div className="character-card">
      <img
        className="character-card__image"
        src={character.picture}
        alt={`${character.name} Star Wars Character`}
      />
      <h2 className="character-card__name">{character.name}</h2>
      <ul className="character-card__data-container">
        <li className="character-card__title-data">
          Height:
          <span className="character-card__data">{character.height}</span>
        </li>
        <li className="character-card__title-data">
          Mass:
          <span className="character-card__data">{character.mass}</span>
        </li>
        <li className="character-card__title-data">
          BirthYear:
          <span className="character-card__data">{character.birthYear}</span>
        </li>
      </ul>
    </div>
  );
};

export default CharacterCard;
