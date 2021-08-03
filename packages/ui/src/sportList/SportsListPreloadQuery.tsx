import React from 'react';
import { usePreloadedQuery } from 'react-relay/hooks';
import { SportQuery } from './SportQuery';
import { SportName } from './SportName';

export const SportsListPreloadQuery = (props: any) => {
  const data: any = usePreloadedQuery(SportQuery, props.preloadedQuery);

  return (
    <div className="App">
      <header className="App-header">
        <SportName name={data.hello} />
      </header>
    </div>
  );

};
