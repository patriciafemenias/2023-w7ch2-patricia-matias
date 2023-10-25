import { getStarWarsFilteredData, urlApi } from "../../data/dataFunctions";
import { StarWarsFilteredData } from "../../types";
import CharactersList from "../CharactersList/CharactersList";
import { useState, useEffect } from "react";
import "./App.css";

const App = (): React.ReactElement => {
  const [url] = useState(urlApi);

  const [starWarsData, setStarWarsData] = useState<StarWarsFilteredData>({
    characters: [],
    nextUrl: "",
    previousUrl: "",
  });

  useEffect(() => {
    const action = async () => {
      const data = await getStarWarsFilteredData(url);
      setStarWarsData(data);
    };
    action();
  }, [url]);
  return (
    <div className="App">
      <img
        className="App__logo"
        src="/public/images/logo.png"
        alt="Star Wars logo"
        width="400"
        height="400"
      ></img>
      <CharactersList characters={starWarsData.characters} />
    </div>
  );
};

export default App;
