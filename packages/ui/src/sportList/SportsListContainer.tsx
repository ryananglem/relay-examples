import React from 'react';
import { PreloadedQuery, usePreloadedQuery } from 'react-relay/hooks';

import { SportList }  from './SportList';
import { SportName } from './SportName';
import { SportQuery } from './SportQuery';
interface Props {
   preloadedQuery : PreloadedQuery<any, Record<string, unknown>>
 }
export interface Sport {
  name: string
}

export const SportsListContainer = ({ preloadedQuery }: Props) => {
  const data: any = usePreloadedQuery(SportQuery, preloadedQuery);

  console.log('data ',data, preloadedQuery)   
  console.log('sport', data.sport)
                
  return (
    <div className="App">
      <div>
        <SportName name={data.hello} />
       </div>
      <div>
        <SportList sport={data.sport} />
      </div>
    </div>
  );

};
