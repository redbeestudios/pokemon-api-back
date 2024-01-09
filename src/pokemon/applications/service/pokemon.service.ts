import { Injectable } from '@nestjs/common';
import { PokemonServicePort } from '../ports/api/pokemon.service.port';
import { PokemonClient } from 'src/pokemon/domain/config/pokemon/pokemon.client';

@Injectable()
export class PokemonService implements PokemonServicePort {
  constructor(private readonly pokemonClient: PokemonClient) {}
  async getPokemons(): Promise<any> {
    return this.pokemonClient.getPokemonByName('');
  }
  async getPokemonByName(name: string): Promise<any> {
    return this.pokemonClient.getPokemonByName(name);
  }
}
