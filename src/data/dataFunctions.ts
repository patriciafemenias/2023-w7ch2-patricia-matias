import {
  Character,
  StarWarsApi,
  StarWarsFilteredData,
  StarWarsApiLocal,
} from "../types";

export const fetchDataApi = async (url: string): Promise<unknown> => {
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

export const ChangeStarWarsApiToFilteredData = (
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

export const ChangeStarWarsApiLocaltoFilteredData = (
  starWarsApi: StarWarsApiLocal,
): Character[] => {
  return starWarsApi.map((characterApi): Character => {
    const { birth_year, height, id, mass, name } = characterApi;
    return {
      birthYear: birth_year,
      height: Number(height),
      id: Number(id),
      mass: Number(mass),
      name,
      picture: `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`,
    };
  });
};

export const getStarWarsFilteredData = async (
  url: string,
): Promise<StarWarsFilteredData> => {
  const starWarsApi = (await fetchDataApi(url)) as StarWarsApiLocal;
  return {
    characters: ChangeStarWarsApiLocaltoFilteredData(starWarsApi),
    nextUrl: "",
    previousUrl: "",
  };
};

export const urlApi =
  "https://starwars-characters-api-qcun.onrender.com/characters/";

export const fetchPatchCharacterMass = async (Charater: Character) => {
  const response = await fetch(`${urlApi}${Charater.id}/`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "PATCH",
    body: JSON.stringify({ mass: Charater.mass }),
  });
  return response;
};
