import { Character } from "../../types";
import "./CharacterCard.css";
import Button from "../Button/Button";

interface CharacterCardProps {
  character: Character;
  increaseMass?: (character: Character) => void;
  decreaseMass?: (character: Character) => void;
}

const CharacterCard = ({
  character,
  increaseMass,
  decreaseMass,
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
          <div className="mass-box">
            <Button
              className=" button button--mass"
              innerText="-"
              method={() => {
                decreaseMass!(character);
              }}
            />
            <span className="character-card__data">{character.mass}</span>
            <Button
              className=" button button--mass"
              innerText="+"
              method={() => {
                increaseMass!(character);
              }}
            />
          </div>
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
