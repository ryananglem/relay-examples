import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
export default class Sport {
  @Field(type => Int)
  id: number;

  @Field()
  name: String;

 
}