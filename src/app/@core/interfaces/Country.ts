export interface Country {
  name: {
    common: string, 
    official: string, 
  },
  population: number,
  capital: [],
  continents: [],
  flags: {
    png: string
  },
  cca3: string
}