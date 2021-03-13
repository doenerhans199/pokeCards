import { Query, Resolver, Arg} from 'type-graphql';
import { Set, Pokemon, Type, Card, CardRarity } from '../models';

@Resolver()
export class Resolvers {
  @Query(() => [ Type ])
  async getTypes(): Promise<Type[]> {
    return await Type.find();
  }

  @Query(() => [ Set ])
  async getSets(): Promise<Set[]> {
    return await Set.find();
  }

  @Query(() => [ Pokemon ])
  async getPokemons(): Promise<Pokemon[]> {
    return await Pokemon.find();
  }

  @Query(() => [ CardRarity ])
  async getCardRarities(): Promise<CardRarity[]> {
    return await CardRarity.find();
  }

  @Query(() => [ Card ])
  async getCards(): Promise<Card[]> {
    return await Card.find();
  }

  @Query(() => Pokemon)
  async getPokemonPerName(@Arg('name') name: string): Promise<Pokemon | undefined> {
    return await Pokemon.findOne({ where: { name } });
  }

}