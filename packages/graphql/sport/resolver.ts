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
    @Query(returns => [Sport])
    sport(): Sport[] {
      return sports;
    }
    @Query(returns => Sport, { nullable: true })
    sportByID(@Arg('id') id: string): SportData | undefined {
      const extra = Date.now() % 2 === 0
      const sport = sports.find(sport => sport.id === id);
      const sportName  = extra && sport ? sport!.name + " HOT!" : sport!.name
      const hotOrNotSport  = sport && ({
        id,
        name: sportName
      })
      return hotOrNotSport
    }
  
  }