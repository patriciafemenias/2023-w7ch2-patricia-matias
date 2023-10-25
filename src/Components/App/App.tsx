import { getStarWarsFilteredData, urlApi } from "../../data/dataFunctions";
import { StarWarsFilteredData } from "../../types";
import ListCharacter from "../ListCharacter/ListCharacter";
import { useState, useEffect } from "react";
import Button from "../Button/Button";

const App = (): React.ReactElement => {
  const [url, setUrl] = useState(urlApi);

  const [starWarsData, setStarWarsData] = useState<StarWarsFilteredData>({
    characters: [],
    nextUrl: "",
    previousUrl: "",
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
    <div className="App">
      <Button className="button" innerText="<<<" method={goPrevious} />
      <Button className="button" innerText=">>>" method={goNext} />
      <ListCharacter characters={starWarsData.characters} />
    </div>
  );
};

export default App;
