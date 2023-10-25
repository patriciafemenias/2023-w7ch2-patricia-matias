import { getStarWarsFilteredData, urlApi } from "../../data/dataFunctions";
import { Character, StarWarsFilteredData } from "../../types";
import CharactersList from "../CharactersList/CharactersList";
import { useState, useEffect } from "react";
import Button from "../Button/Button";
import "./App.css";

const App = (): React.ReactElement => {
  const [url, setUrl] = useState(urlApi);

  const [starWarsData, setStarWarsData] = useState<StarWarsFilteredData>({
    characters: [],
    nextUrl: "",
    previousUrl: "",
  });

  const setCharacterMass = (newCharacter: Character) =>
    setStarWarsData(() => ({
      nextUrl: starWarsData.nextUrl,
      previousUrl: starWarsData.previousUrl,
      characters: starWarsData.characters.map((character) => {
        const { mass: oldMass, id } = character;
        return {
          ...character,
          mass: id !== newCharacter.id ? newCharacter.mass : oldMass,
        };
      }),
    }));
  setCharacterMass({
    birthYear: "",
    height: 0,
    id: 100,
    mass: 0,
    name: "",
    picture: "",
  });
  const goNext = () => {
    const { nextUrl } = starWarsData;
    setUrl(() => (nextUrl ? nextUrl : url));
  };

  const goPrevious = () => {
    const { previousUrl } = starWarsData;
    setUrl(() => (previousUrl ? previousUrl : url));
  };

  useEffect(() => {
    const action = async () => {
      const data = await getStarWarsFilteredData(url);
      setStarWarsData(data);
    };
    action();
  }, [url]);

  return (
    <div className="app">
      <img
        className="app__logo"
        src="/images/logo.png"
        alt="Star Wars Logo"
        width="412.5"
        height="300"
      ></img>
      <div className="button-container">
        <Button
          className="button"
          innerText="<<< Previous"
          method={goPrevious}
        />
        <Button className="button" innerText="Next >>>" method={goNext} />
      </div>
      <CharactersList characters={starWarsData.characters} />
    </div>
  );
};

export default App;
