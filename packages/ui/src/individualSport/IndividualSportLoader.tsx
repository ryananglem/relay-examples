import React from 'react'
import { IndividualSportContainer } from './IndividualSportContainer';
import { preloadedQuery } from "./preloadedQuery";
const { Suspense } = React;


export const randomNumber = (min: number, max: number) => { 
    return Math.floor(Math.random() * (max - min) + min);
} 


export const IndividualSportLoader = () => {

    const sportId = '1';
   
    return (

<Suspense fallback={'Loading...'}>
    <IndividualSportContainer preloadedQuery={preloadedQuery(sportId)}  /> 
</Suspense>
)
    }