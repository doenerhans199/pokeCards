import { Field, ID, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Pokemon } from './Pokemon';
import { CardType } from './CardType';
import { Set } from './Set';
@Entity()
@ObjectType()
export class Card extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number | null = null;

  @Field(() => Pokemon)
  @ManyToOne(
    type => Pokemon,
    pokemon => pokemon,
    { eager: true },
  )
  pokemon!: Pokemon;

  @Field(() => Set)
  @ManyToOne(
    type => Set,
    set => set,
    { eager: true },
  )
  set!: Set;

  @Field(() => CardType)
  @ManyToOne(
    type => CardType,
    cardType => cardType,
    { eager: true },
  )
  cardType!: CardType;

  constructor(Pokemon: Pokemon, Set: Set, CardType: CardType) {
    super();
    this.pokemon = Pokemon;
    this.cardType = CardType;
    this.set = Set;
  }
}