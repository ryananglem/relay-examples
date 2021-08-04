import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
export default class Sport {
  @Field()
  id: String;

  @Field()
  name: String;

}

