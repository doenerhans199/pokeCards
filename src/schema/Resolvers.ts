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
    return await Pokemon.find({relations: ["types"] });
  }

  @Query(() => [ CardRarity ])
  async getCardRarities(): Promise<CardRarity[]> {
    return await CardRarity.find();
  }

  @Query(() => [ Card ])
  async getCards(): Promise<Card[]> {
    return await Card.find();
  }

  @Query(() => Card)
  async getCardByPokemonName(@Arg('pokemon') name: string): Promise<Card | undefined> {
    return await Card.findOne({ where: { name } });
  }

}