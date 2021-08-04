import { Field, Int, ObjectType } from 'type-graphql';
import Sport from './Sport'

@ObjectType()
export default class SportList {
  @Field()
  sport: Sport[];
 
}