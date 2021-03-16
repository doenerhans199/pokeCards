import { Field, ID, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Type } from './Type';

@Entity()
@ObjectType()
export class Pokemon extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number | null = null;

  @Field(() => Number)
  @Column()
  dex: number = 0;

  @Field(() => String)
  @Column()
  name: string = '';

  @ManyToMany(
    () => Type,
    { eager: true }
  )
  @JoinTable()
  types: Type[];

  constructor(dex: number, types: Type[]) {
    super();
    this.dex = dex;
    this.types = types;
  }
}