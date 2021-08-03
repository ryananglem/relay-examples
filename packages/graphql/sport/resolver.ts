import {
    Arg,
    FieldResolver,
    Query,
    Mutation,
    Resolver,
    Root
  } from 'type-graphql';
  import { SportData, sports } from './data';
  import Sport from './Sport';
  
  @Resolver(of => Sport)
  export default class {
    @Query(returns => String)
    hello(): String {
      return 'Welcome sport';
    }
  
    @Query(returns => Sport, { nullable: true })
    sportByID(@Arg('id') id: number): SportData | undefined {
      return sports.find(sport => sport.id === id);
    }
  
  }