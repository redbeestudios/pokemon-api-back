import { IsNumber, IsString, IsArray } from 'class-validator';

export class PokemonDto {
  @IsNumber()
  id?: string;

  @IsString()
  name: string;

  @IsNumber()
  order: number;

  @IsNumber()
  weight: number;

  @IsNumber()
  height: number;

  @IsArray()
  types: any[];

  @IsArray()
  forms: any[];

  @IsArray()
  abilities: any[];
}
