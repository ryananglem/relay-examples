import React from 'react'
import { useFragment } from 'react-relay/hooks'
import {SportFragment } from './SportFragment'
interface Props {
    sport: any
}
export const IndividualSport = ({sport}:Props) => {
    const data = useFragment(SportFragment, sport)
    console.log('data', data)
    return (
    <div>
        highlighted sport: {data.name}
    </div>
)
    }

