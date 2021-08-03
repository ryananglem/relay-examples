import React from 'react'
import { preloadedQuery } from "./preloadedQuery";
import { LeoVegasRepositoryQuery } from "./LeoVegasRepositoryQuery";
const { Suspense } = React;

export const LeoVegasRepositoryLoader = () => (

<Suspense fallback={'Loading...'}>
    <LeoVegasRepositoryQuery preloadedQuery={preloadedQuery} />
</Suspense>
)