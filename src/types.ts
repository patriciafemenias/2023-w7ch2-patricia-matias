export interface Character {
  id: number;
  name: string;
  picture: string;
  height: number;
  mass: number;
  birthYear: string;
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
