import { StarWarsApi } from "../types";

export const fetchData = async (url: string): Promise<StarWarsApi> => {
  const response = await fetch(url);
  return response.json();
};

export const getUrlImage = (url: string): string => {
  const imageId = Number(url.split("/").at(-2)!);
  return `https://starwars-visualguide.com/assets/img/characters/${imageId}.jpg`;
};
