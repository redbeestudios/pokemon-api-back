export interface PokemonServicePort {
  getPokemons(): Promise<any>;
  getPokemonByName(name: string): Promise<any>;
}

export const PokemonServicePort = Symbol('PokemonServicePort');
