import { Field, ID, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Column
} from 'typeorm';
import { Pokemon } from './Pokemon';
import { CardRarity } from './CardRarity';
import { Set } from './Set';
import { CardType } from './CardType';
@Entity()
@ObjectType()
export class Card extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number | null = null;

  @Field(() => String)
  @Column()
  name: string = '';

  @Field(() => String)
  @Column()
  image: string = '';

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

  @Field(() => CardRarity)
  @ManyToOne(
    type => CardRarity,
    cardRarity => cardRarity,
    { eager: true },
  )
  cardRarity!: CardRarity;

  @Field(() => CardType)
  @ManyToOne(
    type => CardType,
    cardType => cardType,
    { eager: true },
  )
  cardType!: CardType;

  constructor(Pokemon: Pokemon, Set: Set, CardRarity: CardRarity, CardType: CardType) {
    super();
    this.pokemon = Pokemon;
    this.cardRarity = CardRarity;
    this.set = Set;
    this.cardType = CardType;
  }
}