import React from 'react'
import { useFragment } from 'react-relay';

import { SportListFragment } from './SportListFragment'
import { SportName} from './SportName'
import { Sport } from './SportsListContainer';
// import { SportListFragment_sport$key} from '../__relay_artifacts__/SportListFragment_sport.graphql'

interface Props{
    sport: any //SportListFragment_sport$key
}

export const SportList = ({ sport}: Props) => {
    const fragmentData = useFragment(SportListFragment, sport)

    console.log('fragmentData', fragmentData)

    const sportData = fragmentData &&   
    fragmentData.map((sport: Sport) => (
                        <SportName key={sport.name} name={sport.name} />
                      ))
  
    return !sportData ? null : (
        <div>{sportData}</div>
    )
}
