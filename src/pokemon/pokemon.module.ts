import { Module } from '@nestjs/common';
import { PokemonController } from './infrastructure/controller/pokemon.controller';
import { PokemonService } from './applications/service/pokemon.service';
import { PokemonServicePort } from './applications/ports/api/pokemon.service.port';
import { PokemonClient } from './domain/config/pokemon/pokemon.client';
import { PokemonMapper } from './domain/mappers/pokemon.mapper';

@Module({
  imports: [],
  controllers: [PokemonController],
  providers: [
    { provide: PokemonServicePort, useClass: PokemonService },
    PokemonClient,
    PokemonMapper
  ],
  exports: [],
})
export class PokemonModule {}
