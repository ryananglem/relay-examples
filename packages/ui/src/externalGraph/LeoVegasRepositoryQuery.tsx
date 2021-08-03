import React from 'react';
import { usePreloadedQuery } from 'react-relay/hooks';
import { RepositoryNameQuery } from './RepositoryNameQuery';
import { LeoVegasRepository } from './LeoVegasRepository';

export const LeoVegasRepositoryQuery = (props: any) => {
  const data = { not: 'used'} // usePreloadedQuery(RepositoryNameQuery, props.preloadedQuery);

  return (
    <div className="App">
      <header className="App-header">
        {/* <LeoVegasRepository data={data} /> */}
      </header>
    </div>
  );

};
