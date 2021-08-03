import React from 'react'
import { preloadedQuery } from "./preloadedQuery";
import { SportsListPreloadQuery } from "./SportsListPreloadQuery";
const { Suspense } = React;

export const SportListLoader = () => (

<Suspense fallback={'Loading...'}>
    <SportsListPreloadQuery preloadedQuery={preloadedQuery} />
</Suspense>
)