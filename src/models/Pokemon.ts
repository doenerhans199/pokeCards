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

  @Field(() => String)
  @Column()
  name: string = '';

  @ManyToMany(
    () => Type,
    { eager: true }
  )
  @JoinTable()
  types: Type[];

  constructor(types: Type[]) {
    super();
    this.types = types;
  }
}