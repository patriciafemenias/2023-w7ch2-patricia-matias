import { Character, StarWarsApi } from "../types";

export const fetchData = async (url: string): Promise<StarWarsApi> => {
  const response = await fetch(url);
  return response.json();
};

export const getUrlImage = (url: string): string => {
  const imageId = Number(url.split("/").at(-2)!);
  return `https://starwars-visualguide.com/assets/img/characters/${imageId}.jpg`;
};

export const starWarsApiToData = (starWarsApi: StarWarsApi) => {
  const data = {
    nexturl: starWarsApi.next,
    previousurl: starWarsApi.previous,
    characters: starWarsApi.results.map(
      (result): Character => ({
        name: result.name,
        height: Number(result.height),
        mass: Number(result.mass),
        birthYear: result.birth_year,
        picture: getUrlImage(result.url),
      }),
    ),
  };
  return data;
};
