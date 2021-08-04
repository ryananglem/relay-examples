import React from 'react'
import { useFragment } from 'react-relay';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { SportName} from './SportName'
import { Sport } from './SportsListContainer';

export const SportList = (props: any) => {
    const fragmentData = useFragment(graphql`fragment SportList_sport on Sport @relay(plural:true) {
       
        name
   }`, props.sport)
//    const fragmentData: any = useSuspenseFragment(graphql`query SportListQuery { sport {
//     name
//    }
// }`, props.sport)
    console.log('fragmentData', fragmentData)

    const sportData = fragmentData &&   
    fragmentData.map((sport: Sport) => (
                        <SportName key={sport.name} name={sport.name} />
                      ))
  
    return !sportData ? null : (
        <div>{sportData}</div>
    )
}
