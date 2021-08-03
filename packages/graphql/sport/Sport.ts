import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
export default class Sport {
  @Field(type => String)
  id: String;

  @Field()
  name: String;

 
}