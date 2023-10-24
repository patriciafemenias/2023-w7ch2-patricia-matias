import { Character, StarWarsApi, StarWarsFilteredData } from "../types";

export const fetchDataApi = async (url: string): Promise<StarWarsApi> => {
  const response = await fetch(url);
  return response.json();
};

export const getIdAndUrlImage = (url: string): [number, string] => {
  const Id = Number(url.split("/").at(-2)!);
  return [
    Id,
    `https://starwars-visualguide.com/assets/img/characters/${Id}.jpg`,
  ];
};

export const starWarsApiToFilteredData = (
  starWarsApi: StarWarsApi,
): StarWarsFilteredData => {
  const { next, previous } = starWarsApi;
  const data = {
    nextUrl: next ? next : "",
    previousUrl: previous ? previous : "",
    characters: starWarsApi.results.map((result): Character => {
      const [id, picture] = getIdAndUrlImage(result.url);

      return {
        id: id,
        name: result.name,
        height: Number(result.height),
        mass: Number(result.mass),
        birthYear: result.birth_year,
        picture: picture,
      };
    }),
  };
  return data;
};

export const getStarWarsFilteredData = async (
  url: string,
): Promise<StarWarsFilteredData> => {
  const starWarsApi = (await fetchDataApi(url)) as StarWarsApi;
  return starWarsApiToFilteredData(starWarsApi);
};

export const urlApi = "https://swapi.dev/api/people/";
