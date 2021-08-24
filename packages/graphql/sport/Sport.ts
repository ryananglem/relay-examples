import { Field, ID, Int, ObjectType } from 'type-graphql'

@ObjectType()
export default class Sport {
  @Field((type) => ID)
  readonly id: String

  @Field()
  name: String
}
