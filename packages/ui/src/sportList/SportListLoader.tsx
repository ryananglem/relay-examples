import React from 'react'
import { preloadedQuery } from "./preloadedQuery";
import { SportsListContainer } from "./SportsListContainer";

const { Suspense } = React;

export const SportListLoader = () => (

<Suspense fallback={'Loading...'}>
    <SportsListContainer preloadedQuery={preloadedQuery} />
    
</Suspense>
)