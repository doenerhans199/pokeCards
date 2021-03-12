import { Field, ID, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
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

  @Field(() => Type)
  @ManyToOne(
    type => Type,
    type => type,
    { eager: true },
  )
  type!: Type;

  constructor(type: Type) {
    super();
    this.type = type;
  }
}