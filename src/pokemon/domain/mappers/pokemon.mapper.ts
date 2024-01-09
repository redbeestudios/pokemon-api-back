import { Injectable } from '@nestjs/common';
import { PokemonDto } from '../../../pokemon/infrastructure/dto/pokemon.dto';

@Injectable()
export class PokemonMapper {
  toDto(item: any): PokemonDto {
    return {
      id: item.id,
      name: item.name,
      order: item.order,
      types: item.types,
      weight: item.weight,
      height: item.height,
      forms: item.forms,
      abilities: item.abilities,
    };
  }
}
