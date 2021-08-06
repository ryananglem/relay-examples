import React from 'react';
import { PreloadedQuery, usePreloadedQuery } from 'react-relay/hooks';
import { IndividualSportQuery } from './IndividualSportQuery';
import { IndividualSport } from './IndividualSport';
import { IndividualSportQueryResponse  } from '../__relay_artifacts__/IndividualSportQuery.graphql'

interface Props {
    preloadedQuery : PreloadedQuery<any, Record<string, unknown>>
  }

export const IndividualSportContainer = ({ preloadedQuery }: Props) => {
    const data: IndividualSportQueryResponse = usePreloadedQuery(IndividualSportQuery, preloadedQuery);       

console.log('individual sport data', data)
  return (
    <div>
      <div>
        <IndividualSport sport={data?.sportByID} />  
       </div>
    </div>
  );

};
