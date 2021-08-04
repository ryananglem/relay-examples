import React from 'react';
import { usePreloadedQuery } from 'react-relay/hooks';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';

// import { useFragment } from 'react-relay';
// import { SportQuery } from './SportQuery';
import { SportList }  from './SportList';
// import {SportFragment} from './SportFragment'
import { SportName } from './SportName';

interface Props {
   preloadedQuery : any
 }
export interface Sport {
  name: string
}

 export interface ISportList {
    sport: Sport[]
 }

export const SportsListContainer = ({ preloadedQuery }: Props) => {
  const data: any = usePreloadedQuery(graphql`
  query SportsListContainerQuery {
     hello
      sport { 
     ...SportList_sport
        
        } 
  } 
`, preloadedQuery);

  
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
