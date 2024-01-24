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

  @Get('find/:name')
  getPokemonByName(@Param('name') name: string) {
    console.log('Getting pokemon by name: ', name);
    return this.pokemonService.getPokemonByName(name);
  }

  // build test controller saying: deployado papu
  @Get('test')
  test() {
    return 'deployado papu';
  }
}
