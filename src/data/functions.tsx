import { StarWarsApi } from "../types";

export const fetchData = async (url: string): Promise<StarWarsApi> => {
  const response = await fetch(url);
  return response.json();
};
