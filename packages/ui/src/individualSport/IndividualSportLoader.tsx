import React from 'react'
import { IndividualSportContainer } from './IndividualSportContainer';
import { preloadedQuery } from "./preloadedQuery";
const { Suspense } = React;

export const IndividualSportLoader = () => (

<Suspense fallback={'Loading...'}>
    <IndividualSportContainer preloadedQuery={preloadedQuery('1')}  /> 
</Suspense>
)