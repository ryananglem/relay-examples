import React from 'react';
import { PreloadedQuery, useFragment, usePreloadedQuery } from 'react-relay/hooks';
//@ts-ignore
// import graphql from 'babel-plugin-relay/macro';
import { IndividualSportQuery } from './IndividualSportQuery';
import { IndividualSport } from './IndividualSport';
// import { IndividualSportQueryResponse  } from '../__relay_artifacts__/IndividualSportQuery.graphql'

/*
import { PreloadedQuery, usePreloadedQuery } from 'react-relay/hooks';

import { SportQueryResponse  } from '../__relay_artifacts__/SportQuery.graphql'
import { SportList }  from './SportList';
import { SportName } from './SportName';
import { SportQuery } from './SportQuery';
interface Props {
   preloadedQuery : PreloadedQuery<any, Record<string, unknown>>
 }
export interface Sport {
  name: string
}
*/

interface Props {
    preloadedQuery : PreloadedQuery<any, Record<string, unknown>>
  }

export const IndividualSportContainer = ({ preloadedQuery }: Props) => {
    // const data: IndividualSportQueryResponse = usePreloadedQuery(IndividualSportQuery, preloadedQuery);       
    const data: any = usePreloadedQuery(IndividualSportQuery, preloadedQuery);       
    console.log(data)
    // ...SportFragment_sport 

    //  getSportById(id: $id) 
/* 
    const [data, refetch] = useRefetchableFragment(graphql`
    fragment IndividualSportContainerFragment on HighlightQuery 
        @refetchable(queryName: "SportRefreshQuery") {
            individualSport { getSportById(id: $id) {
                name
            }
        }
    }
    `, sport)    
*/


console.log('data', data)
  return (
    <div>
      <div>
        <IndividualSport sport={data?.sportByID} />  
       </div>
    </div>
  );

};
