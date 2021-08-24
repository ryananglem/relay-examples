import React from 'react'
import { useFragment } from 'react-relay';

import { SportFragment } from './SportFragment'
import { SportName} from './SportName'
import { Sport } from './SportsListContainer';
import { SportFragment_sport$key} from '../__relay_artifacts__/SportFragment_sport.graphql'

interface Props{
    sport: SportFragment_sport$key
}

export const SportList = ({ sport}: Props) => {
    const fragmentData = useFragment(SportFragment, sport)

    console.log('fragmentData', fragmentData)

    const sportData = fragmentData &&   
    fragmentData.map((sport: Sport) => (
                        <SportName key={sport.name} name={sport.name} />
                      ))
  
    return !sportData ? null : (
        <div>{sportData}</div>
    )
}
