import React from 'react'
import { useRefetchableFragment } from 'react-relay/hooks'
import {SportFragment } from './SportFragment'
interface Props {
    sport: any
}
export const IndividualSport = ({sport}:Props) => {
    const [data, refetch] = useRefetchableFragment(SportFragment, sport)
    console.log('data', data)
    return !data ? null :(
    <div>
        highlighted sport: {data.name}
    </div>
)
    }

    // console.log(data)
    // ...SportFragment_sport 

    //  getSportById(id: $id) 
/* 
    const [data, refetch] = useRefetchableFragment(graphql`
    fragment IndividualSportContainerFragment on HighlightQuery 
        @refetchable(queryName: "SportRefreshQuery") {
            individualSport { getSportById(id: $id) {
                name
            }
        }
    }
    `, sport)    
*/