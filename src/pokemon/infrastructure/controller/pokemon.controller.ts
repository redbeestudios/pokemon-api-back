import { Controller, Get, Inject, Param } from '@nestjs/common';
import { PokemonServicePort } from '../../applications/ports/api/pokemon.service.port';

@Controller('pokemon')
export class PokemonController {
  constructor(
    @Inject(PokemonServicePort)
    private readonly pokemonService: PokemonServicePort,
  ) {}

  @Get()
  getAllPokemons() {
    return this.pokemonService.getPokemons();
  }

  @Get(':name')
  getPokemonByName(@Param('name') name: string) {
    return this.pokemonService.getPokemonByName(name);
  }
}
