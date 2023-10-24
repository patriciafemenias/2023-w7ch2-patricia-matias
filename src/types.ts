export interface StarWarsApi {
  next: string;
  previous: string;
  results: Array<{
    name: string;
    height: string;
    mass: string;
    birth_year: string;
    url: string;
  }>;
}
