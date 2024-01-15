import { Injectable } from '@nestjs/common';
import { PokemonServicePort } from '../ports/api/pokemon.service.port';
import { PokemonClient } from '../../../pokemon/domain/config/pokemon/pokemon.client';
import { PokemonMapper } from '../../../pokemon/domain/mappers/pokemon.mapper';

@Injectable()
export class PokemonService implements PokemonServicePort {
  constructor(
    private readonly pokemonClient: PokemonClient,
    private readonly pokemonMapper: PokemonMapper,
  ) {}

  async getPokemons(): Promise<any> {
    return this.pokemonClient.getAllPokemons();
  }
  async getPokemonByName(name: string): Promise<any> {
    const pokemon = await this.pokemonClient.getPokemonByName(name);
    return this.pokemonMapper.toDto(pokemon);
  }
}
