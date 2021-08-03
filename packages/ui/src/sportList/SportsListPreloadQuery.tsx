import React from 'react';
import { usePreloadedQuery } from 'react-relay/hooks';
import { SportQuery } from './SportQuery';
import { SportName } from './SportName';


interface Sport {
  name: string
  id: string
}

export const SportsListPreloadQuery = (props: any) => {
  const data: any = usePreloadedQuery(SportQuery, props.preloadedQuery);
  const sportList = data.sport &&
                    data.sport.map((sport: Sport) => (
                      <SportName key={sport.id} name={sport.name} />
                    ))
  return (
    <div className="App">
      <header className="App-header">
        <SportName name={data.hello} />
        <div>
        { 
          sportList
        }
        </div>
      </header>
    </div>
  );

};
