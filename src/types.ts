export interface CharacterBase {
  id: number;
  name: string;
  height: number;
  mass: number;
}

export interface Character extends CharacterBase {
  picture: string;
  birthYear: string;
}

export interface CharacterApi extends CharacterBase {
  birth_year: string;
}

export interface StarWarsApi {
  next: string | null;
  previous: string | null;
  results: Array<{
    name: string;
    height: string;
    mass: string;
    birth_year: string;
    url: string;
  }>;
}
export interface StarWarsFilteredData {
  nextUrl: string;
  previousUrl: string;
  characters: Array<Character>;
}

export type StarwarsApiLocal = Array<CharacterApi>;
