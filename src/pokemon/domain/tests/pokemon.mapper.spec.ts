import { PokemonMapper } from '../mappers/pokemon.mapper';

describe('PokemonMapper', () => {
  let pokemonMapper: PokemonMapper;

  beforeEach(async () => {
    pokemonMapper = new PokemonMapper();
  });

  describe('toDto', () => {
    it('should return a pokemon dto', async () => {
      const pokemon = {
        id: 1,
        name: 'bulbasaur',
        order: 1,
        types: [],
        weight: 1,
        height: 1,
        forms: [],
        abilities: [],
        gameStats: [],
        sprites: {
          front_default: '',
        },
      };

      const result = pokemonMapper.toDto(pokemon);

      expect(result).toEqual({
        id: 1,
        name: 'bulbasaur',
        order: 1,
        types: [],
        weight: 1,
        height: 1,
        forms: [],
        abilities: [],
        gameStats: [1,2,3,4,5],
      });
    });
  });
});
