import React from 'react'
// import { useFragment, usePreloadedQuery } from 'react-relay/hooks';
// @ts-ignore
// import graphql from 'babel-plugin-relay/macro';
import { SportName} from './SportName'
import { Sport } from './SportsListContainer';

export const SportListOldStyle = (props: any) => {
//     const fragmentData = useFragment(graphql`fragment SportListFragment_sport on Sport {
//         id
//         name
//    }`, props.sport)
//    const fragmentData: any = useSuspenseFragment(graphql`query SportListQuery { sport {
//     name
//    }
// }`, props.sport)
//     console.log('fragmentData', fragmentData)

    const sportData = props.sportData &&   
    props.sportData.map((sport: Sport) => (
                        <SportName key={sport.name} name={sport.name} />
                      ))
  
    return !sportData ? null : (
        <div>{sportData}</div>
    )
}
